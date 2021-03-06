// In App.js in a new project

import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// Notification
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification, {Importance} from "react-native-push-notification";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './screen/Dashboard';
import DetailSensor from './screen/DetailSensor';
import Login from './screen/Login';
import CekTanah from './screen/CekTanah';
import DetailController from './screen/DetailController';
import SettingController from './screen/SettingController';
import QRScanner from './screen/QRScanner';
import TambahController from './screen/TambahController';
import Profile from './screen/Profile';
import TambahPengguna from './screen/TambahPengguna';
import PushNotificationTest from './screen/PushNotificationTest';
import UbahProfile from './screen/UbahProfile';
import AIDetectPlant from './screen/AIDetectPlant';
import SplashScreen from './screen/SplashScreen';
import DaftarController from './screen/DaftarController';
import QRScannerSC from './screen/QRScannerSC';
import UbahUserData from './screen/UbahUserData';
import QRScanCekTanah from './screen/QRScanCekTanah';
import FavouriteLocalData from './screen/FavouriteLocalData';
import FavouriteOnlineData from './screen/FavouriteOnlineData';
import DetailDataTanahOnline from './screen/DetailDataTanahOnline';
import KalibrasiKualitasTanah from './screen/KalibrasiKualitasTanah';
import PenyakitTanaman from './screen/PenyakitTanaman';
import DeteksiNitrogen from './screen/DeteksiNitrogen';
import CaptureDaun from './screen/CaptureDaun';
import WebviewSimco from './screen/WebviewSimco';
import WebviewSawentar from './screen/WebviewSawentar';
import WebviewPenyuluhan from './screen/WebviewPenyuluhan';
import RegisterScreen from './screen/RegisterScreen';
import ResetPassword from './screen/ResetPassword';
import Cuaca from './screen/Cuaca';
import RoomDiskusi from './screen/RoomDiskusi';
import ListTopikDiskusi from './screen/ListTopikDiskusi';
import ListTopikFavorit from './screen/ListTopikFavorit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { initializeApp } from "firebase/app";
import * as Linking from 'expo-linking'
import ListChatPakar from './screen/ListChatPakar';
import RoomDiskusiPakar from './screen/RoomDiskusiPakar';
import CatatanUsahaTani from './screen/CatatanUsahaTani';
import AgendaKegiatanTani from './screen/AgendaKegiatanTani';
import CatatanPendapatan from './screen/CatatanPendapatan';
import CatatanPengeluaran from './screen/CatatanPengeluaran';

const config = {
  screens: {
    Dashboard: 'dashboard',
    Profile: 'profile',
    ListTopikDiskusi: 'topik/diskusi',
  },
};

const linking = {
  prefixes: ['kelasbertani://', 'kelasbertani.com://'],
  config: config,
}

const firebaseConfig = {
  apiKey: "AIzaSyDWbTDPIFtZpKrCpW-SRfYuZEHF2DwQOM8",
  authDomain: "kelasbertanichat.firebaseapp.com",
  projectId: "kelasbertanichat",
  storageBucket: "kelasbertanichat.appspot.com",
  messagingSenderId: "261338527558",
  appId: "1:261338527558:web:bbd81126f6d06f02d59747"
};

const Stack = createNativeStackNavigator();

function App() {

  const SimpanToken = async (value) => {
    try {
      await AsyncStorage.setItem('@token', value)
    } catch (e) {
      // saving error
    }
  }

  const CreateChannelNotification = () => {
    console.log('Membuat Channel Notifikasi')
    PushNotification.createChannel(
      {
        channelId: "AgendaNotification001",
        channelName: "Agenda",
        channelDescription: "Notifikasi Jadwal Kegiatan Petani", 
        playSound: true, 
        soundName: "default",
        importance: Importance.HIGH,
        vibrate: true, 
      },
      (created) => console.log(`createChannel returned '${created}'`) //
    );
  }

  useEffect(() => {
    console.log('inisialisasi notification!')
    initializeApp(firebaseConfig);
    PushNotification.configure({
      onRegister: function (token) {
        console.log("TOKEN:", token.token);
        SimpanToken(token.token)
      },

      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },

      onAction: function (notification) {
        console.log("ACTION:", notification.action);
        console.log("NOTIFICATION:", notification);
      },

      onRegistrationError: function(err) {
        console.error(err.message, err);
      },
 
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      popInitialNotification: true,
      requestPermissions: true,
    });
    CreateChannelNotification()
  }, [])

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}} />
        <Stack.Screen name="DetailSensor" component={DetailSensor} />
        <Stack.Screen name="CekTanah" component={CekTanah} options={{headerShown:false}} />
        <Stack.Screen name="DaftarController" component={DaftarController} options={{headerShown:false}} />
        <Stack.Screen name="DetailController" component={DetailController} options={{headerShown:false}} />
        <Stack.Screen name="SettingController" component={SettingController} options={{headerShown:false}} />
        <Stack.Screen name="QRScanner" component={QRScanner} options={{headerShown:false}} />
        <Stack.Screen name="QRScannerSC" component={QRScannerSC} options={{headerShown:false}} />
        <Stack.Screen name="TambahController" component={TambahController} options={{headerShown:false}} />
        <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />
        <Stack.Screen name="TambahPengguna" component={TambahPengguna} options={{headerShown:false}} />
        <Stack.Screen name="PushNotificationTest" component={PushNotificationTest} options={{headerShown:false}} />
        <Stack.Screen name="UbahProfile" component={UbahProfile} options={{headerShown:false}} />
        <Stack.Screen name="AIDetectPlant" component={AIDetectPlant} options={{headerShown:false}} />
        <Stack.Screen name="UbahUserData" component={UbahUserData} options={{headerShown:false}} />
        <Stack.Screen name="QRScanCekTanah" component={QRScanCekTanah} options={{headerShown:false}} />
        <Stack.Screen name="FavouriteLocalData" component={FavouriteLocalData} options={{headerShown:false}} />
        <Stack.Screen name="FavouriteOnlineData" component={FavouriteOnlineData} options={{headerShown:false}} />
        <Stack.Screen name="DetailDataTanahOnline" component={DetailDataTanahOnline} options={{headerShown:false}} />
        <Stack.Screen name="KalibrasiKualitasTanah" component={KalibrasiKualitasTanah} options={{headerShown:false}} />
        <Stack.Screen name="PenyakitTanaman" component={PenyakitTanaman} options={{headerShown:false}} />
        <Stack.Screen name="DeteksiNitrogen" component={DeteksiNitrogen} options={{headerShown:false}} />
        <Stack.Screen name="CaptureDaun" component={CaptureDaun} options={{headerShown:false}} />
        <Stack.Screen name="WebviewSimco" component={WebviewSimco} options={{headerShown:false}} />
        <Stack.Screen name="WebviewSawentar" component={WebviewSawentar} options={{headerShown:false}} />
        <Stack.Screen name="WebviewPenyuluhan" component={WebviewPenyuluhan} options={{headerShown:false}} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown:false}} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} options={{headerShown:false}} />
        <Stack.Screen name="Cuaca" component={Cuaca} options={{headerShown:false}} />
        <Stack.Screen name="RoomDiskusi" component={RoomDiskusi} options={{headerShown:false}}/>
        <Stack.Screen name="ListTopikDiskusi" component={ListTopikDiskusi} options={{headerShown:false}}/>
        <Stack.Screen name="ListTopikFavorit" component={ListTopikFavorit} options={{headerShown:false}}/>
        <Stack.Screen name="ListChatPakar" component={ListChatPakar} options={{headerShown:false}}/>
        <Stack.Screen name="RoomDiskusiPakar" component={RoomDiskusiPakar} options={{headerShown:false}}/>
        <Stack.Screen name="CatatanUsahaTani" component={CatatanUsahaTani} options={{headerShown:false}}/>
        <Stack.Screen name="AgendaKegiatanTani" component={AgendaKegiatanTani} options={{headerShown:false}}/>
        <Stack.Screen name="CatatanPendapatan" component={CatatanPendapatan} options={{headerShown:false}}/>
        <Stack.Screen name="CatatanPengeluaran" component={CatatanPengeluaran} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;