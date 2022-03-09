import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import { currencyFetchData } from "../../../redux/actions/CurrencyData";



function CurrencyScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Currency Screen</Text>
    </View>
  )
}

export default CurrencyScreen;