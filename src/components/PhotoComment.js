import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Text } from "react-native";

const PhotoComments = (props) => {
  const { photoId } = props;
  const [comments, setComments] = useState(null);

  useEffect(() => {
    const fetchcomments = async () => {
      const res = await axios.get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.comments.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photo_id=${photoId}&format=json&nojsoncallback=1`
      );
      setComments(res.data.comments.comment);
    };
    fetchcomments();
  }, []);

  console.log(comments);

  return (
    <View>
      {comments
        ? comments.map((c) => {
            return (
              <Text key={c.id}>
                {c.realname}:{c._content}
              </Text>
            );
          })
        : null}
    </View>
  );
};

export default PhotoComments;
