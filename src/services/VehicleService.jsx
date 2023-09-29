import axios from "axios";

export const getVehicles = () =>
  axios
    .get("https://bargainmotogh.com/api/listings")
    .then(function (response) {
      // handle success
      return response.data;
    })
    .catch(function (error) {
      // handle error
      return error;
    });

export const getVehiclesById = (id) =>
  axios
    .get(`https://bargainmotogh.com/api/vehicle/${id}`)
    .then(function (response) {
      // handle success
      return response.data;
    })
    .catch(function (error) {
      // handle error
      return error;
    });

export const searchVehicles = (text) =>
  axios
    .get(`https://bargainmotogh.com/api/cars?search=${text}`)
    .then(function (response) {
      // handle success
      return response.data;
    })
    .catch(function (error) {
      // handle error
      return error;
    });
