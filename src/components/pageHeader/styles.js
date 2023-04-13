import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    header: {
        height: 44,
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: _global.pageBackgroundColor,
    },
    side: {
        height: 44,
        width: 50,
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        flex: 1,
        textAlign: 'center',
        lineHeight: 44,
        fontSize: 18,
        color: _global.fontColor,
        fontWeight: 'bold'
    },
});

export default style;