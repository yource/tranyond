import React, { useState, useRef } from 'react';
import { ScrollView, View, Text, Image, Pressable, Animated, TouchableOpacity } from 'react-native';
import { Toast, Icon } from '@ant-design/react-native';
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentProduct } from '../../store/products'
import FastImage from 'react-native-fast-image'
import HeaderTopSpace from '../../components/headerTopSpace';

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
    const left = useRef(new Animated.Value(6)).current;
    const width = useRef(new Animated.Value(78)).current;
    const toggleClick = () => {
        const _left = type == "Products" ? 92:6;
        const _width = type == "Products" ? 90:78;
        setType(type == "Products" ? "Calculator" : "Products")
        if(_left!=left){
            Animated.parallel([
                Animated.timing(left, {
                    toValue: _left,
                    duration: 250,
                    useNativeDriver: false,
                }).start(),
                Animated.timing(width, {
                    toValue: _width,
                    duration: 250,
                    useNativeDriver: false,
                }).start()
            ])
        }
    }

    const list = useSelector(state => state.products.list);
    const clickProduct = (pd)=>{
        dispatch(setCurrentProduct(pd))
        navigation.navigate(pd.path)
    }

    return (
        <View style={_global.pageContainer}>
            <HeaderTopSpace/>
            <ScrollView style={[_global.page,styles.page]}>
                <View style={styles.header}>
                    <View style={styles.toggleBtns}>
                        <Pressable style={styles.toggleBtn} onPress={toggleClick}>
                            <Text style={[styles.toggleText,type === "Products"?styles.active:null]}>Products</Text>
                        </Pressable>
                        <Pressable style={styles.toggleBtn} onPress={toggleClick}>
                            <Text style={[styles.toggleText,type === "Calculator"?styles.active:null]}>Calculator</Text>
                        </Pressable>
                        <Animated.View style={[styles.btnButtom,{left,width}]}></Animated.View>
                    </View>
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
        </View>
    );
}
export default HomePage