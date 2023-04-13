import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, Pressable, ImageBackground, TouchableOpacity } from 'react-native';
import { Toast, Icon } from '@ant-design/react-native';
import styles from './styles';
import calculators from '../../constant/calculators';
import { useSelector, useDispatch } from 'react-redux';

const imageSize = _global.width - 72;
function HomePage({ navigation }) {
    const dispatch = useDispatch();
    const userinfo = useSelector(state => state.user.userinfo);
    const list = useSelector(state=>state.products.list);
    const [type, setType] = useState('Products')
    const toggleClick = () => {
        setType(type == "Products" ? "Calculator" : "Products")
    }
    return (
        <SafeAreaView>
            <ScrollView style={styles.page}>
                <View style={styles.header}>
                    <TouchableOpacity activeOpacity={0.5} style={styles.toggleBtn} fill='none' onPress={toggleClick}>
                        <Image style={styles.toggleIcon} source={require('../../assets/icon/toggle.png')} />
                        <Text style={styles.toggleText}>{type}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate("user") }}>
                        <Image style={styles.userIcon} source={require('../../assets/icon/user.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.listCon}>
                    {
                        type === "Products" ? list.map(item => (
                            <Pressable key={item.id} onPress={() => { navigation.navigate(item.path) }} style={{
                                width: imageSize, height: imageSize, marginBottom: 32, borderRadius: 10, overflow: 'hidden'
                            }}>
                                <View style={styles.imgBg}>
                                    <ImageBackground source={{ uri: item.pic }} resizeMode="cover" style={{
                                        width: imageSize, height: imageSize, justifyContent: 'flex-end'
                                    }}>
                                        <Text style={styles.productName}>{item.name}</Text>
                                        <Text style={styles.productDesc}>{item.desc}</Text>
                                    </ImageBackground>
                                </View>
                            </Pressable>
                        )) : (
                            <View><Text>Calculator</Text></View>
                        )
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default HomePage