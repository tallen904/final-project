import axios from "axios";

export default {
  // Gets all cars
  getCars: function() {
    return axios.get("/car");
  },
  // Gets the car with the given id
  getCar: function(id) {
    return axios.get("/car/" + id);
  },
  // Deletes the car with the given id
  deleteCar: function(id) {
    return axios.delete("/car/" + id);
  },
  // Saves a car to the database
  createCar: function(carData) {
    return axios.post("/car/", carData);
  }
};
