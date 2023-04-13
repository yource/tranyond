import { StyleSheet } from 'react-native';

const css = (colors) => {
    return StyleSheet.create({
        midToast: {
            padding: 0,
            borderRadius: 8,
            backgroundColor: 'rgba(0,0,0,0.88)',
            padding: 20,
            minHeight: 60,
            minWidth: 120,
            maxWidth: _global.width - 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            opacity: 0
        },
        midText: {
            color: "#ffffff",
            fontSize: 17,
            lineHeight: 24,
            textAlign: 'center'
        },
        topContainer: {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: _global.height,
            paddingLeft: 24,
            paddingRight: 24,
            paddingBottom: 14,
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: colors.divider,
        },
        success: {
            backgroundColor: colors.success
        },
        info: {
            backgroundColor: colors.info
        },
        warning: {
            backgroundColor: colors.warning
        },
        error: {
            backgroundColor: colors.error
        },
        topText: {
            color: "#ffffff",
            fontSize: 17,
            lineHeight: 24,
        }
    })
};

var _styles = null;
var _isDark = -1;
const makeStyles = (colors, isDark, insets) => {
    if (_isDark == -1 || _isDark != isDark) {
        _isDark = isDark;
        _styles = css(colors, insets);
    }
    return _styles
};

export default makeStyles;