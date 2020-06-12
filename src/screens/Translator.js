import React from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Right,
  Body,
  Icon,
  Text,
  H1
} from 'native-base';

export default ({ navigation }) => {
  const [data, setData] = React.useState([1])
  if (!data || !data.length) {
    return (
      <H1>loading ...</H1>
    )
  }
  return (
    <Content>
      <Text style={{ fontFamily: 'Noto Sans Sharada' }}>𑆘𑆪 𑆯𑆳𑆫𑆢𑆳 𑆩𑆳𑆠𑆳</Text>
    </Content>
  );
};
