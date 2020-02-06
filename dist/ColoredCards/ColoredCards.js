import React from 'react';
import { View, StyleSheet, } from 'react-native';
import ColoredCard from './ColoredCard';
var styles = StyleSheet.create({
    card: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 150,
        height: 50,
        marginTop: 40,
        color: 'gray',
        borderRadius: 1,
        backgroundColor: '#05ada5',
        borderRadius: 12,
        padding: 8,
        justifyContent: 'flex-end',
    },
    buttonTextStyle: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 8,
    },
});
function ColorfulCards(_a) {
    var data = _a.data;
    return (React.createElement(View, { style: styles.card }, data &&
        data.map(function (item, index) { return (React.createElement(ColoredCard, { key: index, title: item.title, description: item.description, buttonTitle: item.buttonTitle, cardBackground: item.backgroundColor, cardHeight: 300, cardFlexDirection: "column", cardMargin: 10, cardBorderRadius: 20, cardPadding: 16, primaryTextColor: "white", primaryTextSize: 28, primaryTextWeight: "bold", primaryTextTop: 15, secondaryTextColor: "white", secondaryTextSize: 16, buttonWidth: 150, buttonHeight: 50, buttonTop: 20, buttonBackground: "#05ada5", buttonBorderRadius: 12, buttonPadding: 8, buttonTextColor: "white", buttonTextAlign: "center", buttonTextBottom: 8, buttonTextSize: 14, buttonTextTop: 8 })); })));
}
export default ColorfulCards;
//# sourceMappingURL=ColoredCards.js.map