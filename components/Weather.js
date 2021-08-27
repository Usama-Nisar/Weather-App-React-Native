import React,{useState, useEffect} from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions,StatusBar } from 'react-native'
import {haze, rainy, snow, sunny} from '../assets/index'
import SearchBar from './SearchBar' 

export default function Weather({ weatherData, fetchWeatherData }) {

    const [backgroundImage, setBackgroundImage] = useState(null);

    const { weather,
        name,
        main: { temp, humidity },
        wind: { speed }
    } = weatherData;
    const [{ main, description }] = weather;
    

    useEffect(() => {
       setBackgroundImage(getBackgroundImg(main))
    }, [] )

    function getBackgroundImg(weather) {
        if(weather === 'Snow') return snow
        if(weather === 'Clear') return sunny
        if(weather === 'Rain') return rainy
        if(weather === 'Haze') return haze
        return haze;   
    }

    let textColor = backgroundImage !== sunny ? 'white' : 'black'
    
    return (
        <View style={styles.container}>

            <ImageBackground
              source={backgroundImage}
              resizeMode='cover'
              style={styles.backgroundImg}>

              <SearchBar fetchWeatherData={fetchWeatherData} />    

              <View style={{alignItems:'center'}}>
                  <Text style={{...styles.headerText, color: textColor, fontWeight: 'bold'}}>{name}</Text>
              </View>    

              <View style={styles.extraInfo}> 

                  <View style={styles.info}>
                      <Text style={{color:'white',fontSize: 22, fontWeight:'bold'}}>Temperature</Text>
                      <Text style={{color:'white',fontSize: 22, fontWeight:'bold'}}>{ temp } ℃</Text>
                  </View>
                 <View style={styles.info}>
                      <Text style={{color:'white',fontSize: 22, fontWeight:'bold'}}>Condition</Text>
                      <Text style={{color:'white',fontSize: 22, fontWeight:'bold'}}>{ main }</Text>
                  </View>

              </View>

              <View style={styles.extraInfo}>

                  <View style={styles.info}>
                      <Text style={{color:'white',fontSize: 22, fontWeight:'bold'}}>Humidity</Text>
                      <Text style={{color:'white',fontSize: 22, fontWeight:'bold'}}>{humidity} %</Text>
                  </View>
                  <View style={styles.info}>
                      <Text style={{color:'white',fontSize: 22, fontWeight:'bold'}}>Wind Speed</Text>
                      <Text style={{color:'white',fontSize: 22, fontWeight:'bold'}}>{speed }m/s</Text>
                  </View>

              </View>
                
            </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems: 'center'
    },
    backgroundImg:{
        flex: 1,
        width: Dimensions.get('screen').width
    },
    headerText: {
        fontSize: 45,
        marginTop: 60,
        marginBottom: 80
    },
    extraInfo:{
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-between',
        padding: 10
    },
    info:{
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: Dimensions.get('screen').width/2.3,
        padding: 20,
        borderRadius: 20,
        alignItems:'center'
    }
  })