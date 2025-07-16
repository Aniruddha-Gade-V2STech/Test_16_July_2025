import { configureStore } from '@reduxjs/toolkit';
import PatientSlice from './patient/appointmentReducer';

const store = configureStore({
  reducer: {
    patient: PatientSlice,
  },
});

export default store;
