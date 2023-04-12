import * as React from 'react';
import { View, Text } from 'react-native';
import styles from "./styles";
import {Platform,StatusBar} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HeaderTopSpace from '../headerTopSpace';

function Header() {
    var insetTop = 40;
    const insets = useSafeAreaInsets();
    if(Platform.OS=="ios"){
        insetTop = insets.top;
    }else{
        insetTop = StatusBar.currentHeight;
    }

    return (
        <View>
            <HeaderTopSpace></HeaderTopSpace>
            <View style={styles.header}>
                <Text>Header</Text>
            </View>
        </View>
    )
}
export default Header