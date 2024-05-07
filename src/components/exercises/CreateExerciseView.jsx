import {router, Stack} from 'expo-router'
import {Pressable, Text, TextInput, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import styles from './createExercise.style'
import React from 'react'
import {FontAwesome} from '@expo/vector-icons'
import {i18n, Theme} from '@di/app.module'
import BodyParts from '@exercises/BodyParts'
import {SelectModal} from '@components/common/SelectModal'
import Categories from '@exercises/Categories'
import {EMPTY_STRING} from 'src/util/constants'

const categories = Object.entries(Categories).map(([, category]) => ({
  label: i18n.t(category.name),
  value: category.value,
}))

const bodyParts = Object.entries(BodyParts).map(([, bodyPart]) => ({
  label: i18n.t(bodyPart.name),
  value: bodyPart.value,
}))

const isValidData = (name, category, bodyPart) => name !== EMPTY_STRING && category && bodyPart

const submit = (name, category, bodyPart) => {
  if (!isValidData(name, category, bodyPart)) return
  console.log(name, category.value, bodyPart.value)
}

export default function CreateExerciseView() {
  const [name, setName] = React.useState(EMPTY_STRING)
  const [category, setCategory] = React.useState(null)
  const [bodyPart, setBodyPart] = React.useState(bodyParts[0])

  return <>
    <Stack.Screen options={{headerShown: false}}/>
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Pressable style={({pressed}) => styles.closeButton(pressed)} onPress={() => router.back()}>
          <FontAwesome name="times" size={24} color={Theme.onPrimary}/>
        </Pressable>
        <Text style={styles.headerTitle}>{i18n.t('createExercise')}</Text>
        <Pressable style={({pressed}) => styles.doneButton(pressed)}
                   onPress={() => submit(name, category, bodyPart)}>
          <Text style={styles.doneButtonText}>{i18n.t('done')}</Text>
        </Pressable>
      </View>

      <TextInput style={styles.input}
                 onChangeText={text => setName(text)}
                 placeholder={i18n.t('addName')}
                 placeholderTextColor={Theme.onSecondary}
      />

      <SelectModal items={categories}
                   label={i18n.t('category')}
                   placeholder={i18n.t('none')}
                   style={styles.select}
                   labelStyle={styles.selectLabel}
                   selectedTextStyle={styles.selectValue}
                   modalStyle={styles.modal}
                   onChange={category => setCategory(category)}
      />

      <SelectModal items={bodyParts}
                   label={i18n.t('bodyPart')}
                   placeholder={i18n.t('none')}
                   style={styles.select}
                   labelStyle={styles.selectLabel}
                   selectedTextStyle={styles.selectValue}
                   modalStyle={styles.modal}
                   defaultItem={bodyPart}
                   onChange={bodyPart => setBodyPart(bodyPart)}
      />
    </SafeAreaView>
  </>
}
