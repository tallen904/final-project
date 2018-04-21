import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/db/user");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/db/user/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/db/user/" + id);
  },
  // Saves a user to the database
  createUser: function(userData) {
    return axios.post("/db/user", userData);
  },
  // Update a user (adding an event)
  updateUser: function(id, data) {
    return axios.put(`/db/user/${id}`, data)
  }
};
