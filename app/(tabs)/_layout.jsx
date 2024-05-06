import React from 'react'
import {Tabs} from 'expo-router'
import {FontAwesome5, FontAwesome6, Ionicons} from '@expo/vector-icons'
import {Theme} from '@di/app.module'
import Sizes from '@theme/Sizes'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveBackgroundColor: Theme.surface,
      tabBarInactiveTintColor: Theme.onBackground,
      tabBarActiveTintColor: Theme.secondaryVariant,
      tabBarItemStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: Sizes.xSmall,
        paddingTop: Sizes.xSmall,
      },
      tabBarStyle: {
        backgroundColor: Theme.background,
        height: 60,
        borderTopWidth: 0,
      },
    }}>
      <Tabs.Screen name="index" options={{
        title: 'Profile',
        tabBarIcon: ({color}) => <FontAwesome5 size={28} name="user" color={color}/>
      }}/>
      <Tabs.Screen name="history" options={{
        title: 'History',
        tabBarIcon: ({color}) => <FontAwesome6 size={28} name="clock-rotate-left" color={color}/>
      }}/>
      <Tabs.Screen name="workout" options={{
        title: 'Workout',
        tabBarIcon: ({color}) => <FontAwesome5 size={28} name="plus" color={color}/>
      }}/>
      <Tabs.Screen name="exercises" options={{
        title: 'Exercises',
        tabBarIcon: ({color}) => <Ionicons size={28} name="barbell" color={color}/>
      }}/>
      <Tabs.Screen name="measure" options={{
        title: 'Measure',
        tabBarIcon: ({color}) => <FontAwesome5 size={28} name="ruler" color={color}/>
      }}/>
    </Tabs>
  )
}