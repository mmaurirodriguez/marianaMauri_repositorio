import React from 'react';
import { View, Text } from 'react-native';

function Post(props) {
  return (
    <View>
      <Text>{props.owner}</Text>
      <Text>{props.mensaje}</Text>
    </View>
  );
}

export default Post;
