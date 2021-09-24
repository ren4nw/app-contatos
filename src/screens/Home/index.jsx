import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TodosContatos from '../Tabs/TodosContatos';
import Favoritos from '../Tabs/Favoritos';

const Tab = createMaterialTopTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { color: '#fff' },
        tabBarIndicatorStyle: { backgroundColor: '#fff' },
        tabBarStyle: { backgroundColor: '#273eb0' },
      }}
    >
      <Tab.Screen name="Todos" component={TodosContatos} />
      <Tab.Screen name="Favoritos" component={Favoritos} />
    </Tab.Navigator>
  );
}

export default Home;
