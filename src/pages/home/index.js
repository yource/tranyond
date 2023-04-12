import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, Pressable, ImageBackground } from 'react-native';
import { Toast, Icon } from '@ant-design/react-native';
import { Dimensions } from 'react-native'
import styles from './styles';
import calculators from '../../constant/calculators';
import products from '../../constant/products';

const { width, height } = Dimensions.get("window");
const imageSize = width - 72;
function HomePage({ navigation }) {
    const [type, setType] = useState('Products')
    const toggleClick = () => {
        setType(type == "Products" ? "Calculator" : "Products")
    }
    return (
        <SafeAreaView>
            <ScrollView style={styles.page}>
                <View style={styles.header}>
                    <Pressable style={styles.toggleBtn} fill='none' onPress={toggleClick}>
                        <Image style={styles.toggleIcon} source={require('../../assets/images/toggle.png')} />
                        <Text style={styles.toggleText}>{type}</Text>
                    </Pressable>
                    <Pressable onPress={() => { navigation.navigate("user") }}>
                        <Image style={styles.userIcon} source={require('../../assets/images/user.png')} />
                    </Pressable>
                </View>
                <View style={styles.listCon}>
                {
                    type === "Products" ? products.map(item => (
                        <Pressable key={item.id} onPress={() => { navigation.navigate(item.path) }} style={{
                            width: imageSize, height: imageSize, marginBottom: 32, borderRadius: 10, overflow:'hidden'
                        }}>
                            <ImageBackground source={{uri: item.pic}} resizeMode="cover" style={{
                                width: imageSize, height: imageSize, justifyContent:'flex-end'
                            }}>
                                <Text style={styles.productName}>{item.name}</Text>
                                <Text style={styles.productDesc}>{item.desc}</Text>
                            </ImageBackground>
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