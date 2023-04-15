import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, Pressable, ImageBackground, TouchableOpacity, Modal } from 'react-native';
import { Toast, Icon } from '@ant-design/react-native';
import { BlurView } from "@react-native-community/blur";
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import FastImage from 'react-native-fast-image'
import { PageHeader, HeaderTopSpace } from '../../components'
import Video from 'react-native-video';
import Pdf from 'react-native-pdf';

function ProductPage({ navigation }) {
    const dispatch = useDispatch();
    const userinfo = useSelector(state => state.user.userinfo);
    const currentProduct = useSelector(state => state.products.currentProduct);
    const sections = currentProduct.detail.sections;
    const [activeModel, setActiveModel] = useState(0); // 当前选中的model序号
    const [dialog, setDialog] = useState("")
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
                                            section.content.map((md, idx) => (
                                                md.attrs && activeModel == idx ?
                                                    <View style={styles.attrs} key={idx}>
                                                        {
                                                            md.attrs.map(attr => (
                                                                <View key={attr.name} style={[styles.attrItem, attr.style]}>
                                                                    <Text style={[styles.attrValue, attr.valueStyle]}>{attr.value}</Text>
                                                                    <Text style={[styles.attrName, attr.nameStyle]}>{attr.name}</Text>
                                                                </View>
                                                            ))
                                                        }
                                                    </View> : null
                                            ))
                                        }
                                        {
                                            section.content.map((md, idx) => (
                                                <View key={idx}>
                                                    {
                                                        md.desc ? <Text style={styles.modelDesc}>{md.desc}</Text> : null
                                                    }
                                                    <Pressable style={[styles.modelItem, activeModel == idx ? styles.modelActive : null]} onPress={() => { setActiveModel(idx) }}>
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
                                                    console.log("open link")
                                                }
                                            }}
                                        ><Text style={styles.buttonText}>{section.content}</Text></TouchableOpacity>
                                    </View> : null
                            }
                            {
                                section.type === "button" && section.dialogContent ? (
                                    <Modal
                                        visible={dialog == section.dialogContent.title}
                                        animationType="none"
                                        transparent={true}
                                        onRequestClose={() => {
                                            setDialog("")
                                        }}>
                                        <BlurView style={styles.dialogContainer} blurType="light">
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
                                                                    sect.type == "attrs" ? sect.attrs.map(at => (
                                                                        <View style={styles.dialogAttrItem}>
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
                                                                        <Video source={{ uri: sect.content }} controls={true}
                                                                            style={styles.dialogVideo} />
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
                                                                                source={{uri:sect.content}}
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
                                        </BlurView>
                                    </Modal>
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
        </View>
    );
}
export default ProductPage