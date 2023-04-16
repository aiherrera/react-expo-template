import { StatusBar } from 'expo-status-bar'

import { Text, View } from '../components/Themed'

export default function ModalScreen() {
  return (
    <View>
      <Text>Modal</Text>
      <View lightColor='#eee' darkColor='rgba(255,255,255,0.1)' />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar />
    </View>
  )
}
