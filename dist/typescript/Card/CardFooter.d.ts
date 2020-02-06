import React, { ReactElement } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export interface CardFooterProps {
    children: ReactElement;
    footerStyle?: StyleProp<ViewStyle>;
}
declare const CardFooter: ({ children, footerStyle, }: CardFooterProps) => React.ReactElement<CardFooterProps, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export default CardFooter;
