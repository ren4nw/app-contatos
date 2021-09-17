import React, { useEffect, useState } from 'react';
import { registerRootComponent } from 'expo';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import CreateContact from './screens/CreateContact';
import UIText from './components/Text';

const Stack = createNativeStackNavigator();

function App() {
  const [ready, setReady] = useState(false);

  const getResources = async () => {
    await Font.loadAsync({
      Roboto: require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
    });

    setReady(true);
  };

  useEffect(() => {
    getResources();
  }, []);

  if (!ready) {
    return <UIText>Carregando...</UIText>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreateContact" component={CreateContact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);

export default App;
