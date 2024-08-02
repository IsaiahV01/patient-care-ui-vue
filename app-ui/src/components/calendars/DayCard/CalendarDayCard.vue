<template>
    <div
      :class="['day-card', { selected: isSelected, today: isToday }]"
      @click="selectDay"
    >
      <div class="date">{{ date }}</div>
      <div class="day">{{ day }}</div>
      <span v-if="isToday">(Today)</span>
    </div>
  </template>
  
  <script lang="ts" src="./CalendarDayCard.ts"></script>
  
  <style scoped src="./CalendarDayCard.css"></style>
  