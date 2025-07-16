import { useEffect, useState } from 'react';
import { IPatient } from '../../patient/types/type';
import { useSelector } from 'react-redux';
import moment from 'moment';

function useAppointmentFilter() {
  const [data, setData] = useState<IPatient[]>([]);
  const [laoding, setLoading] = useState<boolean>(false);

  const [selectedDate, setSelectedDate] = useState(
    // new Date().toISOString().split('T')[0],
    moment(new Date())?.format('YYYY-MM-DD'),
  );

  const filteredData =
    data?.filter(
      item =>
        moment(item?.appointmentDateTime)?.format('YYYY-MM-DD') ===
        selectedDate,
    ) ?? [];

  console.log('filteredData = ', filteredData);

  const appointmentData = useSelector(
    (state: any) => state?.patient?.appointmentData,
  );

  useEffect(() => {
    fetchAppointmentList();
  }, [selectedDate, appointmentData]);

  const fetchAppointmentList = () => {
    try {
      setLoading(true);
      setData(appointmentData ?? []);
    } catch (error) {
      console.log('error while fetching appointments by date= ', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    fetchAppointmentList,
    filteredData,
    laoding,
    selectedDate,
    setSelectedDate,
  };
}
export default useAppointmentFilter;
