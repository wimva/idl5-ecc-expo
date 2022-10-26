import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../Profile';
import SettingsScreen from '../Settings';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
