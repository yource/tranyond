import * as React from 'react';
import { View, Text } from 'react-native';
import { Button, Toast, Icon } from '@ant-design/react-native';
function HomePage({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('login')}> go login </Button>
    </View>
  );
}
export default HomePage