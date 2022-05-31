import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';
import artificialGif from '../assets/gif/ai.gif'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const DetectNitrogen = ({navigation}) => {

    useEffect(() => {
        CekTSFlow();
      }, []);

    async function CekTSFlow() {
        await tf.ready();
    }

    let [fontsLoaded] = useFonts({
      'Philosopher': require('../assets/fonts/Philosopher-Regular.ttf'),
      'Philosopher-Bold': require('../assets/fonts/Philosopher-Bold.ttf'),
      'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
      'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    });
  
    if (!fontsLoaded) {
      return <AppLoading />;
    }
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'black'}}>
        <Image source={artificialGif} style={{width:200, height:200}} />
        <View style={{marginHorizontal:20, marginTop:5}}>
          <Text style={{color:'white', fontSize:14, fontFamily:'Poppins-Regular', textAlign:'center'}}>Kami sedang mempersiapkan data AI, Anda dapat membantu kami untuk menyetorkan semua data yang kami butuhkan</Text>
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate('Dashboard')} style={{backgroundColor:'blue', paddingVertical:10, paddingHorizontal:20, marginTop:10, borderRadius:10}}>
          <Text style={{color:'white', fontSize:12, fontFamily:'Poppins-Regular', textAlign:'center'}}>Kembali ke Halaman Beranda</Text>
        </TouchableOpacity>
    </View>
  )
}

export default DetectNitrogen

const styles = StyleSheet.create({})