import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h1>Event Registration Platform</h1>

      <p>
        A full-stack web application built with React, Django REST Framework,
        and JWT Authentication.
      </p>

      <h3>Features</h3>

      <p>✔ Browse Events</p>
      <p>✔ Register an Account</p>
      <p>✔ Register for Events</p>
      <p>✔ View Your Registrations</p>

      <br />

      <Link to="/events">
        <button>View Events</button>
      </Link>

      {" "}

      <Link to="/login">
        <button>Login</button>
      </Link>

      {" "}

      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
}

export default Home;