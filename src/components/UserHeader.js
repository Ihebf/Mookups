import { Thumbnail } from 'native-base';
import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import Colors from '../styles/Color';
const UserHeader = (props) => {
    return(
        <View style={styles.wrapper}>
          <Thumbnail source={
              require('../img/user.png')
          }
             circular={true} 
             style={styles.thumbnail}
          />
          <Text style={styles.userName}>{props.name}</Text>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Voir profile</Text>
          </TouchableOpacity>
        </View>
    );
}

export default UserHeader;

const styles = StyleSheet.create({
    wrapper:{
        justifyContent:"center",
        height:190,
        paddingTop:40,
        alignItems:"center",
    },
    thumbnail:{
        height:70,
        width:70,
    },
    userName:{
        color: Colors.green,
        fontSize:20,
    },
    buttonText:{
        color: Colors.green,
        textDecorationLine:'underline',
        fontSize:12,
        paddingTop:15
    },
    button:{
    }
})