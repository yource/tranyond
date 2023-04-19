import React, { useState, useRef } from 'react';
import { Text, View, ScrollView, TextInput, Image, Animated, Easing } from 'react-native';
import intl from 'react-intl-universal';
import { Button, Modal, Toast } from '@ant-design/react-native'
import { PageHeader, Select } from '../../components';
import styles from './styles';

export default function () {
    const [result, setResult] = useState(false);
    const opacity = useRef(new Animated.Value(0)).current;;
    const [err, setErr] = useState({});
    const [v, setV] = useState("");
    const [vCustom, setVCustom] = useState("");

    const calculate = () => {
        var timer = 0;
        if (result) {
            Animated.timing(opacity, {
                toValue: 0,
                duration: 150,
                easing: Easing.linear,
                useNativeDriver: true
            }).start();
            timer = timer + 150
        }

        var _err = {};
        var value1;
        if (!v) {
            _err.value1 = intl.get("pleaseSelect");
        } else {
            if (v == "custom") {
                value1 = Number(vCustom);
                if (!vCustom || vCustom <= 0 || vCustom > 250) {
                    _err.value1 = intl.get("between0and250");
                }
            } else {
                value1 = Number(v)
            }
        }

        setErr(_err);
        if (Object.keys(_err).length > 0) {
            setResult(false)
        } else {
            setTimeout(() => {
                setResult(value1 * 0.75);
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 200,
                    easing: Easing.linear,
                    useNativeDriver: true
                }).start();
            }, timer)
        }
    }

    return (
        <View style={_global.pageContainer}>
            <PageHeader title={intl.get("bendingSurface")} />
            <ScrollView style={styles._global}>
                <View style={styles.section}>

                    <View style={[_global.inputRow, err.value1 ? _global.inputErr : null]}>
                        <View style={_global.inputRowMain}>
                            {
                                v ? <Text style={_global.inputLable}>{intl.get('V')}</Text> : null
                            }
                            <Select style={styles.input}
                                value={v}
                                placeholder={intl.get("V")}
                                options={[
                                    { value: '4', label: '4' },
                                    { value: '5', label: '5' },
                                    { value: '6', label: '6' },
                                    { value: '8', label: '8' },
                                    { value: '10', label: '10' },
                                    { value: '12', label: '12' },
                                    { value: '14', label: '14' },
                                    { value: '16', label: '16' },
                                    { value: '20', label: '20' },
                                    { value: '24', label: '24' },
                                    { value: '30', label: '30' },
                                    { value: '40', label: '40' },
                                    { value: '50', label: '50' },
                                    { value: '60', label: '60' },
                                    { value: '70', label: '70' },
                                    { value: '80', label: '80' },
                                    { value: '90', label: '90' },
                                    { value: '100', label: '100' },
                                    { value: '120', label: '120' },
                                    { value: '150', label: '150' },
                                    { value: 'Other', label: 'Other' },
                                ]}
                                onSelect={(value) => {
                                    if(value==="Other"){
										Modal.prompt("Please Input", '',(val)=>{
											if(val){
												val = Number(val);
												if (!val || val <= 0 || val > 150) {
													Toast.info(intl.get("between0and150"))
													setV("")
												}else{
													setV(val)
												}
											}
										},'default','',[intl.get("thickness")])
									}else{
										setV(value);
									}
                                    setErr(Object.assign(err, { value1: false }))
                                }}
                            />
                        </View>
                    </View>
                    <View style={_global.inputErrCon}>
                        <Text style={_global.inputErrText}>{err.value1 || ""}</Text>
                    </View>

                    <View style={styles.picCon}>
                        <Image source={require('../../assets/images/bending0.png')} style={styles.pic} />
                    </View>

                    <View style={_global.btnCon}>
                        <Button type='primary' onPress={calculate} style={_global.btn}>{intl.get('calculate')}</Button>
                    </View>
                </View>

                {
                    result !== false ? (
                        <Animated.View style={[styles.resultCon, { opacity }]}>
                            <View style={styles.result}>
                                <View style={styles.resultRow}>
                                    <Text style={styles.resultItem}>{intl.get('minBendingEdge') + result} mm</Text>
                                </View>
                            </View>
                        </Animated.View>
                    ) : null
                }
            </ScrollView>
        </View>
    )
}