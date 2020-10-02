import { Thumbnail } from 'native-base';
import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import Colors from '../styles/Color';
const UserHeader = (props) => {
    return(
        <View style={styles.wrapper}>
          <Thumbnail source={{
              uri:
                "https://cdn.onlinewebfonts.com/svg/img_367856.png"
          }}
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
        justifyContent:"space-around",
        height:190,
        paddingTop:40,
        alignItems:"center"
    },
    thumbnail:{
        height:60,
        width:60,
    },
    userName:{
        color: Colors.green,
        fontSize:16,
    },
    buttonText:{
        color: Colors.green,
        textDecorationLine:'underline'
    },
    button:{
    }
})