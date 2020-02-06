import React, { ReactElement } from 'react';
import { View, ViewStyle, StyleSheet, StyleProp } from 'react-native';

export interface CardProps {
  children?: ReactElement;
  style?: StyleProp<ViewStyle>;
}

const Card = ({ children, style }: CardProps): ReactElement<CardProps> => {
  return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    margin: 15,
    borderRadius: 2,
    elevation: 1,
  },
});

export default Card;
