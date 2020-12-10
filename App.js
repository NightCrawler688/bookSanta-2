import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './screens/Welcome';
console. disableYellowBox = true;

export default class App extends React.Component{
  render(){
    return(
      <View>
        <Welcome/>
      </View>
    )
  }
}