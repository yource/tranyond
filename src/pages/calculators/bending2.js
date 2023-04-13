import React, { useState, useRef } from 'react';
import intl from 'react-intl-universal';
import { Text, View, ScrollView, TextInput, Image, Animated, Easing } from 'react-native';
import { Button } from '@rneui/themed';
import { PageHeader, Select } from '../../components';
import { useTheme } from '../../common/themeProvider';
import makeStyles from './styles';

export default function () {
    const [result, setResult] = useState(false);
    const opacity = useRef(new Animated.Value(0)).current;;
    const [err, setErr] = useState({});
    const [s, setS] = useState("");

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
        if (!s) {
            _err.value1 = intl.get("pleaseSelect");
        } else {
            value1 = s;
        }

        setErr(_err);
        if (Object.keys(_err).length > 0) {
            setResult(false)
        } else {
            setTimeout(() => {
                var result1;
                var result2;
                var result3;
                switch (value1) {
                    case "0.5":
                        result1 = 4;
                        result2 = 4;
                        result3 = 8;
                        break;
                    case "0.75":
                        result1 = 4;
                        result2 = 6;
                        result3 = 12;
                        break;
                    case "1":
                        result1 = 5;
                        result2 = 8;
                        result3 = 18;
                        break;
                    case "1.25":
                        result1 = 6;
                        result2 = 10;
                        result3 = 20;
                        break;
                    case "1.5":
                        result1 = 6;
                        result2 = 12;
                        result3 = 20;
                        break;
                    case "1.75":
                        result1 = 8;
                        result2 = 14;
                        result3 = 24;
                        break;
                    case "2":
                        result1 = 10;
                        result2 = 16;
                        result3 = 24;
                        break;
                    case "2.5":
                        result1 = 10;
                        result2 = 12;
                        result3 = 30;
                        break;
                    case "3":
                        result1 = 14;
                        result2 = 24;
                        result3 = 40;
                        break;
                    case "3.5":
                        result1 = 16;
                        result2 = 30;
                        result3 = 50;
                        break;
                    case "4":
                        result1 = 20;
                        result2 = 30;
                        result3 = 60;
                        break;
                    case "4.5":
                        result1 = 20;
                        result2 = 40;
                        result3 = 70;
                        break;
                    case "5":
                        result1 = 30;
                        result2 = 40;
                        result3 = 80;
                        break;
                    case "6":
                        result1 = 30;
                        result2 = 50;
                        result3 = 90;
                        break;
                    case "7":
                        result1 = 40;
                        result2 = 60;
                        result3 = 100;
                        break;
                    case "8":
                        result1 = 50;
                        result2 = 70;
                        result3 = 120;
                        break;
                    case "10":
                        result1 = 70;
                        result2 = 80;
                        result3 = 150;
                        break;
                    case "12":
                        result1 = 80;
                        result2 = 100;
                        result3 = 150;
                        break;
                    case "15":
                        result1 = 90;
                        result2 = 120;
                        result3 = 150;
                        break;
                    default:
                        break;
                }
                setResult({ result1, result2, result3 })
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
            <PageHeader title={intl.get("bendingNotch")} />
            <ScrollView style={styles.page}>
                <View style={styles.section}>

                    <View style={styles.row}>
                        <Text style={styles.label}>{intl.get('thickness')}</Text>
                        <View style={styles.right}>
                            <View style={styles.inputCon}>
                                <Select style={styles.input}
                                    value={s}
                                    placeholder={intl.get("pleaseSelect")}
                                    options={[
                                        { value: "0.5", label: "0.5" },
                                        { value: "0.75", label: "0.75" },
                                        { value: "1", label: "1" },
                                        { value: "1.25", label: "1.25" },
                                        { value: "1.5", label: "1.5" },
                                        { value: "1.75", label: "1.75" },
                                        { value: "2", label: "2" },
                                        { value: "2.5", label: "2.5" },
                                        { value: "3", label: "3" },
                                        { value: "3.5", label: "3.5" },
                                        { value: "4", label: "4" },
                                        { value: "4.5", label: "4.5" },
                                        { value: "5", label: "5" },
                                        { value: "6", label: "6" },
                                        { value: "7", label: "7" },
                                        { value: "8", label: "8" },
                                        { value: "10", label: "10" },
                                        { value: "12", label: "12" },
                                        { value: "15", label: "15" },
                                    ]}
                                    onSelect={(value) => {
                                        setS(value);
                                        setErr(Object.assign(err, { value1: false }))
                                    }}
                                />
                            </View>
                            <View style={[styles.errorCon, err.value1 ? { borderTopColor: colors.error } : {}]}>
                                <Text style={styles.error}>{err.value1 || ""}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.picCon}>
                        <Image source={require('../../assets/images/bendingMain.png')} style={styles.pic} />
                    </View>

                    <View style={styles.btnCon}>
                        <Button title={intl.get('calculate')} onPress={calculate} containerStyle={styles.btn} buttonStyle={styles.btn} />
                    </View>
                </View>

                {
                    result !== false ? (
                        <Animated.View style={[styles.resultCon, { opacity }]}>
                            <View style={styles.resultRow}>
                                <Text style={[styles.result,styles.resultNormal]}>{intl.get('minV')+result.result1} mm</Text>
                            </View>
                            <View style={styles.resultRow}>
                                <Text style={styles.result}>{intl.get('bestV')+result.result2} mm</Text>
                            </View>
                            <View style={styles.resultRow}>
                                <Text style={[styles.result,styles.resultNormal]}>{intl.get('maxV')+result.result3} mm</Text>
                            </View>
                        </Animated.View>
                    ) : null
                }
            </ScrollView>
        </View>
    )
}