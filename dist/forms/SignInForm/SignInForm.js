import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, ActivityIndicator, } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Input from '../../Input/Input';
var styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    signinCard: {
        // width: 250,
        height: 400,
        flexDirection: 'column',
        // backgroundColor: '#f2f2f2',
        margin: 10,
        // marginTop: -10,
        borderRadius: 20,
        // borderBottomLeftRadius: 40,
        // borderTopRightRadius: 40,
        padding: 16,
    },
    buttonCard: {
        backgroundColor: '#f2f2f2',
        borderTopLeftRadius: 50,
        height: 200,
    },
    signInButton: {
        justifyContent: 'flex-end',
        backgroundColor: '#ff297f',
        alignItems: 'center',
        height: 50,
        width: '50%',
        borderRadius: 20,
        margin: 10,
        marginLeft: 30,
        marginRight: 30,
    },
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
function SigninForm(_a) {
    var navigation = _a.navigation, close = _a.close;
    var _b = useState(false), isLoading = _b[0], setLoading = _b[1];
    var _c = useState(false), isSuccess = _c[0], setIsSuccess = _c[1];
    var ref = useRef(null);
    var stopLoading = function () {
        setTimeout(function () {
            setLoading(isLoading);
            setIsSuccess(!isSuccess);
            ref.current.close();
            close();
            navigation.navigate('Showpage');
        }, 2000);
    };
    return (React.createElement(View, { style: { flex: 1, backgroundColor: '#e6e6e6' } },
        React.createElement(View, { style: {
                flex: 3,
            } },
            React.createElement(View, { style: styles.signinCard },
                React.createElement(Text, { style: {
                        color: 'black',
                        fontSize: 20,
                        fontWeight: 'bold',
                        width: 150,
                    } }, "enter your mobile number"),
                React.createElement(Text, { style: { color: 'gray', fontSize: 18, width: 200 } }, "please enter registered mobile number"),
                React.createElement(View, null,
                    React.createElement(Input, { placeholder: "9999999999", placeholderTextColor: "#7d7d7d", autoFocus: true, maxLength: 10, keyboardType: 'numeric', leftInputIcon: React.createElement(Icon, { name: "face", size: 25, 
                            // color="white"
                            style: { marginRight: 15 } }) })))),
        React.createElement(View, { style: styles.buttonCard },
            React.createElement(Text, { style: { color: 'gray', fontSize: 18, margin: 30 } }, "By clicking Sign in you are agree with our terms & conditions"),
            React.createElement(TouchableOpacity, { onPress: function () {
                    ref.current.open();
                } },
                React.createElement(View, { style: styles.signInButton },
                    React.createElement(View, { style: { flex: 1, flexDirection: 'row' } },
                        React.createElement(Text, { style: {
                                color: 'white',
                                marginTop: 12,
                                marginLeft: 5,
                                fontSize: 18,
                            } }, "Sign in"))))),
        React.createElement(RBSheet, { ref: ref, height: 300, duration: 300, closeOnDragDown: true, customStyles: {
                container: {
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                },
            } },
            React.createElement(View, { style: {
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
                        } },
                        React.createElement(View, { style: styles.otpButton },
                            React.createElement(View, { style: { flex: 1, flexDirection: 'row' } },
                                React.createElement(Text, { style: {
                                        color: 'white',
                                        marginTop: 12,
                                        marginLeft: 5,
                                        fontSize: 18,
                                    } }, "Submit"))))) : (React.createElement(View, { style: {
                            flex: 1,
                            flexDirection: 'row',
                            margin: 5,
                            marginLeft: 10,
                        } }, isLoading == true ? (React.createElement(ActivityIndicator, { size: "small", color: "#ff297f" })) : (React.createElement(View, { style: { marginTop: -10 } },
                        React.createElement(Icon, { name: "check", color: "#ff297f", size: 30 }))))))))));
}
export default SigninForm;
//# sourceMappingURL=SignInForm.js.map