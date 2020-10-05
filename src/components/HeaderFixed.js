import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import {FontAwesome, MaterialIcons}  from '@expo/vector-icons';
import Colors from '../styles/Color'
import DialogInput from '../components/DialogInput';
import { AntDesign } from '@expo/vector-icons'; 

const HeaderFixed = (props) => {
   const [searchActive, setSearchActive] = React.useState(false);

    return (
        <View style={styles.wrapper}>
            <View style={styles.left}>
              <TouchableOpacity style={styles.button} onPress={()=>setSearchActive(!searchActive)}>
                <FontAwesome name='search' size={20} color={Colors.gray} style={{fontWeight:'900'}}/>
              </TouchableOpacity>
            </View>
            <View style={styles.mid}>
            {
              searchActive? 
              <View style={styles.searchView}>
                <TextInput 
                  style={styles.textInput}
                  onChangeText={props.textInputOnChangeText}
                  value={props.textInputValue}
                />
                <TouchableOpacity style={styles.submit} onPress={()=>{setSearchActive(!searchActive)}}>
                  <AntDesign name="enter" size={30} color="white" />
                </TouchableOpacity>
              </View> 
            : 
              <View style={styles.textZone}>
                <Text style={styles.text}>15.5$</Text>
              </View>
            }
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
        justifyContent:'center',
        alignSelf:'center'
    },
    left:{
        flex:0.1,
        alignItems:'flex-start',
        marginLeft:10,
    },
    button:{
        padding:7,
        backgroundColor: Colors.white,
        borderRadius:44/2,
    },
    mid:{
        flex:0.7,
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        paddingLeft:20

    },
    right:{
        flex:0.2,
        display:'flex',
        alignItems:'flex-end',
        paddingRight:10,
    },
    text:{
      fontWeight:'bold',
      fontSize:14,
      color:Colors.white
    },
    searchView:{
      flex:1,
      flexDirection:'row',
      alignContent:'center',
      alignItems:'center',
    },
    textInput:{
      width:200,
      height:40,
      borderRadius:5,
      borderWidth:1,
      borderColor:Colors.black,
      backgroundColor:Colors.white,
      margin:5
    },
    submit:{
      backgroundColor:Colors.black
    },
    textZone:{
      backgroundColor:Colors.green,
      height:25,
      width:100,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:100
    }
});