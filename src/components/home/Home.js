import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useContext, useState } from 'react'
import { language } from '../data/language'
import FormInput from '../form/Input';
import { MainContext } from '../context/MainContextProvider';
import FormContainer from '../form/FormContainer';
import FormSubmitButton from '../form/FormSubmitButton';
import { Inputdate } from '../data/Inputdate';
import { useNavigation } from '@react-navigation/native';

// import {callForMath} from "../functions/CalcContext";
// import Calculator from '../functions/Calculator';

const Home = () => {

    const languageDef = language.portugues;
    const size = useWindowDimensions();
    const navigation = useNavigation();

    const { date, Username, setUsername } = useContext(MainContext);

    const handleOnChangeText = (value, fieldName) => {
        setUsername(value);
    };

    const calc = () => {
        // callForMath(Username, date);
        navigation.navigate("Result");
        /// set callback respose waith for the render of context 
    };

    return (
        <View style={[styles.view, { height: size.height }]} >
            <Text>{languageDef.title}</Text>
            <FormContainer>
                <FormInput
                    value={Username}
                    onChangeText={value => handleOnChangeText(value, 'Username')}
                    label='Nome'
                    placeholder='Nome'
                />
                <Inputdate/>
                <FormSubmitButton onPress={calc} title='Calc' />
            </FormContainer>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    view: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#aaa"
    },
    dateIcon: {
        //display: 'none',
        position: 'absolute',
        left: 0,
        top: 4,
        marginLeft: 0,
    },
    dateInput: {
        marginLeft: 36,
    },
})