import { StyleSheet } from 'react-native';
import _global from '../../constant/global';

const styles = StyleSheet.create({
    page: {
        backgroundColor: _global.pageBackgroundColorDark,
        paddingLeft: 24,
        paddingRight: 24,
    },
    imageSection:{
        alignItems:'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    image:{},
    centerTitleSection:{},
    centerTitle: {
        color: _global.fontColor1,
        textAlign: "center",
        fontSize: 20,
        fontWeight: 600,
        marginTop: 20
    },
    centerSubTitleSection:{},
    centerSubTitle:{
        color: _global.fontColor2,
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 24
    },
    modelSection:{},
    attrs: {
        flexDirection:'row',
        paddingTop: 25,
        justifyContent: 'space-around',
        paddingBottom: 20
    },
    attrItem: {},
    attrValue: {
        color: _global.fontColor1,
        textAlign:'center',
        fontSize: 16,
        fontWeight: 600
    },
    attrName:{
        color: _global.fontColor3,
        textAlign:'center'
    },
    modelDesc: {
        fontSize: 13,
        color: _global.fontColor2,
        lineHeight: 25,
        marginBottom: 4
    },
    modelItem:{
        flexDirection: 'row',
        alignItems:'center',
        height: 44,
        borderWidth: 1,
        borderColor: _global.fontColor3,
        marginBottom: 15,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 4
    },
    modelActive:{
        borderWidth: 2,
        borderColor: _global.primary
    },
    modelName: {
        flex: 1,
        color: _global.fontColor
    },
    modelPrice: {
        color: _global.fontColor
    },
    buttonCon: {
        alignItems: 'center',
        padding: 10,
    },
    button:{
        width: 172,
        height: 34,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 6,
    },
    buttongrey:{
        backgroundColor: _global.buttonBackgroundColorGrey
    },
    buttonprimary:{
        backgroundColor: _global.primary
    },
    buttonText: {
        color: _global.fontColor,
        fontSize: 12
    },
    gap: {
        height: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 500,
        paddingLeft: 20
    },
    text: {
        color: _global.fontColor2,
        paddingTop: 3,
        paddingBottom: 3
    },
    dialogBlurWrap:{
        flex: 1,
    },
    dialogContainer: {
        justifyContent: 'center',
        alignItems:'center',
        flex: 1,
    },
    dialog:{
        backgroundColor: _global.pageBackgroundColor,
        borderRadius: 16,
        overflow: 'hidden',
        width: 320,
        maxWidth: _global.width-50,
        height: 600,
        maxHeight: _global.height-160
    },
    dialogHeader:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 12,
        justifyContent: 'space-between',
        height: 60
    },
    dialogHeaderTitle:{
        fontSize: 18,
        fontWeight: 600,
        color: _global.fontColor
    },
    dialogBody: {
        backgroundColor: _global.pageBackgroundColorDark,
    },
    dialogSection_attrs:{
        paddingLeft: 25,
    },
    dialogAttrItem: {
        paddingTop: 15
    },
    dialogAttrName:{
        color: _global.fontColor,
        fontSize: 14,
        fontWeight: 500,
        paddingRight: 30,
        lineHeight: 30
    },
    dialogAttrLine:{
        flexDirection: 'row',
        height: 20
    },
    dialogAttrLabel: {
        flex: 1,
        color: _global.fontColor2,
        fontSize: 12
    },
    dialogAttrValue: {
        flex: 1,
        color: _global.fontColor2,
        fontSize: 12
    },
    dialogVideo: {
        width: '100%',
        height: parseInt((_global.width-50)*9/16),
        backgroundColor: '#787878'
    },
    dialogImageCon: {
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        maxWidth: "100%"
    },
    dialogPdfCon:{
        flex: 1
    },
    dialogPdf:{
        height: 520,
        maxHeight: _global.height-240,
        backgroundColor:"#333"
    },
    dialogContentTitle: {
        fontSize: 16,
        fontWeight: 500,
        paddingLeft: 20,
        color: _global.fontColor,
        lineHeight: 44,
        marginTop: 12
    },
    dialogContentText: {
        fontSize: 14,
        paddingLeft: 20,
        paddingRight: 20,
        color: _global.fontColor2,
        lineHeight: 20,
        paddingBottom: 10
    },
});

export default styles;