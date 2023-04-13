import React, { useState, useEffect, useRef } from 'react';
import { View, Animated, Easing, Image } from 'react-native';
import { Overlay } from '@rneui/themed';
import {colors} from '../../common/theme';
import RootSiblings from 'react-native-root-siblings';
import loadingPic from '../../assets/icon/loading.png';

export function LoadingIcon(props){
    const size = props.size || 48;
    const deg = useRef(new Animated.Value(0)).current;
    useEffect(()=>{
        Animated.loop(
            Animated.timing(deg,{
                toValue: 360,
                duration: 860,
                easing: Easing.linear,
                useNativeDriver: true
            })
        ).start();
    },[deg])
    return (
        <Animated.View style={{
            transform: [{rotate: deg.interpolate({
                inputRange:[0,360],
                outputRange:['0deg','360deg']
            })}],
        }}>
            <Image source={loadingPic} style={{width:size,height:size}} />
        </Animated.View>
    )
}

function LoadingWrap(){
    return (
        <Overlay isVisible={true} overlayStyle={{
            padding: 0,
            borderRadius: 8
        }}>
            <View style={{
                width: 100,
                height: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: "#ffffff",
                borderRadius: 12
            }}>
                <LoadingIcon/>
            </View>
        </Overlay>
    )
}

var count = 0;
var loadingInstance = null;
export default {
    show: ()=>{
        count++;
        if(count>0 && !loadingInstance){
            loadingInstance = new RootSiblings(<LoadingWrap/>)
        }
    },
    hide: ()=>{
        count--;
        if(count<0){
            count=0;
        }
        if(count==0 && loadingInstance){
            if (loadingInstance instanceof RootSiblings){
                loadingInstance.destroy();
            }
            loadingInstance = null;
        }
    }
}