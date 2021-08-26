import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons';
import { Value } from 'react-native-reanimated';

function CategoryIcon(props) {
  const navigation = useNavigation()
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row", height: 50, width: 100, }}>
      <Text style={{ fontSize: 15, fontWeight: "bold", marginRight: 5, }}>
        Category
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Category")}>
        <Entypo name="menu" size={30} color="black" />
      </TouchableOpacity>
    </View>
  )
}

export default CategoryIcon;