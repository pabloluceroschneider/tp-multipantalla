import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Text } from "react-native";
import Loader from "./Loader";

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

  return (
    <View style={styles.comments}>
      {comments ? (
        comments.map((c) => {
          return (
            <View style={styles.box} key={c.id}>
              <Text style={styles.realname}>{c.realname}</Text>
              <Text style={styles.content}>{c._content}</Text>
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
  comments: {
    display: "flex",
    width: "100%"
  },
  box:{
    border: "0.5px solid #E5E7E9",
    backgroundColor: "#FFF",
    borderRadius: 5,
    margin: "2%",
    padding: "2%"

  },
  realname: {
    display: "flex",
    fontWeight: "bold",
  },
  content: {
    marginLeft: "5%",
  },
};

export default PhotoComments;
