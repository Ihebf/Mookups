import React from 'react';
import { SafeAreaView, View, StyleSheet, Text} from 'react-native';
import FooterFixed from '../components/FooterFixed';
import Colors from '../styles/Color';

const Profile = (props) => {
    return(
        <SafeAreaView style={styles.container}>  
          <View style={styles.container__body}>
            <Text style={styles.text}>Profile Screen</Text>
          </View>
          <View style={styles.container__footer}>
            <FooterFixed menuClicked={props.navigation.openDrawer}/>
          </View>
        </SafeAreaView>
    );
}

export default Profile
;

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    },
    container__body:{
        flex:0.9,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red'
    },
    text:{
      fontSize:30,
      fontWeight:'bold'  
    },
    container__footer:{
        flex:0.1,
        backgroundColor: Colors.white
    }

});