import axios from 'axios';

export const getVehicles = () =>
  axios
    .get ('https://bargainmotogh.com/api/vehicles')
    .then (function (response) {
      // handle success
      return response.data;
    })
    .catch (function (error) {
      // handle error
      console.log (error);
    });
