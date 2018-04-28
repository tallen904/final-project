import axios from "axios";

export default {
  // Gets all cars
  getCars: function() {
    return axios.get("/db/car/all");
  },
  // Gets the car with the given id
  getCar: function(id) {
    return axios.get("/db/car/" + id);
  },
  // Deletes the car with the given id
  deleteCar: function(id) {
    return axios.delete("/db/car/" + id);
  },
  // Saves a car to the database
  createCar: function(carData) {
    return axios.post("/db/car/", carData);
  }
};
