import React, { useState, useRef } from 'react';
import { Text, View, ScrollView, TextInput, Image, Animated, Easing, Pressable } from 'react-native';
import { Button } from '@rneui/themed';
import { PageHeader, Select } from '../../components';
import { useTheme } from '../../common/themeProvider';
import { useLocale } from '../../common/localeProvider';
import makeStyles from './styles';

export default function ({navigation}) {
    const { isDark, colors, theme } = useTheme();
    const styles = makeStyles(colors, isDark);
    const { intl } = useLocale();
    const orderMain = [
        {idx:1, pic: require("../../assets/order/0_order1.png"), len:2},
        {idx:2, pic: require("../../assets/order/0_order2.png"), len:4},
        {idx:3, pic: require("../../assets/order/0_order3.png"), len:4},
        {idx:4, pic: require("../../assets/order/0_order4.png"), len:6},
        {idx:5, pic: require("../../assets/order/0_order5.png"), len:6},
        {idx:6, pic: require("../../assets/order/0_order6.png"), len:8},
        {idx:7, pic: require("../../assets/order/0_order7.png"), len:8},
        {idx:8, pic: require("../../assets/order/0_order8.png"), len:8},
        {idx:9, pic: require("../../assets/order/0_order9.png"), len:8},
        {idx:10, pic: require("../../assets/order/0_order10.png"), len:12},
        {idx:11, pic: require("../../assets/order/0_order11.png"), len:10},
        {idx:12, pic: require("../../assets/order/0_order12.png"), len:12},
    ]
    return (
        <View style={theme.page}>
            <PageHeader title={intl.get("bendingOrder1")} />
            <ScrollView style={styles.page}>
                <View style={styles.topTipCon}>
                    <Text style={styles.topTip}>{intl.get('clickAndCheck')}</Text>
                </View>
                <View style={styles.orderPics}>
                {
                    orderMain.map(item=>(
                        <Pressable key={item.idx}  style={styles.orderPicCon} onPress={()=>{
                            navigation.navigate('bendingOrderDetail',{
                                idx: item.idx,
                                len: item.len
                            })
                        }}>
                            <Image source={item.pic} style={styles.orderPic} />
                        </Pressable>
                    ))
                }
                </View>
            </ScrollView>
        </View>
    )
}