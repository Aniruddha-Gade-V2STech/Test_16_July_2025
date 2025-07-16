import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StatusType } from '../screens/patient/types/type';
import { STATUS } from '../screens/doctor/constant/constant';

type Props = {
  status: StatusType;
};

const Status = ({ status }: Readonly<Props>) => {
  const getStatusStyle = () => {
    switch (status) {
      case STATUS.APPROVED:
        return styles.approved;
      case STATUS.PENDING:
        return styles.pending;
      case STATUS.REJECTED:
        return styles.rejected;
      default:
        return styles.default;
    }
  };

  return (
    <View style={[styles.container, getStatusStyle()]}>
      <Text style={styles.text}>{status ?? ''}</Text>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  approved: {
    backgroundColor: 'green',
  },
  pending: {
    backgroundColor: 'orange',
  },
  rejected: {
    backgroundColor: 'red',
  },
  default: {
    backgroundColor: 'gray',
  },
});
