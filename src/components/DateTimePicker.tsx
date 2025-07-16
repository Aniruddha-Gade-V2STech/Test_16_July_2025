import React, { useState } from 'react';
import moment from 'moment';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Color } from '../assets/Color';

type Props = {
  value: Date | string;
  onChange: (date: string) => void;
  placeholder: string;
  label: string;
  errorMsg: string;
  editable?: boolean;
  mandatory: boolean;
  maxDate?: Date;
  minDate?: Date;
  mode: 'date' | 'time' | 'datetime';
};

function DateTimePicker({
  mode,
  mandatory,
  placeholder,
  label,
  value,
  onChange,
  errorMsg,
  editable = true,
  maxDate,
  minDate,
}: Readonly<Props>) {
  const [isDatePickerVisible, setDatePickerVisible] = useState<boolean>(false);

  const showDateTimePicker = () => {
    if (!editable) return;
    setDatePickerVisible(true);
  };

  const handleConfirm = (val: Date) => {
    const modifiedVal = moment(val)?.format('YYYY-MM-DD HH:mm:ss');
    onChange(modifiedVal);
    hidePicker();
  };

  const hidePicker = () => {
    setDatePickerVisible(false);
  };

  const opacity = { opacity: editable ? 1 : 0.5 };

  return (
    <View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={mode}
        onConfirm={val => handleConfirm(val)}
        onCancel={hidePicker}
        maximumDate={maxDate ?? undefined}
        minimumDate={minDate ?? undefined}
        disabled={!editable}
      />

      <View style={[styles.container, opacity]}>
        <Text style={styles.label}>
          {label}
          {mandatory && <Text style={styles.mandatory}>*</Text>}
        </Text>

        <TouchableOpacity
          style={[styles.DateContainer, opacity]}
          activeOpacity={0.4}
          onPress={showDateTimePicker}
        >
          <Text
            style={[styles.date, { color: !value ? Color.grey : Color.grey }]}
          >
            {value ? moment(value)?.format('YYYY-MM-DD HH:mm') : placeholder}
          </Text>
        </TouchableOpacity>

        {errorMsg && <Text style={styles.errorStyle}>{errorMsg}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 5,
    fontSize: 14,
    color: Color.white,
  },
  mandatory: {
    color: Color.red,
    fontSize: 12,
    lineHeight: 14,
  },
  date: {
    fontSize: 14,
    color: Color.white,
  },
  errorStyle: {
    marginTop: 2,
    fontSize: 12,
    color: Color.red,
  },
  container: {
    marginBottom: '4%',
  },
  DateContainer: {
    height: 47,
    paddingLeft: '2%',
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: Color.black,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: Color.grey,
    paddingRight: '4%',
    borderWidth: 1,
  },
});

export default DateTimePicker;
