import React, { useState, useRef } from 'react';
import { ScrollView, View, Text, Image, Pressable, ActivityIndicator, TouchableOpacity, Modal as ModalWrap } from 'react-native';
import { WebView } from 'react-native-webview';
import { Toast, Icon, Modal as ModalPopup } from '@ant-design/react-native';
import { BlurView } from "@react-native-community/blur";
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import FastImage from 'react-native-fast-image'
import { PageHeader, HeaderTopSpace } from '../../components'
import Video from 'react-native-video';
import Pdf from 'react-native-pdf';
import _global from '../../constant/global';

function ProductPage({ navigation }) {
    const dispatch = useDispatch();
    const userinfo = useSelector(state => state.user.userinfo);
    const currentProduct = useSelector(state => state.products.currentProduct);
    const sections = currentProduct.detail.sections;
    const [activeModel, setActiveModel] = useState(0); // 当前选中的model序号
    const [dialog, setDialog] = useState("")
    const [progress, setProgress] = useState(0)
    const webview = useRef(null)
    const [webviewShow,setWebviewShow] = useState(false)
    const [webviewUrl,setWebviewUrl] = useState("about:blank")
    const [webviewTitle,setWebviewTitle] = useState("")
    const openWebview=(url,title)=>{
        if(url.indexOf("//")<0){
            url = "//"+url
        }
        setWebviewUrl(url)
        setWebviewTitle(title)
        setWebviewShow(true)
    }
    const hideWebview = ()=>{
        setWebviewShow(false)
        setTimeout(()=>{
            setWebviewTitle("")
            setWebviewUrl("about:blank")
        },200)
    }
    var webviewCanGoBack = false;
    const onRequestClose = ()=>{
        if(webviewCanGoBack){
            webview.current.goback()
            return true;
        }
        return false
    }
    return (
        <View style={_global.pageContainer}>
            <PageHeader title={currentProduct.name} />
            <ScrollView style={[_global.page, styles.page]}>
                <View style={{ height: 24 }}></View>
                {
                    sections.map((section, idx) => (
                        <View key={idx} style={styles[section.type + "Section"]}>
                            {
                                section.type === "image" ?
                                    <FastImage
                                        style={[styles.image, section.style]}
                                        source={{ uri: section.content }}
                                        resizeMode={FastImage.resizeMode.contain} ></FastImage> : null
                            }
                            {
                                section.type === "centerTitle" ?
                                    <Text style={[styles.centerTitle, section.style]}>{section.content}</Text> : null
                            }
                            {
                                section.type === "centerSubTitle" ?
                                    <Text style={[styles.centerSubTitle, section.style]}>{section.content}</Text> : null
                            }
                            {
                                section.type === "model" ?
                                    <>
                                        {
                                            section.content.map((md, idxmd) => (
                                                md.attrs && activeModel == idxmd ?
                                                    <View style={styles.attrs} key={'md' + idxmd}>
                                                        {
                                                            md.attrs.map(attr => (
                                                                <View key={'attr' + attr.name} style={[styles.attrItem, attr.style]}>
                                                                    <Text style={[styles.attrValue, attr.valueStyle]}>{attr.value}</Text>
                                                                    <Text style={[styles.attrName, attr.nameStyle]}>{attr.name}</Text>
                                                                </View>
                                                            ))
                                                        }
                                                    </View> : null
                                            ))
                                        }
                                        {
                                            section.content.map((md, idxmd1) => (
                                                <View key={'md1' + idxmd1}>
                                                    {
                                                        md.desc ? <Text style={styles.modelDesc}>{md.desc}</Text> : null
                                                    }
                                                    <Pressable style={[styles.modelItem, activeModel == idxmd1 ? styles.modelActive : null]} onPress={() => { setActiveModel(idxmd1) }}>
                                                        <Text style={styles.modelName}>{md.name}</Text>
                                                        <Text style={styles.modelPrice}>{md.price}</Text>
                                                    </Pressable>
                                                </View>
                                            ))
                                        }
                                    </> : null
                            }
                            {
                                section.type === "button" ?
                                    <View style={styles.buttonCon}>
                                        <TouchableOpacity
                                            style={[styles.button, styles["button" + section.color]]}
                                            activeOpacity={0.5}
                                            onPress={() => {
                                                if (section.dialogContent) {
                                                    setDialog(section.dialogContent.title)
                                                } else if (section.link) {
                                                    openWebview(section.link,section.title||"")
                                                }
                                            }}
                                        ><Text style={styles.buttonText}>{section.content}</Text></TouchableOpacity>
                                    </View> : null
                            }
                            {
                                section.type === "button" && section.dialogContent ? (
                                    <ModalWrap
                                        visible={dialog == section.dialogContent.title}
                                        animationType="none"
                                        transparent={true}
                                        onRequestClose={() => {
                                            setDialog("")
                                        }}>
                                        <BlurView style={styles.dialogBlurWrap} blurType="light">
                                            <View style={styles.dialogContainer}>
                                                <HeaderTopSpace />
                                                <View style={styles.dialog}>
                                                    <View style={styles.dialogHeader}>
                                                        <Text style={styles.dialogHeaderTitle}>{section.dialogContent.title}</Text>
                                                        <Pressable style={styles.dialogCloseBtn} onPress={() => { setDialog("") }}>
                                                            <Icon name="close-circle" size={30} color={_global.fontColor3}></Icon>
                                                        </Pressable>
                                                    </View>
                                                    <ScrollView style={styles.dialogBody}>
                                                        {
                                                            section.dialogContent.sections.map((sect, idx1) => (
                                                                <View style={styles['dialogSection_' + sect.type]} key={"sect" + idx1}>
                                                                    {
                                                                        sect.type == "attrs" ? sect.attrs.map((at, atidx) => (
                                                                            <View style={styles.dialogAttrItem} key={'at' + atidx}>
                                                                                <Text style={styles.dialogAttrName}>{at.name}</Text>
                                                                                {
                                                                                    at.values.map((val, idx2) => (
                                                                                        <View key={"atv" + idx2} style={styles.dialogAttrLine}>
                                                                                            <Text style={styles.dialogAttrLabel}>{sect.models[idx2]}</Text>
                                                                                            <Text style={styles.dialogAttrValue}>{val}</Text>
                                                                                        </View>
                                                                                    ))
                                                                                }
                                                                            </View>
                                                                        )) : null
                                                                    }
                                                                    {
                                                                        sect.type == "video" ? (
                                                                            <View style={[styles.dialogVideoCon,{
                                                                                width: '100%',
                                                                                height: parseInt((_global.width-36>420?420:_global.width-36)/(sect.width/sect.height))
                                                                            }]}>
                                                                                <ActivityIndicator />
                                                                                <Video source={{ uri: sect.content }} controls={true}
                                                                                style={styles.dialogVideo} />
                                                                            </View>
                                                                        ) : null
                                                                    }
                                                                    {
                                                                        sect.type == "title" ? (
                                                                            <Text style={[styles.dialogContentTitle, sect.style]}>{sect.content}</Text>
                                                                        ) : null
                                                                    }
                                                                    {
                                                                        sect.type == "text" ? (
                                                                            <Text style={[styles.dialogContentText, sect.style]}>{sect.content}</Text>
                                                                        ) : null
                                                                    }
                                                                    {
                                                                        sect.type == "image" ? (
                                                                            <View style={styles.dialogImageCon}>
                                                                                <FastImage
                                                                                    style={[styles.image, sect.style]}
                                                                                    source={{ uri: sect.content }}
                                                                                    resizeMode={FastImage.resizeMode.contain} ></FastImage>
                                                                            </View>
                                                                        ) : null
                                                                    }
                                                                    {
                                                                        sect.type == "pdf" ? (
                                                                            <View style={styles.dialogPdfCon}>
                                                                                <Pdf
                                                                                    source={{ uri: sect.content }}
                                                                                    style={styles.dialogPdf} />
                                                                            </View>
                                                                        ) : null
                                                                    }
                                                                </View>
                                                            ))
                                                        }
                                                        <View style={{ height: 50 }}></View>
                                                    </ScrollView>
                                                </View>
                                            </View>
                                        </BlurView>
                                    </ModalWrap>
                                ) : null
                            }
                            {
                                section.type === "gap" ?
                                    <View style={[styles.gap, section.style]}></View> : null
                            }
                            {
                                section.type === "text" ? (
                                    section.content.indexOf("\n") > -1 ? (
                                        section.content.split("\n").map((t, idx3) => (
                                            <Text key={idx3} style={[styles.text, section.style]}>{t}</Text>
                                        ))
                                    ) : (<Text style={[styles.text, section.style]}>{section.content}</Text>)
                                ) : null
                            }
                        </View>
                    ))
                }
                <View style={{ height: 50 }}></View>
            </ScrollView>

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
        </View>
    );
}
export default ProductPage