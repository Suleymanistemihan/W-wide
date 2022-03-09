import React, { useEffect } from 'react'
import { View, Text, Image, ImageBackground, RefreshControl, FlatList } from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import { fetchWeatherIstanbul, } from "../../../../redux/actions/weatherData";
import styles from '../style';

function WeatherIstanbul() {
  const state1 = useSelector(fetchWeatherIstanbul => fetchWeatherIstanbul.weather.data);
  const date = new Date();
  const dateData = state1?.location?.localtime;
  var day = date.getDate(dateData);
  day = day > 9 ? day : "0" + day;
  var minutes = date.getMinutes(dateData);
  var hour = date.getHours(dateData)
  hour = hour > 9 ? hour : "0" + hour
  minutes = minutes > 9 ? minutes : '0' + minutes;

  const image = state1?.current?.condition?.icon

  const dispatch = (useDispatch())
  useEffect(() => {
    dispatch(fetchWeatherIstanbul())
  },
    []
  )
  return (
    <View style={{ flex: 1, backgroundColor: "#E3E5E4", justifyContent: "center", alignItems: "center" }}>
      <ImageBackground source={require("../../../icon/Backgrounds/Galata.jpg")} style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }}>
        <View style={{ height: "75%", width: "75%", backgroundColor: 'rgba(52, 52, 52, 0.8)', borderRadius: 20, alignItems: "center", justifyContent: "center", opacity: 0.8 }}>
          <View style={{ marginBottom: 80, alignItems: "center" }}>
            <Text style={{ fontSize: 45, color: "white", fontWeight: "bold", }}>{state1?.location?.region}</Text>
            <Text style={{ fontSize: 40, color: "white" }}>{`${hour}:${minutes}`}</Text>
            <Text style={{ fontSize: 35, color: "white" }}> {`${day}.${date.getMonth()}.${date.getFullYear()}`}</Text>
          </View>
          <View style={{ marginBottom: 50 }}>
            <Text style={{ fontSize: 30, color: "white", fontWeight: "bold", }}>{state1?.current?.temp_c}°C </Text>
          </View>
          <Text style={{ fontSize: 20, color: "white", fontWeight: "bold", }}>{state1?.current?.condition?.text}</Text>
          <Image style={{ width: 50, height: 50 }} source={{ uri: image }} />
        </View>
      </ImageBackground>
    </View >
  )
}

export default WeatherIstanbul;