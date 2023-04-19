import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Animated, Modal, Easing, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
/**
 * 
 * @param {*} props 
 * {
 *  value, options, onSelect, placeholder
 *  style, textStyle, dropdownStyle, optionTextStyle
 * }
 */

export default function (props) {
    const isDark = true;
    const [visible, setVisible] = useState(false);
    const insets = useSafeAreaInsets();
    const curHeight = useRef(new Animated.Value(0)).current;
    const element = useRef(null);
    const [label, setLabel] = useState("");
    const [dropdownStyle, setDropdownStyle] = useState(null);
    const optionStyle = {
        height: 34,
        borderBottomColor: _global.grey8,
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
    const show = () => {
        element.current.measure((x, y, width, height, pageX, pageY) => {
            let position = { width, height, x: pageX, y: pageY }
            let _height = props.options.length * 34+10;
            let topSpace = position.y - insets.top;
            let bottomSpace = _global.height - insets.bottom - position.y - position.height;
            let onTop = topSpace > bottomSpace;
            let style = {
                backgroundColor: isDark ? "#cccccc" : "#ffffff",
                position: 'absolute',
                left: position.x,
                right: _global.width - position.x,
                borderColor: _global.grey6,
                borderWidth: 1,
                width: position.width,
                overflow: "hidden",
                borderRadius: 5,
                paddingLeft: 5,
                paddingTop: 5,
                paddingRight: 5
            }
            if (onTop) {
                if (_height > topSpace - 100) {
                    _height = topSpace - 123
                }
                style.bottom = position.y + 5
            } else {
                if (_height > bottomSpace - 100) {
                    _height = bottomSpace - 123
                }
                style.top = position.y + position.height - 5
            }
            setDropdownStyle(style);
            setVisible(true);
            Animated.timing(curHeight, {
                toValue: _height,
                duration: 180,
                easing: Easing.linear,
                useNativeDriver: false
            }).start()
        })

    }
    const hide = () => {
        Animated.timing(curHeight, {
            toValue: 0,
            duration: 140,
            easing: Easing.linear,
            useNativeDriver: false
        }).start()
        setTimeout(() => {
            setVisible(false)
        }, 140)
    }
    const onSelect = (value) => {
        hide();
        if (props.onSelect) props.onSelect(value)
    }

    useEffect(() => {
        let curLabel = "";
        const findOption = props.options.find(item => (item.value === props.value));
        if (findOption) {
            curLabel = findOption.label
        }else{
            curLabel = props.value
        }
        if (label !== curLabel) {
            setLabel(curLabel)
        }
    }, [props.value])

    return (
        <>
            <Pressable style={[props.style, {
                flexDirection: 'row', alignItems: 'center',
            }]} onPress={show} ref={element}>
                {label ?
                    <Text style={[{fontSize: 16, color: _global.inputValueColor, flex: 1}, props.textStyle]}>{label}</Text> :
                    <Text style={[{fontSize: 16, color: _global.inputLabelColor, flex: 1}, props.textStyle]}>{props.placeholder || "please select..."}</Text>
                }
            </Pressable>
            {
                visible ?
                    <Modal visible={true} animationType="none" transparent={true} style={{
                        backgroundColor: 'none',
                    }} onRequestClose={hide}>
                        <Pressable style={[StyleSheet.absoluteFill, {
                            backgroundColor: 'rgba(0,0,0,0.08)'
                        }]} onPress={hide}></Pressable>

                        <Animated.ScrollView style={[dropdownStyle, {
                            height: curHeight
                        },props.dropdownStyle]}>
                            {
                                props.options.map((item,idx) => (
                                    <Pressable style={[optionStyle,idx==props.options.length-1?{borderBottomWidth:0}:{}]} key={item.value} onPress={() => { onSelect(item.value) }}>
                                        <Text style={[{
                                            lineHeight: 34, fontSize: 15, color: "#43484d", textAlign:'center'
                                        }, props.optionTextStyle]}>{item.label}</Text>
                                    </Pressable>
                                ))
                            }
                        </Animated.ScrollView>
                    </Modal> : null
            }
        </>

    )
}