import React, { useEffect } from 'react'
import { View, Text, Image, ImageBackground, RefreshControl, FlatList } from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather,} from "../../../../redux/actions/weatherData";
import styles from '../style';

function WeatherAnkara() {
  const state1 = useSelector(fetchWeather => fetchWeather.weather.data);
  const date = new Date();
  const dateData = state1?.location?.localtime;
  var day = date.getDate(dateData);
  day = day > 9 ? day : "0" + day;
  var minutes = date.getMinutes(dateData);
  minutes = minutes > 9 ? minutes : '0' + minutes;

  const dispatch = (useDispatch())
  useEffect(() => {
    dispatch(fetchWeather())
  },
    []
  )
  return (
    <View style={{ flex: 1, backgroundColor: "grey", justifyContent: "center", alignItems: "center" }}>
      <View style={{ height: "75%", width: "75%", backgroundColor: "red", borderRadius: 20, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 25, color: "white", fontWeight: "bold", }}>{state1?.location?.region}</Text>
        <Text style={{ fontSize: 15, color: "white", fontWeight: "bold", }}>{state1?.current?.temp_c}°C </Text>
        <Text style={{ fontSize: 10, color: "white", fontWeight: "bold", }}>{state1?.current?.condition?.text}</Text>
        <Text style={{ fontSize: 10, color: "white", fontWeight: "bold", }}>{`${day}.${date.getMonth()}.${date.getFullYear()}`}</Text>
      </View>
    </View >
  )
}

export default WeatherAnkara;