import React, { useEffect, useState } from 'react';
import { registerRootComponent } from 'expo';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import CreateContact from './screens/CreateContact';
import UIText from './components/UIText';
import UIHeader from './components/UIHeader';
import UIButton from './components/UIButton';
import { MaterialIcons } from '@expo/vector-icons';
import 'react-native-get-random-values';
import AppProvider from './contexts/app-context';

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
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          header: (headerInfo) => <UIHeader headerInfo={headerInfo} />
        }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              header: headerInfo => (
                <UIHeader
                  headerInfo={headerInfo}
                  rightButton={navigate => (
                    <UIButton onPress={() => navigate('CreateContact')}>
                      <MaterialIcons name="add" style={{ color: '#fff', fontSize: 23 }} />
                    </UIButton>
                  )}
                />
              ),
              title: 'Lista de contatos',
            }}
          />
          <Stack.Screen name="CreateContact" component={CreateContact} options={{ title: 'Criar contato' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

registerRootComponent(App);

export default App;
