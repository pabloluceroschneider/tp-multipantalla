import React from "react";
import { ActivityIndicator, Colors } from 'react-native-paper';

const Loader = props => {
  const { size } = props;
    return (
      <ActivityIndicator style={styles} animating={true} size={size} color={Colors.blue500}/>
    )
}

const styles = {
    alignSelf: 'center',
}

export default Loader;