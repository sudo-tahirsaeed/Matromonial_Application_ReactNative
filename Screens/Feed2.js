import { StyleSheet, Text, View,Image,ScrollView,Pressable,ActivityIndicator} from 'react-native';
import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { useRoute } from "@react-navigation/native";
import MaterialCard from '../components/card';
import {BackHandler} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import MaterialCard2 from '../components/card2';

import { useNavigation, useFocusEffect  } from '@react-navigation/native';
let globalusername=null
let globalusername1=null
let globaldata =[]

 let signinuser;
export default function Feed({navigation}) {
  
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate('Feed');
        return true;
      };
  
      BackHandler.addEventListener(
        'hardwareBackPress', onBackPress
      );
  
      return () =>
        BackHandler.removeEventListener(
          'hardwareBackPress', onBackPress
        );
    }, [navigation])
  );


// const [globalusername,setun]=useState('')
  // useEffect(() => {

  //   const backHandler = BackHandler.addEventListener(
  //           'hardwareBackPress',
  //           () => {
  //             return true;
  //           },
  //         );
  //         return () => backHandler.remove();
  //   });
  

const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
      const getData = async (a) => {
        try {
          const value = await AsyncStorage.getItem('@signinuser')
          if(value !== null) {
            console.log("USERNAME FROM STORAGE IS CARD SIDE: "+value);
              signinuser=value

              const dataz={
                usr: signinuser
              }
              // setIsLoading(false);
              axios.post('https://average-cape-dove.cyclic.app/card2',{dataz})
              .then(response => {
              
                  console.log('new resp'+JSON.stringify(response.data));
                  if(JSON.stringify(response.data)=='0'){
                    globaldata=[]
                    setIsLoading(false);
                  }else{
                  // console.log(response.data[2]);
              // console.log('in axios:'+dataz.usr);
                  // const data4 = JSON.stringify(response.data);
                  // console.log(response.data.length);s
                   globaldata = [...response.data];
                   console.log("AXIOS : "+globaldata);
                   setIsLoading(false);
                  }
              })
              .catch(error => {
                  console.log(error);
                  setIsLoading(false);
            
              });
              
          }
          signinuser=value
        } catch(e) {
          console.log("SORRY BHAIYA ");
          // setIsLoading(false);
        }
        // setIsLoading(false);
      }
      getData("p");
      // setIsLoading(false);
    });
  
  
  
  
  
  const [data, setData] = useState(null);

  
  
    
   
// useEffect(() => {
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  if (!isLoading) {
    console.log("IN RETUR"+globaldata.name);
    return (
    
      <View style={styles.body}>  
     
      
      
      
      <ScrollView>
        
      
      {globaldata.map( item =>(
        <MaterialCard2 data={item} navigation={navigation}/>
      ))}
  
    
    
         
        
  
    {/* <MaterialCard12 data={''} />
    <MaterialCard12 data={''} />
    <MaterialCard12  data={''}/> */}
    </ScrollView>
  
    </View> 
  
    );
  
  }
// });
  

  // const getData = async (a) => {
  //   try {
  //     const value = await AsyncStorage.getItem('@signinuser')
  //     if(value !== null) {
  //       // console.log("USERNAME FROM STORAGE IS: "+value);
  //       globalusername=value
  //     }
  //     // console.log(value);
  //     globalusername=value
  //   } catch(e) {
  //     console.log("SORRY ");
  //   }
  // }
  // getData("p");
  // if(isLoading==false){

  
}
// }

const styles = StyleSheet.create({
  body: {
    // marginTop:50,
    // backgroundColor:'#EF3D4E',
 },
 actionButton1: {
   padding: 0,
   height: 36,
   justifyContent:"center",
   color: '#FFFFFF',
   fontSize:15
   
   
 },
 actionText1: {
  fontSize: 13,
  backgroundColor: '#EF3D4E',
paddingRight: 7,
paddingBottom: 6,

paddingTop: 6,
paddingLeft: 7,
borderRadius:25,
// fontWeight: "500",
  color: "#FFFFFF",
  opacity: 1,

alignSelf:'center'
  
},
})

