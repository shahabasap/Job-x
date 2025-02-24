<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="p-4 border-b border-gray-200 bg-fuchsia-900">
    <div class="wrapper flex flex-col items-center md:flex-row md:justify-between">
      <!-- Align "JOB z" to the left corner -->
      <nav class=" text-left w-full md:w-auto">
        <span class="text-xl font-bold text-white">JOB z</span>
      </nav>

      <!-- Other content (if any) can go here -->
    </div>
  </header>

  <RouterView />
</template>