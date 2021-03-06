import React from 'react';
import DailyPicScreen from './screens/DailyPic';
import SpaceCraftsScreen from './screens/SpaceCrafts';
import StarMapScreen from './screens/StarMap';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home" screenOptions = {{
        headerShown : false
      }}>
      <Stack.Screen name = "Home" component = {{HomeScreen}}/>
      <Stack.Screen name = "SpaceCrafts" component = {{SpaceCraftsScreen}}/>
      <Stack.Screen name = "DailyPic" component = {{DailyPicScreen}}/>
      <Stack.Screen name = "StarMap" component = {{StarMapScreen}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}