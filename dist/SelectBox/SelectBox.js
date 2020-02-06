import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, TextInput, FlatList, ScrollView } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
function SelectBox(_a) {
    var placeholder = _a.placeholder, label = _a.label, renderItem = _a.renderItem, data = _a.data;
    var _b = useState(""), value = _b[0], setValue = _b[1];
    var ref = useRef(null);
    return (React.createElement(React.Fragment, null,
        React.createElement(View, null,
            React.createElement(Text, { style: { color: "#787878", fontSize: 14 } }, label),
            React.createElement(View, { style: { marginLeft: -3 } },
                React.createElement(TextInput, { placeholder: placeholder, placeholderTextColor: "#c4c4c4", style: { fontSize: 18, fontWeight: "bold" }, onFocus: function () { return ref.current.open(); }, value: value }))),
        React.createElement(RBSheet, { ref: ref, height: 300, duration: 300, closeOnDragDown: true, customStyles: {
                container: {
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30
                }
            } },
            React.createElement(ScrollView, null,
                React.createElement(FlatList, { data: data, renderItem: function (item) {
                        return (React.createElement(TouchableOpacity, { onPress: function () {
                                setValue(item.item);
                                ref.current.close();
                            } }, renderItem(item)));
                    }, keyExtractor: function (item) { return item.id; } })))));
}
function Country(_a) {
    var country = _a.country;
    return (React.createElement(View, { style: { padding: 5, margin: 10 } },
        React.createElement(Text, { style: { color: "black", fontSize: 16 } }, country)));
}
function Select(_a) {
    var data = _a.data, options = _a.options;
    return (React.createElement(View, null,
        React.createElement(SelectBox, { placeholder: data.placeholder, data: options, onSelect: function (item) { return item; }, renderItem: function (_a) {
                var item = _a.item;
                return React.createElement(Country, { id: item, country: item });
            }, label: data.label })));
}
export default Select;
//# sourceMappingURL=SelectBox.js.map