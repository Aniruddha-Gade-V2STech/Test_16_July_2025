import { StyleSheet,  View } from 'react-native';
import React from 'react';
import useRejectAppointment from '../hooks/useRejectAppointment';
import { Controller } from 'react-hook-form';
import TextInputField from '../../../components/TextInputField';
import { LABEL } from '../../patient/constant/label';
import CustomButton from '../../../components/CustomButton';

type Props = {
  closeModal: () => void;
  patientId: string;
};

const RejectModalForm = ({ closeModal, patientId }: Readonly<Props>) => {
  const { control, onSubmit, handleSubmit, errors } = useRejectAppointment({
    patientId,
    closeModal,
  });

  return (
    <View>
      <Controller
        name="remarks"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInputField
            label={LABEL.REMARKS}
            placeholder={LABEL.REASON_FOR_REJECTION}
            value={value}
            onChange={onChange}
            mandatory
            errorMsg={errors.remarks?.message ?? ''}
          />
        )}
      />

      <CustomButton
        title={LABEL.SUBMIT_REJECT}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

export default RejectModalForm;

const styles = StyleSheet.create({});
