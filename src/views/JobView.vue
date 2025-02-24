<script setup lang="ts">
import { useJobStore } from '@/store/job';
import DataTable from '@/components/DataTable.vue';
import FilterComponent from '@/components/FilterComponent.vue';

const jobStore = useJobStore();
</script>

<template>
  <div class="w-full min-h-screen">
    <div class="flex justify-center p-5">
      <FilterComponent :data="jobStore.filteredJobs" @filter="jobStore.applyFilters" />
    </div>
    <DataTable :data="jobStore.filteredJobs" />
  </div>
</template>
