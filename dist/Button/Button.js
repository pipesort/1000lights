import { __assign, __rest } from "tslib";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../config/colors";
var Button = function (_a) {
    var children = _a.children, _b = _a.size, size = _b === void 0 ? "medium" : _b, _c = _a.color, color = _c === void 0 ? "primary" : _c, _d = _a.appearance, appearance = _d === void 0 ? "normal" : _d, style = _a.style, disabled = _a.disabled, rest = __rest(_a, ["children", "size", "color", "appearance", "style", "disabled"]);
    return (React.createElement(View, null,
        React.createElement(TouchableOpacity, __assign({ activeOpacity: 0.2 }, rest),
            React.createElement(View, { style: [styles({ color: color, appearance: appearance }).button, style] },
                React.createElement(Text, { style: [styles({ size: size }).text] }, children)))));
};
var styles = function (_a) {
    var size = _a.size, _b = _a.color, color = _b === void 0 ? "primary" : _b, appearance = _a.appearance;
    return StyleSheet.create({
        button: {
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            backgroundColor: colors[color] || colors["primary"],
            borderRadius: 5,
            paddingHorizontal: 20,
            paddingVertical: 5,
            borderWidth: appearance === "bordered" ? StyleSheet.hairlineWidth : 0,
            borderColor: colors[color] || colors["primary"]
        },
        text: {
            color: "#ffffff",
            fontSize: size === "medium" ? 20 : size === "small" ? 10 : 30
        }
    });
};
export default Button;
//# sourceMappingURL=Button.js.map