<script setup lang="ts">
  import { computed, defineProps } from 'vue';
  
  // Define Job Type
  type Job = {
    id: number;
    title: string;
    company: string;
    category: string;
    salary: string;
    description: string;
  };
  
  // Define Props with Type Safety
  const props = defineProps({
    data: { type: Array as () => Job[], required: true },
    searchQuery: { type: String, default: '' },
    searchField: { type: String, default: 'title' }
  });
  const JobDetails=()=>{

  }
  
  // Extract Headers Dynamically from First Item (Error Handling Included)
  const headers = computed(() => {
    if (!props.data || props.data.length === 0) return [];
    return Object.keys(props.data[0]);
  });
  
  // Filtered Data with Error Handling
  const filteredData = computed(() =>
    props.data.filter((item) => {
      const fieldValue = item[props.searchField as keyof Job]; // Type-safe access
      return typeof fieldValue === 'string' && fieldValue.toLowerCase().includes(props.searchQuery.toLowerCase());
    })
  );
  </script>
  


<template>
    <table class="min-w-full bg-white border rounded-lg overflow-hidden">
      <thead class="bg-gray-100">
        <tr>
          <th
            v-for="header in headers"
            :key="header"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr v-for="item in filteredData" :key="item.id" 
        @click="JobDetails"
        :value="item"
        class="hover:bg-gray-50">
          <td v-for="header in headers" :key="header" class="px-6 py-4">
            {{ item[header] ?? 'N/A' }} <!-- Handle missing values -->
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  