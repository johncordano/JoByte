import axios from 'axios';

export default {
  addJob: function(jobData) {
    console.log(jobData);
    return axios.post('/api/job', jobData);
  }
};
