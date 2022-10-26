import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {styles} from './styles';

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
      <StatusBar style="auto" />
    </View>
  );
}


