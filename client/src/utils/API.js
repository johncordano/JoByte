import axios from 'axios';

export default {
  // ============================
  //             JOB REQUESTS
  // ============================

  getJob: function(userData) {
    return axios.get('/api/job', userData);
  },
  addJob: function(jobData) {
    return axios.post('/api/job', jobData);
  },
  updateJob: function(jobData) {
    return axios.put('/api/job', jobData);
  },
  deleteJob: function(jobData) {
    return axios.delete('/api/job', {params: jobData});
  },

  // ============================
  //             ACTION REQUESTS
  // ============================

  getAllAction: function(jobId) {
    return axios.get('/api/action/');
  },
  getAction: function(jobId) {
    return axios.get('/api/action/' + jobId);
  },
  addAction: function(actionData) {
    return axios.post('/api/action', actionData);
  },
  updateAction: function(actionData) {
    return axios.put('/api/action', actionData);
  },
  deleteAction: function(actionData) {
    return axios.delete('/api/action', {params: actionData});
  }
};
