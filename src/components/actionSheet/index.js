import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Animated, Modal, Easing, Pressable, ScrollView, FlatList } from 'react-native';
import { useTheme } from '../../common/themeProvider';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
/**
 * 
 * @param {*} props 
 * {
 *  visible, setVisible, wrapClose, 
 *  title, content, 
 *  buttons[{text, color, closeDialog}]
 * }
 */

const Item = ({ item, onPress, divider, hairlineWidth, label }) => (
    <TouchableOpacity style={{
        borderBottomColor: divider,
        borderBottomWidth: hairlineWidth,
        height: 40
    }} onPress={onPress}>
        <Text style={{
            lineHeight: 40,
            color: "#242424"
        }}>{label}</Text>
    </TouchableOpacity>
);

export default function (props) {
    const { colors, isDark } = useTheme();
    const [visible, setVisible] = useState(false);
    const insets = useSafeAreaInsets();
    var height = 20 + 44 + insets.bottom + (props && props.options && props.options.length && props.options.length * 40 || 0)
    var maxHeight = _global.height-insets.top-_global.width/2;
    if (height > maxHeight) height = maxHeight;
    const opacity = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(height)).current;

    const hide = () => {
        Animated.parallel([
            Animated.timing(opacity, {
                toValue: 0,
                duration: 200,
                easing: Easing.linear,
                useNativeDriver: true
            }),
            Animated.timing(translateY, {
                toValue: height,
                duration: 200,
                easing: Easing.linear,
                useNativeDriver: true
            })
        ]).start()
        setTimeout(() => {
            setVisible(!visible);
            props.setVisible(!visible);
        }, 200)
    }
    const onSelect = (value) => {
        hide();
        if (props.onSelect) {
            setTimeout(() => {
                props.onSelect(value)
            }, 200)
        }
    }
    useEffect(() => {
        if (props.visible != visible) {
            setVisible(props.visible);
            if (props.visible) {
                Animated.parallel([
                    Animated.timing(opacity, {
                        toValue: 1,
                        duration: 250,
                        easing: Easing.linear,
                        useNativeDriver: true
                    }),
                    Animated.timing(translateY, {
                        toValue: 0,
                        duration: 250,
                        useNativeDriver: true
                    })
                ]).start()
            }
        }
    }, [props.visible])

    const renderItem = ({ item }) => {
        return (
            <Item
                label={props.language?item[props.language]:item.label}
                item={item}
                divider={colors.divider}
                hairlineWidth={StyleSheet.hairlineWidth}
                onPress={() => {
                    onSelect(props.fullValue?item:item.value)
                }}
            />
        );
    };

    return (!visible ? null :
        <Modal visible={true} animationType="none" transparent={true} style={{
            backgroundColor: 'none',
        }} onRequestClose={hide}>
            <Pressable style={StyleSheet.absoluteFill} onPress={hide}>
                <Animated.View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    opacity
                }} />
            </Pressable>

            <Animated.View style={{
                backgroundColor: isDark ? "#cccccc" : "#ffffff",
                left: 0, right: 0, bottom: 0, height,
                position: 'absolute',
                transform: [{ translateY }]
            }}>
                <View style={{
                    height: 44, paddingLeft: 20,
                    flexDirection: 'row', justifyContent: 'space-between',
                    backgroundColor: colors.grey5
                }}>
                    <Text style={{
                        fontSize: 16, color: colors.grey2, lineHeight: 44
                    }}>{props.title || ""}</Text>
                    <TouchableOpacity style={{
                        width: 60, height: 44,
                        justifyContent: 'center', alignItems: 'center',
                    }} onPress={hide}>
                        <Icon name="x" color={colors.grey3} size={22} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, paddingLeft: 20, paddingRight: 20 }}>
                    <FlatList
                        data={props.options}
                        renderItem={renderItem}
                        keyExtractor={(item) => (item.en || item.value)}
                    />
                </View>
            </Animated.View>
        </Modal>
    )
}