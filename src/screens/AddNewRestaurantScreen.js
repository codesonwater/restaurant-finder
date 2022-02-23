import React, { useState } from "react";
import { View, Text } from "react-native";
import { Input, Button } from "react-native-elements";

export default function AddNewRestaurantScreen() {
  const [restaurantName, setRestaurantName] = useState();
  const [address, setAddress] = useState();
  const [photo, setPhoto] = useState();
  const [rating, setRating] = useState();

  const newRestaurant = {
    address: address,
    name: restaurantName,
    numRating: rating,
    photoURL: photo,
    rating: 3.75,
  };

  const SendNewRestaurantInfo = () => {
    fetch("path", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRestaurant),
    });
  };

  return (
    <>
      <View>
        <Text> This is add new restaurant screen</Text>
        <Input
          placeholder="Restaurant Name"
          spellCheck
          onChangeText={(text) => setRestaurantName(text)}
        />
        <Input
          placeholder="Address"
          onChangeTest={(text) => setAddress(text)}
        />
        <Input
          placeholder=" Photo"
          keyboardType="url"
          onChangeTest={(text) => setPhoto(text)}
        />
        <Input placeholder="Rating" 
        keyboardType="numeric" 
        maxLength="1" 
        onChangeTest={text => setRating(text)}
        />

        <Button title="Create new restaurant" onPress={SendNewRestaurantInfo} />
      </View>
    </>
  );
}
