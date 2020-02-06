import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, } from 'react-native';
function SlidingCards(_a) {
    var data = _a.data, cardBackground = _a.cardBackground, cardHeight = _a.cardHeight, cardFlexDirection = _a.cardFlexDirection, cardMargin = _a.cardMargin, cardBorderRadius = _a.cardBorderRadius, cardPadding = _a.cardPadding, cardWidth = _a.cardWidth, TextColor = _a.TextColor, TextSize = _a.TextSize, TextWeight = _a.TextWeight, buttonTextColor = _a.buttonTextColor, buttonTextAlign = _a.buttonTextAlign, buttonTextSize = _a.buttonTextSize, buttonTextTop = _a.buttonTextTop, buttonWidth = _a.buttonWidth, buttonHeight = _a.buttonHeight, buttonTop = _a.buttonTop, buttonBackground = _a.buttonBackground, buttonBorderRadius = _a.buttonBorderRadius, buttonPadding = _a.buttonPadding;
    var card = StyleSheet.create({
        cardStyle: {
            backgroundColor: cardBackground,
            height: cardHeight,
            flexDirection: cardFlexDirection,
            margin: cardMargin,
            borderRadius: cardBorderRadius,
            padding: cardPadding,
            width: cardWidth,
        },
        cardTextStyle: {
            color: TextColor,
            fontSize: TextSize,
            fontWeight: TextWeight,
        },
        button: {
            width: buttonWidth,
            height: buttonHeight,
            marginTop: buttonTop,
            backgroundColor: buttonBackground,
            borderRadius: buttonBorderRadius,
            padding: buttonPadding,
        },
        buttonTitleStyle: {
            color: buttonTextColor,
            textAlign: buttonTextAlign,
            fontSize: buttonTextSize,
            marginTop: buttonTextTop,
        },
    });
    return (React.createElement(ScrollView, { horizontal: true }, data.map(function (cardData, index) { return (React.createElement(View, { style: card.cardStyle, key: index },
        React.createElement(Text, { style: card.cardTextStyle }, cardData.title),
        React.createElement(Text, { style: { color: 'white', fontSize: 14 } }, cardData.description),
        cardData.buttonTitle ? (React.createElement(TouchableOpacity, null,
            React.createElement(View, { style: card.button },
                React.createElement(Text, { style: card.buttonTitleStyle }, cardData.buttonTitle)))) : null)); })));
}
function CardSlider(_a) {
    var data = _a.data;
    return (React.createElement(React.Fragment, null,
        React.createElement(SlidingCards, { data: data, cardWidth: 150, cardHeight: 180, cardFlexDirection: "column", cardBackground: "#2675fc", cardMargin: 10, cardBorderRadius: 15, cardPadding: 10, TextColor: "white", TextSize: 20, TextWeight: "bold", buttonTextColor: "white", buttonTextAlign: "center", buttonTextSize: 12, buttonTextTop: 7, buttonWidth: "70%", buttonHeight: 40, buttonTop: 14, buttonBackground: "#05ada5", buttonBorderRadius: 10, buttonPadding: 4 })));
}
export default CardSlider;
//# sourceMappingURL=CardSlider.js.map