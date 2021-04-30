import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class App extends React.Component{
  constructor(){
    super();
    this.state ={
      weather:"",
    }
  }

  getWeather=async() =>{
    var url="https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139";
    return fetch(url)
    .then(response => response.json())
    .then(resposneJson => {
      this.setState({weather: resposneJson,});
    })
    .catch(error =>{
      console.log(error);
      this.setState({weather: ""});
    })
  }

componentDidMount=()=>{
  this.getWeather();
}

render(){
  if(this.state.weather === ""){
   return (
    <View style={styles.container}>
     <Text style={styles.weatherText}>Loading....</Text>
    </View>
  );
  } else{
    return(
      <View style={styles.container}>
      <View style={styles.subContainer}>
            <Text style={styles.title}>
              Weather Forecast
            </Text>

         <Text style={styles.weatherText}>
              {this.state.weather.main.temp}&deg;C
            </Text>
             <Text style={[styles.weatherText,{margin:10}]}>
              humidity : {this.state.weather.main.humidity}
            </Text>
            <Text style={[styles.weatherText, {margin:10}]}>
              {this.state.weather.weather[0].description}
            </Text>
        </View>
      </View>
    )
  }
  
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  subContainer:{
    flex: 1, 
     backgroundColor: 'lightpink',
    borderWidth: 1, 
    alignItems: 'center' 
  },
  title:{
    marginTop: 25, 
      fontSize: 30,
      fontWeight: '550' 
  },
  weatherText: {
    marginTop: 30,
    fontSize: 20,
    color:'black',
    textAlign: 'center',
  },
});
