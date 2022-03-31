import { StyleSheet, Text, View, useWindowDimensions, KeyboardAvoidingView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { language } from '../data/language';
import FormInput from '../form/Input';
import FormContainer from '../form/FormContainer';
import FormSubmitButton from '../form/FormSubmitButton';
import { Inputdate } from '../data/Inputdate';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import print from '../functions/Resulttest';

const Home = () => {

    useEffect(() => {
        console.log("useEffect Home")
    }, [])

    const languageDef = language.portugues;
    const size = useWindowDimensions();
    const navigation = useNavigation();
    const [Username, setUsername] = useState("");

    const handleOnChangeText = async (value, fieldname) => {
        setUsername(value);
    };

    const calc = async () => {
        try {
            const datas = await AsyncStorage.getItem("date");
            await AsyncStorage.setItem("Username", Username);
            
            print(Username, datas);
            
            // setUsername("")
            
            navigation.navigate("Report")
            
        } catch (error) {
            alert(error);
        }
    };

    return (
        <View style={[styles.view, { height: size.height }]} >
            <KeyboardAvoidingView>
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
            </KeyboardAvoidingView>
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 22
    },
    modalView: {
        height: 500,
        width: 300,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})