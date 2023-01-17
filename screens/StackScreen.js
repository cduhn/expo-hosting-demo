import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from './ListScreen';
import ExpoDetailScreen from './ExpoDetailScreen';
import NativeDetailScreen from './NativeDetailScreen';

const Stack = createNativeStackNavigator();

export default function StackScreen() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="expo-detail" component={ExpoDetailScreen} options={{title: 'Expo Detail'}} />
        <Stack.Screen name="native-detail" component={NativeDetailScreen} options={{title: 'Native Detail'}} />
    </Stack.Navigator>
  ); 
}
