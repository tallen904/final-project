import axios from 'axios'

export default {
  // Gets all events
  getEvents: function() {
    return axios.get("/events");
  },
  // Gets the event with the given id
  getEvent: function(id) {
    return axios.get("/events/" + id);
  },
  // Deletes the event with the given id
  deleteEvent: function(id) {
    return axios.delete("/events/" + id);
  },
  // Saves an event to the database
  createEvent: function(eventData) {
    return axios.post("/events/", eventData);
  }
};
