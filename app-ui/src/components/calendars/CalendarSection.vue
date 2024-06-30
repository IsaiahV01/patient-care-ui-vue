<template>
    <div class="calendar">
      <button class="btn" @click="prevMonth">Last Month</button>
      <span v-for="day in days" :key="day">{{ day }}</span>
      <button class="btn" @click="nextMonth">Next Month</button>
    </div>
  </template>
  
  <script lang="ts" src="./Calendar.ts"></script>
  
  <style scoped src="./Calendar.css"></style>
  