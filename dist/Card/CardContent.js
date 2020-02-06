import React from 'react';
import { View, StyleSheet } from 'react-native';
var CardContent = function (_a) {
    var children = _a.children, contentWrapperStyle = _a.contentWrapperStyle;
    return React.createElement(View, { style: [styles.content, contentWrapperStyle] }, children);
};
var styles = StyleSheet.create({
    content: {
        padding: 5,
        marginLeft: 14,
    },
});
export default CardContent;
//# sourceMappingURL=CardContent.js.map