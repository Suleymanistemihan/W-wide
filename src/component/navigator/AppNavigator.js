
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CategoryIcon from '../screens/categoryScreen/categoryIcon';
import HomeScreen from "../screens/homeScreen"
import WeatherScreen from '../screens/weatherScreen';
import CurrencyScreen from '../screens/currencyScreen';
import ConventerScreen from '../screens/conventerScreen';
import CategorySCreen from '../screens/categoryScreen';
import HomeIcon from '../screens/homeScreen/LogoIcon';
const Stack = createStackNavigator()
function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
          ...TransitionPresets.ModalPresentationIOS
        }}>
        <Stack.Screen name=' ' component={BottomTabNavigator}
          options={{ headerRight: props => <CategoryIcon {...props} />, headerLeft: props => <HomeIcon {...props} /> }} />
        <Stack.Screen name="Category" component={CategorySCreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const BottomTab = createMaterialBottomTabNavigator()
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-variant" color={color} size={26} />
          ),
        }} />
      <BottomTab.Screen name="Weather" component={WeatherScreen}
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

export default MainStackNavigator;






