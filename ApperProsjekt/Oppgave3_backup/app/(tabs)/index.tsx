import {StyleSheet, View, Text, TextInput} from 'react-native';
import { useState } from 'react';



export default function HomeScreen() {
  const [Passord, changeText] = useState('');
  const [Min5, changeText2] = useState('Passordet må minst ha 5 tegn');

  const ChangeText = (inputText) => {
    if (inputText.length < 5) {
      changeText(inputText);
      changeText2('Passordet må minst ha 5 tegn')
    } else {
      changeText(inputText);
      changeText2('')
    }
    
  };

  return (
    <View style={styles.Container}>
      <View style={styles.Header}>
        <Text style={styles.WhiteText}>
          Passord
        </Text>
      </View>
      <Text style={styles.BlackText}>
        Skriv inn passordet ditt:
      </Text>
      <TextInput style={styles.input} onChangeText={ChangeText}/>
      <Text style={styles.BlackText}>Passordet ditt er: {Passord}</Text>
      <Text style={[styles.BlackText,{marginTop:'50%'}]}>{Min5}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex:1,
  },
  Header: {
    height:'12.5%',
    justifyContent: 'center',
    backgroundColor: '#373F51',
    marginBottom:'12.5%'
  },
  WhiteText:{
    fontWeight:'bold',
    fontSize:20,
    textAlign:'center',
    color:'white'
  },
  BlackText:{
    fontWeight:'bold',
    fontSize:20,
    color:'black',
    marginLeft:'7.5%',
  },
  input: {
    height: '6%',
    width:'85%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: '12%',
    alignSelf:'center',
  },
});
