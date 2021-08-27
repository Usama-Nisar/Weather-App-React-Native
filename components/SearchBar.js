import React,{useState} from 'react'
import { StyleSheet, Text, View, TextInput, Dimensions} from 'react-native'
import { EvilIcons } from '@expo/vector-icons';

export default function SearchBar({ fetchWeatherData }) {

    const [cityName, setCityName] = useState('')

    return (
        <View style={styles.inputText}>
            <TextInput
              placeholder='Enter City Name'
              value={cityName}
              onChangeText={(text)=> {setCityName(text)}}
              style={{color:'black', fontSize: 18}}
              />
            <EvilIcons name="search" size={28} color="black" onPress={() => fetchWeatherData(cityName)} />  
        </View>
    )
}

const styles = StyleSheet.create({
    inputText:{
        marginTop: 60,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Dimensions.get('screen').width - 20,
        paddingVertical: 15,
        borderRadius: 25,
        borderWidth: 1.2,
        marginHorizontal: 10,
        backgroundColor: 'lightgray',
        borderColor: 'lightgray',
        color: 'black',
        paddingHorizontal: 10

    }
})
