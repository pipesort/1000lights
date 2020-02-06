import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import PinterestCard from "./PinterestCard";
var styles = StyleSheet.create({
    MainContainer: {
        justifyContent: "center",
        flex: 1,
        paddingTop: 30,
        paddingBottom: 10
    }
});
function PinterestCardList(_a) {
    var data = _a.data;
    return (React.createElement(FlatList, { data: data, renderItem: function (_a) {
            var item = _a.item, index = _a.index;
            return (React.createElement(PinterestCard, { data: item, key: index }));
        }, numColumns: 2, keyExtractor: function (item, index) { return "P" + index.toString(); } }));
}
function PinterestCards(_a) {
    var data = _a.data;
    return (React.createElement(React.Fragment, null,
        React.createElement(View, { style: styles.MainContainer },
            React.createElement(PinterestCardList, { data: data }))));
}
export default PinterestCards;
//# sourceMappingURL=PinterestCards.js.map