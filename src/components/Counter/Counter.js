import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Button,Alert  } from 'react-native';

const Counter = () => {
  const [data,setData]=useState();
  const Increament = () =>{
    
  }
  return (
    <View style={styles.one}>
      <Text>Counter App</Text>
      <Button
        title="Press me"
        onPress={Increament}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  one: {
    alignItems:"center",
    justifyContent:"center",
    flex:1
  },
});
export default Counter;
