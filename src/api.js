import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://webtech-project-backend.onrender.com/api', // Backend-URL
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  // Job-APIs
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
  },

  // AppUser-APIs
  getUsers() {
    return apiClient.get('/users');
  },
  getUser(id) {
    return apiClient.get(`/users/${id}`);
  },
  createUser(user) {
    return apiClient.post('/users/register', user);
  },
  loginUser(user) {
    return apiClient.post('/users/login', user);
  },
  deleteUser(id) {
    return apiClient.delete(`/users/${id}`);
  },

  // Application-APIs (hinzugefügt)
  getApplications() {
    return apiClient.get('/applications');
  },
};
