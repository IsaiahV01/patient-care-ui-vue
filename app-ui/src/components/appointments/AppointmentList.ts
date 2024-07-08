import { defineComponent, PropType } from 'vue';
import { Appointment } from '../../interfaces/Appointment';

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
