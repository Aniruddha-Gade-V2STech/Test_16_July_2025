import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Color } from '../assets/Color';

type Props = {
  title: string;
};

const ListEmptyComponent = ({ title }: Readonly<Props>) => {
  return (
    <View style={styles.listEmptyComponent}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default ListEmptyComponent;

const styles = StyleSheet.create({
  listEmptyComponent: {
    height: 400,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Color.white,
    textAlign: 'center',
  },
});
