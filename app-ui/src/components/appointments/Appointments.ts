import { defineComponent } from 'vue';
import AppointmentList from './AppointmentList.vue';

export default defineComponent({
  name: 'Appointments',
  components: {
    AppointmentList
  },
  data() {
    return {
      amAppointments: [
        { time: "09:00", patient: "Erik P. (Caretaker)", age: 8, therapy: "tt1", therapist: "Rose M." }
        // Add more appointments here
      ],
      pmAppointments: [
        { time: "09:00", patient: "Erik P. (Caretaker)", age: 8, therapy: "tt1", therapist: "Rose M." }
        // Add more appointments here
      ]
    };
  }
});
