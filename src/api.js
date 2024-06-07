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
    return apiClient.post('/users', user);
  },
  updateUser(id, user) {
    return apiClient.put(`/users/${id}`, user);
  },
  patchUser(id, user) {
    return apiClient.patch(`/users/${id}`, user);
  },
  deleteUser(id) {
    return apiClient.delete(`/users/${id}`);
  },

  // Notification-APIs
  getNotificationsByUserId(userId) {
    return apiClient.get(`/notifications/user/${userId}`);
  },
  getUnreadNotificationsByUserId(userId) {
    return apiClient.get(`/notifications/unread/${userId}`);
  },
  createNotification(notification) {
    return apiClient.post('/notifications', notification);
  },
  markAsRead(notificationId) {
    return apiClient.patch(`/notifications/${notificationId}`);
  },
  deleteAllNotifications() {
    return apiClient.delete('/notifications/all');
  },
  getAllNotifications() {
    return apiClient.get('/notifications');
  }
};
