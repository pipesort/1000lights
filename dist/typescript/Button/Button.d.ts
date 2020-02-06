import React from "react";
import { TouchableOpacityProps } from "react-native";
export interface ButtonProps extends TouchableOpacityProps {
    disabled?: boolean;
    children?: string;
    size?: string;
    color?: string;
    appearance?: string;
}
declare const Button: ({ children, size, color, appearance, style, disabled, ...rest }: ButtonProps) => React.ReactElement<ButtonProps, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export default Button;
