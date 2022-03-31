import { StyleSheet, Text, View, Button, ScrollView, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { meaning_pt } from '../data/meaning';

const Report = () => {

    const size = useWindowDimensions()
    const meaning = meaning_pt;

    const navigation = useNavigation();

    const [Username, setUsername] = useState("");
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

        setUsername(await AsyncStorage.getItem("Username"));
        setDestiny(await AsyncStorage.getItem("Destiny"));
        setBirthdate(await AsyncStorage.getItem("Birthdate"));
        setYear(await AsyncStorage.getItem("Year"));
        setMonth(await AsyncStorage.getItem("Month"));
        setDay(await AsyncStorage.getItem("Day"));
        setOrigin(await AsyncStorage.getItem("Origin"));
        setPersonality(await AsyncStorage.getItem("Personality"));
        setHeart(await AsyncStorage.getItem("Heart"));
        setFirstvowelResult(await AsyncStorage.getItem("FirstvowelResult"));
        console.log("useEffect Report");
        await AsyncStorage.clear();
    }, [setRender])

    return (
        <View style={{height: size.height}}>
            <ScrollView>
                {/* <Text>Analise</Text>
                <Text>{Username}</Text>
                <Text>Nascimento {Birthdate}</Text>
                <Text>Destino {Destiny}</Text>
                <Text>Personalidade {Personality}</Text>
                <Text>Coracao {Heart}</Text>
                <Text>Origem {Origin}</Text>
                <Text>Dia {Day}</Text>
                <Text>Primeira vogal {FirstvowelResult}</Text> */}
                <View className="reportPage">
                    
                    <View className="analise">

                        <Text className="reporth1">Report</Text>

                        <Text id="allname">{Username}</Text>

                        <View className="destiny">

                            <View className="ball">
                                <Text id="balldestiny">{Destiny} </Text>
                            </View>

                            <View className="content">
                                <Text id="destiny">{meaning.destiny.title}</Text>
                                <Text id="destinydes">{meaning.destiny.description} </Text>
                                <Text id="destinyre">{meaning.destiny[Destiny]} </Text>
                            </View>

                        </View>

                        <View className="personality">

                            <View className="ball">
                                <Text id="ballpersonality">{Personality} </Text>
                            </View>

                            <View className="content">
                                <Text id="personality">{meaning.personality.title} </Text>
                                <Text id="personalitydes">{meaning.personality.description} </Text>
                                <Text id="personalityre">{meaning.personality[Personality]} </Text>
                            </View>

                        </View>

                        <View className="heart">

                            <View className="ball">
                                <Text id="ballheart">{Heart} </Text>
                            </View>

                            <View className="content">
                                <Text id="heart">{meaning.heart.title} </Text>
                                <Text id="heartdes">{meaning.heart.description} </Text>
                                <Text id="heartre">{meaning.heart[Heart]} </Text>
                            </View>

                        </View>

                        <View className="origin">

                            <View className="ball">
                                <Text id="ballorigin">{Origin} </Text>
                            </View>

                            <View className="content">
                                <Text id="origin">{meaning.origin.title} </Text>
                                <Text id="origindes">{meaning.origin.description} </Text>
                                <Text id="originre">{meaning.origin[Origin]} </Text>
                            </View>
                        </View>

                        <View className="day">

                            <View className="ball">
                                <Text id="ballday">{Day} </Text>
                            </View>

                            <View className="content">
                                <Text id="day">{meaning.day.title} </Text>
                                <Text id="daydes">{meaning.day.description} </Text>
                                <Text id="dayre">{meaning.day[Day]} </Text>
                            </View>

                        </View>

                        <View className="firstvowel">

                            <View className="ball">
                                <Text id="ballfirstvowel">{FirstvowelResult} </Text>
                            </View>

                            <View className="content">
                                <Text id="firstvowel">{meaning.vowel.title} </Text>
                                <Text id="firstvoweldes">{meaning.vowel.description} </Text>
                                <Text id="firstvowelre">{meaning.vowel[FirstvowelResult]} </Text>
                            </View>

                        </View>

                    </View>
                </View>
            </ScrollView>
            <Button onPress={() => {
                navigation.navigate("Home")
            }} title="Home" />
        </View>
    )
}

export default Report

const styles = StyleSheet.create({})