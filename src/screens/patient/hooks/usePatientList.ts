import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IPatient } from '../types/type';

function usePatientList() {
  const [laoding, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<IPatient[]>([]);

  const appointmentData = useSelector(state => state?.patient?.appointmentData);

  useEffect(() => {
    fetchpatientsList();
  }, [appointmentData]);

  const fetchpatientsList = async () => {
    try {
      // get data from redux store and set to state
      setLoading(true);

      setData(appointmentData ?? []);
    } catch (error) {
      console.log('error while fetching appointments = ', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    laoding,
    fetchpatientsList,
  };
}

export default usePatientList;
