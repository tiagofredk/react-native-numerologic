import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useContext, useState } from 'react'
import { language } from '../data/language'
import FormInput from '../form/Input';
// import { MainContext } from '../context/MainContextProvider';
import FormContainer from '../form/FormContainer';
import FormSubmitButton from '../form/FormSubmitButton';
import { Inputdate } from '../data/Inputdate';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import {callForMath} from "../functions/CalcContext";
// import Calculator from '../functions/Calculator';

const Home = () => {

    const languageDef = language.portugues;
    const size = useWindowDimensions();
    const navigation = useNavigation();

    const [Username, setUsername]  = useState("");

    const handleOnChangeText = async (value, fieldname) => {
        setUsername(value);
    };

    const calc = async () => {
        
        AsyncStorage.setItem("Username", Username);
        
        const res = await AsyncStorage.getItem("Username");
        
        const datas = await AsyncStorage.getItem("date");
        
        if (datas && res) {
            console.log(`AsyncStorage response Home name: ${res}`);
            console.log(`AsyncStorage response Home date: ${datas}`);
            navigation.navigate("Result");
        } 
        
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
                <Inputdate />
                <FormSubmitButton onPress={calc} title='Calc' />
            </FormContainer>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    view: {
        // alignItems: "center",
        // justifyContent: "center",
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