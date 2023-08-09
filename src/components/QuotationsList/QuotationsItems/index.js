import React from "react";
import { View, Image, Text } from "react-native";
import style from "./style";


export default function QuotationsItems() {
  return (
    <View style={style.mainContant}>
      <View style={style.contextLeft}>
        <View style={style.boxLogo}>
          <Image source={{ uri: 'https://cdn.pixabay.com/photo/2018/04/02/14/48/bitcoin-logo-3284066_1280.png' }}
            style={{ width: 40, height: 40, marginLeft: 2 }}
          />
          <View>
            <Text style={style.dayContation2}>Bitcoin</Text>
            <Text style={style.dayContation}>09/08/23</Text>
          </View>
        </View>
      </View>
      <View style={style.contextRigth}>
        <Text style={style.price}>$ 53331.052</Text>
      </View>
    </View>
  )
}