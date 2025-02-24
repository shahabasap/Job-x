<script setup lang="ts">
import { ref } from 'vue';
import { jobs } from '@/assets/constants';
import DataTable from '@/components/DataTable.vue';
import FilterComponent from '@/components/FilterComponent.vue';


const filteredJobs = ref(jobs);

// Function to filter jobs
const applyFilters = (filters: { searchQuery: string; category: string; salary: string }) => {
  
  filteredJobs.value = jobs.filter(job =>
    job.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) &&
    (filters.category ? job.category === filters.category : true) &&
    (filters.salary ? job.salary === filters.salary : true)
  )}
</script>

<template>
  <div class="w-full min-h-screen">
    <div class="flex justify-center p-5">
      <FilterComponent :data="jobs" @filter="applyFilters"  />
    </div>
    <DataTable :data="filteredJobs" />
  </div>
</template>
