import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Scheduling } from '../screens/Scheduling'
import { Summary } from '../screens/Summary'
import { MyCars } from '../screens/MyCars'
import { Done } from '../screens/Done'
import { Home } from '../screens/Home'
import { Car } from '../screens/Car'

const Stack = createNativeStackNavigator()

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="mycars" component={MyCars} />
      <Stack.Screen name="car" component={Car} />
      <Stack.Screen name="scheduling" component={Scheduling} />
      <Stack.Screen name="summary" component={Summary} />
      <Stack.Screen name="done" component={Done} />
    </Stack.Navigator>
  )
}
