import React, { useState, useEffect, useRef } from 'react';
import intl from 'react-intl-universal';
import { Text, View, ScrollView, TextInput, Image, Animated, Easing } from 'react-native';
import { Button, PickerView } from '@ant-design/react-native'
import { PageHeader,Select } from '../../components';
import styles from './styles';

export default function () {
	const [result, setResult] = useState(false);
	const opacity = useRef(new Animated.Value(0)).current;;
	const [err, setErr] = useState({});
	const [steel, setSteel] = useState("");
	const [length, setLength] = useState("");
	const [thickness, setThickness] = useState("");
	const [thicknessCustom, setThicknessCustom] = useState("");
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
		var value1, value2, value3, value4;
		if (!steel) {
			_err.value1 = intl.get("pleaseSelect");
		} else {
			value1 = steel;
		}
		value2 = Number(length);
		if (!value2 || value2 <= 0) {
			_err.value2 = intl.get("largeThan0");
		}
		if (!thickness) {
			_err.value3 = intl.get("pleaseSelect")
		} else {
			if (thickness == "custom") {
				value3 = Number(thicknessCustom);
				if (!value3 || value3 <= 0 || value3 > 150) {
					_err.value3 = intl.get("between0and150")
				}
			} else {
				value3 = Number(thickness)
			}
		}
		if (!v) {
			_err.value4 = intl.get("pleaseSelect")
		} else {
			if (v == "custom") {
				value4 = Number(vCustom);
				if (!value4 || value4 <= 0 || value4 > 200) {
					_err.value4 = intl.get("between0and200")
				}
			} else {
				value4 = Number(v)
			}
		}

		setErr(_err);
		if (Object.keys(_err).length > 0) {
			setResult(false)
		} else {
			setTimeout(() => {
				const r = value1 * ((650 * value2 * value3 * value3) / (value4 * 1000));
				const kn = Number(r).toFixed(2);
				const ton = Number(kn) / 10;
				setResult({ kn, ton })
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
			<PageHeader title={intl.get("bendingForce")} />
			<ScrollView style={_global.page}>
				<View style={styles.section}>

					{/* <View style={styles.row}>
						<Text style={styles.label}>{intl.get('selectSteel')}</Text>
						<View style={styles.right}>
							<View style={styles.inputCon}>
								<Select style={styles.input}
									value={steel}
									placeholder={intl.get("pleaseSelect")}
									options={[
										{ value: 1, label: intl.get('mildSteel') },
										{ value: 1.5, label: intl.get('stainlessSteel') },
										{ value: 0.5, label: intl.get('aluminumBrass') },
										{ value: 2, label: intl.get('crmoStell') },
									]}
									onSelect={(value) => {
										setSteel(value);
										setErr(Object.assign(err, { value1: false }))
									}}
								/>
							</View>
							<View style={[styles.errorCon, err.value1 ? { borderTopColor: _global.error } : {}]}>
								<Text style={styles.error}>{err.value1 || ""}</Text>
							</View>
						</View>
					</View> */}

					<View style={[_global.inputRow, err.value1?_global.inputErr:null]}>
						<View style={_global.inputRowMain}>
							{
								steel ? <Text style={_global.inputLable}>{intl.get('selectSteel')}</Text> : null
							}
							<Select style={_global.input}
								value={steel}
								placeholder={intl.get("selectSteel")}
								options={[
									{ value: 1, label: intl.get('mildSteel') },
									{ value: 1.5, label: intl.get('stainlessSteel') },
									{ value: 0.5, label: intl.get('aluminumBrass') },
									{ value: 2, label: intl.get('crmoStell') },
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

					<View style={[_global.inputRow, err.value2?_global.inputErr:null]}>
						<View style={_global.inputRowMain}>
							{
								length ? <Text style={_global.inputLable}>{intl.get('bendingLength')}</Text> : null
							}
							<TextInput style={_global.input}
								keyboardType='numeric'
								returnKeyType='done'
								value={length}
								placeholder={intl.get("bendingLength")}
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

					<View style={styles.row}>
						<Text style={styles.label}>{intl.get('thickness')}</Text>
						<View style={styles.right}>
							<View style={styles.inputCon}>
								{/* <Select style={styles.input}
									value={thickness}
									placeholder={intl.get("pleaseSelect")}
									options={[
										{ value: '0.5', label: '0.5' },
										{ value: '1', label: '1' },
										{ value: '2', label: '2' },
										{ value: '3', label: '3' },
										{ value: '4', label: '4' },
										{ value: '5', label: '5' },
										{ value: '6', label: '6' },
										{ value: '8', label: '8' },
										{ value: 'custom', label: intl.get('custom') },
									]}
									onSelect={(value) => {
										setThickness(value);
										setErr(Object.assign(err, { value3: false }))
									}}
								/> */}
							</View>
							{
								thickness == "custom" ? (
									<View style={styles.inputCon}>
										<TextInput style={styles.input}
											keyboardType='numeric'
											returnKeyType='done'
											value={thicknessCustom}
											placeholder={intl.get("pleaseEnter")}
											onChangeText={(val) => {
												setThicknessCustom(val);
												setErr(Object.assign(err, { value3: false }))
											}}
											placeholderTextColor={_global.grey3}
										/>
									</View>
								) : null
							}
							<View style={[styles.errorCon, err.value3 ? { borderTopColor: _global.error } : {}]}>
								<Text style={styles.error}>{err.value3 || ""}</Text>
							</View>
						</View>
					</View>

					<View style={styles.row}>
						<Text style={styles.label}>{intl.get('V')}</Text>
						<View style={styles.right}>
							<View style={styles.inputCon}>
								{/* <Select style={styles.input}
									value={v}
									placeholder={intl.get("pleaseSelect")}
									options={[
										{ value: '4', label: '4' },
										{ value: '6', label: '6' },
										{ value: '8', label: '8' },
										{ value: '10', label: '10' },
										{ value: '12', label: '12' },
										{ value: '14', label: '14' },
										{ value: '16', label: '16' },
										{ value: '20', label: '20' },
										{ value: 'custom', label: intl.get('custom') },
									]}
									onSelect={(value) => {
										setV(value);
										setErr(Object.assign(err, { value4: false }))
									}}
								/> */}
							</View>
							{
								v == "custom" ? (
									<View style={styles.inputCon}>
										<TextInput style={styles.input}
											keyboardType='numeric'
											returnKeyType='done'
											value={vCustom}
											placeholder={intl.get("pleaseEnter")}
											onChangeText={(val) => {
												setVCustom(val);
												setErr(Object.assign(err, { value4: false }))
											}}
											placeholderTextColor={_global.grey3}
										/>
									</View>
								) : null
							}
							<View style={[styles.errorCon, err.value4 ? { borderTopColor: _global.error } : {}]}>
								<Text style={styles.error}>{err.value4 || ""}</Text>
							</View>
						</View>
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
							<View style={styles.resultRow}>
								<Text style={styles.result}>F = {result.kn}KN</Text>
								<Text style={styles.subResult}>({result.ton}Ton)</Text>
							</View>
						</Animated.View>
					) : null
				}
			</ScrollView>
		</View>
	)
}