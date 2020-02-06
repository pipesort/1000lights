import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native';
function ColoredCard(_a) {
    var title = _a.title, description = _a.description, buttonTitle = _a.buttonTitle, cardBackground = _a.cardBackground, cardHeight = _a.cardHeight, cardFlexDirection = _a.cardFlexDirection, cardMargin = _a.cardMargin, cardBorderRadius = _a.cardBorderRadius, cardPadding = _a.cardPadding, primaryTextColor = _a.primaryTextColor, primaryTextSize = _a.primaryTextSize, primaryTextWeight = _a.primaryTextWeight, primaryTextTop = _a.primaryTextTop, secondaryTextColor = _a.secondaryTextColor, secondaryTextSize = _a.secondaryTextSize, buttonWidth = _a.buttonWidth, buttonHeight = _a.buttonHeight, buttonTop = _a.buttonTop, buttonBackground = _a.buttonBackground, buttonBorderRadius = _a.buttonBorderRadius, buttonPadding = _a.buttonPadding, buttonTextColor = _a.buttonTextColor, buttonTextAlign = _a.buttonTextAlign, buttonTextBottom = _a.buttonTextBottom, buttonTextSize = _a.buttonTextSize, buttonTextTop = _a.buttonTextTop;
    var card = StyleSheet.create({
        cardColor: {
            backgroundColor: cardBackground,
            height: cardHeight,
            flexDirection: cardFlexDirection,
            margin: cardMargin,
            borderRadius: cardBorderRadius,
            padding: cardPadding,
        },
        cardPrimaryText: {
            color: primaryTextColor,
            fontSize: primaryTextSize,
            fontWeight: primaryTextWeight,
            marginTop: primaryTextTop,
        },
        cardSecondaryText: {
            color: secondaryTextColor,
            fontSize: secondaryTextSize,
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
            marginBottom: buttonTextBottom,
            fontSize: buttonTextSize,
        },
    });
    return (React.createElement(View, { style: card.cardColor },
        React.createElement(Text, { style: card.cardPrimaryText }, title),
        React.createElement(Text, { style: card.cardSecondaryText }, description),
        buttonTitle ? (React.createElement(TouchableOpacity, null,
            React.createElement(View, { style: card.button },
                React.createElement(Text, { style: card.buttonTitleStyle }, buttonTitle)))) : null));
}
export default ColoredCard;
//# sourceMappingURL=ColoredCard.js.map