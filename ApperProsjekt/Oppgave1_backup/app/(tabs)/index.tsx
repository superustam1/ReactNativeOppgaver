import {StyleSheet, TouchableOpacity, View, Text, Alert} from 'react-native';


export default function HomeScreen() {
  const showAlert = () => {
    Alert.alert('Button Pressed!', 'You pressed the button.');
  };
  return (
    <View style={styles.Container}>
      <View style={styles.RedBox}>
        <Text style={styles.WhiteText}>En app</Text>
      </View>

      <View style={styles.BoxContainer}>
        <View style={styles.GreenBox}>
        </View>
        <View style={styles.YellowBox}>
        </View>
        <View style={styles.BlackBox}>
        </View>
      </View>


        

      <Text style={styles.BlackText}>
        Text som er  uten {"\n"}mening!
      </Text>

      <TouchableOpacity style={styles.button} onPress={showAlert}>
        <Text style={styles.WhiteText}>OK</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex:1,
  },
  RedBox: {
    height:'12.5%',
    justifyContent: 'center',
    backgroundColor: 'red'
  },


  BoxContainer: {
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    height:'15%',
    
  },
  GreenBox: {
    height:'50%',
    width:'15%',
    marginLeft:'6.25%',
    backgroundColor: 'green'
  },
  BlackBox: {
    height:'50%',
    width:'15%',
    marginRight:'6.25%',
    backgroundColor: 'black'
  },
  YellowBox: {
    height:'50%',
    width:'15%',
    backgroundColor: 'yellow',
    alignSelf:'flex-end',
  },

  TextContainer: {
    alignSelf:'center',
    marginTop:'12.5%',
    width:'60%'
  },
  BlackText: {
    marginTop:'12.5%',
    fontWeight:'bold',
    fontSize:20,
    textAlign:'center'
  },
  WhiteText:{
    fontWeight:'bold',
    fontSize:20,
    textAlign:'center',
    color:'white'
  },


  button: {
    backgroundColor: '#007BFF',
    width:'33.33333%',
    height:'6%',
    marginTop:'75%',
    alignSelf:'center',
    justifyContent:'center',
    borderRadius: 5,
  },
  },
);
