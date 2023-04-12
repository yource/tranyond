import { StyleSheet } from 'react-native';
import globalStyle from '../../constant/globalStyle';

const styles = StyleSheet.create({
    page:{
        paddingLeft: 28,
        paddingRight: 28,
        paddingBottom: 36
    },
    header: {
        height: 64,
        fontSize: globalStyle.fontSize,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        height: 48,
        marginBottom: 24
    },
    toggleBtn:{
        flexDirection:'row',
        height: 40,
        alignItems: 'center'
    },
    toggleIcon: {
        width: 20,
        height: 20
    },
    toggleText: {
        color: globalStyle.fontColor,
        paddingLeft: 8,
        fontSize: 20,
        fontWeight: 600
    },
    userIcon: {
        width: 34,
        height: 34
    },
    listCon: {
        alignItems:'center'
    },
    productName: {
        paddingLeft: 14,
        fontSize: 20,
        fontWeight: 600,
        color: "#ffffff",
        backgroundColor: "rgba(0,0,0,0.2)",
        lineHeight: 30
    },
    productDesc:{
        paddingLeft: 14,
        paddingRight:14,
        paddingBottom: 10,
        fontSize: 14,
        fontWeight: 500,
        color: globalStyle.fontColor,
        backgroundColor: "rgba(0,0,0,0.2)",
    }
});

export default styles;