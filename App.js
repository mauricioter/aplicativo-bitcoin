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
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`
}

async function getListCoins (url) {
  let response = await fetch(url);
  let returnApi = await response.json();
  let selectListQuotation = returnApi.time.updatedISO
  const queryCoinsList = Object.keys(selectListQuotation).map(function (key) {
    // return { 
    //   data: key.split("-").reverse().join()("/"),
    //   valor: selectListQuotation[key] 
    // }
  })   
  let data = queryCoinsList.reverse();
  return data    
}
async function getPriceCoinsGraphic (url) {
  let responseG = await fetch(url); 
  let returnApiG = await responseG.json()
  console.log(returnApiG)
  let selectListQuotationG = returnApiG.time
  const queryCoinsList = Object.keys(selectListQuotationG).map((key) => {
    selectListQuotationG[key] 
  })   
  let dataG = queryCoinsList; 
  console.log(dataG)
} 
 
export default function App() {   
  const [coinList, setCoinList] = useState([])
  const [coinsGraphicLIst, setCoinsGraphicLIst] = useState([0])
  const [days, setDays] = useState(30) 
  const [updateData, setUpdateData] = useState(true)  

  function updateDay(number) { 
    setDays(number);
    setUpdateData(true)
  }
  
  useEffect(() => {
      getListCoins(url(days)).then((data) => {
        setCoinList(data)  
      }); 
      getPriceCoinsGraphic(url(days)).then((dataG) => {
        setCoinsGraphicLIst(dataG)
      });
     if(updateData){ 
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
      <HistoryGraphic ></HistoryGraphic>
      <QuotationsList filterDay={updateDay} lisTransactions={coinList} ></QuotationsList>
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

//Função para retorna a data e os valores da API ( Função para fazer DATA vir correta) 
    // async function getListCoins(url) {
      //let responsavel por puxar a Url da API
      // let response = await fetch(url);
      // let responsavel por armazenar os valores da API mudando ela pra .Json para dps ser guardada no Let a seguir
      // let returnApi = await response.json();
      //let responsavel por armazenar os valores do Return Api
      // let selectListQuotations = returnApi
      // console.log(selectListQuotations)
    
      // const de .map, responsavel por deixar eu usar a Array da forma que eu quiser
      // const queryCoinsList = selectListQuotations.map((item) => {
        //return responsavel por mudar a formatação da data
        // return {
          // data: key.split("").reverse().join()("/"),
          // valor: selectListQuotations[item]
        // };
      // });
      // let responsavel por retorna a data com um dia antes
      // let data = queryCoinsList.reverse()
      // return data;
    // }
    
    // função responsavel por buscar o preço da moeda para o grafico
    // async function getPriceCoinsGraphic(url) {
    
      // let responseG = await fetch(url);
    
      // let returnApiG = await responseG.json();
      // let selectListQuotationsG = returnApiG
      
      // const queryCoinsList = selectListQuotationsG.map((item) => {
        // selectListQuotationsG[item]
      // });
      // let dataG = queryCoinsList;
      // return dataG;
    // }
      //coinList: responsavel por trazer a lista de valores e datas do bitcoin no Scrow 
      // const [coinsList, setCoinsList] = useState([]);
      // GraphicList: responsavel por trazer os valores para lista
      // const [coinsGraphicLIst, setCoinsGraphicLIst] = useState([0]);
      //Days: Monitorar os dias da Tabela( sempre contar os dias )
      // const [days, setDays] = useState(30);
      // Quando houver alteração da data o updateData vai alterar para True e recarrega
      // const [updateData, setUpdateData] = useState(true);
      
      //função responsavel para citar os dias no Grafico 
      // function updateDay(number) {
        // setDays(number);
        // setUpdateData(true)
      // }
      
      //sempre que atualizar a tela vai aparecer tudo que esta dento de useEffect
      // useEffect(() => {
        // quando carregar o componente a função vai ser chamada e vai listar o data valor e se a API tiver o valor  ele vai pegar o setCoinList
        // getListCoins(url(days)).then((data) => {
          // setCoinsList(data);
          
          // getPriceCoinsGraphic(url(days)).then((dataG) => {
            // setCoinsGraphicLIst(dataG)
          // })
        // });
        // if (updateData) {
          // setUpdateData(false)
        // }
      // }, [updateData]);