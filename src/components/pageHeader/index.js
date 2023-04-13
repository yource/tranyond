import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@ant-design/react-native'
import styles from "./styles";
import HeaderTopSpace from '../headerTopSpace';

function Header(props) {
    const navigation = useNavigation();
    return (
        <View>
            <HeaderTopSpace></HeaderTopSpace>
            <View style={styles.header}>
                <TouchableOpacity style={styles.side} onPress={() => {
                    if (props.onBack) {
                        props.onBack();
                    } else {
                        navigation.goBack();
                    }
                }}>
                    <Icon name="left" color={_global.fontColor1} size={20} />
                </TouchableOpacity>
                <Text style={styles.title}>{props.title || ""}</Text>
                {
                    props.rightContent ?
                        <TouchableOpacity style={styles.side} onPress={() => {
                            if (props.rightClick) {
                                props.rightClick
                            }
                        }}>
                            {props.rightContent}
                        </TouchableOpacity> :
                        <View style={{ width: 50 }}></View>
                }
            </View>
        </View>
    )
}
export default Header