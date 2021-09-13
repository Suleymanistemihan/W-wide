import React, { useEffect } from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import { fetchWeatherData } from "../../../redux/actions/weatherData";

function WeatherScreen() {
  const state = useSelector(state => state.weather.data);
  const date = new Date();
  const dateData = state?.location?.localtime;
  var minutes = date.getMinutes(dateData);
  minutes = minutes > 9 ? minutes : '0' + minutes;
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchWeatherData());
  },
    []
  )
  return (
    <View style={{ flex: 1, }}>
      <ImageBackground style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }} imageStyle={{ opacity: 0.7, backgroundColor: "black" }} resizeMode="cover" source={require("../../icon/Backgrounds/hC1.gif")}>
        <View style={{ alignItems: "center", borderWidth: 2, height: "10%", alignItems: "center", borderRadius: 10, backgroundColor: "#18181b99", borderColor: "#18181b99", justifyContent: "center", width: "70%" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 30, color: "white", fontWeight: "bold" }}>{state?.location?.region}</Text>
            <Text style={{ fontSize: 30, color: "white", fontWeight: "bold" }}>/{state?.location?.country}</Text>
          </View>
        </View>
        <View style={{ width: "80%", height: "70%", alignItems: "center", justifyContent: "center", }}>
          <View style={{ margin: "10%", borderWidth: 2, height: "18%", alignItems: "center", borderRadius: 10, backgroundColor: "#18181b99", borderColor: "#18181b99", justifyContent: "center", width: "70%" }}>
            <View style={{ alignItems: "center", margin: 10, }}>
              <Text style={{ fontSize: 25, color: "white", fontWeight: "bold", margin: 3 }}>{`${date.getDate(dateData)}/${date.getMonth(dateData)}/${date.getFullYear(dateData)}`}</Text>
              <Text style={{ fontSize: 25, color: "white", fontWeight: "bold", margin: 3 }}>{`${date.getHours(dateData)}:${minutes}`}</Text>
            </View>
          </View>
          <View style={{ justifyContent: "space-evenly", flexDirection: "row", margin: 20, borderWidth: 2, height: "20%", alignItems: "center", borderRadius: 10, backgroundColor: "#18181b99", borderColor: "#18181b99", width: "80%" }}>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>Sıcaklık</Text>
              <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>C°{state?.current?.temp_c}</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>Hissedilen</Text>
              <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>C°{state?.current?.feelslike_c}</Text>
            </View>
          </View>
          <View style={{ justifyContent: "space-evenly", flexDirection: "row", margin: 20, borderWidth: 2, height: "20%", alignItems: "center", borderRadius: 10, backgroundColor: "#18181b99", borderColor: "#18181b99", width: "80%" }}>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Nem</Text>
              <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>{state?.current?.humidity}%</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Rüzgar</Text>
              <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>{state?.current?.gust_kph}/kph</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default WeatherScreen;