import React from 'react';
import Screen from './Screen';

export const ProfileScreen = ({navigation}) => <Screen navigation={navigation} name="Profile"/>
export const NotificationScreen = ({navigation}) => <Screen navigation={navigation} name="Notification"/>
export const RideScreen = ({navigation}) => <Screen navigation={navigation} name="Ride"/>
export const WalletsScreen = ({navigation}) => <Screen navigation={navigation} name="Wallets"/>
export const FAQSScreen = ({navigation}) => <Screen navigation={navigation} name="FAQ's"/>
export const AboutScreen = ({navigation}) => <Screen navigation={navigation} name="About"/>

