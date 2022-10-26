import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';
import { useFonts } from 'expo-font';
import { useEffect, useCallback } from 'react';
import { View, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import Search from './assets/icons/search.svg';
import Trash from './assets/icons/trash.svg';

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{flex:1}}>
      <NavigationContainer >
        <Tab.Navigator screenOptions={{
          headerShown: false
        }}>
          <Tab.Screen name="Home" component={HomeScreen} options={{title: 'Overview', tabBarIcon: ({focused, color, size}) => (
              <Search
                  width={size}
                  height={size}
                  fill={color}
              />
            ) }} />
          <Tab.Screen name="Details" component={DetailsScreen} options={{
            tabBarIcon: ({focused, color, size}) => {
              return (
                <Trash
                  width={size}
                  height={size}
                  fill={color}
                ></Trash>
              )},
          }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
