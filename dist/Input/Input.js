import { __assign, __rest } from "tslib";
import React from 'react';
import { View, StyleSheet, Text, TextInput, } from 'react-native';
var Input = function (_a) {
    var style = _a.style, _b = _a.appearance, appearance = _b === void 0 ? 'underlined' : _b, inputContainerStyle = _a.inputContainerStyle, messageContainerStyle = _a.messageContainerStyle, label = _a.label, disabled = _a.disabled, message = _a.message, leftInputIcon = _a.leftInputIcon, rightInputIcon = _a.rightInputIcon, messageIcon = _a.messageIcon, rest = __rest(_a, ["style", "appearance", "inputContainerStyle", "messageContainerStyle", "label", "disabled", "message", "leftInputIcon", "rightInputIcon", "messageIcon"]);
    return (React.createElement(View, { style: [styles({}).input, style] },
        React.createElement(Text, { style: [styles({}).label] }, label),
        React.createElement(View, { style: [styles({ appearance: appearance }).inputContainer, inputContainerStyle] },
            leftInputIcon && React.createElement(View, null, leftInputIcon),
            React.createElement(TextInput, __assign({}, rest, { editable: !disabled, style: [styles({}).inputStyle] })),
            rightInputIcon && (React.createElement(View, { style: [styles({}).iconContainer] }, rightInputIcon))),
        React.createElement(View, { style: [styles({}).messageContainer, messageContainerStyle] },
            messageIcon && (React.createElement(View, { style: [styles({}).iconContainer] }, messageIcon)),
            React.createElement(Text, { style: [styles({}).message] }, message))));
};
var styles = function (_a) {
    var appearance = _a.appearance;
    return StyleSheet.create({
        input: {
            width: '100%',
            paddingHorizontal: 10,
        },
        inputContainer: {
            flexDirection: 'row',
            borderWidth: appearance === 'bordered' || appearance === 'rounded'
                ? StyleSheet.hairlineWidth
                : 0,
            borderBottomWidth: StyleSheet.hairlineWidth,
            alignItems: 'center',
            borderColor: '#bdbdbd',
            borderRadius: appearance === 'rounded' ? 10 : 0,
        },
        iconContainer: {
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
        },
        inputStyle: {
            color: '#000000',
            fontSize: 20,
            flex: 1,
        },
        label: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#000000',
            marginBottom: 5,
        },
        message: {
            margin: 5,
            fontSize: 14,
            color: '#ff0000',
        },
        messageContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
    });
};
export default Input;
//# sourceMappingURL=Input.js.map