const ERR = {
  patientName: {
    required: 'Please enter your full name.',
    min: 'Full name must be at least 2 characters.',
    max: 'Full name must be at most 50 characters.',
    alphaOnly: 'Full name must contain only letters',
  },
  appointmentDateTime: {
    required: 'Please select your appointment date time.',
    invalid: 'Date time of appointmentmust be a valid date.',
    past: 'Date time of appointment cannot be in the past.',
  },
  disease: {
    required: 'Please enter your disease.',
    min: 'Disease must be at least 2 characters.',
    max: 'Disease must be at most 50 characters.',
    alphaOnly: 'Disease must contain only letters',
  },
  file: {
    required: 'Please upload a file.',
  },
};

export default ERR;
