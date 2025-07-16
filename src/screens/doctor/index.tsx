import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Color } from '../../assets/Color';
import AppointmentList from './components/AppointmentList';
import useAppointmentFilter from './hooks/useAppointmentFilter';
import { Calendar } from 'react-native-calendars';

const DoctorScreen = () => {
  const {
    selectedDate,
    laoding,
    filteredData,
    setSelectedDate,
    fetchAppointmentList: refetch,
  } = useAppointmentFilter();

  return (
    <View style={styles.container}>
      {/* Calender - (Filter data by date) */}
      <Calendar
        onDayPress={day => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: {
            selected: true,
            marked: true,
            selectedColor: Color.primary,
          },
        }}
        style={styles.calender}
      />

      <ScrollView>
        {/* Appointment List */}
        <AppointmentList
          data={filteredData ?? []}
          refetch={refetch}
          laoding={laoding}
        />
      </ScrollView>
    </View>
  );
};

export default DoctorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.black,
    padding: 10,
    gap: 10,
  },
  calender: {
    backgroundColor: Color.black_2,
    borderRadius: 15,
    padding: 10,
  },
});
