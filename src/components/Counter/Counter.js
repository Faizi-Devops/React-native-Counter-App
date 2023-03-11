import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Button,Alert  } from 'react-native';

const Counter = () => {
  const [data,setData]=useState(0);
  setData
  const Increament = () =>{
    setData(data+1)

  }
  const Decreament = () =>{
    
    setData(data-1)
    if(data<=0){
      setData(0)
    }

  }
  return (
    <View style={styles.one}>
      <Text style={{fontWeight:'bold',marginBottom: 20,fontSize:30}}>Counter App</Text>
      <Button
        title="Increament"
        onPress={Increament}
      />
      <Text style={{ fontSize: 24, marginVertical: 16 }}>{data}</Text>
      <Button
        title="Decreament"
        onPress={Decreament}
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
