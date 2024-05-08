import React, {useState} from 'react'
import {Modal, StyleSheet} from 'react-native'
import {Pressable, Text, View} from 'react-native'
import {RadioComponent} from '@components/common/RadioComponent'
import {i18n, Theme} from '@di/app.module'
import Sizes from '@theme/Sizes'

export const SelectModal = ({
                              items,
                              style,
                              styleOnPress,
                              label,
                              placeholder,
                              labelStyle,
                              selectedTextStyle,
                              defaultItem,
                              onChange,
                            }) => {
  const [showOptions, setShowOptions] = useState(false)
  const [selectedItem, setSelectedItem] = useState(defaultItem)
  const [pressedItem, setPressedItem] = useState(defaultItem)

  return <>
    <Pressable style={({pressed}) => [selectStyle.select, style, styleOnPress(pressed),]}
               onPress={() => setShowOptions(!showOptions)}>
      <Text style={labelStyle}>{label}</Text>
      <Text style={selectedTextStyle}>{selectedItem ? selectedItem.label : placeholder}</Text>
    </Pressable>
    <Modal
      animationType="fade"
      transparent={true}
      visible={showOptions}
      onRequestClose={() => setShowOptions(false)}>
      <View style={selectStyle.modalWrapper}>
        <View style={selectStyle.modal}>
          <Text style={selectStyle.title}>{label}</Text>
          <View style={selectStyle.options}>
            <RadioComponent items={items}
                            defaultItem={defaultItem}
                            onChange={item => {
                              onChange(item)
                              setPressedItem(item)
                            }}
                            optionStyle={selectStyle.optionItem}
                            textStyle={selectStyle.optionText}
                            buttonStyle={selectStyle.optionButton}
                            selectedColor={Theme.secondary}/>
          </View>
          <View style={selectStyle.confirmButtonWrapper}>
            <Pressable style={({pressed}) => selectStyle.confirmButton(pressed)}
                       onPress={() => {
                         setShowOptions(false)
                         setSelectedItem(pressedItem)
                       }}>
              <Text style={selectStyle.confirmButtonText}>{i18n.t('ok')}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  </>
}

const selectStyle = StyleSheet.create({
  select: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    width: 300,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: Theme.background,
    borderRadius: Sizes.large,
    paddingTop: Sizes.large,
    paddingBottom: Sizes.medium,
  },
  title: {
    fontSize: Sizes.xxLarge,
    margin: Sizes.small,
    paddingStart: Sizes.medium,
    color: Theme.onPrimary,
    fontWeight: '700',
  },
  options: {
    width: '100%',
    maxHeight: 500,
  },
  optionItem: pressed => ({
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: Sizes.medium,
    backgroundColor: pressed ? Theme.surface : Theme.background,
  }),
  optionText: {
    fontSize: Sizes.xLarge,
    marginStart: Sizes.medium,
    marginEnd: Sizes.medium,
    color: Theme.onPrimary,
  },
  optionButton: {
    fontSize: Sizes.xLarge,
    margin: Sizes.xSmall,
    color: Theme.onPrimary,
  },
  confirmButtonWrapper: {
    width: '100%',
    alignItems: 'flex-end',
  },
  confirmButton: pressed => ({
    marginTop: Sizes.small,
    marginBottom: Sizes.small,
    marginStart: Sizes.medium,
    marginEnd: Sizes.medium,
    padding: Sizes.small,
    backgroundColor: pressed ? Theme.surface : Theme.background,
  }),
  confirmButtonText: {
    color: Theme.primaryVariant,
    fontWeight: '700',
  },
})