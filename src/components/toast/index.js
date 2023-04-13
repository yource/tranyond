import React, { useState, useEffect, useRef } from 'react';
import { Animated, Easing, Image, Text, StyleSheet, View, Modal } from 'react-native';
import { useTheme } from '../../common/themeProvider';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import RootSiblings from 'react-native-root-siblings';
import makeStyles from './styles';

let styles;
let topToastHideTimer = null;
var instance = null;
var timer = null;

function MidToast(props) {
    const insets = useSafeAreaInsets();
    const { colors, isDark } = useTheme();
    styles = makeStyles(colors, isDark, insets);
    const [style, setStyle] = useState({
        top: 0,
        left: 0,
    });
    const opacity = useRef(new Animated.Value(0)).current;
    const scale = useRef(new Animated.Value(0.8)).current;
    const onLayout = (layout) => {
        setStyle({
            top: _global.height / 2 - layout.height / 2,
            left: _global.width / 2 - layout.width / 2
        })
        Animated.parallel([
            Animated.timing(opacity, {
                toValue: 1,
                duration: 220,
                useNativeDriver: true
            }),
            Animated.timing(scale, {
                toValue: 1,
                duration: 220,
                useNativeDriver: true
            })
        ]).start()
    }
    return (
        <Animated.View style={[styles.midToast, style, {
            opacity,
            transform: [{ scale }]
        }]} onLayout={(e) => onLayout(e.nativeEvent.layout)}>
            <Text style={styles.midText}>{props.message}</Text>
        </Animated.View>
    )
}

function TopToast(props) {
    const insets = useSafeAreaInsets();
    const { colors, isDark } = useTheme();
    styles = makeStyles(colors, isDark, insets);
    const [height, setHeight] = useState(undefined);
    const translateY = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        if (height !== undefined && typeof height == "number") {
            Animated.timing(translateY, {
                toValue: height,
                duration: 220,
                useNativeDriver: true
            }).start();
            if (topToastHideTimer) clearTimeout(topToastHideTimer);
            topToastHideTimer = setTimeout(() => {
                Animated.timing(translateY, {
                    toValue: 0,
                    duration: 220,
                    useNativeDriver: true
                }).start();
                topToastHideTimer = null;
            }, props.duration)
        }
        return () => {
            if (topToastHideTimer) {
                clearTimeout(topToastHideTimer);
                topToastHideTimer = null;
            };
        }
    }, [height])
    return (
        <Animated.View style={[styles.topContainer, styles[props.type], { paddingTop: insets.top + 14 }, {
            transform: [{ translateY: translateY }]
        }]} onLayout={(e) => setHeight(e.nativeEvent.layout.height)}>
            <Text style={styles.topText}>{props.message}</Text>
        </Animated.View>
    )
}

function makeToast(message, duration, type) {
    const isTop = type && ['success', 'info', 'warning', 'error'].indexOf(type) > -1;
    if (instance && instance instanceof RootSiblings) {
        instance.destroy();
    }
    if (timer) {
        clearTimeout(timer)
    }
    if (topToastHideTimer) {
        clearTimeout(topToastHideTimer);
        topToastHideTimer = null;
    }
    instance = isTop ? 
        (new RootSiblings(<TopToast message={message} duration={duration} type={type} />)) : 
        (new RootSiblings(<MidToast message={message} duration={duration} />));
    timer = setTimeout(() => {
        if (instance instanceof RootSiblings) {
            instance.destroy();
        }
        instance = null;
        timer = null;
    }, isTop ? (duration + 220) : duration)
}

export default {
    show: (message, duration) => {
        makeToast(message, duration || 2000);
    },
    success: (message, duration) => {
        makeToast(message, duration || 2800, 'success');
    },
    error: (message, duration) => {
        makeToast(message, duration || 2800, 'error');
    },
    info: (message, duration) => {
        makeToast(message, duration || 2800, 'info');
    },
    warning: (message, duration) => {
        makeToast(message, duration || 2800, 'warning');
    },
}