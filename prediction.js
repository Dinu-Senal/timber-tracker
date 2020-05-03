import * as React from 'react';
import { Image, View, Text } from 'react-native';
import Button from './Button';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
export default class Prediction extends React.Component {

  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#262626' }}>
       
        <Text style={{textAlign:'center', fontWeight: 'bold',fontSize: 40,
                      marginTop: -100,
                      width: 340,
                      paddingVertical: 50,
                      textTransform: 'uppercase',
                      color: '#fff'}}>Upload Image to Predict</Text>

        <Button text="PICK AN IMAGE" onPress={this._pickImage} />
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
}