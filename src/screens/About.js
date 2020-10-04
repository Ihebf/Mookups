import React from 'react';
import { SafeAreaView, StyleSheet, Text} from 'react-native';


const About = () => {
    return(
        <SafeAreaView style={styles.container}>  
          <Text style={styles.text}>About Screen</Text>
        </SafeAreaView>
    );
}

export default About;

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
      fontWeight:'bold',
    },

});