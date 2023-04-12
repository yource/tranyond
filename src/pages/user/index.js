import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, Pressable } from 'react-native';
import { Button } from '@ant-design/react-native'
import { Toast, Icon } from '@ant-design/react-native';
import styles from './styles'

function HomePage({ navigation }) {
    const [type, setType] = useState('Product')
    const toggleClick = () => {
        setType(type == "Product" ? "Calculator" : "Product")
    }
    return (
        <View style={styles.header}>
            <Button style={styles.toggleBtn} fill='none' onPress={toggleClick}>
                <Image style={styles.toggleIcon} source={require('../../assets/images/toggle.png')} />
                <Text>{type}</Text>
            </Button>
            <Pressable onPress={() => { navigation.navigate("user") }}>
                <Image style={styles.userIcon} source={require('../../assets/images/user.png')} />
            </Pressable>
        </View>
    );
}
export default HomePage