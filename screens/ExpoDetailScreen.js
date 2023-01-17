import { StyleSheet, Text, View } from 'react-native';

// An app that presents a tab bar with three tabs. Two just present simple views
// and the third presents a stack of three screens. The stack screen presents
// a button that lets you navigate to a new screen.
export default function ExpoDetailScreen() {
  return (
    <View style={styles.container}>
        <Text>Expo Detail Screen!</Text>
    </View>
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