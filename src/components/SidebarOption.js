import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Container, Content, Footer, Header } from 'native-base';
import UserHeader from './UserHeader';
import LogOutButton from './LogOutButton';
import Colors from "../styles/Color";


const SidebarOptions = ({...props}) => {
    return(
        <Container style={styles.container}>
          <Header style={styles.header}>
            <ImageBackground source={require('../img/background.jpg')} style={styles.imageBackground}>
              <UserHeader name="Iheb Farhat"/>
            </ImageBackground>
          </Header>
          <Content style={styles.content}>
            <DrawerContentScrollView {...props}>
              <DrawerItemList {...props}/>
            </DrawerContentScrollView>
          </Content>
          <Footer style={styles.footer}>
            <LogOutButton name="LOG OUT" />
          </Footer>
        </Container>
    );
}
export default SidebarOptions;
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  header:{
    height:190,
    backgroundColor:"transparent",
    paddingLeft:-10,
    paddingRight:-10,
  },
  imageBackground:{
    resizeMode:"cover",
    width:"100%",
    height:"100%",    
  },
  footer:{
    backgroundColor:Colors.green,
    alignContent:"flex-start",
    alignItems:"center",
    justifyContent:"flex-start",
    paddingLeft:15
  },
  content:{
    paddingLeft:10,
    alignContent:"flex-start",
  }
});