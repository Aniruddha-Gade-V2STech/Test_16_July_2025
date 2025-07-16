export interface IPatient {
  id?: number;
  patientName: string;
  appointmentDateTime: string;
  disease: string;
  file: any;
  status: StatusType;
  remarks?: string;
}

export type renderNameType = {
  label: string;
  value: string;
  style: any;
};

export type StatusType = 'Pending' | 'Approved' | 'Rejected';
