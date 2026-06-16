import { useEffect, useState } from "react";
import axios from "axios";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/events/"
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
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Events;