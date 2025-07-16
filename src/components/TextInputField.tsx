import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StyleProp,
  TextStyle,
} from 'react-native';
import React from 'react';
import { Color } from '../assets/Color';
import { FieldError } from 'react-hook-form';

interface Props {
  placeholder: string;
  value: string | number;
  onChange: (text: string) => void;
  label: string;
  labelStyle?: StyleProp<TextStyle>;
  errorMsg?: string | FieldError;
  mandatory?: boolean;
  inputStyle?: TextStyle;
  isPassword?: boolean;
  editable?: boolean;
}

function TextInputField(props: Readonly<Props>) {
  const {
    placeholder,
    value,
    onChange,
    labelStyle,
    label,
    errorMsg,
    inputStyle,
    mandatory,
    editable = true,
  } = props;

  const opacity = { opacity: editable ? 1 : 0.5 };

  return (
    <View style={[styles.container, opacity]}>
      <View style={styles.flexCenter}>
        <Text style={[styles.label, labelStyle]}>{label}</Text>

        {mandatory && <Text style={styles.mandatory}>*</Text>}
      </View>

      <View style={[styles.inputContainer]}>
        <TextInput
          style={[styles.input, inputStyle]}
          value={value?.toString() ?? ''}
          onChangeText={onChange}
          editable={editable}
          placeholder={placeholder}
          placeholderTextColor={Color.grey}
        />
      </View>

      {errorMsg && <Text style={styles.error}>{errorMsg}</Text>}
    </View>
  );
}

export default TextInputField;

export const styles = StyleSheet.create({
  container: {
    marginBottom: '4%',
  },
  input: {
    color: Color.white,
    fontSize: 14,
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Color.grey,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: '1%',
    paddingHorizontal: '1%',
    height: 45,
  },
  error: {
    fontSize: 11,
    lineHeight: 14,
    textAlign: 'left',
    color: Color.red,
  },
  flexCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mandatory: {
    fontSize: 12,
    lineHeight: 14,
    color: Color.red,
    marginLeft: 2,
  },
  label: {
    fontSize: 14,
    lineHeight: 21,
    color: Color.white,
    fontWeight: '400',
  },
});
