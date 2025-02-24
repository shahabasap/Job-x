import { defineStore } from 'pinia';
import { ref } from 'vue';
import { jobs } from '@/assets/constants';

export const useJobStore = defineStore('jobStore', () => {
  const filteredJobs = ref(jobs);
  const selectedJob=ref()
  const jobList = ref(jobs);

  const applyFilters = (filters: { searchQuery: string; category: string; salary: string }) => {
    filteredJobs.value = jobs.filter(job =>
      job.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) &&
      (filters.category ? job.category === filters.category : true) &&
      (filters.salary ? job.salary === filters.salary : true)
    );
  };
  const fetchJobById = (id: number) => {
    selectedJob.value = jobList.value.find(job => job.id === id) || null;
  };

  return { filteredJobs, applyFilters ,jobList,fetchJobById,selectedJob};
});
