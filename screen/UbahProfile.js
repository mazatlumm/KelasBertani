import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, Image, Platform,TextInput, Alert } from 'react-native'
import React, {useEffect, useState} from 'react'
import TopBar from './TopBar';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import iconLove from '../assets/images/iconLove.png'
import iconHome from '../assets/images/iconHome.png'
import iconBag from '../assets/images/iconBag.png'
import iconUser from '../assets/images/iconUser.png'

const windowWidth = parseInt((Dimensions.get('window').width).toFixed(0));
const windowHeight = parseInt((Dimensions.get('window').height).toFixed(0))-45;

// Icon
import { Ionicons } from '@expo/vector-icons';

const UbahProfile = ({navigation}) => {

    const [NamaPenggunaBaru, setNamaPenggunaBaru] = useState('');

    const createTwoButtonAlert = () =>
    Alert.alert('Berhasil', 'Pengguna Baru Telah Ditambahkan', [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

    useEffect(() => {

      }, []);

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
    <View style={{ flex: 1, alignItems: 'center'}}>
        <ScrollView style={{marginBottom:50, width:windowWidth}}>
            <View style={styles.ColorTopBar}></View>
            {/* Top Bar */}
            <View style={{paddingHorizontal:20, width:'100%'}}>
                <View style={styles.TopBarBox}>
                    <View style={{flex:3, justifyContent:'flex-start'}}>
                        <Text style={styles.TopBarText}>Ubah Profile</Text>
                    </View>
                    <TouchableOpacity style={{flex:0.5, alignItems:'flex-end'}} onPress={()=> navigation.goBack()}>
                    <Ionicons name="arrow-back-circle-outline" size={26} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={{marginHorizontal:20, marginTop:20, marginBottom:10}}>
                <View style={styles.FormInput}>
                    <Text style={styles.TextPoppins}>Nama Lengkap</Text>
                    <View style={styles.FormInputBox}>
                        <TextInput 
                        style={styles.TextInputForm} 
                        onChangeText={NamaPenggunaBaru => setNamaPenggunaBaru(NamaPenggunaBaru)}
                        defaultValue={NamaPenggunaBaru}
                        />
                    </View>
                </View>
                <View style={styles.FormInput}>
                    <Text style={styles.TextPoppins}>Username</Text>
                    <View style={styles.FormInputBox}>
                        <TextInput style={styles.TextInputForm} />
                    </View>
                </View>
                <View style={styles.FormInput}>
                    <Text style={styles.TextPoppins}>Password</Text>
                    <View style={styles.FormInputBox}>
                        <TextInput style={styles.TextInputForm} secureTextEntry={true} />
                    </View>
                </View>
                <View style={styles.FormInput}>
                    <Text style={styles.TextPoppins}>Konfirmasi Password</Text>
                    <View style={styles.FormInputBox}>
                        <TextInput style={styles.TextInputForm} secureTextEntry={true} />
                    </View>
                </View>
                <View style={styles.FormInput}>
                    <Text style={styles.TextPoppins}>Tugas/Jabatan/Status</Text>
                    <View style={styles.FormInputBox}>
                        <TextInput style={styles.TextInputForm} />
                    </View>
                </View>
                

                <TouchableOpacity style={styles.BtnBox} onPress={()=>createTwoButtonAlert()}>
                    <Text style={styles.BtnTitle}>Simpan Data</Text>
                </TouchableOpacity>
            </View>
           
        </ScrollView>

        {/* Bottom Navigation */}
        <View style={{position:'absolute', bottom:0, left:0, flexDirection:'row', backgroundColor:'white', borderTopLeftRadius:20, borderTopRightRadius:20 , paddingTop:15, paddingBottom:10, justifyContent:'center', alignItems:'center'}}>
          <TouchableOpacity style={{flex:1, alignItems:'center'}} onPress={()=>navigation.navigate('Dashboard')}>
            <Image source={iconHome} style={{height:24, width:24, resizeMode:'contain'}} />
          </TouchableOpacity>
          <TouchableOpacity style={{flex:1, alignItems:'center'}}>
            <Image source={iconLove} style={{height:24, width:24, resizeMode:'contain'}} />
          </TouchableOpacity>
          <TouchableOpacity style={{flex:1, alignItems:'center'}}>
            <Image source={iconBag} style={{height:24, width:24, resizeMode:'contain'}} />
          </TouchableOpacity>
          <TouchableOpacity style={{flex:1, alignItems:'center'}} onPress={()=>navigation.navigate('Profile')}>
            <Image source={iconUser} style={{height:24, width:24, resizeMode:'contain'}} />
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default UbahProfile

const styles = StyleSheet.create({
    TopBarBox:{
        ...Platform.select({
            ios:{
            marginTop:50,
            },
            android:{
            marginTop:35
            }
        }),
    width:'100%', 
    alignItems:'flex-start', 
    flexDirection:'row',
    alignItems:'center',
    },
    TopBarText:{
    fontFamily: 'Philosopher-Bold', 
    ...Platform.select({
        ios:{
        fontSize:24
        }, 
        android:{
        fontSize:18
        }
    }), 
    marginLeft:10 
    },
    ColorTopBar:{
        position:'absolute', 
        width:windowWidth,
        ...Platform.select({
            ios:{
                height:90,
            },
            android:{
                height:70
            }
        }), 
        backgroundColor:'#9CE5CB', 
        top:0, 
        left:0, 
        zIndex:-2
    },
    H1Philoshoper:{
        fontFamily:'Philosopher-Bold',
        color:'black',
        marginTop:10,
        ...Platform.select({
            ios:{
                fontSize:24
            },
            android:{
                fontSize:16
            }
        })
    },
    TextPoppins:{
        fontFamily:'Poppins-Regular',
        fontSize:12,
        color:'black'
    },
    TextPoppinsBold:{
        fontFamily:'Poppins-Bold',
        fontSize:16,
        color:'black'
    },
    TextPoppinsBoldGreen:{
        fontFamily:'Poppins-Bold',
        fontSize:14,
        color:'#0D986A'
    },
    CardListUser:{
        width:'100%',
        backgroundColor:'white',
        paddingHorizontal:20,
        paddingVertical:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop:10,
        borderRadius:10,
    },
    BoxBtn:{
        backgroundColor:'grey',
        borderRadius:10,
        paddingHorizontal:10,
        paddingVertical:5,
        marginTop:5,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center'
    },
    TextBtn:{
        fontFamily:'Poppins-Bold',
        color:'white',
        fontSize:12
    },
    TambahUserBtn:{
        width:50,
        height:50,
        borderRadius:50/2,
        backgroundColor:'#0D986A',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        bottom:80,
        right:20
    },
    FormInput:{
        marginTop:10,
    },
    FormInputBox:{
        borderWidth:1,
        borderRadius:10,
        paddingHorizontal:10,
        paddingVertical:5,
    },
    FormInputBoxGroup:{
        borderWidth:1,
        borderRadius:10,
        paddingHorizontal:10,
        paddingVertical:5,
        flex:3,
        justifyContent:'center'
    },
    FormGroup:{
        flexDirection:'row'
    },
    IconFormGroup:{
        borderWidth:1,
        borderRadius:10,
        paddingHorizontal:10,
        paddingVertical:5,
        marginLeft:5,
        alignItems:'center',
        justifyContent:'center'
    },
    TextInputForm:{
        fontFamily:'Poppins-Regular',
        color:'black',
        fontSize:12
    },
    BtnBox:{
        borderRadius:10,
        backgroundColor:'green',
        paddingHorizontal:10,
        paddingVertical:10,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        flexDirection:'row'
    },
    BtnTitle:{
        fontFamily:'Poppins-Bold',
        fontSize:12,
        color:'white',
    }
})