import React from "react";
import { Text, View } from "react-native";
import style from "./style";

export default function CurrentPrice() {
  return (
    <View style={style.headyPrice}>
      <Text style={style.currentPrice}>$ 54423.355</Text>
      <Text style={style.textPrice}>Ultima cotação</Text>
    </View>
  )
}