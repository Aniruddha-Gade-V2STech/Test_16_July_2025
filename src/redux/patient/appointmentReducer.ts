import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PATIENT_DATA } from '../../constant/patientData';
import { RejectReasonType } from '../../screens/doctor/types/type';
import { IPatient } from '../../screens/patient/types/type';

type RootState = {
  appointmentData: IPatient[];
};

const initialState: RootState = {
  appointmentData: PATIENT_DATA,
  // appointmentData: [],
};

const PatientSlice = createSlice({
  name: 'appointment',
  initialState: initialState,
  reducers: {

    // set appointment
    setAppointment: (state, action: PayloadAction<IPatient[]>) => {
      state.appointmentData = action.payload;
    },

    // add appointment
    addAppointment: (state, action: PayloadAction<IPatient>) => {
      console.log('action.payload = ', action.payload);
      state.appointmentData = [...state.appointmentData, action.payload];
    },

    updateAppointment: (state, action: PayloadAction<IPatient>) => {
      const index = state.appointmentData?.findIndex(
        patient => patient?.id === action.payload?.id,
      );
      if (index !== -1) {
        state.appointmentData[index] = { ...action.payload };
      }
    },

    rejectAppointment: (state, action: PayloadAction<RejectReasonType>) => {
      const { id, remarks } = action.payload;

      // find patient data by id
      const index = state?.appointmentData?.findIndex(
        patient => patient?.id === id,
      );

      // update patient data by id and set status to rejected
      if (index !== -1) {
        state.appointmentData[index] = {
          ...state?.appointmentData?.[index],
          status: 'Rejected',
          remarks,
        };
      }
    },
  },
});

export const {
  setAppointment,
  addAppointment,
  updateAppointment,
  rejectAppointment,
} = PatientSlice.actions;

export default PatientSlice.reducer;
