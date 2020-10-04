import React from 'react';
import { StyleSheet, View } from 'react-native';
import Dialog from "react-native-dialog";

const DialogInput = () => {
    return (
        <View style={styles.wrapper}>
          <Dialog.Container visible={true}>
            <Dialog.Title>Search</Dialog.Title>
            <Dialog.Input style={{borderWidth:1}}/>
            <Dialog.Button label="search"/>
            <Dialog.Button label="cancel"/>
          </Dialog.Container>
        </View>
    );
}

export default DialogInput;

const styles = StyleSheet.create({
    wrapper:{
        
    }
})