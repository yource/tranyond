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
    const [steel, setSteel] = useState("");
    const [length, setLength] = useState("");
    const [width, setWidth] = useState("");
    const [thickness, setThickness] = useState("");

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
        <View style={_global.pageContainer}>
            <PageHeader title={intl.get("plateWeight")} />
            <ScrollView style={_global.page}>
                <View style={styles.section}>

                    <View style={[_global.inputRow, err.value1 ? _global.inputErr : null]}>
						<View style={_global.inputRowMain}>
							{
								steel ? <Text style={_global.inputLable}>{intl.get('material')}</Text> : null
							}
							<Select style={styles.input}
									value={steel}
									placeholder={intl.get("material")}
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
					</View>
					<View style={_global.inputErrCon}>
						<Text style={_global.inputErrText}>{err.value1 || ""}</Text>
					</View>

                    <View style={[_global.inputRow, err.value2 ? _global.inputErr : null]}>
						<View style={_global.inputRowMain}>
							{
								length ? <Text style={_global.inputLable}>{intl.get('length')}</Text> : null
							}
							<TextInput style={_global.input}
								keyboardType='numeric'
								returnKeyType='done'
								value={length}
								placeholder={intl.get("length")}
								onChangeText={(val) => {
									setLength(val);
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
								width ? <Text style={_global.inputLable}>{intl.get('width')}</Text> : null
							}
							<TextInput style={_global.input}
								keyboardType='numeric'
								returnKeyType='done'
								value={width}
								placeholder={intl.get("width")}
								onChangeText={(val) => {
									setWidth(val);
									setErr(Object.assign(err, { value3: false }))
								}}
								placeholderTextColor={_global.inputLabelColor}
							/>
						</View>
					</View>
					<View style={_global.inputErrCon}>
						<Text style={_global.inputErrText}>{err.value3 || ""}</Text>
					</View>

                    <View style={[_global.inputRow, err.value4 ? _global.inputErr : null]}>
						<View style={_global.inputRowMain}>
							{
								thickness ? <Text style={_global.inputLable}>{intl.get('thickness1')}</Text> : null
							}
							<TextInput style={_global.input}
								keyboardType='numeric'
								returnKeyType='done'
								value={thickness}
								placeholder={intl.get("thickness1")}
								onChangeText={(val) => {
									setThickness(val);
									setErr(Object.assign(err, { value4: false }))
								}}
								placeholderTextColor={_global.inputLabelColor}
							/>
						</View>
					</View>
					<View style={_global.inputErrCon}>
						<Text style={_global.inputErrText}>{err.value4 || ""}</Text>
					</View>

                    <View style={styles.picCon}>
                        <View style={{width: 180,height:180,backgroundColor:'#ffffff',borderRadius:12}}>
                            <Image source={require('../../assets/images/bending06.png')} style={{width: 180,height:180}} />
                        </View>
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
                                    <Text style={styles.resultItem}>{intl.get('weight') + result} Kg</Text>
                                </View>
                            </View>
                        </Animated.View>
                    ) : null
                }
            </ScrollView>
        </View>
    )
}