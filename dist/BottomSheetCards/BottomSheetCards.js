import React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
var styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        paddingTop: 30,
        paddingBottom: 10
    },
    cardOneContent: {
        width: 100,
        height: 60,
        flexDirection: 'column',
        backgroundColor: '#2675fc',
        margin: 10,
        borderRadius: 15,
        padding: 10,
    },
});
var data = [
    {
        title: 'Card 1',
        description: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        image: 'https://i.imgur.com/UYiroysl.jpg'
    },
    {
        title: 'Card 2',
        description: 'Lorem ipsum dolor sit amet',
        image: 'https://i.imgur.com/UPrs1EWl.jpg'
    },
    {
        title: 'Card 3',
        description: 'Lorem ipsum dolor sit amet et nuncat ',
        image: 'https://i.imgur.com/MABUbpDl.jpg'
    },
    {
        title: 'Card 4',
        description: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        image: 'https://i.imgur.com/KZsmUi2l.jpg'
    }
];
function BottomSheetCards() {
    return (React.createElement(View, { style: styles.MainContainer },
        React.createElement(FlatList, { data: data, renderItem: function (_a) {
                var item = _a.item;
                return (React.createElement(TouchableOpacity, null,
                    React.createElement(View, { style: styles.cardOneContent },
                        React.createElement(Text, { style: {
                                color: 'white',
                                fontSize: 20,
                                fontWeight: 'bold',
                                textAlign: 'center',
                                marginTop: 5,
                            } }, item.title))));
            }, numColumns: 2, keyExtractor: function (item, index) { return index.toString(); } })));
}
export default BottomSheetCards;
//# sourceMappingURL=BottomSheetCards.js.map