import React, { useState, useRef } from 'react';
import { Text, View, ScrollView, TextInput, Image, Animated, Easing } from 'react-native';
import intl from 'react-intl-universal';
import { Button, Modal, Toast } from '@ant-design/react-native'
import { PageHeader, Select } from '../../components';
import styles from './styles';

export default function () {
    const [result, setResult] = useState(false);
    const opacity = useRef(new Animated.Value(0)).current;
    const scrollView = useRef(null);
    const [err, setErr] = useState({});
    const [L, setL] = useState("");
    const [A, setA] = useState("");
    const [B, setB] = useState("");
    const [R, setR] = useState("");
    const [T, setT] = useState("");

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
        var l = Number(L);
        var a = Number(A);
        var b = Number(B);
        var r = Number(R);
        var t = Number(T);
        if (!l || l <= 0) _err.L = intl.get("largeThan0");
        if (!a || a <= 0) _err.A = intl.get("largeThan0");
        if (!b || b <= 0) _err.B = intl.get("largeThan0");
        if (!r || r <= 0) _err.R = intl.get("largeThan0");
        if (!t || t <= 0) _err.T = intl.get("largeThan0");

        setErr(_err);
        if (Object.keys(_err).length > 0) {
            setResult(false)
        } else {
            scrollView.current.scrollToEnd({
                animated: true
            })
            setTimeout(() => {
                var result3 = Number(l-a-b+2*t+2*r).toFixed(2);
                var result1 = Number((2*Number(result3)-(r*3.1415926))/(t*3.1415926)).toFixed(2);
                var result2 = Number((Number(result1))*(3.1415926/2)).toFixed(2);
                setResult({result1,result2,result3})
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
            <PageHeader title={intl.get("bendingKY1")} />
            <ScrollView style={_global.page} ref={scrollView}>
                <View style={styles.section}>

                    <View style={[_global.inputRow, err.L ? _global.inputErr : null]}>
						<View style={_global.inputRowMain}>
							{
								L ? <Text style={_global.inputLable}>{intl.get('flatLength')}</Text> : null
							}
							<TextInput style={_global.input}
								keyboardType='numeric'
								returnKeyType='done'
								value={L}
								placeholder={intl.get("flatLength")}
								onChangeText={(val) => {
									setL(val);
									setErr(Object.assign(err, { L: false }))
								}}
								placeholderTextColor={_global.inputLabelColor}
							/>
						</View>
					</View>
					<View style={_global.inputErrCon}>
						<Text style={_global.inputErrText}>{err.L || ""}</Text>
					</View>

                    <View style={[_global.inputRow, err.A ? _global.inputErr : null]}>
						<View style={_global.inputRowMain}>
							{
								A ? <Text style={_global.inputLable}>{intl.get('flatA')}</Text> : null
							}
							<TextInput style={_global.input}
								keyboardType='numeric'
								returnKeyType='done'
								value={A}
								placeholder={intl.get("flatA")}
								onChangeText={(val) => {
									setA(val);
									setErr(Object.assign(err, { L: false }))
								}}
								placeholderTextColor={_global.inputLabelColor}
							/>
						</View>
					</View>
					<View style={_global.inputErrCon}>
						<Text style={_global.inputErrText}>{err.A || ""}</Text>
					</View>

                    <View style={[_global.inputRow, err.B ? _global.inputErr : null]}>
						<View style={_global.inputRowMain}>
							{
								B ? <Text style={_global.inputLable}>{intl.get('flatB')}</Text> : null
							}
							<TextInput style={_global.input}
								keyboardType='numeric'
								returnKeyType='done'
								value={B}
								placeholder={intl.get("flatB")}
								onChangeText={(val) => {
									setB(val);
									setErr(Object.assign(err, { B: false }))
								}}
								placeholderTextColor={_global.inputLabelColor}
							/>
						</View>
					</View>
					<View style={_global.inputErrCon}>
						<Text style={_global.inputErrText}>{err.B || ""}</Text>
					</View>

                    <View style={[_global.inputRow, err.R ? _global.inputErr : null]}>
						<View style={_global.inputRowMain}>
							{
								R ? <Text style={_global.inputLable}>{intl.get('internalRadius')}</Text> : null
							}
							<TextInput style={_global.input}
								keyboardType='numeric'
								returnKeyType='done'
								value={R}
								placeholder={intl.get("internalRadius")}
								onChangeText={(val) => {
									setR(val);
									setErr(Object.assign(err, { R: false }))
								}}
								placeholderTextColor={_global.inputLabelColor}
							/>
						</View>
					</View>
					<View style={_global.inputErrCon}>
						<Text style={_global.inputErrText}>{err.R || ""}</Text>
					</View>

                    <View style={[_global.inputRow, err.T ? _global.inputErr : null]}>
						<View style={_global.inputRowMain}>
							{
								T ? <Text style={_global.inputLable}>{intl.get('thicknessT')}</Text> : null
							}
							<TextInput style={_global.input}
								keyboardType='numeric'
								returnKeyType='done'
								value={T}
								placeholder={intl.get("thicknessT")}
								onChangeText={(val) => {
									setT(val);
									setErr(Object.assign(err, { T: false }))
								}}
								placeholderTextColor={_global.inputLabelColor}
							/>
						</View>
					</View>
					<View style={_global.inputErrCon}>
						<Text style={_global.inputErrText}>{err.T || ""}</Text>
					</View>


                    <View style={styles.picCon}>
                        <Image source={require('../../assets/images/bending05_1.png')} style={styles.pic} />
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
                                    <Text style={styles.resultItem}>{intl.get('KFactor')}{result.result1}</Text>
                                </View>
                                <View style={styles.resultRow}>
                                    <Text style={styles.resultItem}>{intl.get('YFactor')}{result.result2}</Text>
                                </View>
                                <View style={styles.resultRow}>
                                    <Text style={styles.resultItem}>{intl.get('BendAllowance')}{result.result3}</Text>
                                </View>
                            </View>
                        </Animated.View>
                    ) : null
                }
            </ScrollView>
        </View>
    )
}