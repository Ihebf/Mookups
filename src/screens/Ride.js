import React from 'react';
import { SafeAreaView, View, StyleSheet, Dimensions} from 'react-native';
import FooterFixed from '../components/FooterFixed';
import HeaderFixed from '../components/HeaderFixed';
import Colors from '../styles/Color';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import DialogInput from '../components/DialogInput';

const Ride = (props) => {

    return(
        <SafeAreaView style={styles.container}>  
          <View style={styles.container__body}>
          <View 
              style={{ height: Math.round(Dimensions.get('window').height) - 100,width: "100%",
              position:"absolute"}}>
              <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
                }}/>
            </View>
            <View style={styles.container__bodyHeader}>
              <HeaderFixed 
                gpsBtn={()=>alert("GPS CLICKED !")}
                searchBtn={()=><DialogInput/>}
                />
            </View>
          </View>
          <View style={styles.container__footer}>
            <FooterFixed 
              menuClicked={props.navigation.openDrawer}
                
              />
          </View>
        </SafeAreaView>
    );
}

export default Ride;

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    },
    container__bodyHeader:{
        flex:1,
        position:'absolute',
        top:0,
        right:0,
        left:0,
        marginTop:5,
        height:60,
        backgroundColor: 'transparent'
    },
    container__body:{
        flex:0.9,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
      fontSize:30,
      fontWeight:'bold'  
    },
    container__footer:{
        flex:0.1,
        backgroundColor: Colors.white
    },
    map: {
      ...StyleSheet.absoluteFillObject,
      height:Dimensions.get('window').height,
    },
});