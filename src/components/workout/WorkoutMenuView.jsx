import React from 'react'
import {router, Stack} from 'expo-router'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Pressable, ScrollView, Text, View} from 'react-native'
import styles from '@components/workout/workout.menu.style'
import {Theme} from '@di/app.module'
import {FontAwesome} from '@expo/vector-icons'
import {CreateWorkout} from '@util/routes'

export default function WorkoutMenuView({i18n}) {
  return <>
    <Stack.Screen options={{headerShown: false}}/>
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{i18n.t('workout')}</Text>
        <View style={styles.headerButtonContainer}>
          <Pressable style={({pressed}) => styles.headerButton(pressed)}
                     onPress={() => router.push(CreateWorkout)}>
            <FontAwesome name="plus" size={20} color={Theme.OnPrimary}/>
          </Pressable>
        </View>
      </View>
      <ScrollView>
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