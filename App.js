import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExpoScreen from './screens/ExpoScreen';
import NativeScreen from './screens/NativeScreen';
import StackScreen from './screens/StackScreen';
// import { NativeTopView } from 'native-top-view';

// An app that presents a tab bar with three tabs. Two just present simple views
// and the third presents a stack of three screens. The stack screen presents
// a button that lets you navigate to a new screen.

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Expo" component={ExpoScreen} />
        <Tab.Screen name="Native" component={NativeScreen} />
        <Tab.Screen name="Nav" component={StackScreen} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
