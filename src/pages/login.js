import * as React from 'react';
import { View, Text } from 'react-native';
import { Button, Toast, Icon } from '@ant-design/react-native';

function LoginPage({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login</Text>
      <Button onPress={() => navigation.navigate('home')}> back home </Button>
    </View>
  );
}
export default LoginPage