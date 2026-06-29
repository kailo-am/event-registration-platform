import API_URL from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetchEvent();
  }, []);

  const fetchEvent = async () => {
    try {
      const response = await axios.get(`${API_URL}/events/${id}/`
        
      );

      setEvent(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleRegister = async () => {
  try {
    const token = localStorage.getItem("access");

    await axios.post(
      `${API_URL}/events/${id}/register/`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Registration Successful!");
  } catch (error) {
    alert("Already Registered or Error");
  }
};

  if (!event) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>{event.title}</h2>

      <p>{event.description}</p>

      <p>
        <strong>Date:</strong> {event.date}
      </p>

      <p>
        <strong>Location:</strong> {event.location}
      </p>
      <button onClick={handleRegister}>
        Register For Event
    </button>
    </div>
  );
}

export default EventDetail;