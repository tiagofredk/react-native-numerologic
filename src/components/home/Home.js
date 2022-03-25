import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useContext, useState } from 'react'
import { language } from '../data/language'
import FormInput from '../form/Input';
import { MainContext } from '../context/MainContextProvider';
import FormContainer from '../form/FormContainer';
import FormSubmitButton from '../form/FormSubmitButton';
import Inputdate from '../data/Inputdate';

const Home = () => {

    const languageDef = language.portugues;
    const size = useWindowDimensions();
    
    const { Date, Username, setUsername } = useContext(MainContext);

    const handleOnChangeText = () => {
        setUsername()
    };

    const calc = () => {
        console.log(Username);
        console.log(Date);
    };

    return (
        <View style={[styles.view, { height: size.height }]} >
            <Text>{languageDef.title}</Text>
            <FormContainer>
                <FormInput
                    value={Username}
                    onChangeText={value => handleOnChangeText(value, 'username')}
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