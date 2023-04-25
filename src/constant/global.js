import { Dimensions, StyleSheet } from 'react-native'
const { width, height } = Dimensions.get("window");

_global = {
    width: width,
    height: height,
    fontSize: 14,
    primary: "#3969cc",
    primaryTap: "#638af6",
    fontColor: '#f2f4f5',
    fontColor1: '#f7f9fb',
    fontColor2: "#e0e0e0",
    fontColor3: "#a7a7a7",
    fontColorGrey: '#8a8c8d',
    fontColorPrimary: "#5682dc",
    pageBackgroundColor: '#28292a',
    pageBackgroundColorDark: '#000000',
    inputBackgroundColor: "#222325",
    inputLabelColor: "#86888a",
    inputValueColor: "#f1f3f5",
    buttonDisableColor: "#959a9d",
    buttonBackgroundColor: "#3167fd", //蓝色按钮
    buttonBackgroundColorGrey: "#383b3f", //灰色按钮
    buttonDisableBackgroundColor: "#202e5b",

    theme: "#1fbfb4",
    themeDark: "#17a79d",
    themeLight: "#f4fffc",
    secondary: '#aa49eb',
    background: '#080808',
    white: '#080808',
    black: '#f2f2f2',
    grey5: '#393e42',
    grey4: '#43484d',
    grey3: '#5e6977',
    grey2: '#86939e',
    grey1: '#bdc6cf',
    grey0: '#e1e8ee',
    grey6: '#212223',
    grey7: '#101011',
    grey8: 'rgba(220,220,220,0.08)',
    active: '#1a1a1b',
    greyOutline: '#bbb',
    searchBg: '#303337',
    success: '#398df6',
    error: '#bf2c24',
    warning: '#cfbe27',
    info: '#439ce0',
    disabled: 'hsl(208, 8%, 90%)',
    divider: StyleSheet.hairlineWidth < 1 ? '#787878' : 'rgba(0, 0, 0, 0.12)',
}

const globalStyle = StyleSheet.create({
    pageContainer: {
        flex: 1
    },
    page: {
        flex: 1
    },
    btnCon: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 24,
    },
    btn: {
        width: "88%"
    },
    inputRow: {
        backgroundColor: _global.inputBackgroundColor,
        borderColor: _global.inputBackgroundColor,
        borderWidth: 1,
        height: 48,
        flexDirection: 'row',
        paddingRight: 12,
        borderRadius: 8,
        paddingLeft: 12
    },
    inputRowMain: {
        flex: 1,
        paddingTop: 2,
        paddingBottom: 4,
        justifyContent: 'center'
    },
    inputLable: {
        fontSize: 12,
        fontWeight: 500,
        color: _global.inputLabelColor
    },
    input: {
        lineHeight: 22,
        fontSize: 16,
        color: _global.inputValueColor
    },
    inputErr: {
        borderColor: _global.error
    },
    inputErrCon: {
        height: 16,
    },
    inputErrText: {
        fontSize: 12,
        color: _global.error,
        paddingLeft: 5
    },
})

_global = Object.assign(_global, globalStyle)

export default _global;