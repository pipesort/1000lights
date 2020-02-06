import React, { ReactElement } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

export interface CardContentProps {
  children: ReactElement;
  contentWrapperStyle?: StyleProp<ViewStyle>;
}

const CardContent = ({
  children,
  contentWrapperStyle,
}: CardContentProps): ReactElement<CardContentProps> => {
  return <View style={[styles.content, contentWrapperStyle]}>{children}</View>;
};

const styles = StyleSheet.create({
  content: {
    padding: 5,
    marginLeft: 14,
  },
});

export default CardContent;
