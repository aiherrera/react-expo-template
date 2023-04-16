import { Button } from 'react-native-paper'
import { Text, View } from '../../components/Themed'
import { Alert } from 'react-native'

export default function TabOneScreen() {
  return (
    <View className='flex-1 items-center justify-center border-2 border-cyan-200'>
      <Text className='p-4 '>React Expo preconfigured with:</Text>
      <Text className='pt-3'>Tailwinds (NativeWind)</Text>
      <Text className='pt-3'>React Native Paper (Material UI)</Text>
      <Text className='pt-3'>Prettier</Text>
      <View lightColor='#eee' darkColor='rgba(255,255,255,0.1)' />

      <Button
        className='mt-20'
        mode='contained'
        onPress={() => Alert.alert('Paper button is working!')}
      >
        Paper button
      </Button>
    </View>
  )
}
