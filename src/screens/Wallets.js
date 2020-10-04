import React from 'react';
import { SafeAreaView, StyleSheet, Text} from 'react-native';


const Wallets = () => {
    return(
        <SafeAreaView style={styles.container}>  
          <Text style={styles.text}>Wallets Screen</Text>
        </SafeAreaView>
    );
}

export default Wallets;

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red'
    },
    text:{
      fontSize:30,
      fontWeight:'bold'  
    },
});