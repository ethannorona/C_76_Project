import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class DailyPicScreen extends React.Component{
  render(){
    return(
      <View style = {{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text>Daily Pic Screen</Text>
      </View>
    );
  }
}