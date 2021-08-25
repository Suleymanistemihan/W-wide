import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons';

function CategoryIcon(props) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Category")}
      style={{ marginRight: 10 }}>
      <Entypo name="menu" size={24} color="black" />
    </TouchableOpacity>
  )
}

export default CategoryIcon;