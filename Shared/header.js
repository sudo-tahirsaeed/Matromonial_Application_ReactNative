import React from "react";
import { StyleSheet,Text,View,Image } from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
import { Globalstyles } from "../Styles/global";

// import { Title } from "@material-ui/icons";

export default function Header({navigation}){

    const openMenu = () => {
        navigation.openDrawer();
        
    }

    return(
        <View style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon}></MaterialIcons>
            <View>
            <View style={Globalstyles.header}>
                <Image source={require("../assets/rings.png")}
                style={Globalstyles.headerimage}></Image>
                
           
        <Text style={Globalstyles.headerText}>YOU & ME</Text>
        </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        
    

    },

    headerText:{
        fontWeight:'bold',
        fontSize:48,
        color:'#EF3D4E',
        letterSpacing:1,
        
    },

    icon:{
        position:'absolute',
        left: 16,
        color:'#FFF',
    }

})  