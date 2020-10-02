import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Sidebar from './src/components/Sidebar';

export default function App() {
  return (
    <NavigationContainer>
      <Sidebar/>
    </NavigationContainer>
  );
}