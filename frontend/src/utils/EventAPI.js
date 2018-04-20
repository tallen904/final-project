import axios from 'axios'

export default {
  // Gets all events
  getEvents: function() {
    return axios.get("/db/event/all");
  },
  // Gets the event with the given id
  getEvent: function(id) {
    return axios.get("/db/event/" + id);
  },
  // Deletes the event with the given id
  deleteEvent: function(id) {
    return axios.delete("/db/event/" + id);
  },
  // Saves an event to the database
  createEvent: function(eventData) {
    return axios.post("/db/event/", eventData);
  }
};
