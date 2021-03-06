import React, { useState, useEffect } from "react";
import { View } from "react-native";
import axios from "axios";
import AlbumDetail from "./AlbumDetail";
import { FlatList } from "react-native";
import Loader from "./Loader";

const AlbumList = (props) => {
  const [photoset, setPhotoset] = useState(null);

  useEffect(() => {
    const fetchalbum = async () => {
      await axios
        .get(
          "https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&user_id=137290658%40N08&format=json&nojsoncallback=1"
        )
        .then((response) => setPhotoset(response.data.photosets.photoset));
    };
    fetchalbum();
  }, []);

	return !photoset ? (
		<View style={styles.loader}>
			<Loader size="large" />
		</View>
	) : (
		<View style={styles.albumdetail}>
			<FlatList
				data={photoset}
				renderItem={({ item }) =>  <AlbumDetail 
													navigation={props.navigation}
													key={item.id} 
													title={item.title._content} 
													albumId={item.id} />}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

const styles = {
	albumdetail:{
		flex: 1,
		marginTop: "1%",
		marginRight: "1%",
		marginBottom: "5%",
		marginLeft: "1%"
	},
	loader:{
		flex: 1,
		justifyContent:"center"
	}
}

export default AlbumList;
