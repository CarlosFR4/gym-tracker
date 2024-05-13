import React, {useState} from 'react'
import {router, Stack} from 'expo-router'
import {Pressable, Text, TextInput, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import styles from './createExercise.style'
import {FontAwesome} from '@expo/vector-icons'
import {i18n, Theme, useExercises} from '@di/app.module'
import BodyParts from '@exercises/BodyParts'
import SelectModal from '@components/common/SelectModal'
import Categories from '@exercises/Categories'
import {EmptyString} from 'src/util/constants'
import SnackBar from '@components/common/SnackBar'
import Strings from '@locales/Strings'

const categories = Object.entries(Categories).map(([, category]) => ({
  label: i18n.t(category.name),
  value: category.value,
}))

const bodyParts = Object.entries(BodyParts).map(([, bodyPart]) => ({
  label: i18n.t(bodyPart.name),
  value: bodyPart.value,
}))

const isValidData = (name, category, bodyPart) => name !== EmptyString && category && bodyPart

/**
 * A React component that displays a view for creating an exercise.
 * @returns {JSX.Element}
 * @constructor
 */
export default function CreateExerciseView() {
  const [name, setName] = useState(EmptyString)
  const [category, setCategory] = useState(null)
  const [bodyPart, setBodyPart] = useState(bodyParts[0])

  const [visibleSnackBar, setVisibleSnackBar] = useState(false)
  const [snackBarMessage, setSnackBarMessage] = useState(EmptyString)

  const {addExercise} = useExercises()

  const submit = (name, category, bodyPart) => {
    if (!isValidData(name, category, bodyPart)) {
      showSnackBar()
      return
    }

    addExercise({name, category: category.value, bodyPart: bodyPart.value, image: null})
      .then(() => router.navigate('/exercises'))
      .catch(err => console.log('error saving', err))
  }

  const showSnackBar = () => {
    if (!name) {
      setSnackBarMessage(i18n.t(Strings.nameRequired))
    } else if (!category) {
      setSnackBarMessage(i18n.t(Strings.categoryRequired))
    } else {
      setSnackBarMessage(i18n.t(Strings.unknownError))
    }
    setVisibleSnackBar(true)
  }

  return <>
    <Stack.Screen options={{headerShown: false}}/>
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Pressable style={({pressed}) => styles.closeButton(pressed)} onPress={() => router.back()}>
          <FontAwesome name="times" size={24} color={Theme.onPrimary}/>
        </Pressable>
        <Text style={styles.headerTitle}>{i18n.t(Strings.createExercise)}</Text>
        <Pressable style={({pressed}) => styles.doneButton(pressed)}
                   onPress={() => submit(name, category, bodyPart)}>
          <Text style={styles.doneButtonText}>{i18n.t(Strings.done)}</Text>
        </Pressable>
      </View>

      <TextInput style={styles.input}
                 placeholder={i18n.t(Strings.addName)}
                 placeholderTextColor={Theme.onSecondary}
                 onChangeText={setName}
      />

      <SelectModal items={categories}
                   label={i18n.t(Strings.category)}
                   placeholder={i18n.t(Strings.none)}
                   styleOnPress={styles.select}
                   labelStyle={styles.selectLabel}
                   selectedTextStyle={styles.selectValue}
                   modalStyle={styles.modal}
                   onChange={category => setCategory(category)}
      />

      <SelectModal items={bodyParts}
                   label={i18n.t(Strings.bodyPart)}
                   placeholder={i18n.t(Strings.none)}
                   styleOnPress={styles.select}
                   labelStyle={styles.selectLabel}
                   selectedTextStyle={styles.selectValue}
                   modalStyle={styles.modal}
                   defaultItem={bodyPart}
                   onChange={bodyPart => setBodyPart(bodyPart)}
      />

      <SnackBar
        visible={visibleSnackBar}
        message={snackBarMessage}
        onHide={() => setVisibleSnackBar(false)}
        backgroundColor={Theme.error}
        textColor={Theme.onError}
      />
    </SafeAreaView>
  </>
}
