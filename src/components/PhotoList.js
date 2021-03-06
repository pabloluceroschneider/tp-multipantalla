import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import axios from "axios";
import PhotoDetail from "./PhotoDetail";
import Loader from "./Loader";

const PhotoList = (props) => {
  const { albumId } = props;
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    const fetchphotos = async () => {
      const data = await axios.get(
        `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=${props.route.params.albumId}&user_id=137290658%40N08&format=json&nojsoncallback=1`
      );
      setPhotos(data.data.photoset.photo);
    };
    fetchphotos();
  }, []);

  if (!photos) {
    return (
      <View style={styles.loader}>
        <Loader size="large" />
      </View>
    ) 
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
            photoId={item.id}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = {
  loader:{
		flex: 1,
		justifyContent:"center"
	}
}

export default PhotoList;
