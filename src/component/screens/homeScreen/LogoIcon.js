import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function HomeIcon(props) {
  const navigation = useNavigation()
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row", height: 50, width: 100, }}>
      <TouchableOpacity>
        <Image source={require('../../icon/logo/logo.png')} style={{ width: 30, height: 30 }} />
      </TouchableOpacity>
      <Text style={{ fontSize: 15, fontWeight: "bold", marginLeft: 5 }}>
        W-wide
      </Text>
    </View>
  )
}

export default HomeIcon;