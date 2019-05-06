const axios = require('axios');

axios.get('http://localhost:5000/api/user/rooney@yahoo.uk')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        // always executed
    });