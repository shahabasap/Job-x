<script setup lang="ts">
  import { ref, computed, defineProps, defineEmits } from 'vue';
  const searchQuery = ref('');
  const selectedCategory = ref('');
  const selectedSalary = ref('');
  const props = defineProps<{ data: { category: string; salary: string }[] }>();
  const emit = defineEmits(['filter']);
  const uniqueCategories = computed(() => {
  return props.data && props.data.length > 0
    ? Array.from(new Set(props.data.map(job => job.category || '')))
    : [];
});

const uniqueSalaries = computed(() => {
  return props.data && props.data.length > 0
    ? Array.from(new Set(props.data.map(job => job.salary || '')))
    : [];
});
const clearFilter=()=>{
  searchQuery.value=""
  emitFilter()
}
  // Define emits
  const emitFilter = () => {
  emit('filter', { searchQuery: searchQuery.value, category: selectedCategory.value, salary: selectedSalary.value });
};
 
  </script>


<template>
    <div class=" flex gap-4 mb-6">
        <input
      v-model="searchQuery"
      @input="emitFilter"
      type="text"
      placeholder="Search..."
      class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
    />

      <!-- Category Filter -->
    <select v-model="selectedCategory" @change="emitFilter" class="w-full px-4 py-2 border rounded-lg">
      <option value="">All Categories</option>
      <option v-for="category in uniqueCategories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>
      <!-- Salary Filter -->
      <select v-model="selectedSalary" @change="emitFilter" class="w-full px-4 py-2 border rounded-lg">
      <option value="">All Salaries</option>
      <option v-for="salary in uniqueSalaries" :key="salary" :value="salary">
        {{ salary }}
      </option>
    </select>
      <button
      @click="clearFilter"
        class="bg-blue-500 text-white py-2 px-2 rounded-2xl ">
        RESET
      </button>
    </div>
  </template>
  
  
  