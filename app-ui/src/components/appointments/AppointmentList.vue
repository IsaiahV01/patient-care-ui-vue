<template>
    <div class="appointment-list">
      <h2>{{ title }}</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Patient (Caretaker)</th>
            <th>Age</th>
            <th>Therapy</th>
            <th>Therapist</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="appointment in appointments" :key="appointment.time">
            <td>{{ appointment.time }}</td>
            <td>{{ appointment.patient }}</td>
            <td>{{ appointment.age }}</td>
            <td>{{ appointment.therapy }}</td>
            <td>{{ appointment.therapist }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script lang="ts" src="./AppointmentList.ts"></script>
  
  <style scoped src="./AppointmentList.css"></style>
  