import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Result3 = () => {
    
    async function print(value) {
        try {
            const res = await AsyncStorage.getItem("Username");
            const datas = await AsyncStorage.getItem("date");
            console.log(`AsyncStorage response result3 name: ${res}`);
            console.log(`AsyncStorage response result3 date: ${datas}`);
        } catch (error) {
            alert(error);
        }
    }; print();
    

  return (
    <View style={styles.container}>
      <Text>Result6</Text>
    </View>
  )
}

export default Result3

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        marginTop:200,
    }
})