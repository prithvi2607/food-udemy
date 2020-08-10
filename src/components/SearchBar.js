import React from "react";
import { Text, TextInput, StyleSheet, View, Button } from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange , onTermSubmit}) => {
    return <View style={styles.backgroundStyle}>
        <Feather name='search' style={styles.iconStyle} />
        <TextInput autoCapitalize='none' autoCorrect={false} style={styles.inputStyle} placeholder='Search' value={term} onChangeText={(newTerm) => onTermChange(newTerm)} onEndEditing={() => onTermSubmit()} />
    </View>
};

const styles = StyleSheet.create({
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        margin: 15
    },
    backgroundStyle: {
        backgroundColor: "rgb(250,250,250)",
        height: 50,
        borderRadius: 5,
        margin: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        fontSize: 18,
        flex: 1
    }
});

export default SearchBar;
