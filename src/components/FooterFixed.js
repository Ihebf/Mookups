import React, { useState } from 'react';
import {Feather}  from '@expo/vector-icons';
import { View, StyleSheet, Text, Switch,TouchableOpacity } from 'react-native';
import { Thumbnail } from 'native-base';
import Colors from '../styles/Color';

const FooterFixed = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return(
        <View style={styles.wrapper}>
          <View style={styles.left}>
            <TouchableOpacity onPress={props.menuClicked}>
              <Feather name='menu' size={30} color={isEnabled? Colors.green: Colors.yellow}/>
            </TouchableOpacity>
          </View>
          <View style={styles.mid}>
          {
              isEnabled ? <Text style={[styles.text,{color:isEnabled? Colors.green : Colors.yellow }]}>Online</Text> : <Text style={[styles.text,{color:isEnabled? Colors.green : Colors.yellow }]}>Offline</Text>
          }
            <Switch
              trackColor={{ false: Colors.yellow, true: Colors.green }}
              thumbColor={isEnabled ? Colors.lightGreen : Colors.lightYellow}
              onValueChange={toggleSwitch}
              value={isEnabled}   
            />
          </View>
          <View style={styles.right}>
            <Thumbnail source= { require('../img/user.png') }
              circular={true} 
              style={styles.thumbnail}
          />
          </View>
       </View>
    );
}

export default FooterFixed;

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        flexDirection:'row',
        alignContent:'space-around',
        alignItems:'center',
    },
    left:{
        flex:0.2,
        display:'flex',
        alignItems:'flex-start',
        marginLeft:10,
    },
    mid:{
        flex:0.6,
        flexDirection:'row',
        display:'flex',
        alignItems:'center',
        justifyContent: 'space-evenly',
    },
    text:{
        fontSize:24,
    },
    right:{
        flex:0.2,
        display:'flex',
        alignItems:'center'
    },
    thumbnail:{
        height:40,
        width:40
    }

});