import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://webtech-project-backend.onrender.com/api', // Backend-URL
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  getJobs() {
    return apiClient.get('/jobs');
  },
  getJob(id) {
    return apiClient.get(`/jobs/${id}`);
  },
  createJob(job) {
    return apiClient.post('/jobs', job);
  },
  deleteJob(id) {
    return apiClient.delete(`/jobs/${id}`);
  },
  patchJob(id, job) {
    return apiClient.patch(`/jobs/${id}`, job);
  }
};
