import React, { useState } from "react";
import { Text, Button, Image } from "react-native";
React;

let y;
let t;


export default Cat = (name) => {
  const [isHungry, setHungry] = useState(true);
  const [petted, setPetted] = useState(0);
  const [timer,setTimer] = useState(0)
  return (
    <>
      <Text>
        Hello I am {name.name}, and I am {isHungry ? "hungry" : "full"}!
      </Text>
      <Text style={{display: isHungry ? 'none' : 'flex'}}>
        I will be hungry in : {timer}
      </Text>
      <Text>
        Petted: {petted} times
      </Text>
      <Button onPress={ ()=> {
        let k = 4;
        y = setInterval(() => {
            k--
            setTimer(k) 
        },1000)
        t = setTimeout(() => {
            setHungry(true)
            clearInterval(y)
        },5000)
        setHungry(false)
      }} disabled={!isHungry}  title={isHungry ? "Pour me some milk, Please!" : "Thank you!"} />
      <Button onPress={ ()=>{
        let pet = petted
        pet += 1
        setPetted(pet)
      }} title="Pet Me Daddy" />
    </>
  );
};
