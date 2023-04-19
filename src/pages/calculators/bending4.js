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
    const [o,setO] = useState("");
    const [n,setN] = useState("");
    const [r,setR] = useState("");

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
        var value1 = Number(o);
        var value2 = Number(n);
        var value3 = Number(r);
        if(!value1||value1<=0) _err.value1 = intl.get("largeThan0");
        if(!value2||value2<=0) _err.value2 = intl.get("largeThan0");
        if(!value3||value3<=0) _err.value3 = intl.get("largeThan0");

        setErr(_err);
        if (Object.keys(_err).length > 0) {
            setResult(false)
        } else {
            setTimeout(() => {
                var q = Number(180-(value1/value2)).toFixed(2);
                var p = Number((3.1415926*value3*(180-value1))/(180*value2)).toFixed(2);
                setResult({q,p})
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
            <PageHeader title={intl.get("bendingArc1")} />
            <ScrollView style={_global.page}>
                <View style={styles.section}>

                    <View style={[_global.inputRow, err.value1 ? _global.inputErr : null]}>
						<View style={_global.inputRowMain}>
							{
								o ? <Text style={_global.inputLable}>{intl.get('overallAngle')}</Text> : null
							}
							<TextInput style={_global.input}
								keyboardType='numeric'
								returnKeyType='done'
								value={o}
								placeholder={intl.get("overallAngle")}
								onChangeText={(val) => {
									setO(val);
									setErr(Object.assign(err, { value1: false }))
								}}
								placeholderTextColor={_global.inputLabelColor}
							/>
						</View>
					</View>
					<View style={_global.inputErrCon}>
						<Text style={_global.inputErrText}>{err.value1 || ""}</Text>
					</View>

                    <View style={[_global.inputRow, err.value2 ? _global.inputErr : null]}>
						<View style={_global.inputRowMain}>
							{
								n ? <Text style={_global.inputLable}>{intl.get('numberOfBends')}</Text> : null
							}
							<TextInput style={_global.input}
								keyboardType='numeric'
								returnKeyType='done'
								value={n}
								placeholder={intl.get("numberOfBends")}
								onChangeText={(val) => {
									setN(val);
									setErr(Object.assign(err, { value2: false }))
								}}
								placeholderTextColor={_global.inputLabelColor}
							/>
						</View>
					</View>
					<View style={_global.inputErrCon}>
						<Text style={_global.inputErrText}>{err.value2 || ""}</Text>
					</View>

                    <View style={[_global.inputRow, err.value3 ? _global.inputErr : null]}>
						<View style={_global.inputRowMain}>
							{
								r ? <Text style={_global.inputLable}>{intl.get('finalRadius')}</Text> : null
							}
							<TextInput style={_global.input}
								keyboardType='numeric'
								returnKeyType='done'
								value={r}
								placeholder={intl.get("finalRadius")}
								onChangeText={(val) => {
									setR(val);
									setErr(Object.assign(err, { value3: false }))
								}}
								placeholderTextColor={_global.inputLabelColor}
							/>
						</View>
					</View>
					<View style={_global.inputErrCon}>
						<Text style={_global.inputErrText}>{err.value3 || ""}</Text>
					</View>

                    <View style={styles.picCon}>
                        <Image source={require('../../assets/images/bending04_1.png')} style={[styles.pic,{
                            width: 300, height: 169
                        }]} />
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
                                    <Text style={[styles.resultItem,{fontSize: 15}]}>{intl.get('singleAngle') + result.q} mm</Text>
                                </View>
                                <View style={styles.resultRow}>
                                    <Text style={[styles.resultItem,{fontSize: 15}]}>{intl.get('bendsDistance') + result.p} mm</Text>
                                </View>
                            </View>
                        </Animated.View>
                    ) : null
                }
            </ScrollView>
        </View>
    )
}