import React,{useState, useEffect} from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import Weather from './components/Weather'
import SearchBar from './components/SearchBar';


const apiKey = 'Your API_KEY';
  

export default function App() {

  const [weatherData, setWeatherData] = useState(null)
  const [loaded, setLoaded] = useState(true)

  async function fetchWeatherData(cityName) {
    setLoaded(false)
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
    try{
      const res = await fetch(api);
      if(res.status == 200){
        const data = await res.json()
        setWeatherData(data)
      }else{
        setWeatherData(null)
      }
      setLoaded(true)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    fetchWeatherData('islamabad')
  },[])

  if(!loaded){
    return(
      <View style={styles.container}>
         <ActivityIndicator color='gray' size={40}/>
      </View>
    )
  }

  else if(weatherData === null){
    return(
      <View style={styles.container}>
        <SearchBar fetchWeatherData={fetchWeatherData}/>
        <Text style={styles.primaryText}>City Not Found! Try Different City</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Weather weatherData={weatherData} fetchWeatherData={fetchWeatherData} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  }
})
