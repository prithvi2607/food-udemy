import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';


const navigator = createStackNavigator({
  Search : SearchScreen,
  ResultsShow: ResultsShowScreen 
},{
  initialRouteName: 'Search',
  defaultNavigationOptions:{
    title:'Business Search'
  }
});

export default createAppContainer(navigator);










// import React from "react";
// import { Text, StyleSheet, View, Button } from "react-native";

// const Screen = () => {
//     return <View>
//        <Text></Text> 
//     </View>
// };

// const styles = StyleSheet.create({});

// export default Screen;
