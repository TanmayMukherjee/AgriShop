import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/welcomeScreen';

export default class App extends React.Component {
  render(){
    return(
      <View>
        <WelcomeScreen/>
      </View>
    )
  }
}
