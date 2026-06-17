import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        "https://event-registration-platform-5vxl.onrender.com/api/events/",
        
      );

      setEvents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Events</h2>

      {events.map((event) => (
      <div key={event.id}>
        <h3>{event.title}</h3>
        <p>{event.description}</p>
        <p>{event.location}</p>

        <Link to={`/events/${event.id}`}>
          View Details
        </Link>

        <hr />
      </div>
    ))}
  </div>
);
}

export default Events;