// interfaces/Appointment.ts
export interface Appointment {
    sessionId: number;
    sessionDate: string;
    patient: string;
    therapist: string;
    therapyTypes: string;
    amount: number;
    discount: number;
    amountPaid: number;
    amountDue: number;
    isPastDue: boolean;
    isPaidOff: boolean;
    notes: string;
    patientId: number;
    therapistId: number;
    time: string; // Assuming there's a time property to determine AM/PM
  }
  