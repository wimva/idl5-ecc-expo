import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import {styles} from './styles';
import Search from '../../assets/icons/search.svg';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button title="Go to Detail page" onPress={() => navigation.navigate('Details')}></Button>
      <Search width={40} height={40} fill={'#ff0000'}></Search>
      <Search width={80} height={80} fill={'#0000ff'}></Search>
      <StatusBar style="auto" />
    </View>
  );
}


