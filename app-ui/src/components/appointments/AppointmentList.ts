import { defineComponent, PropType } from 'vue';
import { Appointment } from '../../interfaces/Appointment';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFileInvoiceDollar, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faFileInvoiceDollar, faExclamationCircle);

export default defineComponent({
  name: 'AppointmentList',
  components: {
    FontAwesomeIcon
  },
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
