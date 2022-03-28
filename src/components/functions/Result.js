import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useContext, useState } from 'react'
import { MainContext } from '../context/MainContextProvider';
import { useNavigation } from '@react-navigation/native';
import { language } from '../data/language'

const Result = () => {
    const languageDef = language.portugues;
    const size = useWindowDimensions();

    const [showResult, setShowResult] = useState(false)
    const navigation = useNavigation();
    const {
        destiny, setDestiny,
        birthdate, setBirthdate,
        year, setYear,
        month, setMonth,
        day, setDay,
        origin, setOrigin,
        personality, setPersonality,
        heart, setHeart,
        firstvowelResult, setFirstvowelResult,
        Username, setUsername,
        date, setDate,
        resultname, setResultname
    } = useContext(MainContext);

    let callForMath = () => {

        // console.log(Username);
        // console.log(date);
        if (Username.slice(-1) === " ") {
            alert(languageDef.alert)

        } else if (Username.trim() !== "") {
            dom(Username)
            data(date)
        } else {
            alert(languageDef.alert2)
        }
        // inputName.current.value = ""
        // BirthDate.current.value = ""
    }

    function dom(name) {
        let namedom = name
        setResultname(namedom);
        let name1 = namedom.toLowerCase();
        let splitedname = name1.split(" ");
        n3(splitedname);
        data();
        calcconsonant(name1);
        calcvowel(name1);
        firstvowel();
        return splitedname;
    }

    function n32(x) {

        if ((x >= 1 && x <= 9) || x === 11 || x === 22) {
            return x;
        } else if (x.toString().length >= 2) {
            let final = reducaofinal(x);
            return final;
        }
    }

    function len1(x) {
        let variaveltrans = x.slice(0, 1).toString();
        let hui = calcname(variaveltrans);
        let bless = n32(hui);
        return bless;
    }

    function len2(x) {
        let variaveltrans1 = x.slice(1, 2).toString();
        let hui1 = calcname(variaveltrans1);
        let bless1 = n32(hui1);
        return bless1
    }

    function len3(x) {
        let variaveltrans2 = x.slice(2, 3).toString();
        let hui2 = calcname(variaveltrans2);
        let bless2 = n32(hui2);
        return bless2;
    }

    function len4(x) {
        let variaveltrans2 = x.slice(3, 4).toString();
        let hui2 = calcname(variaveltrans2);
        let bless2 = n32(hui2);
        return bless2;
    }

    function len5(x) {
        let variaveltrans = x.slice(4, 5).toString();
        let hui = calcname(variaveltrans);
        let bless = n32(hui);
        return bless;
    }

    function n3(x) {

        if (x.length === 1) {

            let call = len1(x);
            let call2 = reducaofinal(call);

            setDestiny(call2);
        }

        if (x.length === 2) {
            let callback = len1(x);
            let callback1 = len2(x);
            let call = callback + callback1;
            let call2 = reducaofinal(call);

            setDestiny(call2);
        }

        if (x.length === 3) {
            let callback = len1(x);


            let callback1 = len2(x);


            let callback2 = len3(x);

            let call = callback + callback1 + callback2;
            let call2 = reducaofinal(call);
            setDestiny(call2);
        }

        if (x.length === 4) {
            let callback = len1(x);

            let callback1 = len2(x);

            let callback2 = len3(x);

            let callback3 = len4(x);

            let call = callback + callback1 + callback2 + callback3;
            let call2 = reducaofinal(call);
            setDestiny(call2);
        }

        if (x.length === 5) {
            let callback = len1(x);

            let callback1 = len2(x);

            let callback2 = len3(x);

            let callback3 = len4(x);

            let callback4 = len5(x);

            let call = callback + callback1 + callback2 + callback3 + callback4;
            let call2 = reducaofinal(call);
            setDestiny(call2);
        }
    }

    function calcname(x2) {

        let alphabetKey = {
            "a": "1",
            "b": "2",
            "c": "3",
            "d": "4",
            "e": "5",
            "f": "6",
            "g": "7",
            "h": "8",
            "i": "9",
            "j": "1",
            "k": "2",
            "l": "3",
            "m": "4",
            "n": "5",
            "o": "6",
            "p": "7",
            "q": "8",
            "r": "9",
            "s": "1",
            "t": "2",
            "u": "3",
            "ü": "3",
            "v": "4",
            "w": "5",
            "x": "6",
            "y": "7",
            "z": "8",
            "_": "0"
        }

        let num = [];

        for (var i = 0; i < x2.length; i++) {

            var letter = x2[i],
                lNum = alphabetKey[letter] || 0;

            num.push(lNum);
        }


        let b = num.map(x => +x);

        let c = 0;
        b.forEach(element => {
            c = c + element;
        });

        return c;
    }

    function reducaofinal(ble) {

        if (ble === 11 || ble === 22) {

            return ble;

        } else {
            let b = ble.toString();
            let c = [];

            for (let i = 0; i < b.length; i++) {
                c.push(b[i]);
            }

            let d = c.map(x => +x);
            let e = 0;

            d.forEach(Element => {
                e = e + Element;
            })

            if (e === 11 || e === 22) {
                return e;
            } else if (e.toString().length >= 2) {
                let f = reducaofinal(e);
                return f;
            } else {

                return e;
            }
        }
    }

    function data() {
        let data = date;

        let data2 = data.split("-");

        let year = data2.slice(0, 1).map(x => +x);
        let month = data2.slice(1, 2).map(x => +x);
        let day = data2.slice(2, 3).map(x => +x);

        let year1 = reducaofinal(year);

        let month1 = reducaofinal(month);

        let day1 = day;

        let year2 = year1 + month1 + day1;

        let year3 = reducaofinal(year2);

        setBirthdate(data);
        setYear(year1);
        setMonth(month1);
        setDay(day1);
        setOrigin(year3);

        setShowResult(true)
    }


    function calcconsonant(x) {

        let namevowel = [];

        for (let i = 0; i < x.length; i++) {
            if (x[i] === "a" || x[i] === "e" || x[i] === "i" || x[i] === "o" || x[i] === "u" || x[i] === "ü") {
                namevowel.push("_");
            } else {

                namevowel.push(x[i]);
            }
        }

        let variaveltrans = namevowel.toString();
        let hui = calcname(variaveltrans);
        let bless = n32(hui);

        setPersonality(bless);
        return bless;
    }

    function calcvowel(x) {
        let namevowel = [];

        for (let i = 0; i < x.length; i++) {
            if (x[i] === "a" || x[i] === "e" || x[i] === "i" || x[i] === "o" || x[i] === "u" || x[i] === "ü") {
                namevowel.push(x[i]);
            } else {
                namevowel.push("_");

            }
        }

        let variaveltrans = namevowel.toString();

        let hui = calcname(variaveltrans);
        let bless = n32(hui);

        setHeart(bless);

        return bless;
    }

    function firstvowel() {
        let x = resultname;

        let firstvowelresult = [];

        for (let i = 0; i < x.length; i++) {
            if (x[i] === "a" || x[i] === "e" || x[i] === "i" || x[i] === "o" || x[i] === "u") {
                firstvowelresult.push(x[i]);
                break;
            } else {
                continue;
            }
        }
        setFirstvowelResult(firstvowelresult);
        return firstvowelresult;
    }

    // callForMath();

    return (
        <View style={[styles.container, { height: size.height }]}>
            <Text>{Username}</Text>
            <Text>{date}</Text>
            {showResult &&
                <>
                    <Text>{destiny}</Text>
                    <Text>{birthdate}</Text>
                    <Text>{year}</Text>
                    <Text>{month}</Text>
                    <Text>{day}</Text>
                    <Text>{origin}</Text>
                    <Text>{personality}</Text>
                    <Text>{heart}</Text>
                    <Text>{firstvowelResult}</Text>
                    <Text>{resultname}</Text>
                </>
            }
        </View>
    )
}

export default Result;

const styles = StyleSheet.create({
    container: {
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
    }
})