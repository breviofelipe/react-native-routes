import React from 'react';
import Home from './src/screens/Home';
import Item from './src/screens/Item';
import Options from './src/screens/Options';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
       <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Options" component={Options} />
          <Stack.Screen name="Item" component={Item} />
        </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function TabComponent() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Options" component={Options} />
        <Tab.Screen name="Item" component={MyStack} />
      </Tab.Navigator>
  );
}


export default function App() {
  return <NavigationContainer>
    <TabComponent />
  </NavigationContainer>;
}


