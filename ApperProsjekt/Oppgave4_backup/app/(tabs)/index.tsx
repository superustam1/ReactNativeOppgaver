import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { useState } from 'react';

export default function HomeScreen() {
  const [Value,ChangeValue] = useState(0)
  const AddValue = () => {
    ChangeValue(Value + 1);
  };
  const SubValue = () => {
    if (Value == 0){
      ChangeValue(Value);
    } else {
      ChangeValue(Value - 1);
    }   
  };
  return (
    <View style={styles.Container}>
      <TouchableOpacity style={[styles.button,{marginTop:'33%'}]} onPress={AddValue}>
        <Text style={styles.WhiteText}>Øk teller</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={SubValue}>
        <Text style={styles.WhiteText}>Reduser teller</Text>
      </TouchableOpacity>
      <Text style={[styles.BlackText,{marginTop:'23%',}]}>
          Teller: er
      </Text>
      <View style={styles.CountBox}>
        <Text style={[styles.BlackText,{fontSize:45}]}>
          {Value}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex:1,
  },
  button: {
    backgroundColor: '#487281',
    width:'65%',
    height:'7%',
    margin:'4%',
    alignSelf:'center',
    justifyContent:'center',
    borderRadius: 5,
  },
  WhiteText:{
    fontWeight:'bold',
    fontSize:20,
    textAlign:'center',
    color:'white'
  },
  BlackText: {
    fontWeight:'bold',
    fontSize:20,
    textAlign:'center'
  },
  CountBox:{
    backgroundColor:'#D8DBE2',
    width:'30%',
    height:'15%',
    alignSelf:'center',
    justifyContent:'center',
  },
});
