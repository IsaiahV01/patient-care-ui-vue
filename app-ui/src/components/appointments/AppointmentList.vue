<template>
  <div class="appointment-list">
    <h3>{{ title }}</h3>
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Patient</th>
          <th>Therapy</th>
          <th>Therapist</th>
          <th>Notes</th>
          <th>Paid Off?</th>
          <th>Past Due?</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="appointment in appointments" :key="appointment.sessionId" :class="{ pastDue: appointment.isPastDue }">
          <td>{{ appointment.time }}</td>
          <td>{{ appointment.patient }}</td>
          <td>{{ appointment.therapyTypes }}</td>
          <td>{{ appointment.therapist }}</td>
          <td>{{ appointment.notes }}</td>
          <td>{{ appointment.isPaidOff }}</td>
          <td>{{ appointment.isPastDue }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" src="./AppointmentList.ts"></script>

<style scoped src="./AppointmentList.css"></style>
