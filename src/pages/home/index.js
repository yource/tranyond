import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, Pressable, ImageBackground, TouchableOpacity } from 'react-native';
import { Toast, Icon } from '@ant-design/react-native';
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentProduct } from '../../store/products'
import FastImage from 'react-native-fast-image'

const calculator = [{
    path: "bending1",
    name: "Bending Force",
    pic: require("../../assets/images/bending01.png")
}, {
    path: "bending2",
    name: "V Opening",
    pic: require("../../assets/images/bending02.png")
}, {
    path: "bending3",
    name: "Bend Edge",
    pic: require("../../assets/images/bending03.png")
}, {
    path: "bending6",
    name: "Sheetmetal Weight",
    pic: require("../../assets/images/bending06.png")
}, {
    path: "bending4",
    name: "Radiused Blump Bending",
    pic: require("../../assets/images/bending04.png")
}, {
    path: "bending5",
    name: "K factor, bend allowance and Y factor",
    pic: require("../../assets/images/bending05.png")
}]

function HomePage({ navigation }) {
    const dispatch = useDispatch();
    const userinfo = useSelector(state => state.user.userinfo);
    
    const [type, setType] = useState('Products')
    const toggleClick = () => {
        setType(type == "Products" ? "Calculator" : "Products")
    }

    const list = useSelector(state => state.products.list);
    const clickProduct = (pd)=>{
        dispatch(setCurrentProduct(pd))
        navigation.navigate(pd.path)
    }

    return (
        <SafeAreaView>
            <ScrollView style={[styles.page]}>
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
                        type === "Products" && list && list.length ? list.map(item => (
                            <TouchableOpacity activeOpacity={0.5} key={item.id} onPress={() => clickProduct(item)} style={styles.productCon}>
                                <FastImage style={styles.productImg} source={{uri: item.pic}} resizeMode={FastImage.resizeMode.contain} />
                                <Text style={styles.productName}>{item.name}</Text>
                                <Text style={styles.productDesc}>{item.desc}</Text>
                            </TouchableOpacity>
                        )) : (type === "Calculator" ? calculator.map(item => (
                            <TouchableOpacity activeOpacity={0.5} key={item.path} onPress={() => { navigation.navigate(item.path) }} style={styles.calculatorCon}>
                                <View style={styles.calculatorPicCon}>
                                    <Image style={styles.calculatorPic} source={item.pic} />
                                </View>
                                <View style={styles.calculatorNameCon}>
                                    <Text style={styles.calculatorName}>{item.name}</Text>
                                </View>
                                <Icon name="right" color="#666666" size={18} />
                            </TouchableOpacity>
                        )) : null)
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default HomePage