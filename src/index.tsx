import React from 'react';
import Screen2 from './Screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductosScreen from './Screens/CashRegister';
import ProductList from './Screens/Inventory';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={ProductosScreen} />
      <Tab.Screen name="Settings" component={Screen2} />
      <Tab.Screen name="Inventory" component={ProductList} />
    </Tab.Navigator>
  );
}

export default MyTabs;
