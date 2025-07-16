import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Color } from '../assets/Color';

type Props = {
  title: string;
  onPress: () => void;
  style?: any;
  disabled?: boolean;
  loading?: boolean;
};

const CustomButton = ({
  title,
  onPress,
  style,
  disabled,
  loading,
}: Readonly<Props>) => {
  const opacity = { opacity: disabled ? 0.5 : 1 };

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style, opacity]}>
      <View>
        <Text style={styles.title}>{title}</Text>
        {loading && <Text style={styles.title}>Loading...</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  title: {
    color: Color.black,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    backgroundColor: Color.primary,
    width: '100%',
    height: 50,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
