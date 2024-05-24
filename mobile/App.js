import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigation/Navigator';//' ./navigation/AppNavigator';

export default function App() {
  return (
    // <View style={styles.container}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
      /* <Text>Open up App.js to start working on your app!!!</Text>
      <StatusBar style="auto" /> */
    // </View>
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
