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
    imageSectionProps,
    buttonsSectionProps,
    commentsSectionProps
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

      <CardSection {...buttonsSectionProps}>
        <Button onPress={() => Linking.openURL(imageUrl)}>
          <Text>
            See Now!  
          </Text>
        </Button>
        <Button onPress={() => setShowComment(!showComment)}>
          <Text>
            {!showComment ? "Show ":"Hide "}comments 
          </Text>
        </Button>
      </CardSection>

      {!!showComment ? (
        <CardSection {...commentsSectionProps}>
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
    fontWeight: "bold",
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
    backgroundColor: "#2471A3" ,
  },
  imageSectionProps :{ 
    justifyContent:"center", 
    backgroundColor: "#EAF2F8" 
  },
  buttonsSectionProps : { 
    backgroundColor: "#EAF2F8" 
  },
  commentsSectionProps : { 
    backgroundColor: "#EAF2F8" 
  },
};

export default PhotoDetail;
