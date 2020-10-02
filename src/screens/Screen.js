import React from 'react';
import { SafeAreaView, TouchableOpacity, View, StyleSheet, Text} from 'react-native';

const Screen = (props) => {
    return(
        <View>
            <SafeAreaView style={{flex:1}}>
                <TouchableOpacity 
                  style={{alignItems:"flex-end", margin:16}} 
                  onPress={props.navigation.openDrawer}
                >
                </TouchableOpacity>
                <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                    <Text style={styles.text}>{props.name} Screen</Text>
                </View>
            </SafeAreaView>
        </View>
    );
}

export default Screen;

const styles = StyleSheet.create({
    text:{
        color:"#161924",
        fontSize:20,
        fontWeight:"500",
    }
});