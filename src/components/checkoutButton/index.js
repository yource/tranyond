import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Animated, Modal, Easing, ScrollView } from 'react-native';
import { Toast, Icon, Modal as ModalPopup } from '@ant-design/react-native';

export default function CheckoutButton(props){

    return (
        <ModalPopup
                popup
                visible={webviewShow}
                animationType="slide-up"
                onClose={hideWebview}
                onRequestClose={onRequestClose}
                style={{height: _global.height-110,borderTopLeftRadius: 16,borderTopRightRadius: 16}}>
                <View style={{
                    height: 40,
                    flexDirection:'row',
                    alignItems: 'center',
                    backgroundColor:_global.pageBackgroundColor,
                    borderBottomColor: '#111111',
                    borderBottomWidth: 2,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12}}>
                    <Text style={{
                        flex: 1, 
                        color: "#ffffff",
                        paddingLeft: 15,
                        fontSize: 18,
                        fontWeight: 500
                        }}>{webviewTitle}</Text>
                    <Pressable 
                        style={{width:50,height:40,alignItems:'center',justifyContent:'center'}}
                        onPress={hideWebview}>
                        <Image source={require("../../assets/icon/close1.png")} style={{width: 24,height:24, opacity:0.8}} />
                    </Pressable>
                </View>
                <View style={{
                    height: 2, 
                    marginTop: -2,
                    backgroundColor:_global.buttonBackgroundColor,
                    width: parseInt(progress*100)+'%'}}></View>
                <WebView
                    ref={webview}
                    onLoadStart={(syntheticEvent)=>{
                        const { nativeEvent } = syntheticEvent;
                        webviewCanGoBack = nativeEvent.canGoBack
                        setProgress(10)
                    }}
                    onLoadProgress={({ nativeEvent }) => {
                        setProgress(nativeEvent.progress)
                    }}
                    onLoadEnd={(syntheticEvent)=>{
                        const { nativeEvent } = syntheticEvent;
                        webviewCanGoBack = nativeEvent.canGoBack
                        setTimeout(()=>{
                            setProgress(0)
                        },500)
                    }}
                    onError={() => {
                        hideWebview()
                        Toast("Network Error")
                    }}
                    onRenderProcessGone={syntheticEvent => {
                        hideWebview()
                        Toast("Failed to open page")
                    }}
                    startInLoadingState={true}
                    renderLoading={() => <ActivityIndicator/>}
                    originWhitelist={['*']}
                    source={{uri: webviewUrl}} 
                    style={{flex:0,height: _global.height-160,backgroundColor: '#dedede'}}
                    containerStyle={{flex:0,height: _global.height-160}}/>
            </ModalPopup>
    )
}