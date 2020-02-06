import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
var styles = StyleSheet.create({
    MainContainer: {
        justifyContent: "center",
        flex: 1,
        paddingBottom: 10
    },
    cardStyle: {
        justifyContent: "center",
        alignItems: "center",
        height: 200,
        backgroundColor: "#121111",
        color: "white",
        borderRadius: 10,
        marginLeft: 5,
        marginRight: 5,
        fontSize: 16
    },
    textStyle: {
        fontSize: 14,
        textAlign: "left",
        fontWeight: "bold"
    },
    descriptionStyle: {
        fontSize: 12
    }
});
function PinterestCard(_a) {
    var data = _a.data;
    return (React.createElement(FlatList, { data: data, renderItem: function (_a) {
            var item = _a.item;
            return (React.createElement(View, { style: { flex: 1, flexDirection: "column", margin: 1 } },
                React.createElement(TouchableOpacity, null,
                    React.createElement(Image, { style: styles.cardStyle, source: { uri: item.image } })),
                React.createElement(Text, { style: styles.textStyle }, item.title),
                React.createElement(Text, { style: styles.descriptionStyle }, item.description)));
        }, numColumns: 2, keyExtractor: function (item, index) { return index.toString(); } }));
}
export default PinterestCard;
//# sourceMappingURL=PinterestCard.js.map