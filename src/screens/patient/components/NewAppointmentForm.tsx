import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { LABEL } from '../constant/label';
import { Color } from '../../../assets/Color';
import useAppointment from '../hooks/useAppointment';
import { Controller } from 'react-hook-form';
import TextInputField from '../../../components/TextInputField';
import CustomButton from '../../../components/CustomButton';
import DateTimePicker from '../../../components/DateTimePicker';
import DocumentPicker from '../../../components/DocumentPicker';

type Props = {
  closeModal: () => void;
};

const NewAppointmentForm = ({ closeModal }: Readonly<Props>) => {
  const { control, handleSubmit, errors, onSubmit } = useAppointment({
    closeModal,
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Patient Name */}
        <Controller
          name="patientName"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInputField
              label={LABEL.PATIENT_NAME}
              placeholder={LABEL.ENTER_PATIENT_NAME}
              value={value}
              onChange={onChange}
              mandatory
              errorMsg={errors.patientName?.message ?? ''}
            />
          )}
        />

        {/* Disease */}
        <Controller
          name="disease"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInputField
              label={LABEL.DISEASE}
              placeholder={LABEL.ENTER_DISEASE}
              value={value}
              onChange={onChange}
              mandatory
              errorMsg={errors.disease?.message ?? ''}
            />
          )}
        />

        {/* Appointment Date Time */}
        <Controller
          name="appointmentDateTime"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DateTimePicker
              mandatory
              label={LABEL.APPOINTMENT_DATE_TIME}
              placeholder={LABEL.CHOOSE_DATE_TIME}
              value={value}
              onChange={onChange}
              minDate={new Date()}
              mode="datetime"
              errorMsg={errors.appointmentDateTime?.message ?? ''}
            />
          )}
        />

        {/* File */}
        <Controller
          name="file"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DocumentPicker
              mandatory
              label={LABEL.FILE}
              placeholder={LABEL.FILE}
              value={value}
              onChange={onChange}
              errorMsg={errors.file?.message ?? ''}
            />
          )}
        />
      </ScrollView>

      <CustomButton title={LABEL.SUBMIT} onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default NewAppointmentForm;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Color.white,
  },

  container: {
    flex: 1,
  },
});
