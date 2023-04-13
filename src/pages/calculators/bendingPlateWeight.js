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
    const [steel,setSteel] = useState("");
    const [length,setLength] = useState("");
    const [width,setWidth] = useState("");
    const [thickness,setThickness] = useState("");

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
        if (!steel) {
            _err.value1 = intl.get("pleaseSelect");
        } else {
            value1 = Number(steel)
        }
        var value2 = Number(length);
        if(!value2 || value2<=0){
            _err.value2 = intl.get("largeThan0")
        }
        var value3 = Number(width);
        if(!value3 || value3<=0){
            _err.value3 = intl.get("largeThan0")
        }
        var value4 = Number(thickness);
        if(!value4 || value4<=0){
            _err.value4 = intl.get("largeThan0")
        }

        setErr(_err);
        if (Object.keys(_err).length > 0) {
            setResult(false)
        } else {
            setTimeout(() => {
                setResult( Number((value1*value2*value3*value4)/1000000).toFixed(2) );
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
            <PageHeader title={intl.get("plateWeight")} />
            <ScrollView style={styles.page}>
                <View style={styles.section}>

                    <View style={styles.row}>
						<Text style={styles.label}>{intl.get('material')}</Text>
						<View style={styles.right}>
							<View style={styles.inputCon}>
								<Select style={styles.input}
									value={steel}
									placeholder={intl.get("pleaseSelect")}
									options={[
										{ value: 7.85, label: intl.get('mildSteel') },
										{ value: 2.67, label: intl.get('aluminum') },
                                        { value: 7.90, label: intl.get('stainlessSteel') },
									]}
									onSelect={(value) => {
										setSteel(value);
										setErr(Object.assign(err, { value1: false }))
									}}
								/>
							</View>
							<View style={[styles.errorCon, err.value1 ? { borderTopColor: colors.error } : {}]}>
								<Text style={styles.error}>{err.value1 || ""}</Text>
							</View>
						</View>
					</View>

                    <View style={styles.row}>
                        <Text style={styles.label}>{intl.get('length')}</Text>
                        <View style={styles.right}>
                            <View style={styles.inputCon}>
                                <TextInput style={styles.input} keyboardType='numeric' returnKeyType='done'
                                    placeholder={intl.get("pleaseEnter")} placeholderTextColor={colors.grey3}
                                    value={length} 
                                    onChangeText={(val) => {
                                        setLength(val);
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
                        <Text style={styles.label}>{intl.get('width')}</Text>
                        <View style={styles.right}>
                            <View style={styles.inputCon}>
                                <TextInput style={styles.input} keyboardType='numeric' returnKeyType='done'
                                    placeholder={intl.get("pleaseEnter")} placeholderTextColor={colors.grey3}
                                    value={width} 
                                    onChangeText={(val) => {
                                        setWidth(val);
                                        setErr(Object.assign(err, { value3: false }))
                                    }}
                                />
                            </View>
                            <View style={[styles.errorCon, err.value3 ? { borderTopColor: colors.error } : {}]}>
                                <Text style={styles.error}>{err.value3 || ""}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.label}>{intl.get('thickness1')}</Text>
                        <View style={styles.right}>
                            <View style={styles.inputCon}>
                                <TextInput style={styles.input} keyboardType='numeric' returnKeyType='done'
                                    placeholder={intl.get("pleaseEnter")} placeholderTextColor={colors.grey3}
                                    value={thickness} 
                                    onChangeText={(val) => {
                                        setThickness(val);
                                        setErr(Object.assign(err, { value4: false }))
                                    }}
                                />
                            </View>
                            <View style={[styles.errorCon, err.value4 ? { borderTopColor: colors.error } : {}]}>
                                <Text style={styles.error}>{err.value4 || ""}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.picCon}>
                        <Image source={require('../../assets/images/bendingPlateWeight.png')} style={styles.pic} />
                    </View>

                    <View style={styles.btnCon}>
                        <Button title={intl.get('calculate')} onPress={calculate} containerStyle={styles.btn} buttonStyle={styles.btn} />
                    </View>
                </View>

                {
                    result !== false ? (
                        <Animated.View style={[styles.resultCon, { opacity }]}>
                            <View style={styles.resultRow}>
                                <Text style={styles.result}>{intl.get('weight') + result} Kg</Text>
                            </View>
                        </Animated.View>
                    ) : null
                }
            </ScrollView>
        </View>
    )
}