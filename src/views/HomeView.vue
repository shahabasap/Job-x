<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 class="text-3xl font-bold text-gray-800 mb-4">Find Your Dream Job</h1>
    <p class="text-gray-600 mb-6 text-center max-w-md">
      Explore thousands of job listings and land your perfect opportunity today.
    </p>
    <RouterLink
      to="/jobs"
      class="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition duration-300"
    >
      Find Job
    </RouterLink>
  </div>
</template>


