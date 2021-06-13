import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import HomeScreen from './screens/Home';
import SpaceCraftsScreen from './screens/SpaceCrafts';
import DailyPicScreen from './screens/DailyPic';
import StarMapScreen from './screens/StarMap';

const Stack = createStackNavigator();

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator 
        intialRouteName = "Home"
        screenOptions = {{headerShown: false}}>
        <Stack.Screen name = "Home" component = {HomeScreen} />
        <Stack.Screen name = "Space Crafts" component = {SpaceCraftsScreen} />
        <Stack.Screen name = "Daily Pic" component = {DailyPicScreen} />
        <Stack.Screen name = "Star Map" component = {StarMapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
