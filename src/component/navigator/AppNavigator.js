
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from "../screens/homeScreen"
import CurrencyScreen from '../screens/currencyScreen';
import ConventerScreen from '../screens/conventerScreen';
import CategorySCreen from '../screens/categoryScreen';
import HomeIcon from '../screens/homeScreen/LogoIcon';
import DetailSCreen from '../screens/homeScreen/detailScreen';
import WeatherIstanbul from '../screens/weatherScreen/Countries/istanbul';
import WeatherIzmir from '../screens/weatherScreen/Countries/izmir';


const Stack = createStackNavigator()
function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
          ...TransitionPresets.ModalPresentationIOS,
        }}>
        <Stack.Screen name=' ' component={BottomTabNavigator}
          options={{ headerLeft: props => <HomeIcon {...props} />, headerStyle: { backgroundColor: "#66645E" } }} />
        <Stack.Screen name="DetailScreen" component={DetailSCreen}
          options={{
            title: "News Detail"
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const BottomTab = createMaterialBottomTabNavigator()
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      barStyle={{ backgroundColor: "#66645E" }}
    >
      <BottomTab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-variant" color={color} size={26} />
          ),
        }} />
      <BottomTab.Screen name="Weather" component={TopBarNavigator}
        options={{
          tabBarLabel: 'Weather',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="weather-partly-cloudy" color={color} size={26} />
          ),
        }} />
      <BottomTab.Screen name="Currency" component={CurrencyScreen}
        options={{
          tabBarLabel: 'Currency',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="currency-usd" color={color} size={26} />
          ),
        }} />
      <BottomTab.Screen name="Conventer" component={ConventerScreen}
        options={{
          tabBarLabel: 'Conventer',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="swap-horizontal" color={color} size={26} />
          ),
        }} />
    </BottomTab.Navigator>
  )
}

const TopNavigator = createMaterialTopTabNavigator()
function TopBarNavigator() {
  return (
    <TopNavigator.Navigator>
      <TopNavigator.Screen name="Istanbul" component={WeatherIstanbul} />
      <TopNavigator.Screen name="Izmir" component={WeatherIzmir} />
    </TopNavigator.Navigator>
  )
}

export default MainStackNavigator;






