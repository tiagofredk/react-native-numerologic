import React, { useState, useContext } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { MainContext } from '../context/MainContextProvider';

const Inputdate = () => {
    const {date, setDate} = useContext(MainContext);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <DatePicker
                    style={styles.datePickerStyle}
                    date={date} // Initial date from state
                    mode="date" // The enum of date, datetime and time
                    placeholder="select date"
                    format="DD-MM-YYYY"
                    minDate="01-01-1800"
                    maxDate="01-01-2030"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
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
                    }}
                    onDateChange={(date) => {
                        setDate(date);
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default Inputdate;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
    },
    datePickerStyle: {
        width: 200,
        marginTop: 20,
    },
});