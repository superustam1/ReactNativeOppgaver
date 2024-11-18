import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import axios from 'axios';
import * as ExpoLoc from 'expo-location';

const App = () => {
  const [city, setCity] = useState(''); // To store city name input
  const [data, setData] = useState(); // To store weather data
  const [weather,setWeather] = useState('')
  const apiKey = '969979eb2ab44d6b8cd113108242410'; // Replace with your actual API key

  const [currentLocation, setLocation] = useState(null);

  const imageMapping = {
    sunny: require('../../assets/images/Sunny.png'),
    clear: require('../../assets/images/Sunny.png'),
    partlycloudy: require('../../assets/images/light-cloud 1.png'),
    cloudy: require('../../assets/images/light-cloud 1.png'),
    overcast: require('../../assets/images/heavy-cloud 1.png'),

    patchyrainpossible: require('../../assets/images/light-rain 1.png'),
    patchylightrain: require('../../assets/images/light-rain 1.png'),
    lightrain: require('../../assets/images/light-rain 1.png'),
    moderaterainattimes: require('../../assets/images/heavy-rain 1.png'),
    moderaterain: require('../../assets/images/heavy-rain 1.png'),
    heavyrainattimes: require('../../assets/images/heavy-rain 1.png'),
    heavyrain: require('../../assets/images/heavy-rain 1.png'),

    lightrainshower: require('../../assets/images/showers 1.png'),
    moderateorheavyrainshower: require('../../assets/images/showers 1.png'),
    torrentialrainshower: require('../../assets/images/showers 1.png'),

    lightfreezingrain: require('../../assets/images/freezingrain.jpg'),
    moderateorheavyfreezingrain: require('../../assets/images/freezingrain.jpg'),

    patchylightdrizzle: require('../../assets/images/lightdrizzle.jpg'),
    lightdrizzle: require('../../assets/images/lightdrizzle.jpg'),

    lightsnowshowers: require('../../assets/images/snow 1.png'),
    moderateorheavysnowshowers: require('../../assets/images/snow 1.png'),

    patchysnowpossible: require('../../assets/images/snow 1.png'),
    patchylightsnow: require('../../assets/images/snow 1.png'),
    lightsnow: require('../../assets/images/snow 1.png'),
    patchymoderatesnow: require('../../assets/images/snow 1.png'),
    moderatesnow: require('../../assets/images/snow 1.png'),
    patchyheavysnow: require('../../assets/images/snow 1.png'),
    heavysnow: require('../../assets/images/snow 1.png'),

    icepellets: require('../../assets/images/hail 1.png'),
    lightshowersoficepellets: require('../../assets/images/hail 1.png'),
    moderateorheavyshowersoficepellets: require('../../assets/images/hail 1.png'),

    patchyfreezingdrizzlepossible: require('../../assets/images/freezingdrizzle.webp'),
    freezingdrizzle: require('../../assets/images/freezingdrizzle.webp'),
    heavyfreezingdrizzle: require('../../assets/images/freezingdrizzle.webp'),

    blowingsnow: require('../../assets/images/snow 1.png'),
    blizzard: require('../../assets/images/Blizzard.jpg'),

    fog: require('../../assets/images/Fog.jpg'),
    mist: require('../../assets/images/Fog.jpg'),
    freezingfog: require('../../assets/images/FreezingFog.jpg'),

    lightsleetshowers: require('../../assets/images/sleet 1.png'),
    moderateorheavysleetshowers: require('../../assets/images/sleet 1.png'),

    lightsleet: require('../../assets/images/sleet 1.png'),
    moderateorheavysleet: require('../../assets/images/sleet 1.png'),
    patchysleetpossible: require('../../assets/images/sleet 1.png'),

    patchylightrainwiththunder: require('../../assets/images/thunder 1.png'),
    moderateorheavyrainwiththunder: require('../../assets/images/thunder 1.png'),
    patchylightsnowwiththunder: require('../../assets/images/thunder 1.png'),
    moderateorheavysnowwiththunder: require('../../assets/images/thunder 1.png'),
    thunderyoutbreakspossible: require('../../assets/images/thunder 1.png'),
  };



  const GetCityWeather = async () => {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
      );
      setData(response.data); // Set the weather data from the API
      setWeather(response.data.current.condition.text)
    } catch (error) {
      console.error(error.response?.data || error.message); // Log specific error data
    }
  };


  const GetLocalWeather = async () => {
    if (currentLocation) {
      const { latitude, longitude } = currentLocation.coords;
      try {
        const response = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`
        );
        setData(response.data); // Set the weather data from the API
        setWeather(response.data.current.condition.text);
      } catch (error) {
        console.error(error.response?.data || error.message); // Log specific error data
      }
    } else {
      console.log('Location data is not available');
    }
  }


  useEffect(() => {
    (async () => {
      // Request permission
      let { status } = await ExpoLoc.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      // Get current location
      let Location = await ExpoLoc.getCurrentPositionAsync({});
      setLocation(Location);
      await GetLocalWeather();
    })();
  }, []);


  return (
    <ImageBackground
    source={imageMapping[weather.replace(/\s/g, '').toLowerCase()]}
    style={styles.background}
    >
      <Text style={styles.header}>Weather App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter city"
        onChangeText={setCity}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={GetCityWeather}>
          <Text style={styles.buttonText} >Get input weather</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={GetLocalWeather}>
          <Text style={styles.buttonText} >Get your location weather</Text>
        </TouchableOpacity>
      </View>


      {data && (
        <View style={styles.weatherContainer}>
          <Text style={styles.weatherText}>
            City: {data.location.name}
          </Text>
          <Text style={styles.weatherText}>
            Temperature: {data.current.temp_c} °C
          </Text>
          <Text style={styles.weatherText}>
            Weather: {data.current.condition.text}
          </Text>
        </View>
      )}
      {!data && (
        <View style={styles.weatherContainer}>
          <Text style={styles.weatherText}>City:</Text>
          <Text style={styles.weatherText}>
            Temperature:
          </Text>
          <Text style={styles.weatherText}>
            Weather:
          </Text>
        </View>
      )}

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'black'
  },
  header: {
    fontSize: 32,
    marginBottom: 20,
    color:'white',
    textShadowColor: 'black',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 6,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 20,
    paddingHorizontal: 10,
    color:'white',
    textShadowColor: 'black',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 6,
  },
  weatherContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  weatherText: {
    fontSize: 20,
    marginVertical: 5,
    color:'white',
    textShadowColor: 'black',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 6,
  },
  buttonContainer:{
    height:'7%',
    width:'80%',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  button: {
    width:'43%',
    backgroundColor:'#5391f5',
    borderRadius: 5,
    justifyContent:'center',
  },
  buttonText: {
    color:'white',
    textAlign:'center',
    textShadowColor: 'black',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 6,
  },
});

export default App;