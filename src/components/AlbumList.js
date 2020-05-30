import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
import {FlatList} from 'react-native';

const AlbumList = (props) => {
	const [ photoset, setPhotoset ] = useState(null);

	useEffect( ()=>{
		const fetchalbum = async () => {
			await axios.get('https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&user_id=137290658%40N08&format=json&nojsoncallback=1')
			.then(response => setPhotoset(response.data.photosets.photoset))}
		fetchalbum()
	},[]);

	return !photoset ? (
		<Text>Loading...</Text>
	) : (
		<View style={{ flex: 1 }}>
			<FlatList
				data={photoset}
				renderItem={({ item }) =>  <AlbumDetail key={item.id} title={item.title._content} albumId={item.id} />}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

export default AlbumList;
