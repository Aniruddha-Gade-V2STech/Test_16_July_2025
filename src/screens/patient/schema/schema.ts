import * as yup from 'yup';
import ERR from './validationMessages';

const PATIENT_SCHEMA = yup.object().shape({
  patientName: yup
    .string()
    .required(ERR.patientName.required)
    .min(2, ERR.patientName.min)
    .max(50, ERR.patientName.max)
    .matches(/^[A-Za-z\s]+$/, ERR.patientName.alphaOnly),

  appointmentDateTime: yup
    .date()
    .transform((value, originalValue) => (originalValue === '' ? null : value))
    .nullable()
    .required(ERR.appointmentDateTime.required)
    .typeError(ERR.appointmentDateTime.invalid)
    .min(new Date(), ERR.appointmentDateTime.past),

  disease: yup
    .string()
    .required(ERR.disease.required)
    .min(2, ERR.disease.min)
    .max(50, ERR.disease.max)
    .matches(/^[A-Za-z\s]+$/, ERR.disease.alphaOnly),

  file: yup.mixed().required(ERR.file.required),
});

export default PATIENT_SCHEMA;
