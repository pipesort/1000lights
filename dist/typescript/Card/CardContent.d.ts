import React, { ReactElement } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export interface CardContentProps {
    children: ReactElement;
    contentWrapperStyle?: StyleProp<ViewStyle>;
}
declare const CardContent: ({ children, contentWrapperStyle, }: CardContentProps) => React.ReactElement<CardContentProps, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export default CardContent;
