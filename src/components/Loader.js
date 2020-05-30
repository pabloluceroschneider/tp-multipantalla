import React from "react";
import { ActivityIndicator, Colors } from 'react-native-paper';

const Loader = () => {
    return (
      <ActivityIndicator style={styles} animating={true} size="large" color={Colors.blue500}/>
    )
}

const styles = {
    alignSelf: 'center',
    marginTop: '50%'
}

export default Loader;