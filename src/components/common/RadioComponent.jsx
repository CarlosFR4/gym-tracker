import React, {useState} from 'react'
import {Text, Pressable, FlatList} from 'react-native'
import {Fontisto} from '@expo/vector-icons'

export const RadioComponent = ({items, defaultItem, optionStyle, textStyle, buttonStyle, selectedColor, onChange}) => {
  const [selected, setSelected] = useState(defaultItem && defaultItem.value)

  return <FlatList data={items}
                   renderItem={({item}) =>
                     <Pressable key={item.value}
                                style={({pressed}) => [{flexDirection: 'row'}, optionStyle(pressed)]}
                                onPress={() => {
                                  onChange(item)
                                  setSelected(item.value)
                                }}>
                       <Fontisto name={selected === item.value ? 'radio-btn-active' : 'radio-btn-passive'}
                                 style={[buttonStyle, selected === item.value && {color: selectedColor}]}/>
                       <Text style={textStyle}>{item.label}</Text>
                     </Pressable>
                   }
  />
}