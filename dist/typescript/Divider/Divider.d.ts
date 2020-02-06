import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';
interface DividerProps {
    style?: StyleProp<ViewStyle>;
}
declare const Divider: ({ style }: DividerProps) => React.ReactElement<DividerProps, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export default Divider;
