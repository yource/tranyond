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
        <View style={theme.page}>
            <PageHeader title={intl.get("bendingArc1")} />
            <ScrollView style={styles.page}>
                <View style={styles.section}>

                    <View style={styles.row}>
                        <Text style={styles.label}>{intl.get('overallAngle')}</Text>
                        <View style={styles.right}>
                            <View style={styles.inputCon}>
                                <TextInput style={styles.input} keyboardType='numeric' returnKeyType='done'
                                    placeholder={intl.get("pleaseEnter")} placeholderTextColor={colors.grey3}
                                    value={o} 
                                    onChangeText={(val) => {
                                        setO(val);
                                        setErr(Object.assign(err, { value2: false }))
                                    }}
                                />
                            </View>
                            <View style={[styles.errorCon, err.value1 ? { borderTopColor: colors.error } : {}]}>
                                <Text style={styles.error}>{err.value1 || ""}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.label}>{intl.get('numberOfBends')}</Text>
                        <View style={styles.right}>
                            <View style={styles.inputCon}>
                                <TextInput style={styles.input} keyboardType='numeric' returnKeyType='done'
                                    placeholder={intl.get("pleaseEnter")} placeholderTextColor={colors.grey3}
                                    value={n} 
                                    onChangeText={(val) => {
                                        setN(val);
                                        setErr(Object.assign(err, { value2: false }))
                                    }}
                                />
                            </View>
                            <View style={[styles.errorCon, err.value2 ? { borderTopColor: colors.error } : {}]}>
                                <Text style={styles.error}>{err.value2 || ""}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.label}>{intl.get('finalRadius')}</Text>
                        <View style={styles.right}>
                            <View style={styles.inputCon}>
                                <TextInput style={styles.input} keyboardType='numeric' returnKeyType='done'
                                    placeholder={intl.get("pleaseEnter")} placeholderTextColor={colors.grey3}
                                    value={r} 
                                    onChangeText={(val) => {
                                        setR(val);
                                        setErr(Object.assign(err, { value3: false }))
                                    }}
                                />
                            </View>
                            <View style={[styles.errorCon, err.value3 ? { borderTopColor: colors.error } : {}]}>
                                <Text style={styles.error}>{err.value3 || ""}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.picCon}>
                        <Image source={require('../../assets/images/bendingArcPic.png')} style={[styles.pic,{
                            width: 300, height: 169
                        }]} />
                    </View>

                    <View style={styles.btnCon}>
                        <Button title={intl.get('calculate')} onPress={calculate} containerStyle={styles.btn} buttonStyle={styles.btn} />
                    </View>
                </View>

                {
                    result !== false ? (
                        <Animated.View style={[styles.resultCon, { opacity }]}>
                           <View style={styles.resultRow}>
                                <Text style={[styles.result,{fontSize: 15}]}>{intl.get('singleAngle')+result.q} mm</Text>
                            </View>
                            <View style={styles.resultRow}>
                                <Text style={[styles.result,{fontSize: 15}]}>{intl.get('bendsDistance')+result.p} mm</Text>
                            </View>
                        </Animated.View>
                    ) : null
                }
            </ScrollView>
        </View>
    )
}