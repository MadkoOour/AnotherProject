/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';

const Flex = () => {
  const [counter, setCounter] = useState(0);
  const [textInput, setTextInput] = useState(0);
  const [people, setPeople] = useState([
    {name: 'ahmed', id: 1},
    {name: 'alaa', id: 2},
    {name: 'mahmoud', id: 3},
    {name: 'mostafa', id: 4},
    {name: 'ahmed', id: 5},
    {name: 'alaa', id: 6},
    {name: 'mahmoud', id: 7},
    {name: 'mostafa', id: 8},
    {name: 'ahmed', id: 9},
    {name: 'alaa', id: 10},
    {name: 'mahmoud', id: 11},
    {name: 'mostafa', id: 12},
    {name: 'ahmed', id: 13},
    {name: 'alaa', id: 14},
    {name: 'mahmoud', id: 15},
    {name: 'mostafa', id: 16},
  ]);

  return (
    <NavigationContainer>
      <View
        style={[
          styles.container,
          {
            // flexDirection: 'column',
          },
        ]}>
        <View style={{flex: 2, backgroundColor: '#B93C3C',...styles.viewDesign}}>
          <Text style={{fontSize: 40, color: '#fff'}}>
            Counter : {counter}
          </Text>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setCounter(prev => prev + 1);
              }}>
              <Icon name="add" size={20} color="#fff" style={{marginRight: 5}} />
              <Text style={styles.buttonText}>Increment</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setCounter(prev => prev - 1);
              }}>
              <Icon
                name="remove"
                size={20}
                color="#fff"
                style={{marginRight: 5}}
              />
              <Text style={styles.buttonText}>Decrement</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 3, backgroundColor: '#818181',...styles.viewDesign}}>
          <TextInput
            onChangeText={nameText => setTextInput(nameText)}
            placeholder="Enter Your Name : "
            style={styles.textInputDesign}
          />
          <FlatList
            data={people}
            renderItem={({item}) => <Text style={{fontSize:25}}>{item.name}</Text>}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={{flex: 3, backgroundColor: 'green',...styles.viewDesign}}>
          <ScrollView style={{flex:1}}>
          {people.map(item => (
            <View key={item.id}>
              <Text style={{fontSize:25}}>{item.name}</Text>
            </View>
          ))}
          </ScrollView>
        </View>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingVertical: 50,
    backgroundColor: '#333',
  },
  viewDesign:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#757575',
    padding: 10,
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    //textAlign: 'center',
  },
  textInputDesign: {
    color: 'black',
    width: '45%',
    marginHorizontal: 'auto',
    backgroundColor: '#FFEEA9',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 15,
  },
});

export default Flex;
