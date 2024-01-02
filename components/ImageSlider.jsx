import { StatusBar } from "expo-status-bar";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
} from "react-native";
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import { useState } from "react";
import React from "react";

export default function ImageSlider({navigation}) {
  const [bg,setBg] = useState('black')
  const [image, changeImage ] = useState(0)
  const images = [pic1,pic2,pic3]
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: bg,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: bg == 'black' ? 'white' : 'black'
    },
    view: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    button : {
      backgroundColor: "#3498db",
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    }
  });
  

  return (
    <>
    <ScrollView contentContainerStyle={styles.container}>
        
        <Button onPress={()=>{
            navigation.navigate('Main')
        }}
        title="Go to Main"
        />
        <Text style={styles.text}>Hello World</Text>
        <TouchableOpacity style={styles.button} onPress={() => {
          if (bg == 'black')
            setBg('white')
          else 
            setBg('black')
        }}><Text style={styles.buttonText}>Change Bg</Text>
        </TouchableOpacity>
        <View style={styles.view} >
          <TouchableOpacity style={styles.button} title='Prev' onPress={
            ()=>{changeImagesLeft(image,changeImage,'left',images)}
          }>
            <Text style={styles.buttonText}>Prev</Text>
          </TouchableOpacity>
          <Image style={{width: 100,height:100, margin: 10}} source={images[image]}/>
          <TouchableOpacity style={styles.button} onPress={
            ()=>{changeImagesLeft(image,changeImage,'right',images)
          }}>
          <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
    </>
  );
}

function changeImagesLeft(image,state,button,images) {
  if (button === 'left'){
      if (!image) {
          state(images.length -1)
          return
      } 
      state(image-1)
      return
  } 
  if (button === 'right') {
      if (image === images.length -1){
          state(0)
          return
      }
      state(image+1)
      return
  }
}
