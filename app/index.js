import {Text, SafeAreaView, View} from 'react-native'
import {Stack} from 'expo-router'
import styles from './index.style'

export default function Index() {
  return <SafeAreaView style={styles.container}>
    <Stack.Screen
      options={{
        headerShown: false
      }}
    />
    <View style={styles.view}>
      <Text style={styles.text}>Index</Text>
    </View>
  </SafeAreaView>
}
