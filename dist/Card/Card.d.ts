import React, { ReactElement } from 'react';
import { ViewStyle, StyleProp } from 'react-native';
export interface CardProps {
    children?: ReactElement;
    style?: StyleProp<ViewStyle>;
}
declare const Card: ({ children, style }: CardProps) => React.ReactElement<CardProps, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export default Card;
