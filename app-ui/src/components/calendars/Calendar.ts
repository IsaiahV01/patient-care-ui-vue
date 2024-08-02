import { defineComponent, ref, onMounted } from 'vue';
import CalendarDayCard from './DayCard/CalendarDayCard.vue';

export default defineComponent({
  name: 'CalendarSection',
  components: {
    CalendarDayCard
  },
  props: {
    selectedDate: {
      type: String,
      required: true
    }
  },
  setup(props, { emit }) {
    const today = new Date();

    const getWeekDays = (startDate: Date) => {
      const days = [];
      const startOfWeek = new Date(startDate.setDate(startDate.getDate() - startDate.getDay() + 1));

      for (let i = 0; i < 6; i++) {
        const date = new Date(startOfWeek);
        date.setDate(startOfWeek.getDate() + i);
        days.push({
          name: date.toLocaleDateString('en-US', { weekday: 'long' }),
          date: date.toLocaleDateString('en-US')
        });
      }

      return days;
    };

    const days = ref(getWeekDays(new Date(today)));

    const selectDay = (date: string) => {
      emit('date-selected', date);
    };

    const isToday = (date: string) => {
      return date === today.toLocaleDateString('en-US');
    };

    onMounted(() => {
      emit('date-selected', props.selectedDate);
    });

    const prevWeek = () => {
      const startDate = new Date(days.value[0].date);
      const prevWeekDate = new Date(startDate.setDate(startDate.getDate() - 7));
      days.value = getWeekDays(prevWeekDate);
    };

    const nextWeek = () => {
      const startDate = new Date(days.value[0].date);
      const nextWeekDate = new Date(startDate.setDate(startDate.getDate() + 7));
      days.value = getWeekDays(nextWeekDate);
    };

    const prevMonth = () => {
      const startDate = new Date(days.value[0].date);
      const prevMonthDate = new Date(startDate.setMonth(startDate.getMonth() - 1));
      days.value = getWeekDays(prevMonthDate);
    };

    const nextMonth = () => {
      const startDate = new Date(days.value[0].date);
      const nextMonthDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
      days.value = getWeekDays(nextMonthDate);
    };

    return {
      days,
      selectDay,
      isToday,
      prevWeek,
      nextWeek,
      prevMonth,
      nextMonth
    };
  }
});
