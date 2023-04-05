import React, { Component } from 'react';
import {Provider} from '@ant-design/react-native';
import enUS from '@ant-design/react-native/lib/locale-provider/en_US';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from "./src/pages/home"
import LoginPage from "./src/pages/login"

const Stack = createNativeStackNavigator();
class App extends Component {
    render() {
        return (
            <Provider locale={enUS}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="home">
                        <Stack.Screen name="home" component={HomePage} />
                        <Stack.Screen name="login" component={LoginPage} />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        );
    }
}

export default App;