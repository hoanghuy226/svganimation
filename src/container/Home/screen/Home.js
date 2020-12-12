import React, {Component} from 'react';
import {View} from 'react-native';
import StrokeAnimation from '../elements/StrokeAnimation';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'gray'}}>
        <StrokeAnimation />
      </View>
    );
  }
}

export default Home;
