import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { IPatient } from '../types/type';
import PATIENT_SCHEMA from '../schema/schema';
import { INITIAL_PATIENT_DETAILS } from '../constant/label';
import { yupResolver } from '@hookform/resolvers/yup';
import { getRandomIDByDigit } from '../../../utils/helperFunctions';
import { Alert } from 'react-native';
import { addAppointment } from '../../../redux/patient/appointmentReducer';
import moment from 'moment';
import { STATUS } from '../../doctor/constant/constant';

type Props = {
  closeModal: () => void;
};

function useAppointment({ closeModal }: Readonly<Props>) {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IPatient>({
    resolver: yupResolver(PATIENT_SCHEMA),
    defaultValues: INITIAL_PATIENT_DETAILS,
  });

  const onSubmit = (data: IPatient) => {
    try {
      const payload = {
        id: getRandomIDByDigit(5),
        patientName: data?.patientName,
        appointmentDateTime:
          moment(data?.appointmentDateTime)?.format('YYYY-MM-DD') ?? '',
        disease: data?.disease,
        file: data?.file,
        status: STATUS.PENDING, // no need , as it is in pending state by default
      };

      dispatch(addAppointment(payload));
      Alert.alert('Success', 'Appointment booked successfully!');
      closeModal();
    } catch (error) {
      console.log('error while adding appointment = ', error);
    }
  };

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
  };
}
export default useAppointment;
