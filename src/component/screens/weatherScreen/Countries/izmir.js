import React, { useEffect } from 'react'
import { View, Text, Image, ImageBackground, RefreshControl, FlatList } from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import { fetchWeatherIzmir, } from "../../../../redux/actions/weatherIzmir";
import styles from '../style';

function WeatherIzmir() {
  const state2 = useSelector(fetchWeatherIzmir => fetchWeatherIzmir.weather.data);
  const date = new Date();
  const dateData = state2?.location?.localtime;
  var day = date.getDate(dateData);
  day = day > 9 ? day : "0" + day;
  var minutes = date.getMinutes(dateData);
  var hour = date.getHours(dateData)
  hour = hour > 9 ? hour : "0" + hour
  minutes = minutes > 9 ? minutes : '0' + minutes;

  const dispatch = (useDispatch())
  useEffect(() => {
    dispatch(fetchWeatherIzmir())
  },
    []
  )
  return (
    <View style={{ flex: 1, backgroundColor: "#E3E5E4", justifyContent: "center", alignItems: "center" }}>
      <ImageBackground source={require("../../../icon/Backgrounds/izmir_saat_kulesi.jpg")} style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }}>
        <View style={{ height: "75%", width: "75%", backgroundColor: 'rgba(52, 52, 52, 0.8)', borderRadius: 20, alignItems: "center", justifyContent: "center", opacity: 0.8 }}>
          <View style={{ marginBottom: 80, alignItems: "center" }}>
            <Text style={{ fontSize: 45, color: "white", fontWeight: "bold", }}>{state2?.location?.region}</Text>
            <Text style={{ fontSize: 40, color: "white" }}>{`${hour}:${minutes}`}</Text>
            <Text style={{ fontSize: 35, color: "white" }}> {`${day}.${date.getMonth()}.${date.getFullYear()}`}</Text>
          </View>
          <View style={{ marginBottom: 50 }}>
            <Text style={{ fontSize: 30, color: "white", fontWeight: "bold", }}>{state2?.current?.temp_c}°C </Text>
          </View>
          <Text style={{ fontSize: 20, color: "white", fontWeight: "bold", }}>{state2?.current?.condition?.text}</Text>
          <View style={{ marginBottom: 50 }}>
            <Text style={{ fontSize: 15, color: "white", fontWeight: "bold", }}>{`${day}.${date.getMonth()}.${date.getFullYear()}`}</Text>
          </View>
        </View>
      </ImageBackground>
    </View >
  )
}

export default WeatherIzmir;