import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles(props).containerStyle}>
      {props.children}
    </View>
  );
};

const styles = (props) => {
  return {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: props.backgroundColor,
    justifyContent: props.justifyContent,
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  }}
};

export default CardSection;
