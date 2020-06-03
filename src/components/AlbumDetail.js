import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import { Actions } from 'react-native-router-flux';

const AlbumDetail = ({ title, albumId }) => {
  const {
    headerContentStyle,
    headerTextStyle,
    imageStyle
  } = styles;
  const cardSectionProps = { justifyContent:"center", backgroundColor: "#2471A3" }

  return (
    <Card>
      <CardSection {...cardSectionProps}>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Button onPress={() => Actions.photoList({albumId:albumId})}>
          See Now!
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
<<<<<<< HEAD
    justifyContent: 'center'
=======
    textAlign: 'center'
>>>>>>> f7678b588e0c250442953451e623b9388fce097e
  },
  headerTextStyle: {
    fontSize: 18,
    textAlign:'center',
    
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
