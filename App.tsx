import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SpaceLaunches } from './src/screens/SpaceLaunches';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SpaceLaunches" component={SpaceLaunches} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
