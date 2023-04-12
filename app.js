import React from 'react';
import { StatusBar, useColorScheme, View } from 'react-native';
import { Provider } from '@ant-design/react-native';
import enUS from '@ant-design/react-native/lib/locale-provider/en_US';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from "./src/pages/home"
import LoginPage from "./src/pages/login"
import globalStyle from './src/constant/globalStyle';
const Stack = createNativeStackNavigator();
const MyTheme = {
    dark: true,
    colors: {
        ...DefaultTheme.colors,
        primary: 'rgb(255, 45, 85)',
        background: globalStyle.pageBackgroundColor,
        card: 'rgb(255, 255, 255)',
        text: globalStyle.fontColor,
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
};
const App = () => {
    return (
        <Provider locale={enUS}>
            <StatusBar
                translucent={true}
                backgroundColor="transparent"
                barStyle="light-content"></StatusBar>
            <NavigationContainer theme={MyTheme}>
                <Stack.Navigator initialRouteName="home"
                    screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="home" component={HomePage} />
                    <Stack.Screen name="login" component={LoginPage} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default App;