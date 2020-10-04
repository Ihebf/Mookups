import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {FontAwesome, MaterialIcons}  from '@expo/vector-icons';
import Colors from '../styles/Color'
import DialogInput from '../components/DialogInput';

const HeaderFixed = (props) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.left}>
              <TouchableOpacity style={styles.button} onPress={()=>{<DialogInput/>}}>
                <FontAwesome name='search' size={20} color={Colors.gray} style={{fontWeight:'900'}}/>
              </TouchableOpacity>
            </View>
            <View style={styles.mid}>
              <Text style={styles.text}> 15.5$ </Text>
            </View>
            <View style={styles.right}>
              <TouchableOpacity style={styles.button} onPress={props.gpsBtn}>
                <MaterialIcons name='gps-fixed' size={24} color={Colors.green}/>
              </TouchableOpacity>
            </View>
        </View>
    );
}

export default HeaderFixed;

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        flexDirection:'row',
        alignContent:'space-between',
        alignItems:'center',
    },
    left:{
        flex:0.3,
        alignItems:'flex-start',
        marginLeft:10,
    },
    button:{
        padding:9,
        backgroundColor: Colors.white,
        borderRadius:44/2,
    },
    mid:{
        flex:0.4,
        display:'flex',
        alignItems:'center',
        alignContent:'center',
        justifyContent: 'center',
        backgroundColor:Colors.green,
        borderRadius:100,
        height:25,
    },
    right:{
        flex:0.3,
        display:'flex',
        alignItems:'flex-end',
        paddingRight:10
    },
    text:{
      fontWeight:'bold',
      fontSize:14,
      color:Colors.white
    }
});