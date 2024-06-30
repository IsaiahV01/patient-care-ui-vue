import { defineComponent } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHospitalUser, faCalendarAlt, faFileInvoiceDollar, faChartLine } from '@fortawesome/free-solid-svg-icons';

library.add(faHospitalUser, faCalendarAlt, faFileInvoiceDollar, faChartLine);

export default defineComponent({
  name: 'Actions',
  components: {
    FontAwesomeIcon
  }
});