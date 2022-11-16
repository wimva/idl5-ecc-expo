import { Camera, CameraType } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import {styles} from './styles';

export default function Settings() {
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={CameraType.back} onBarCodeScanned={e => console.log(e)}/>
    </View>
  );
}


