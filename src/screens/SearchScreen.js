import React, { useState } from "react";
import { Text, StyleSheet, View, Button , ScrollView} from "react-native";
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = () => {
    const filterResultsByPrice=(price)=>{
        return results.filter((result)=>{
            return result.price === price;
        })
    }

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    
    return <View style={{flex:1}}>
        <SearchBar term={term} onTermChange={(newTerm) => setTerm(newTerm)} onTermSubmit={() => searchApi(term)} />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView>   
        <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
        <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
        <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender"/>
        </ScrollView>
    </View>
};

const styles = StyleSheet.create({});

export default SearchScreen;