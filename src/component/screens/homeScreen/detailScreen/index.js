import React from 'react'
import { View, Text, Image, Linking, Button, TouchableOpacity } from 'react-native'
import styles from './style';

function DetailSCreen({ route, navigaton }) {
  const { item } = route.params;
  const urlToWeb = item.url;
  const date = new Date(item.publishedAt);
  var minutes = date.getMinutes();
  minutes = minutes > 9 ? minutes : '0' + minutes;

  return (
    <View style={styles.mainCont}>
      <View style={styles.titleCont}>
        {item && <Text style={styles.title}>{item.title}</Text>}
      </View>
      <View style={styles.imageCont}>
        {item && <Image style={styles.image} source={{ uri: item.urlToImage }} />}
        <View style={styles.dateCont}>
          {item && <Text style={styles.date}>{`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} - ${date.getHours()}:${minutes}`}</Text>}
        </View>
      </View>
      <View>
        <Text style={styles.describHeader}>Description</Text>
      </View>
      <View style={styles.describCont}>
        {item && <Text style={styles.describ}>{item.description}</Text>}
      </View>
      <View style={styles.touchLinkCont}>
        <TouchableOpacity
          style={styles.touchLinkOpa}
          onPress={() => Linking.openURL(urlToWeb)}>
          <Text style={styles.textLink}>Haberin devamı için.</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.authorOutCont}>
        <View style={styles.authorCont}>
          <Text>Author</Text>
          {item && <Text>{item.author}</Text>}
        </View>
      </View>
    </View>
  )
}

export default DetailSCreen;