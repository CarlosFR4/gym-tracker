import React, {useState} from 'react'
import {Modal, StyleSheet} from 'react-native'
import {Pressable, Text, View} from 'react-native'
import {RadioComponent} from '@components/common/RadioComponent'
import {i18n, Theme} from '@di/app.module'
import {GapSizes} from '@theme/Sizes'
import FontWeight from '@theme/FontWeight'
import {FlexAlign, FlexDirection, JustifyContent, Percentage100} from '@util/constants'
import Colors from '@theme/Colors'

const SelectModal = ({
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
                            selectedColor={Theme.Secondary}/>
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
    flexDirection: FlexDirection.Row,
    justifyContent: JustifyContent.SpaceBetween,
  },
  modalWrapper: {
    flex: 1,
    justifyContent: JustifyContent.Center,
    alignItems: FlexAlign.Center,
    backgroundColor: Colors.BlackTransparent,
  },
  modal: {
    width: 300,
    flexDirection: FlexDirection.Column,
    alignItems: FlexAlign.FlexStart,
    justifyContent: JustifyContent.SpaceBetween,
    backgroundColor: Theme.Background,
    borderRadius: GapSizes.ExtraLarge,
    paddingTop: GapSizes.ExtraLarge,
    paddingBottom: GapSizes.Large,
  },
  title: {
    fontSize: GapSizes.ExtraHuge,
    margin: GapSizes.Medium,
    paddingStart: GapSizes.Large,
    color: Theme.OnPrimary,
    fontWeight: FontWeight.w700,
  },
  options: {
    width: Percentage100,
    maxHeight: 500,
  },
  optionItem: pressed => ({
    justifyContent: JustifyContent.FlexStart,
    alignItems: FlexAlign.Center,
    padding: GapSizes.Large,
    backgroundColor: pressed ? Theme.Surface : Theme.Background,
  }),
  optionText: {
    fontSize: GapSizes.Huge,
    marginStart: GapSizes.Large,
    marginEnd: GapSizes.Large,
    color: Theme.OnPrimary,
  },
  optionButton: {
    fontSize: GapSizes.Huge,
    margin: GapSizes.Small,
    color: Theme.OnPrimary,
  },
  confirmButtonWrapper: {
    width: Percentage100,
    alignItems: FlexAlign.FlexEnd,
  },
  confirmButton: pressed => ({
    marginTop: GapSizes.Medium,
    marginBottom: GapSizes.Medium,
    marginStart: GapSizes.Large,
    marginEnd: GapSizes.Large,
    padding: GapSizes.Medium,
    backgroundColor: pressed ? Theme.Surface : Theme.Background,
  }),
  confirmButtonText: {
    color: Theme.PrimaryVariant,
    fontWeight: FontWeight.w700,
  },
})

export default SelectModal