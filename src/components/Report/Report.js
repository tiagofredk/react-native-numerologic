import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Report = () => {

    const navigation = useNavigation();

    const [Username, setUsername] = useState("");
    const [resultname, setResultname] = useState("");
    const [Destiny, setDestiny] = useState("");
    const [Birthdate, setBirthdate] = useState("");
    const [Year, setYear] = useState("");
    const [Month, setMonth] = useState("");
    const [Day, setDay] = useState("");
    const [Origin, setOrigin] = useState("");
    const [Personality, setPersonality] = useState("");
    const [Heart, setHeart] = useState("");
    const [FirstvowelResult, setFirstvowelResult] = useState("");
    const [Render, setRender] = useState(false)

    useEffect(async () => {

        setDestiny(await AsyncStorage.getItem("Destiny"));
        setBirthdate(await AsyncStorage.getItem("Birthdate"));
        setYear(await AsyncStorage.getItem("Year"));
        setMonth(await AsyncStorage.getItem("Month"));
        setDay(await AsyncStorage.getItem("Day"));
        setOrigin(await AsyncStorage.getItem("Origin"));
        setPersonality(await AsyncStorage.getItem("Personality"));
        setHeart(await AsyncStorage.getItem("Heart"));
        setFirstvowelResult(await AsyncStorage.getItem("FirstvowelResult"));
        console.log("useEffect");

    }, [setRender])

    return (
        <View>
            <View>
                <Text>Report</Text>
                <Text>{Username}</Text>
                <Text>Nascimento {Birthdate}</Text>
                <Text>Destino {Destiny}</Text>
                <Text>Personalidade {Personality}</Text>
                <Text>Coracao {Heart}</Text>
                <Text>Origem {Origin}</Text>
                <Text>Dia {Day}</Text>
                <Text>Primeira vogal {FirstvowelResult}</Text>
            </View>
            <Button onPress={() => {
                AsyncStorage.clear()
                console.log("AsyncStorage Cleared")
                navigation.navigate("Home")
            }} title="Home" />
        </View>
    )
}

export default Report

const styles = StyleSheet.create({})