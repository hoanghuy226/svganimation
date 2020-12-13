import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import StrokeAnimation from '../elements/StrokeAnimation';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <StrokeAnimation />
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
});
