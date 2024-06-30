<template>
    <div class="appointments">
      <appointment-list title="AM Appointments" :appointments="amAppointments" />
      <appointment-list title="PM Appointments" :appointments="pmAppointments" />
    </div>
  </template>
  
  <script lang="ts" src="./Appointments.ts"></script>
  
  <style scoped src="./Appointments.css"></style>
  