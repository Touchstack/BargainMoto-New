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
      console.log(error);
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
      console.log(error);
    });
