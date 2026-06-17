import { useEffect, useState } from "react";
import axios from "axios";

function MyRegistrations() {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    try {
      const token = localStorage.getItem("access");

      const response = await axios.get(
        "https://event-registration-platform-5vxl.onrender.com/api/my-registrations/",
       
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setRegistrations(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>My Registrations</h2>

      {registrations.map((registration) => (
        <div key={registration.id}>
          <p>Event ID: {registration.event}</p>
        </div>
      ))}
    </div>
  );
}

export default MyRegistrations;