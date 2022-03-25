import React from 'react';
import {
    StyleSheet,
    Dimensions,
    ScrollView,
    View
} from 'react-native';

const FormContainer = ({ children }) => {
    return (
        <View
            style={styles.container}
        >
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // width: Dimensions.get('window').width,
        height: 200,
        // paddingHorizontal: 20,
        backgroundColor: "#868686",
    },
});

export default FormContainer;
