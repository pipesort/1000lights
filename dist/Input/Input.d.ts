import React, { ReactElement } from 'react';
import { TextInputProps, StyleProp, ViewStyle } from 'react-native';
export interface InputProps extends TextInputProps {
    label?: string;
    message?: string;
    disabled?: boolean;
    leftInputIcon?: ReactElement;
    rightInputIcon?: ReactElement;
    messageIcon?: ReactElement;
    style?: StyleProp<ViewStyle>;
    inputContainerStyle?: StyleProp<ViewStyle>;
    messageContainerStyle?: StyleProp<ViewStyle>;
    appearance?: string;
}
declare const Input: ({ style, appearance, inputContainerStyle, messageContainerStyle, label, disabled, message, leftInputIcon, rightInputIcon, messageIcon, ...rest }: InputProps) => React.ReactElement<InputProps, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export default Input;
