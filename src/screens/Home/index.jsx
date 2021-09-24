import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Favoritos from '../Tab/Favoritos';
import Todos from '../Tab/Todos';

const Tab = createMaterialTopTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { color: '#fff' },
        tabBarStyle: { backgroundColor: '#273eb0' },
        tabBarIndicatorStyle: { backgroundColor: '#fff' },
      }}
    >
      <Tab.Screen name="Todos" component={Todos} />
      <Tab.Screen name="Favoritos" component={Favoritos} />
    </Tab.Navigator>
  );
}

export default Home;
