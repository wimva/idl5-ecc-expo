import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import {styles} from './styles';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button title="Go to Detail page" onPress={() => navigation.navigate('Details')}></Button>
      <StatusBar style="auto" />
    </View>
  );
}


