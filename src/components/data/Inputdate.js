import React, { useState, useContext } from "react"
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, View, Button } from 'react-native'
import { MainContext } from "../context/MainContextProvider";

export const Inputdate = () => {

  const { date, setDate } = useContext(MainContext);
  const [predate, setPredate] = useState(new Date());

  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const dateconverted = `${selectedDate.getUTCFullYear()}-${selectedDate.getDate()}-${selectedDate.getMonth()}`
    setShow(false);
    setDate(dateconverted);
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