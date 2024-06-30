<template>
  <div class="actions-section flex flex-wrap justify-around my-4">
    <button class="btn">
      <font-awesome-icon :icon="['fas', 'hospital-user']" /> Add Patient
    </button>
    <button class="btn">
      <font-awesome-icon :icon="['fas', 'calendar-alt']" /> Make Appointment
    </button>
    <button class="btn">
      <font-awesome-icon :icon="['fas', 'file-invoice-dollar']" /> Receive Payment
    </button>
    <button class="btn">
      <font-awesome-icon :icon="['fas', 'file-chart-line']" /> Reports
    </button>
  </div>
</template>
  
<script lang="ts" src="./ActionsSection.ts"></script>

<style scoped src="./ActionsSection.css"></style>
  