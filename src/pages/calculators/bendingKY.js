import React, { useState, useRef } from 'react';
import { Text, View, ScrollView, TextInput, Image, Animated, Easing } from 'react-native';
import { Button } from '@rneui/themed';
import { PageHeader, Select } from '../../components';
import { useTheme } from '../../common/themeProvider';
import { useLocale } from '../../common/localeProvider';
import makeStyles from './styles';

export default function () {
    const { isDark, colors, theme } = useTheme();
    const styles = makeStyles(colors, isDark);
    const { intl } = useLocale();
    const [result, setResult] = useState(false);
    const opacity = useRef(new Animated.Value(0)).current;;
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
        <View style={theme.page}>
            <PageHeader title={intl.get("bendingKY1")} />
            <ScrollView style={styles.page}>
                <View style={styles.section}>

                    <View style={styles.row}>
                        <Text style={styles.label}>{intl.get('flatLength')}</Text>
                        <View style={styles.right}>
                            <View style={styles.inputCon}>
                                <TextInput style={styles.input} keyboardType='numeric' returnKeyType='done'
                                    placeholder={intl.get("pleaseEnter")} placeholderTextColor={colors.grey3}
                                    value={L}
                                    onChangeText={(val) => {
                                        setL(val);
                                        setErr(Object.assign(err, { L: false }))
                                    }}
                                />
                            </View>
                            <View style={[styles.errorCon, err.L ? { borderTopColor: colors.error } : {}]}>
                                <Text style={styles.error}>{err.L || ""}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.label}>{intl.get('flatA')}</Text>
                        <View style={styles.right}>
                            <View style={styles.inputCon}>
                                <TextInput style={styles.input} keyboardType='numeric' returnKeyType='done'
                                    placeholder={intl.get("pleaseEnter")} placeholderTextColor={colors.grey3}
                                    value={A} onChangeText={(val) => {
                                        setA(val);
                                        setErr(Object.assign(err, { A: false }))
                                    }}
                                />
                            </View>
                            <View style={[styles.errorCon, err.A ? { borderTopColor: colors.error } : {}]}>
                                <Text style={styles.error}>{err.A || ""}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.label}>{intl.get('flatB')}</Text>
                        <View style={styles.right}>
                            <View style={styles.inputCon}>
                                <TextInput style={styles.input} keyboardType='numeric' returnKeyType='done'
                                    placeholder={intl.get("pleaseEnter")} placeholderTextColor={colors.grey3}
                                    value={B} onChangeText={(val) => {
                                        setB(val);
                                        setErr(Object.assign(err, { B: false }))
                                    }}
                                />
                            </View>
                            <View style={[styles.errorCon, err.B ? { borderTopColor: colors.error } : {}]}>
                                <Text style={styles.error}>{err.B || ""}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.label}>{intl.get('internalRadius')}</Text>
                        <View style={styles.right}>
                            <View style={styles.inputCon}>
                                <TextInput style={styles.input} keyboardType='numeric' returnKeyType='done'
                                    placeholder={intl.get("pleaseEnter")} placeholderTextColor={colors.grey3}
                                    value={R} onChangeText={(val) => {
                                        setR(val);
                                        setErr(Object.assign(err, { R: false }))
                                    }}
                                />
                            </View>
                            <View style={[styles.errorCon, err.R ? { borderTopColor: colors.error } : {}]}>
                                <Text style={styles.error}>{err.R || ""}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.label}>{intl.get('thicknessT')}</Text>
                        <View style={styles.right}>
                            <View style={styles.inputCon}>
                                <TextInput style={styles.input} keyboardType='numeric' returnKeyType='done'
                                    placeholder={intl.get("pleaseEnter")} placeholderTextColor={colors.grey3}
                                    value={T} onChangeText={(val) => {
                                        setT(val);
                                        setErr(Object.assign(err, { T: false }))
                                    }}
                                />
                            </View>
                            <View style={[styles.errorCon, err.T ? { borderTopColor: colors.error } : {}]}>
                                <Text style={styles.error}>{err.T || ""}</Text>
                            </View>
                        </View>
                    </View>


                    <View style={styles.picCon}>
                        <Image source={require('../../assets/images/bendingKYPic.png')} style={styles.pic} />
                    </View>

                    <View style={styles.btnCon}>
                        <Button title={intl.get('calculate')} onPress={calculate} containerStyle={styles.btn} buttonStyle={styles.btn} />
                    </View>
                </View>

                {
                    result !== false ? (
                        <Animated.View style={[styles.resultCon, { opacity }]}>
                            <View style={styles.resultRow}>
                                <Text style={styles.result}>{intl.get('KFactor')}{result.result1}</Text>
                            </View>
                            <View style={styles.resultRow}>
                                <Text style={styles.result}>{intl.get('YFactor')}{result.result2}</Text>
                            </View>
                            <View style={styles.resultRow}>
                                <Text style={styles.result}>{intl.get('BendAllowance')}{result.result3}</Text>
                            </View>
                        </Animated.View>
                    ) : null
                }
            </ScrollView>
        </View>
    )
}