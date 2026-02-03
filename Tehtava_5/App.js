// App.js
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Laskin from './components/laskin_navigoinnilla';
import Historia from './components/historia';

const Stack = createNativeStackNavigator();

export default function App() {
  const [historia, setHistoria] = useState([]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Laskin" options={{ title: 'Laskin' }}>
            {props => (
              <Laskin
                {...props}
                historia={historia}
                setHistoria={setHistoria}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="Historia" options={{ title: 'Historia' }}>
            {props => <Historia {...props} historia={historia} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});