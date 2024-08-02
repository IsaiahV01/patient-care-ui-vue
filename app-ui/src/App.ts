import { defineComponent, ref } from 'vue';
import Sidebar from './components/sidebars/SidebarSection.vue';
import Header from './components/headers/HeaderSection.vue';
import Calendar from './components/calendars/CalendarSection.vue';
import Appointments from './components/appointments/AppointmentsSection.vue';
import Footer from './components/footers/FooterSection.vue';

export default defineComponent({
  name: 'App',
  components: {
    Sidebar,
    Header,
    Calendar,
    Appointments,
    Footer
  },
  setup() {
    const selectedDate = ref<string>(new Date().toLocaleDateString('en-US'));

    const updateSelectedDate = (date: string) => {
      selectedDate.value = date;
    };

    return {
      selectedDate,
      updateSelectedDate
    };
  }
});
