<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useJobStore } from '@/store/job';

const route = useRoute();
const jobStore = useJobStore();

onMounted(() => {
  const jobId = Number(route.params.id); // Convert id to a number
  jobStore.fetchJobById(jobId);


});

// Watch for changes if the route changes dynamically
watch(() => route.params.id, (newId) => {
  jobStore.fetchJobById(Number(newId));
});
</script>

<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100 p-5">
      <div 
        v-if="jobStore.selectedJob" 
        class="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6 md:p-8 space-y-4"
      >
        <!-- Job Title -->
        <h1 class="text-3xl font-bold text-gray-800">{{ jobStore.selectedJob.title }}</h1>
        
        <!-- Company Info -->
        <p class="text-lg text-gray-600 flex items-center gap-2">
          <span class="text-blue-500">🏢</span> {{ jobStore.selectedJob.company }}
        </p>
  
        <!-- Job Category & Salary -->
        <div class="flex flex-wrap gap-4 text-gray-700 mt-2">
          <p class="flex items-center gap-2">
            <span class="text-green-500">📌</span> <strong>Category:</strong> {{ jobStore.selectedJob.category }}
          </p>
          <p class="flex items-center gap-2">
            <span class="text-yellow-500">💰</span> <strong>Salary:</strong> {{ jobStore.selectedJob.salary }}
          </p>
        </div>
  
        <!-- Job Description -->
        <p class="text-gray-700 mt-4 leading-relaxed border-t pt-4">
          {{ jobStore.selectedJob.description }}
        </p>
      </div>
  
      <!-- No Job Found -->
      <div v-else class="text-center text-gray-500 text-lg">
        <p class="bg-white p-6 shadow-md rounded-md">
          🚀 Job not found. Please try again.
        </p>
      </div>
    </div>
  </template>
  
