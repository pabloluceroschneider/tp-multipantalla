import React, { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import axios from "axios";
import PhotoDetail from "./PhotoDetail";

const PhotoList = (props) => {
  const { albumId } = props;
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    const fetchphotos = async () => {
      const data = await axios.get(
        `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=${albumId}&user_id=137290658%40N08&format=json&nojsoncallback=1`
      );
      setPhotos(data.data.photoset.photo);
    };
    fetchphotos();
  }, []);

  console.log(photos);

  if (!photos) {
    return (
      <View style={{ flex: 1 }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={photos}
        renderItem={({ item }) => (
          <PhotoDetail
            key={item.title}
            title={item.title}
            imageUrl={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default PhotoList;
