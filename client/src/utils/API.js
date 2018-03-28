import axios from 'axios';

export default {
  getJob: function() {
    return axios.get('/api/job');
  },

  addJob: function(jobData) {
    console.log(jobData);
    return axios.post('/api/job', jobData);
  }
};
