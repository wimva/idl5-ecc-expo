import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Inter_900Black,
} from '@expo-google-fonts/inter';

const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          headerShown: false
        }}>
          <Tab.Screen name="Home" component={HomeScreen} options={{title: 'Overview' }} />
          <Tab.Screen name="Details" component={DetailsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
