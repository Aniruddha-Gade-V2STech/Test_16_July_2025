import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Color } from '../../../assets/Color';
import { IPatient, renderNameType } from '../../patient/types/type';
import { LABEL } from '../../patient/constant/label';
import CommonModal from '../../../components/Modal';
import RejectModalForm from './RejectModalForm';
import CustomButton from '../../../components/CustomButton';
import { STATUS } from '../constant/constant';
import Status from '../../../components/Status';

type Props = {
  patient: IPatient;
};

const RenderName = ({ label, value, style }: Readonly<renderNameType>) => {
  if (!label || !value) return null;
  return (
    <View style={styles.flexCenter}>
      <Text style={[style, styles.labelStyle]}>{label ?? ''}: </Text>
      <Text style={style}>{value ?? ''}</Text>
    </View>
  );
};

const AppointmentCard = ({ patient }: Readonly<Props>) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {/* Patient Name */}
        <RenderName
          label={LABEL.PATIENT_NAME}
          value={patient?.patientName}
          style={styles.name}
        />

        {/* Date Time */}
        <RenderName
          label={LABEL.TIME}
          value={patient?.appointmentDateTime}
          style={styles.date}
        />

        {/* Disease */}
        <RenderName
          label={LABEL.DISEASE}
          value={patient?.disease}
          style={styles.disease}
        />

        {/* Remarks */}
        <RenderName
          label={LABEL.REMARKS}
          value={patient?.remarks ?? ''}
          style={styles.disease}
        />

        {/* status */}
        <Status status={patient?.status ?? ''} />

        <View style={styles.rejectBtn}>
          {STATUS.REJECTED !== patient?.status && (
            <CustomButton onPress={openModal} title="Reject" />
          )}
        </View>
      </View>

      {/* File */}
      {patient?.file && (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: patient?.file?.uri }}
            width={100}
            height={100}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
      )}

      {/* Reject Modal */}
      <CommonModal
        visible={isModalOpen}
        // visible={true}
        title={LABEL.REASON_FOR_REJECTION}
        onClose={closeModal}
        InnerContent={() => (
          <RejectModalForm closeModal={closeModal} patientId={patient?.id} />
        )}
      />
    </View>
  );
};

export default AppointmentCard;

const styles = StyleSheet.create({
  container: {
    width: '45%',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    color: Color.white,
  },
  date: {
    fontSize: 14,
    marginBottom: 5,
    color: Color.white,
  },
  disease: {
    fontSize: 14,
    marginBottom: 5,
    color: Color.white,
  },
  file: {
    fontSize: 14,
    marginBottom: 5,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  flexCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelStyle: { fontWeight: 'bold' },
  wrapper: {
    flexDirection: 'row',
    backgroundColor: Color.black_2,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  rejectBtn: {
    justifyContent: 'flex-end',
    marginTop: 30,
  },
  image: {
    height: 200,
    width: 150,
    borderRadius: 10,
  },
  imageContainer: {
    borderRadius: 50,
    height: 200,
    width: 150,
  },
});
