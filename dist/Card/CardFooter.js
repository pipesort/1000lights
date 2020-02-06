import React from 'react';
import { View, StyleSheet } from 'react-native';
import Divider from '../Divider/Divider';
var CardFooter = function (_a) {
    var children = _a.children, footerStyle = _a.footerStyle;
    return (React.createElement(View, { style: [styles.footer, footerStyle] },
        React.createElement(Divider, null),
        children));
};
var styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 15,
    },
});
export default CardFooter;
//# sourceMappingURL=CardFooter.js.map