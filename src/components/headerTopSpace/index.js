import * as React from 'react';
import { View } from 'react-native';
import {Platform,StatusBar} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function HeaderTopSpace() {
    var insetTop = 40;
    const insets = useSafeAreaInsets();
    if(Platform.OS=="ios"){
        insetTop = insets.top;
    }else{
        insetTop = StatusBar.currentHeight;
    }
    return (
        <View style={{height: insetTop}}></View>
    )
}
export default HeaderTopSpace