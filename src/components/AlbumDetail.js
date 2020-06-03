import React from "react";
import { Text, View, Image, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";
import { Actions } from "react-native-router-flux";
import { Icon } from "react-native-elements";

const AlbumDetail = ({ title, albumId, navigation }) => {
  const titleSectionProps = {
    justifyContent: "center",
    backgroundColor: "#2471A3",
    
  };
  const {
    headerContentStyle,
    headerTextStyle
    
  } = styles;
  const contentSectionProps = {
    justifyContent: "center",
    backgroundColor: "#EAF2F8",
  };

  return (
    <Card>
      <CardSection {...titleSectionProps}>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Button onPress={() => navigation.navigate('photoList', {albumId: albumId})}>
        <Icon name="camera" type="font-awesome" color='#2471A3' />
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "center",
  },
  headerTextStyle: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold"
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
};

export default AlbumDetail;
