import React from 'react'
import {Tabs} from 'expo-router'
import {FontAwesome5, FontAwesome6, Ionicons} from '@expo/vector-icons'
import {Theme} from '@di/app.module'
import {GapSizes} from '@theme/Sizes'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveBackgroundColor: Theme.Surface,
      tabBarInactiveTintColor: Theme.OnBackground,
      tabBarActiveTintColor: Theme.SecondaryVariant,
      tabBarHideOnKeyboard: true,
      tabBarItemStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: GapSizes.Small,
        paddingTop: GapSizes.Small,
      },
      tabBarStyle: {
        backgroundColor: Theme.Background,
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