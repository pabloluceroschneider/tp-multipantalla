import React, { useState } from "react";
import { Text, View, Image, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";
import PhotoComments from "./PhotoComment";

const PhotoDetail = ({ title, imageUrl, photoId }) => {
  const [showComment, setShowComment] = useState(false);
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle,
    titleSectionProps,
    imageSectionProps
  } = styles;


  return (
    <Card>
      <CardSection {...titleSectionProps}>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: imageUrl }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
        </View>
      </CardSection>

      <CardSection {...imageSectionProps}>
        <Image style={imageStyle} source={{ uri: imageUrl }} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(imageUrl)}>See Now!</Button>
        <Button onPress={() => setShowComment(!showComment)}>
          Comments
        </Button>
      </CardSection>

      {showComment ? (
        <CardSection>
          <PhotoComments photoId={photoId} />
        </CardSection>
      ) : null}
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
  headerTextStyle: {
    fontSize: 18,
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
  titleSectionProps : { 
    justifyContent:"flex-start", 
    backgroundColor: "yellow" 
  },
  imageSectionProps :{ 
    justifyContent:"center", 
    backgroundColor: "red" 
  }
};

export default PhotoDetail;
