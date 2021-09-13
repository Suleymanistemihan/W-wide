import React, { useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import { fetchWeatherData } from "../../../redux/actions/weatherData";

function WeatherScreen() {

  const state = useSelector(state => state.weather.data);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchWeatherData());
  },
    []
  )
  return (
    <View style={{ alignItems: 'center' }}>
      <Text>Weather Screen</Text>

      <View style={{ flex: 1 }}>
        <Text>{state?.location?.country}</Text>
        <Image style={{ width: 50, height: 50 }} source={{ uri: state?.current?.condition?.icon }} />
      </View>
    </View>
  )
}

export default WeatherScreen;