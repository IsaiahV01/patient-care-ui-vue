<template>
  <div class="calendar">
    <div class="calendar-column left-column">
      <button class="btn btn-prev-next" @click="prevWeek">Previous Week</button>
      <button class="btn btn-prev-next" @click="prevMonth">Prev. Month</button>
    </div>
    <div class="calendar-column middle-column">
      <div class="days-container">
        <CalendarDayCard
          v-for="(day, index) in days"
          :key="day.date"
          :day="`${day.name} [${index}]`"
          :date="day.date"
          :isSelected="selectedDate === day.date"
          :isToday="isToday(day.date)"
          @select-day="selectDay"
        />
      </div>
    </div>
    <div class="calendar-column right-column">
      <button class="btn btn-prev-next" @click="nextWeek">Next Week</button>
      <button class="btn btn-prev-next" @click="nextMonth">Next Month</button>
    </div>
  </div>
</template>

<script lang="ts" src="./Calendar.ts"></script>

<style scoped src="./Calendar.css"></style>

