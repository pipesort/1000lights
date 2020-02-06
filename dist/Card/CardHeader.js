import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground, } from 'react-native';
var CardHeader = function (_a) {
    var title = _a.title, titleStyle = _a.titleStyle, description = _a.description, descriptionStyle = _a.descriptionStyle, leftIcon = _a.leftIcon, rightIcon = _a.rightIcon, image = _a.image, imageStyle = _a.imageStyle, imageContainerStyle = _a.imageContainerStyle, headerContainerStyle = _a.headerContainerStyle, titleWrapperStyle = _a.titleWrapperStyle, underlayImage = _a.underlayImage;
    var Component = (React.createElement(View, { style: [styles.headerContainer, headerContainerStyle] },
        React.createElement(View, { style: [styles.titleWrapper, titleWrapperStyle] },
            leftIcon && React.createElement(View, { style: [styles.leftIcon] }, leftIcon),
            React.createElement(View, { style: {
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: 50,
                } },
                title && React.createElement(Text, { style: [styles.title, titleStyle] }, title),
                description && (React.createElement(Text, { style: [styles.description, descriptionStyle] }, description))),
            rightIcon && React.createElement(View, null, rightIcon)),
        !underlayImage && image && (React.createElement(View, { style: [imageContainerStyle] },
            React.createElement(Image, { source: image, style: [styles.imageStyle, imageStyle] })))));
    if (!underlayImage || !image) {
        return Component;
    }
    return (React.createElement(ImageBackground, { source: image, style: [styles.imageStyle, imageStyle] }, Component));
};
var styles = StyleSheet.create({
    headerContainer: {},
    titleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 16,
    },
    title: {
        fontSize: 14,
        color: '#000000',
        fontWeight: 'bold',
    },
    description: {
        fontSize: 10,
        color: '#000000',
        fontWeight: '400',
        marginBottom: 2,
    },
    imageStyle: {
        height: 150,
    },
    leftIcon: {
        justifyContent: 'center',
        marginRight: 16,
    },
});
export default CardHeader;
//# sourceMappingURL=CardHeader.js.map