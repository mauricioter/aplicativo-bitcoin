import React, { Fragment } from "react";
import { ScrollView, Text, View, TouchableOpacity, FlatList } from "react-native";
import style from "./style";
import QuotationsItems from "./QuotationsItems";

export default function QuotationsList(props) {
  const daysQuery = props.filtersDay
  return (
    <View>
      <View style={style.filters}>
        <TouchableOpacity
          style={style.buttonQuery}
          onPress={() => daysQuery(7)}
        >
          <Text style={style.textButtonQuery}>7D</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.buttonQuery}
          onPress={() => daysQuery(15)}
        >
          <Text style={style.textButtonQuery}>15D</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.buttonQuery}
          onPress={() => daysQuery(30)}
        >
          <Text style={style.textButtonQuery}>1M</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.buttonQuery}
          onPress={() => daysQuery(90)}
        >
          <Text style={style.textButtonQuery}>3M</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.buttonQuery}
          onPress={() => daysQuery(180)}
        >
          <Text style={style.textButtonQuery}>6M</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <FlatList
          data={props.listTransactions}
          renderItem={({ item }) => {
            return <QuotationsItems valor={item.valor} data={item.data} />
          }}
        ></FlatList>
      </ScrollView>
    </View>
  )
}