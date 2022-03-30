import { StyleSheet, Text, View, useWindowDimensions, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { language } from '../data/language';
import FormInput from '../form/Input';
// import { MainContext } from '../context/MainContextProvider';
import FormContainer from '../form/FormContainer';
import FormSubmitButton from '../form/FormSubmitButton';
import { Inputdate } from '../data/Inputdate';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import print from '../functions/Resulttest';

// import {callForMath} from "../functions/CalcContext";
// import Calculator from '../functions/Calculator';

const Home = () => {

    useEffect(() => {
      
    
      return () => {
        second
      }
    }, [third])
    

    const languageDef = language.portugues;
    const size = useWindowDimensions();
    const navigation = useNavigation();

    // const [ModalVisible, setModalVisible] = useState(false);
    const [Username, setUsername] = useState("");

    

    const handleOnChangeText = async (value, fieldname) => {
        setUsername(value);
    };

    const calc = async () => {
        try {
            // await AsyncStorage.setItem("Username", Username);

            // const res = await AsyncStorage.getItem("Username");

            const datas = await AsyncStorage.getItem("date");

            // if (datas && res) {
            // console.log(`AsyncStorage response Home name: ${res}`);
            // console.log(`AsyncStorage response Home date: ${datas}`);
            // navigation.navigate("Result");
            print(Username, datas);
            navigation.navigate("Report")
            // }
        } catch (error) {
            alert(error);
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
                <FormSubmitButton onPress={calc} title='Calc' />
            </FormContainer>
            <Inputdate />

            <Button onPress={() => setModalVisible(true)} title="modal" />
            <Button onPress={() => {
                AsyncStorage.clear()
                console.log("AsyncStorage Cleared"
                )
            }}
                title="Clear Storage" />

            {/* <Modal
                animationType="slide"
                transparent={true}
                visible={ModalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!ModalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Analise Numerologica</Text>
                        <Text>{Username}</Text>
                        <Text>Nascimento {Birthdate}</Text>
                        <Text>Destino {Destiny}</Text>
                        <Text>Personalidade {Personality}</Text>
                        <Text>Coracao {Heart}</Text>
                        <Text>Origem {Origin}</Text>
                        <Text>Dia {Day}</Text>
                        <Text>Primeira vogal {FirstvowelResult}</Text>

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!ModalVisible)}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                                AsyncStorage.clear()
                                console.log("AsyncStorage Cleared"
                                )
                            }}
                        >
                            <Text style={styles.textStyle}>Clear Storage</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal> */}
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