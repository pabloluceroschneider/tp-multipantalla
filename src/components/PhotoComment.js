import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';
import Loader from './Loader';

const PhotoComments = (props) => {
	const { photoId } = props;
  const [ comments, setComments ] = useState(null);
  const { comment, realname, content } = styles;

	useEffect(() => {
		const fetchcomments = async () => {
			const res = await axios.get(
				`https://www.flickr.com/services/rest/?method=flickr.photos.comments.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photo_id=${photoId}&format=json&nojsoncallback=1`
			);
			setComments(res.data.comments.comment);
		};
		fetchcomments();
	}, []);

	return (
		<View>
			{comments ? (
				comments.map((c) => {
					return (
						<View key={c.id} style={comment}>
              <Text style={realname}>{c.realname}</Text>
							<Text style={content}>{c._content}</Text>
						</View>
					);
				})
			) : (
				<Loader size="small" />
			)}
		</View>
	);
};

const styles = {
  comment:{
    display:'block'
  },
  realname:{
    display:'block',
    fontWeight: 'bold'
  },
  content:{
    marginLeft:'5%'
  }
}

export default PhotoComments;
