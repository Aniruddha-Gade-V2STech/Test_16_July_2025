import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IPatient } from '../../patient/types/type';
import AppointmentCard from './AppointmentCard';
import { LABEL } from '../../patient/constant/label';
import { getRandomIDByDigit } from '../../../utils/helperFunctions';

type Props = {
  laoding: boolean;
  refetch: () => void;
  data: IPatient[];
};

type renderItemProp = {
  item: IPatient;
};

const AppointmentList = ({ data, laoding, refetch }: Readonly<Props>) => {
  const renderItem = ({ item }: renderItemProp) => {
    const patient = {
      id: item?.id,
      patientName: item?.patientName ?? '',
      appointmentDateTime: item?.appointmentDateTime ?? '',
      disease: item?.disease ?? '',
      file: item?.file ?? '',
      status: item?.status ?? '',
      remarks: item?.remarks ?? '',
    };

    return <AppointmentCard patient={patient} />;
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
        ListEmptyComponent={
          <View style={{ height: 400 }}>
            <Text>{LABEL.NO_PATIENT_FOUND}</Text>
          </View>
        }
      />
    </View>
  );
};

export default AppointmentList;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },

  addPatientBtn: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});
