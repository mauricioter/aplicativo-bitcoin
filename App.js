import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';

import CurrentPrice from './src/components/currentPrice';
import HistoryGraphic from './src/components/HistoryGrafphic';
import QuotationsList from './src/components/QuotationsList';
import QuotationsItems from './src/components/QuotationsList/QuotationsItems';

function addZero(number) {
  if (number <= 9) {
    return "0" + number
  }
  return number
}

function url(qtdays) {
  const date = new Date();
  const listLastDays = qtdays
  const end_date =
    `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
  date.setDate(date.getDate() - listLastDays)
  const start_date = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
  return `https://economia.awesomeapi.com.br/json/daily/BTC-BRL/50?start_date=${start_date}&end_date=${end_date}`
}


async function getListCoins(url) {
  let response = await fetch(url)
  let returnApi = await response.json()
  let selectListQuotations = returnApi.code
  let queryCoinsList = Object.keys(selectListQuotations.map((key) => {
    return {
      data: key.split("-").reverse().join("/"),
      valor: selectListQuotations[key]
    }
  }))
  let data = queryCoinsList.reverse();
  return data
}
async function getPriceCoinsGraphic(url) {
  let responseG = await fetch(url)
  let returnApiG = await responseG.json()
  let selectListQuotationsG = returnApiG.code
  let queryCoinsList = Object.keys(selectListQuotationsG.map((key) => {
    selectListQuotationsG[key]
  }))
  let dataG = queryCoinsList();
  return dataG
}

export default function App() {
  const [coinsList, setCoinsList] = useState([])
  const [coinsGraphicList, setCoinsGraphicList] = useState([0])
  const [days, setDays] = useState(30);
  const [updateData, setUpdateData] = useState(true)

  function updateDay(number) {
    setDays(number);
    setUpdateData(true)
  }

  useEffect(() => {
    getListCoins(url(days)).then((data) => {
      setCoinsList(data)
    });

    getPriceCoinsGraphic(url(days)).then((dataG) => {
      setCoinsGraphicList(dataG)
    })
    if (updateData) {
      setUpdateData(false)
    }

  }, [updateData])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor='#000000'
        barStyle="light-content
        "
      />
      <CurrentPrice></CurrentPrice>
      <HistoryGraphic></HistoryGraphic>
      <QuotationsList></QuotationsList>
      <QuotationsItems></QuotationsItems>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40 : 0
  },
});
