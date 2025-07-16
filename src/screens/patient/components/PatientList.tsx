import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { IPatient } from '../types/type';
import { FlashList } from '@shopify/flash-list';
import PatientCard from './PatientCard';
import CustomButton from '../../../components/CustomButton';
import CommonModal from '../../../components/Modal';
import NewAppointmentForm from './NewAppointmentForm';
import { LABEL } from '../constant/label';
import { getRandomIDByDigit } from '../../../utils/helperFunctions';
import ListEmptyComponent from '../../../components/ListEmptyComponent';

type Props = {
  laoding: boolean;
  refetch: () => void;
  data: IPatient[];
};

const PatientList = ({ data, laoding, refetch }: Readonly<Props>) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  const renderItem = ({ item }: any) => {
    const patient = {
      id: item?.id,
      patientName: item?.patientName ?? '',
      appointmentDateTime: item?.appointmentDateTime ?? '',
      disease: item?.disease ?? '',
      file: item?.file ?? '',
      status: item?.status ?? '',
      remarks: item?.remarks ?? '',
    };

    return <PatientCard patient={patient} />;
  };

  // unique key
  const keyExtractor = (item: IPatient) =>
    item?.id?.toString() ?? getRandomIDByDigit(20)?.toString();

  return (
    <View style={styles.container}>
      {/* <FlashList renderItem={renderItem} data={data} /> */}

      <FlatList
        renderItem={renderItem}
        data={data}
        keyExtractor={keyExtractor}
        refreshControl={
          <RefreshControl refreshing={laoding} onRefresh={refetch} />
        }
        ListEmptyComponent={() => (
          <ListEmptyComponent title={LABEL.NO_PATIENT_FOUND} />
        )}
      />

      <View style={styles.addPatientBtn}>
        <CustomButton title={LABEL.ADD_PATIENT} onPress={openModal} />
      </View>

      <CommonModal
        visible={isModalOpen}
        // visible={true}
        title={LABEL.NEW_APPOINTMENT}
        onClose={closeModal}
        InnerContent={() => <NewAppointmentForm closeModal={closeModal} />}
      />
    </View>
  );
};

export default PatientList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },

  addPatientBtn: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});
