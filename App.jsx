/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class App extends Component {
  render() {
    return (
        <>
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Hello World from React Native!</Text>
            </View>
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Hello World from React Native!</Text>
            </View>
        </>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
    textAlign: 'center',
  },
  viewStyle:{
    flex:1,
    justifyContent:'center',
    alignContent:'center',
  },
});

export default App;
