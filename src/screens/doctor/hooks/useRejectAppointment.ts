import { yupResolver } from '@hookform/resolvers/yup';
import REJECT_SCHEMA from '../schema/schema';
import { RejectReasonType } from '../types/type';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { rejectAppointment } from '../../../redux/patient/appointmentReducer';
import { Alert } from 'react-native';

type Props = {
  closeModal: () => void;
  patientId: string;
};

function useRejectAppointment({ closeModal, patientId }: Readonly<Props>) {
  const dispatch = useDispatch();
  console.log('patientId = ', patientId);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RejectReasonType>({
    resolver: yupResolver(REJECT_SCHEMA),
    defaultValues: {
      remarks: '',
    },
  });

  const onSubmit = (data: RejectReasonType) => {
    const payload = {
      remarks: data?.remarks,
      id: patientId,
    };

    dispatch(rejectAppointment(payload));
    Alert.alert('Success', 'Appointment rejected successfully!');
    closeModal();
  };

  return {
    control,
    onSubmit,
    handleSubmit,
    errors,
  };
}

export default useRejectAppointment;
