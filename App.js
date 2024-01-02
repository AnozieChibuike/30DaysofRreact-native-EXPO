import { StatusBar } from "expo-status-bar";
import Main from "./components/Main";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ImageSlider from "./components/ImageSlider";
import * as React from 'react'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="ImageSlider"
          component={ImageSlider}
        />
        <Stack.Screen 
          name="Main"
          component={Main}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

