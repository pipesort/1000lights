import React, { ReactElement } from 'react';
import { ViewStyle, StyleProp, ImageProps, ImageStyle, TextStyle } from 'react-native';
export interface CardTitleProps extends ImageProps {
    title?: string;
    titleStyle?: StyleProp<TextStyle>;
    description?: string;
    descriptionStyle?: StyleProp<TextStyle>;
    image?: ImageProps;
    imageStyle?: StyleProp<ImageStyle>;
    imageContainerStyle?: StyleProp<ViewStyle>;
    leftIcon?: ReactElement;
    rightIcon?: ReactElement;
    headerContainerStyle?: StyleProp<ViewStyle>;
    titleWrapperStyle?: StyleProp<ViewStyle>;
    underlayImage?: boolean;
}
declare const CardHeader: ({ title, titleStyle, description, descriptionStyle, leftIcon, rightIcon, image, imageStyle, imageContainerStyle, headerContainerStyle, titleWrapperStyle, underlayImage, }: CardTitleProps) => React.ReactElement<CardTitleProps, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export default CardHeader;
