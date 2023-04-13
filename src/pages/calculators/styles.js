import {StyleSheet, useColorScheme} from 'react-native';

const width2 = parseInt(_global.width*0.5);
const width4 = parseInt(_global.width*0.25);

const css = (colors)=>{
  return StyleSheet.create({
    page:{
      
    },
    topTipCon:{
      padding:10,
    },
    topTip:{
      textAlign:'center',
      color: colors.grey3,
      fontSize: 15,
      lineHeight: 20
    },
    section:{
      marginTop: 12,
      padding: 20,
      backgroundColor: colors.white
    },
    row:{
      flexDirection:'row',
    },
    label:{
      flexDirection: 'row',
      fontSize: 16,
      lineHeight: 30,
      color: colors.black,
      paddingRight: 12,
      minWidth: 120
    },
    right:{
      flex: 1,
    },
    inputCon: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    input: {
      height: 30,
      fontSize: 16,
      flex: 1,
      textAlign: 'right',
      paddingTop: 0,
      paddingLeft: 0,
      paddingBottom: 0,
      paddingRight: 30,
      color: colors.black
    },
    unit:{
      color: colors.grey0,
      paddingLeft: 10,
      fontSize: 16
    },
    errorCon: {
      borderTopColor: colors.grey4,
      borderTopWidth: 1
    },
    error: {
      fontSize: 12,
      color: colors.error,
      paddingLeft: 10
    },
    picCon:{
      alignItems: 'center',
      paddingTop: 16
    },
    pic:{
      width: 240,
      height: 240,
    },
    btnCon: {
      paddingTop: 20,
      alignItems:'center'
    },
    btn: {
      width:240,
      height: 40,
      borderRadius: 20,
      lineHeight: 40
    },
    resultCon:{
      paddingTop: 25,
      paddingBottom: 25,
      marginTop: 12,
      backgroundColor: colors.white,
      alignItems: 'center'
    },
    resultRow:{
      flexDirection: 'row',
      alignItems: 'center',
      height: 28
    },
    resultNormal: {
      color: colors.grey2
    },
    result:{
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.primary
    },
    subResult:{
      fontSize: 16,
      fontWeight: '600',
      paddingLeft: 10,
      color: colors.primary
    },
    orderPics: {
      backgroundColor: colors.white,
      paddingTop: 15,
      paddingBottom: 20,
      paddingLeft: 12,
      paddingRight: 12,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    },
    orderPicCon:{
      borderColor: colors.grey4,
      borderWidth: StyleSheet.hairlineWidth,
      width: width2 - 18,
      marginBottom: 12,
    },
    orderPic:{
      width: width2 - 18,
      height: width2 - 18
    },
    orderSection:{
      backgroundColor: colors.white,
      marginTop: 12,
    },
    orderNum: {
      flexDirection: 'row',
      alignItems:'center',
      height: 40,
      justifyContent:'center'
    },
    orderNumText: {
      color: colors.grey2
    },
    orderBigPicCon: {
      height: _global.width-108,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    turnLeftRight: {
      width: 54,
      height: _global.width-108,
      alignItems: 'center',
      justifyContent: 'center'
    },
    swiperContainer: {
      width: _global.width-108,
      height: _global.width-108,
    },
    swiperItem: {
      width: _global.width-108,
      backgroundColor: "#ccc"
    },
    swiperItemPic: {
      width: _global.width-108,
      height: _global.width-108
    },
    orderSmallPics: {
      marginTop: 12,
      borderTopWidth: 1,
      borderTopColor: colors.divider,
      flexDirection:'row',
      flexWrap: 'wrap',
      paddingTop: 12,
      paddingLeft: 6,
      paddingRight: 6,
      paddingBottom: 10
    },
    orderSmallPicCon: {
      width: width4-18,
      height: width4-18,
      marginLeft: 7,
      marginRight: 7,
      marginBottom: 12
    },
    orderSmallPic:{
      width: width4-20,
      height: width4-20,
    }
  })
};

var _styles = null;
var _isDark = -1;
const makeStyles = (colors,isDark)=>{
  if(_isDark==-1 || _isDark!=isDark){
    _isDark = isDark;
    _styles = css(colors);
  }
  return _styles
};

export default makeStyles;