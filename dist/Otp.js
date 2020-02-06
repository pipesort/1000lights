import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, ActivityIndicator, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
var styles = StyleSheet.create({
    otpButton: {
        justifyContent: 'flex-end',
        backgroundColor: '#ff297f',
        alignItems: 'center',
        height: 50,
        width: '50%',
        borderRadius: 20,
        margin: 10,
        marginLeft: 5,
        marginRight: 30,
    },
});
function Otp(_a) {
    var _this = this;
    var navigation = _a.navigation;
    var _b = useState(false), isLoading = _b[0], setLoading = _b[1];
    var _c = useState(false), isSuccess = _c[0], setIsSuccess = _c[1];
    var stopLoading = function () {
        setTimeout(function () {
            setLoading(isLoading);
            setIsSuccess(!isSuccess);
            navigation.navigate('SignupForm');
        }, 2000);
    };
    return (React.createElement(View, { style: {
            backgroundColor: '#f2f2f2',
            margin: 10,
            padding: 16,
            borderRadius: 20,
        } },
        React.createElement(View, null,
            React.createElement(Text, { style: {
                    color: 'black',
                    fontSize: 20,
                    fontWeight: 'bold',
                    width: 150,
                } }, "enter one time password"),
            React.createElement(Text, { style: { color: 'gray', fontSize: 18, width: 200 } }, "please enter otp sent to your mobile number"),
            React.createElement(View, null,
                React.createElement(TextInput, { placeholder: "1234", placeholderTextColor: "#7d7d7d", style: { fontSize: 30, fontWeight: 'bold' }, autoFocus: true, maxLength: 4, keyboardType: 'numeric' })),
            isSuccess == false && isLoading == false ? (React.createElement(TouchableOpacity, { onPress: function () {
                    setLoading(!isLoading);
                    stopLoading();
                    _this.panel.close();
                } },
                React.createElement(View, { style: styles.otpButton },
                    React.createElement(View, { style: { flex: 1, flexDirection: 'row' } },
                        React.createElement(Text, { style: {
                                color: 'white',
                                marginTop: 12,
                                marginLeft: 5,
                                fontSize: 18,
                            } }, "Submit"))))) : (React.createElement(View, { style: { flex: 1, flexDirection: 'row', margin: 5, marginLeft: 10 } }, isLoading == true ? (React.createElement(ActivityIndicator, { size: "small", color: "#ff297f" })) : (React.createElement(View, { style: { marginTop: -10 } },
                React.createElement(Icon, { name: "check", color: "#ff297f", size: 30 }))))))));
}
export default Otp;
//# sourceMappingURL=Otp.js.map