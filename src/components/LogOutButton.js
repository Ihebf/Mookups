import React from "react";
import { View, Text, TouchableOpacity, StyleSheet} from "react-native";
import Colors from "../styles/Color";
import { Ionicons } from '@expo/vector-icons'; 


const LogOutButton = (props) => {
    return(
        <TouchableOpacity style={styles.button}>
          <Ionicons name="ios-log-in" size={32} color={Colors.white} fontWeight="bold"/>
          <Text style={styles.buttonTxt}>{props.name}</Text>
        </TouchableOpacity>
    );
}

export default LogOutButton;

const styles=StyleSheet.create({
    buttonTxt:{
        fontSize:16,
        color:Colors.white,
        fontWeight:"bold",
        padding:10,
    },
    button:{
        flex:1,
        alignContent:"center",
        alignItems:"center",
        flexDirection:"row",
    }
});