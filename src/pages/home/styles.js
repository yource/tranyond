import { StyleSheet } from 'react-native';
const imageSize = _global.width - 72;
const styles = StyleSheet.create({
    page: {
        paddingLeft: 28,
        paddingRight: 28,
        paddingBottom: 36
    },
    header: {
        paddingTop: 20,
        height: 72,
        fontSize: _global.fontSize,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 48,
        marginBottom: 24
    },
    toggleBtns: {
        flex: 1,
        flexDirection: 'row',
        height: 30,
        alignItems: 'flex-end',
    },
    toggleBtn: {
        marginRight: 10,
        paddingBottom: 4
    },
    toggleIcon: {
        width: 20,
        height: 20
    },
    toggleText: {
        paddingLeft: 8,
        fontSize: 17,
        color: _global.fontColor,
    },
    active: {
        fontSize: 18,
        fontWeight: 600
    },
    btnButtom: {
        position: 'absolute',
        bottom:0,
        height: 3,
        borderRadius: 2,
        backgroundColor: "#ddd"
    },
    userIcon: {
        width: 34,
        height: 34
    },
    listCon: {
        alignItems: 'center'
    },
    productCon: {
        width: imageSize, 
        height: imageSize, 
        marginBottom: 32, 
        borderRadius: 10, 
        overflow: 'hidden',
        backgroundColor: "#000000",
        justifyContent: 'flex-end'
    },
    productImg: {
        width: imageSize, 
        height: imageSize, 
        position: 'absolute'
    },
    productName: {
        paddingLeft: 14,
        fontSize: 20,
        fontWeight: 600,
        color: "#ffffff",
        backgroundColor: "rgba(0,0,0,0.4)",
        lineHeight: 30
    },
    productDesc: {
        paddingLeft: 14,
        paddingRight: 14,
        paddingBottom: 10,
        fontSize: 14,
        fontWeight: 500,
        color: _global.fontColor,
        backgroundColor: "rgba(0,0,0,0.4)",
    },
    calculatorCon: {
        width: _global.width - 50, 
        height: 72, 
        marginBottom: 26,
        borderRadius: 10, overflow: 'hidden', flexDirection: 'row',
        backgroundColor: "#222222",
        paddingLeft: 6,
        paddingRight: 12,
        alignItems:'center'
    },
    calculatorPicCon: {
        width: 60,
        height: 60,
        backgroundColor: "#ffffff",
        borderRadius: 8
    },
    calculatorPic: {
        width: 60,
        height: 60,
        borderRadius: 8
    },
    calculatorNameCon:{
        flex: 1,
        paddingRight: 12
    },
    calculatorName:{
        color: _global.fontColor,
        fontSize: 16,
        paddingLeft: 12,
        fontWeight: 500
    }
});

export default styles;