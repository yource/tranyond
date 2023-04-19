import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector, useDispatch } from 'react-redux';
import defaultProducts from './constant/products';
import storage from './utils/storage';
import { setProducts } from './store/products';

import HomePage from "./pages/home"
import LoginPage from "./pages/login/login"
import ForgetPage from "./pages/login/forget"
import bending1 from './pages/calculators/bending1';
import bending2 from './pages/calculators/bending2';
import bending3 from './pages/calculators/bending3';
import bending4 from './pages/calculators/bending4';
import bending5 from './pages/calculators/bending5';
import bending6 from './pages/calculators/bending6';
import product from './pages/product/index.js';
import productMulti from './pages/product/multi';

const Stack = createNativeStackNavigator();
const MyTheme = {
    dark: true,
    colors: {
        ...DefaultTheme.colors,
        primary: 'rgb(255, 45, 85)',
        background: _global.pageBackgroundColor,
        card: 'rgb(255, 255, 255)',
        text: _global.fontColor,
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
};
const AppContent = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        // 展示最新的产品信息 或使用默认数据
        storage.getItem("products").then(data=>{
            if(data){
                dispatch(setProducts(JSON.parse(data)))
            }else{
                dispatch(setProducts(defaultProducts))
            }
        })
    },[])

    return (
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator initialRouteName="home"
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name="home" component={HomePage} />
                <Stack.Screen name="login" component={LoginPage} />
                <Stack.Screen name="forget" component={ForgetPage} />
                <Stack.Screen name="bending1" component={bending1} />
                <Stack.Screen name="bending2" component={bending2} />
                <Stack.Screen name="bending3" component={bending3} />
                <Stack.Screen name="bending4" component={bending4} />
                <Stack.Screen name="bending5" component={bending5} />
                <Stack.Screen name="bending6" component={bending6} />
                <Stack.Screen name="product" component={product} />
                <Stack.Screen name="productMulti" component={productMulti} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppContent;