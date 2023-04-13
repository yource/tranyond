import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Animated, Modal, Easing, ScrollView } from 'react-native';
import { useTheme } from '../../common/themeProvider';
import Icon from 'react-native-vector-icons/Feather';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

/**
 * 
 * @param {*} props 
 * {
 *  visible, setVisible, 
 *  title, content
 *  带关闭按钮 closeIcon=true
 *  多按钮 buttons[{text, color, closeDialog, click}
 *  单按钮 buttonText,buttonClick
 *  无按钮 buttons=fasle
 * }
 */

export default function (props) {
    const { colors, isDark } = useTheme();
    const [visible, setVisible] = useState(false);
    const opacity = useRef(new Animated.Value(0)).current;
    const scale = useRef(new Animated.Value(0.84)).current;
    const insets = useSafeAreaInsets();

    const toggleVisible = (fromProps) => {
        Animated.parallel([
            Animated.timing(opacity, {
                toValue: 0,
                duration: 160,
                easing: Easing.linear,
                useNativeDriver: true
            }),
            Animated.timing(scale, {
                toValue: 0.88,
                duration: 160,
                easing: Easing.linear,
                useNativeDriver: true
            })
        ]).start()
        setTimeout(() => {
            setVisible(!visible);
            if (fromProps!==true) props.setVisible(!visible);
        }, 160)
    }
    useEffect(() => {
        if (props.visible != visible) {
            if (props.visible) {
                setVisible(props.visible);
                if (props.visible) {
                    Animated.parallel([
                        Animated.timing(opacity, {
                            toValue: 1,
                            duration: 230,
                            easing: Easing.linear,
                            useNativeDriver: true
                        }),
                        Animated.timing(scale, {
                            toValue: 1,
                            duration: 230,
                            useNativeDriver: true
                        })
                    ]).start()
                }
            } else {
                toggleVisible(true)
            }
        }
    }, [props.visible])

    return (visible ? (
        <Modal visible={visible} animationType="none" transparent={true} style={{
            backgroundColor: 'none'
        }} onRequestClose={() => {
            if (props.closeIcon) {
                toggleVisible()
            }
        }}>
            <Animated.View style={[StyleSheet.absoluteFill, {
                backgroundColor: 'rgba(0,0,0,0.75)',
                alignItems: 'center',
                justifyContent: 'center',
                opacity
            }]}>
                <Animated.View style={{
                    width: props.width || 288,
                    paddingTop: 16,
                    borderRadius: 8,
                    backgroundColor: isDark ? "#cccccc" : "#ffffff",
                    transform: [{ scale }]
                }}>
                    {
                        props.closeIcon || props.title ?
                            <View style={{
                                height: 32, lineHeight: 32, paddingLeft: 18, flexDirection: 'row', alignItems: 'center'
                            }}>
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: '500',
                                    color: "#2c2c2e",
                                    flex: 1
                                }}>{props.title || ""}</Text>
                                {
                                    props.closeIcon ? (
                                        <TouchableOpacity style={{
                                            width: 50, height: 32, alignItems: 'center', justifyContent: 'center'
                                        }} onPress={() => { toggleVisible() }}>
                                            <Icon name="x" size={24} color="#2c2c2e" />
                                        </TouchableOpacity>
                                    ) : null
                                }
                            </View> : null
                    }

                    <ScrollView style={{
                        paddingLeft: 18,
                        paddingRight: 18,
                        maxHeight: _global.height - insets.top - insets.bottom - 250
                    }}>
                        {
                            props.content ?
                                <Text style={{
                                    fontSize: 16,
                                    lineHeight: 22,
                                    color: "#2c2c2e"
                                }}>{props.content}</Text> : null
                        }
                        {
                            props.children ? props.children : null
                        }
                    </ScrollView>

                    {
                        props.buttons !== false ?
                            <View style={{
                                display: 'flex',
                                borderTopWidth: StyleSheet.hairlineWidth,
                                borderTopColor: colors.grey3,
                                marginTop: 16,
                                height: 42,
                                display: 'flex',
                                flexDirection: 'row'
                            }}>
                                {
                                    props.buttons && props.buttons.length ? (
                                        props.buttons.map((item, idx) => {
                                            const isRight = idx == props.buttons.length - 1;
                                            return (
                                                <TouchableOpacity key={'dialogBtns_' + idx}
                                                    onPress={() => {
                                                        if (!item.click || item.closeDialog !== false) {
                                                            toggleVisible()
                                                        }
                                                        if (item.click) {
                                                            item.click()
                                                        }
                                                    }} style={{
                                                        flex: 1,
                                                        borderRightColor: isRight ? 'none' : colors.grey3,
                                                        borderRightWidth: isRight ? 0 : StyleSheet.hairlineWidth,
                                                    }}>
                                                    <Text style={{
                                                        color: item.color || "#03756e",
                                                        lineHeight: 41,
                                                        textAlign: 'center',
                                                        fontSize: 18
                                                    }}>{item.text || 'OK'}</Text>
                                                </TouchableOpacity>
                                            )
                                        })
                                    ) : (
                                        <TouchableOpacity onPress={() => {
                                            if (props.buttonClick) {
                                                props.buttonClick()
                                            } else {
                                                toggleVisible()
                                            }
                                        }} style={{ flex: 1 }}>
                                            <Text style={{
                                                color: "#03756e",
                                                lineHeight: 40,
                                                textAlign: 'center',
                                                fontSize: 18
                                            }}>{props.buttonText || "OK"}</Text>
                                        </TouchableOpacity>
                                    )
                                }
                            </View> : null
                    }
                </Animated.View>
            </Animated.View>
        </Modal>) : null
    )
}