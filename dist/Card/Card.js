import React from 'react';
import { View, StyleSheet } from 'react-native';
var Card = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement(View, { style: [styles.card, style] }, children);
};
var styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        margin: 15,
        borderRadius: 2,
        elevation: 1,
    },
});
export default Card;
//# sourceMappingURL=Card.js.map