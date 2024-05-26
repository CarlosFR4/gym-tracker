import React from 'react'
import {Stack} from 'expo-router'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Pressable, ScrollView, Text, View} from 'react-native'
import styles from '@components/workout/workout.menu.style'
import {Theme} from '@di/app.module'
import {FontAwesome} from '@expo/vector-icons'

export default function WorkoutMenuView({i18n}) {
  return <>
    <Stack.Screen options={{headerShown: false}}/>
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{i18n.t('workout')}</Text>
      </View>
      <ScrollView>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>{i18n.t('quickStart')}</Text>
        </View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>{i18n.t('myWorkouts')}</Text>
          <Pressable style={({pressed}) => styles.sectionHeaderButton(pressed)}>
            <FontAwesome name="plus" size={20} color={Theme.OnPrimary}/>
          </Pressable>
        </View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>{i18n.t('sampleWorkouts')}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  </>
}

/**
 * A React component that displays a workout card.
 * @param workout
 * @param onPress
 * @returns {JSX.Element}
 * @constructor
 */
const WorkoutCard = ({workout, onPress}) => {
  return <>
    <Pressable style={({pressed}) => styles.card(pressed)} onPress={onPress}>
      <Text>{workout.name}</Text>
      {workout.lastPerformed && <Text>{workout.lastPerformed}</Text>}
    </Pressable>
  </>
}