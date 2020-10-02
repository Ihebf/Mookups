import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    ProfileScreen,
    NotificationScreen,
    RideScreen,
    WalletsScreen,
    FAQSScreen,
    AboutScreen,
  } from '../screens/index';
import SidebarOptions from './SidebarOption';
import { Ionicons,
    MaterialCommunityIcons,
    FontAwesome5,
    AntDesign, 
    Fontisto, 
    SimpleLineIcons } from '@expo/vector-icons'; 
import Colors from "../styles/Color";

const Drawer = createDrawerNavigator();

const Sidebar = () =>{
    return(
        <Drawer.Navigator initialRouteName="Home" drawerContent={props=> <SidebarOptions {...props}/>}>
          <Drawer.Screen name="Notification" component={NotificationScreen} 
            options={{
                drawerIcon:()=> <MaterialCommunityIcons name="bell-outline" size={29} color={Colors.gray} />
            }} />
          <Drawer.Screen name="Profile" component={ProfileScreen}
             options={{
                drawerIcon:()=> <FontAwesome5 name="user" size={26} color={Colors.gray} />
            }}/>
          <Drawer.Screen name="Ride" component={RideScreen} 
            options={{
                drawerIcon:()=> <AntDesign name="car" size={26} color={Colors.gray} />
            }}
          />
          <Drawer.Screen name="Wallets" component={WalletsScreen} 
              options={{
                drawerIcon:()=> <Fontisto name="dollar" size={26} color={Colors.gray} />
            }}
          />
          <Drawer.Screen name="FAQ's" component={FAQSScreen} 
              options={{
                drawerIcon:()=> <Ionicons name="ios-help-circle-outline" size={30} color={Colors.gray} />
            }}
          />
          <Drawer.Screen name="About" component={AboutScreen} 
              options={{
                drawerIcon:()=> <SimpleLineIcons name="exclamation" size={24} color={Colors.gray} />
            }}
          />
      </Drawer.Navigator>
    );
}

export default Sidebar;