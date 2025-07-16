import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IPatient, renderNameType } from '../types/type';
import { Color } from '../../../assets/Color';
import { LABEL } from '../constant/label';
import Status from '../../../components/Status';

type Props = {
  patient: IPatient;
};

const RenderName = ({ label, value, style }: Readonly<renderNameType>) => {
  if (!label || !value) return null;

  return (
    <View style={styles.flexCenter}>
      <Text style={[style, styles.labelStyle]}>{label}: </Text>
      <Text style={style}>{value}</Text>
    </View>
  );
};

const PatientCard = ({ patient }: Readonly<Props>) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {/* Patient Name */}
        <RenderName
          label={LABEL.PATIENT_NAME}
          value={patient?.patientName}
          style={styles.name}
        />

        {/* Appointment Date Time */}
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
    </View>
  );
};

export default PatientCard;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Color.black_2,
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    justifyContent:'space-between'
  },
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
