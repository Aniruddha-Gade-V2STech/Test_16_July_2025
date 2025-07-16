import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import useDocumentPick from '../hooks/useDocumentPick';
import { Color } from '../assets/Color';
import { FieldError } from 'react-hook-form';

type Props = {
  label: string;
  placeholder: string;
  value: any;
  onChange: () => void;
  mandatory: boolean;
  errorMsg?: string | FieldError;
  editable?: boolean;
};

const DocumentPicker = ({
  value,
  onChange,
  mandatory,
  errorMsg,
  editable = true,
  label,
  placeholder,
}: Readonly<Props>) => {
  const { onGalleryPick } = useDocumentPick({
    onChange,
  });

  const opacity = { opacity: editable ? 1 : 0.5 };

  return (
    <>
      <TouchableOpacity
        onPress={onGalleryPick}
        style={[styles.container, opacity]}
      >
        <View style={styles.flexCenter}>
          <Text style={styles.label}>{label}</Text>

          {mandatory && <Text style={styles.mandatory}>*</Text>}
        </View>

        <View style={[styles.inputContainer]}>
          {value ? (
            <Text style={styles.input}>{value?.name}</Text>
          ) : (
            <Text style={styles.placeholder}>{placeholder}</Text>
          )}
        </View>

        {errorMsg && <Text style={styles.error}>{errorMsg}</Text>}
      </TouchableOpacity>

      {/* render base 64 image if available */}
      {value && (
        <Image
          source={{ uri: value?.uri }}
          width={100}
          height={100}
          resizeMode="contain"
          style={styles.image}
        />
      )}
    </>
  );
};

export default DocumentPicker;

const styles = StyleSheet.create({
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
  placeholder: {
    color: Color.grey,
    fontSize: 14,
    width: '100%',
  },
  image: {
    height: 500,
    width: 200,
  },
});
