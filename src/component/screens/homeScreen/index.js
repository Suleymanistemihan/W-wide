import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { fetchNewsData } from "../../../redux/actions/newsData"
import styles from './style';


function HomeScreen({ navigation }) {
  const state = useSelector(state => state.news.data);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchNewsData());
  },
    []
  )
  return (
    <View style={styles.mainCont}>
      <ScrollView
        showsVerticalScrollIndicator={false}>
        <Text style={styles.Header}>Incoming News</Text>
        <View style={styles.sliderCont}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}>
            {state?.articles?.map((item, index) => {
              const date = new Date(item.publishedAt);
              var minutes = date.getMinutes();
              minutes = minutes > 9 ? minutes : '0' + minutes;
              if (index > 3) return null;
              return (
                <TouchableOpacity key={index}
                  style={styles.sliderTouch}
                  onPress={() => navigation.navigate("DetailScreen", { item: item })}>
                  <Image style={styles.sliderImage} source={{ uri: item.urlToImage }} />
                  <View style={{ width: 200, height: 100, justifyContent: "space-around", alignItems: "center" }}>
                    <Text style={styles.sliderText}>{item.title}</Text>
                    <Text style={styles.sliderDate}>{`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} - ${date.getHours()}:${minutes}`}</Text>
                  </View>
                </TouchableOpacity>
              )
            })}
          </ScrollView>
        </View>
        <Text style={styles.Header}>Previous News</Text>
        <View style={styles.previousCont}>
          <ScrollView
            style={{ width: "100%" }}
            showsVerticalScrollIndicator={false}>
            {state?.articles?.map((item, index1) => {
              const date = new Date(item.publishedAt);
              var minutes = date.getMinutes();
              minutes = minutes > 9 ? minutes : '0' + minutes;
              if (index1 < 4) return null;
              return (
                <TouchableOpacity
                  key={index1}
                  style={styles.previousTouch}
                  onPress={() => navigation.navigate("DetailScreen", { item: item })}>
                  <View style={styles.previousImageCont}>
                    <Image
                      style={styles.previousImage}
                      source={{ uri: item.urlToImage }} />
                    <View style={styles.previousDetailCont}>
                      <View style={styles.previousTitleCont}>
                        <Text style={styles.previousTitle}>{item.title}</Text>
                      </View>
                      <View style={styles.prewDateCont}>
                        <Text style={styles.prewDate}>{`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} - ${date.getHours()}:${minutes}`}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            })}
          </ScrollView>

        </View>
      </ScrollView>
    </View >
  )
}

export default HomeScreen;