import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './src/components/Counter/Counter';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>dfdfgfdgdfgfdg</Text>
      <Counter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue', 
    flex:1
  },
});
