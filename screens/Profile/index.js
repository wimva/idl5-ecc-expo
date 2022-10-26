import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import {styles} from './styles';

export default function Profile({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <Button title="Go to Settings page" onPress={() => navigation.navigate('Settings')}></Button>
      <StatusBar style="auto" />
    </View>
  );
}


