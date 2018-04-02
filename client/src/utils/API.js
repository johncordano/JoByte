import axios from 'axios';
// import { Route, Redirect } from 'react-router'

export default {
  // ============================
  //             JOB REQUESTS
  // ============================
  
  getJob: function() {
    return axios.get('/api/job');
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
  
  // getAllAction: function(jobId) {
  //   return axios.get('/api/action/');
  // },
  getAllAction: function() {
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
    return axios.delete('/api/action', {params: actionData})
  },
  
  // ============================
  //             ACCOUNT REQUESTS
  // ============================
  
  getAccount: function(accountData) {
    console.log(accountData);
    console.log('calling getAccount');
    return axios.post('/api/account/login', accountData);
    // .then((response) => {
    //   console.log("then is hit above!");
    //   if (response.ok && window){ 
    //     console.log("then is hit!");
    //     window.location.href="/login"; 
    //   //<Redirect to="/dashboard" />
    //   }
    // })
    // .catch((error) => {
    //   console.log("catch from getAccount", error);
    // });
  },
    addAccount: function(accountData) {
      return axios.post('/api/account/signup', accountData);
    },
    updateAccount: function(accountData) {
      return axios.put('/api/account', accountData);
    },
    deleteAccount: function(accountData) {
      return axios.delete('/api/account', accountData);
    },
    
  };
