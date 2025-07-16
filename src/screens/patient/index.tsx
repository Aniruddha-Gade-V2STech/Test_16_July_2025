import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Color } from '../../assets/Color';
import PatientList from './components/PatientList';
import usePatientList from './hooks/usePatientList';

const PatientScreen = () => {
  const { fetchpatientsList: refetch, laoding, data } = usePatientList();

  return (
    <View style={styles.container}>
      <PatientList data={data} refetch={refetch} laoding={laoding} />
    </View>
  );
};

export default PatientScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.black,
    padding: '3%',
  },
});
