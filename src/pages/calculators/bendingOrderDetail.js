import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Text, View, ScrollView, TextInput, Image, Animated, Easing, TouchableOpacity, Pressable } from 'react-native';
import { PageHeader, Select } from '../../components';
import { useTheme } from '../../common/themeProvider';
import { useLocale } from '../../common/localeProvider';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import makeStyles from './styles';
import allPics from '../../assets/order';

export default function ({ route }) {
    const { isDark, colors, theme } = useTheme();
    const styles = makeStyles(colors, isDark);
    const { intl } = useLocale();
    const [pics, setPics] = useState([]);
    const [curIdx, setCurIdx] = useState(-1);
    const { idx, len } = route.params;
    const swiper = useRef(null);
    useEffect(() => {
        const _pics = [];
        for (var i = 0; i < len; i++) {
            _pics.push(allPics[(i + 1) + "_order" + idx]);
        }
        _pics.push(allPics['0_order'+idx])
        setPics(_pics);
        setCurIdx(0);
    }, [])

    return (
        <View style={theme.page}>
            <PageHeader title={intl.get("bendingOrderDetail")} />
            <ScrollView style={styles.page}>
                <View style={styles.orderSection}>
                    <View style={styles.orderNum}>
                        <Text style={styles.orderNumText}>{curIdx + 1}</Text>
                        <Text style={[styles.orderNumText, { paddingLeft: 5, paddingRight: 5 }]}>/</Text>
                        <Text style={styles.orderNumText}>{len+1}</Text>
                    </View>

                    <View style={styles.orderBigPicCon}>
                        <TouchableOpacity style={[styles.turnLeftRight,curIdx==0?{
                            opacity: 0.35
                        }:{}]} onPress={() => {
                            if (curIdx - 1 >= 0) {
                                let toIdx = curIdx - 1;
                                setCurIdx(toIdx);
                                if(swiper) swiper.current.scrollToIndex({index: toIdx});
                            }
                        }}>
                            <Icon name="chevron-left" size={30} color={colors.primary} />
                        </TouchableOpacity>
                        {
                            curIdx > -1 ? (
                                <View style={styles.swiperContainer}>
                                    <SwiperFlatList index={0} data={pics} ref={swiper}
                                        onChangeIndex={({index})=>{
                                            if(index || index===0) setCurIdx(index)
                                        }}
                                        renderItem={({ item }) => (
                                            <View style={styles.swiperItem}>
                                                <Image source={item} style={styles.swiperItemPic} />
                                            </View>
                                        )}
                                    />
                                </View>
                            ) : null
                        }
                        <TouchableOpacity style={[styles.turnLeftRight,curIdx==len?{
                            opacity: 0.35
                        }:{}]} onPress={() => {
                            if (curIdx < len){
                                let toIdx = curIdx + 1;
                                setCurIdx(toIdx);
                                if(swiper) swiper.current.scrollToIndex({index: toIdx});
                            }
                        }}>
                            <Icon name="chevron-right" size={30} color={colors.primary} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.orderSmallPics}>
                        {
                            pics.map((item, _idx) => (
                                <Pressable key={_idx} onPress={() => {
                                    setCurIdx(_idx);
                                    if(swiper) swiper.current.scrollToIndex({index: _idx});
                                }} style={[styles.orderSmallPicCon, curIdx == _idx ? {
                                    borderColor: colors.primary, borderWidth: 1
                                } : {}]}>
                                    <Image style={styles.orderSmallPic} source={item} />
                                </Pressable>
                            ))
                        }
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}