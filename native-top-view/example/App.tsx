import { NativeTopView } from 'native-top-view';

export default function App() {
  return <NativeTopView style={{ flex: 1, backgroundColor: 'purple' }} />;
}


// import { StyleSheet, Text, View } from 'react-native';

// import * as NativeTopView from 'native-top-view';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>{NativeTopView.hello()}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
