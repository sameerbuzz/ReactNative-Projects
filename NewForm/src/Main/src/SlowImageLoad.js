import React, { Component } from 'react';
import { 
    View, 
    Text,
    ActivityIndicator,
    Image, 
} from 'react-native';

export default class SlowImageLoad extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading: true,
    };
  }
  static navigationOptions = {
    title: 'Slow Image Load',
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 25
    },
  };
  render() {
    return (
      <View>
          <ActivityIndicator size='large' 
              hidesWhenStopped='true' 
              color='red' 
              animating={this.state.isLoading}
              style={{top: 50, position: 'absolute', left: 150}}
              />
        <Image 
            onLoad={(e) => this.setState({isLoading: false})}
            onError={(e) => this.setState({isLoading: false})}
            onLoadStart={(e) => this.setState({isLoading: true})}
            source={{uri: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg'}} 
            style={{ borderRadius: 10, height: 700, width: 300, top:100, left: 40,}} 
            defaultSource={require('../assets/download3.jpeg')}
            resizeMode='cover'
            />
      </View>
    );
  }
}
