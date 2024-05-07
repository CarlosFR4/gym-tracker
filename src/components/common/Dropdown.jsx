import React, {useState} from 'react'
import {StyleSheet} from 'react-native'
import {FlatList, Pressable, Text, View} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'

export const Dropdown = ({
                           items,
                           style,
                           placeholder,
                           dropdownSelectStyle,
                           dropdownSelectTextStyle,
                           dropdownOptionsStyle,
                           dropdownOptionItemStyle,
                           caretStyle,
                           caretSize,
                           caretColor,
                         }) => {
  const [showOptions, setShowOptions] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  return <View style={[style, dropdownStyle.dropdown]}>
    <Pressable style={[dropdownSelectStyle, dropdownStyle.dropdownSelect]} onPress={() => setShowOptions(!showOptions)}>
      <Text style={dropdownSelectTextStyle}>{selectedItem ? selectedItem.label : placeholder}</Text>
      <FontAwesome name={'caret-down'} size={caretSize} color={caretColor} style={caretStyle}/>
    </Pressable>
    {showOptions &&
      <FlatList data={items}
                renderItem={({item}) =>
                  <DropdownItem item={item}
                                style={dropdownOptionItemStyle}
                                onSelect={item => {
                                  setShowOptions(false)
                                  setSelectedItem(item)
                                }}
                  />}
                style={dropdownOptionsStyle}
      />}
  </View>
}

const DropdownItem = ({item, style, itemStyle, onSelect}) =>
  <View style={style}>
    <Pressable style={itemStyle} onPress={() => onSelect(item)}>
      <Text>{item.label}</Text>
    </Pressable>
  </View>

const dropdownStyle = StyleSheet.create({
  dropdown: {
    flexDirection: 'column',
  },
  dropdownSelect: {
    flexDirection: 'row',
  },
})