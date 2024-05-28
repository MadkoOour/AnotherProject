/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Flex = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View
      style={[
        styles.container,
        {
          // flexDirection: 'column',
        },
      ]}>
      <View style={{ flex: 3, backgroundColor: '#B93C3C', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 40, color: '#fff', textAlign: 'center' }}>{counter}</Text>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <TouchableOpacity style={styles.button} onPress={() => { setCounter(prev => prev + 1); }}>
            <Icon name="add" size={20} color="#fff" style={{ marginRight: 5 }} />
            <Text style={styles.buttonText}>Increment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => { setCounter(prev => prev - 1); }}>
            <Icon name="remove" size={20} color="#fff" style={{ marginRight: 5 }} />
            <Text style={styles.buttonText}>Decrement</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={{ flex: 3, backgroundColor: '#818181' }} />
      <View style={{ flex: 3, backgroundColor: 'green' }} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    backgroundColor: '#333',
  },
  button: {
    backgroundColor: '#757575',
    padding: 10,
    margin: 10,
    display:'flex',
    flexDirection:'row',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Flex;
