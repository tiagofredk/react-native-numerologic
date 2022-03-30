import React, { useState, useContext } from "react"
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, View, Button } from 'react-native'
// import { MainContext } from "../context/MainContextProvider";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Inputdate = () => {

  const [date, setDate] = useState("");
  const [predate, setPredate] = useState(new Date());

  const [show, setShow] = useState(false);

  const onChange = async (event, selectedDate) => {
    try {
      console.log(selectedDate);
      const dateconverted = `${selectedDate.getUTCFullYear()}-${selectedDate.getDate()}-${selectedDate.getMonth() +1}`;
      console.log(`dateconverted variable from inputdate module ${dateconverted}`);
      setShow(false);
      setDate(dateconverted);
      await AsyncStorage.setItem("date", dateconverted);
      
    } catch (error) {
      alert(error);
    }
  };

  const showMode = () => {
    setShow(true);
  };

  return (
    <View>
      <View>
        <Button onPress={showMode} title="Selecione a data de nascimento" />
      </View>
      <Text>selected: {date}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={predate}
          mode={"date"}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
}