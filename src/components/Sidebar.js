import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SidebarOptions from './SidebarOption';
import { Ionicons,
    MaterialCommunityIcons,
    FontAwesome5,
    AntDesign, 
    Fontisto, 
    SimpleLineIcons } from '@expo/vector-icons';
import Colors from "../styles/Color";
import About from '../screens/About';
import FAQS from '../screens/FAQS';
import Profile from '../screens/Profile';
import Notification from '../screens/Notification';
import Wallets from '../screens/Wallets';
import Ride from '../screens/Ride';


const Drawer = createDrawerNavigator();

const Sidebar = () =>{
    return(
        <Drawer.Navigator 
          initialRouteName="Ride"
          drawerContent={ props=> <SidebarOptions {...props} />}
        >
          <Drawer.Screen 
            name="Notification"
            component={Notification} 
            options={{
                drawerIcon:()=> <MaterialCommunityIcons name="bell-outline" size={26} color={Colors.gray} />,
            }}
            />
          <Drawer.Screen 
            name="Profile" 
            component={Profile}
            options={{
              drawerIcon:()=> <FontAwesome5 name="user" size={26} color={Colors.gray} />
            }}/>
          <Drawer.Screen 
            name="Ride" 
            component={Ride} 
            options={{
                drawerIcon:()=> <AntDesign name="car" size={26} color={Colors.gray}/>
            }}
          />
          <Drawer.Screen 
            name="Wallets" 
            component={Wallets} 
            options={{
              drawerIcon:()=> <Fontisto name="dollar" size={26} color={Colors.gray} />
            }}
          />
          <Drawer.Screen 
            name="FAQ's"
            component={FAQS} 
            options={{
              drawerIcon:()=> <Ionicons name="ios-help-circle-outline" size={26} color={Colors.gray} />
            }}
          />
          <Drawer.Screen 
            name="About" 
            component={About} 
            options={{
              drawerIcon:()=> <SimpleLineIcons name="exclamation" size={26} color={Colors.gray} />
            }}
          />
      </Drawer.Navigator>
    );
}

export default Sidebar;