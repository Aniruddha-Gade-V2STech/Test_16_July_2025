import * as yup from 'yup';
import ERR from './validationMessages';

const REJECT_SCHEMA = yup.object().shape({
  remarks: yup
    .string()
    .required(ERR.remarks.required)
    .min(4, ERR.remarks.min)
    .max(50, ERR.remarks.max),
});

export default REJECT_SCHEMA;
