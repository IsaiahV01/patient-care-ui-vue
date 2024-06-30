<template>
  <div id="app" class="flex flex-col min-h-screen font-sans">
    <Sidebar class="flex-shrink-0" />
    <div class="main-content flex-grow p-4">
      <Header class="mb-4" />
      <Calendar class="mb-4" />
      <Appointments class="mb-4" />
    </div>
    <Footer class="flex-shrink-0" />
  </div>
</template>

<script lang="ts" src="./App.ts"></script>

<style scoped src="./App.css"></style>
