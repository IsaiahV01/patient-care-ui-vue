import { defineComponent, PropType } from 'vue';

interface Appointment {
  time: string;
  patient: string;
  age: number;
  therapy: string;
  therapist: string;
}

export default defineComponent({
  name: 'AppointmentList',
  props: {
    title: {
      type: String,
      required: true
    },
    appointments: {
      type: Array as PropType<Appointment[]>,
      required: true
    }
  }
});
