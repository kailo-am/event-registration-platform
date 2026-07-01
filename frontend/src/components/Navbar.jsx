import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("access");

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    navigate("/login");
  };

  return (
    <nav>
      <h2>Event Registration Platform</h2>

      <Link to="/">Home</Link>{" | "}

      <Link to="/events">Events</Link>{" | "}

      {token && (
        <>
          <Link to="/my-registrations">
            My Registrations
          </Link>{" | "}
        </>
      )}

      {!token ? (
        <>
          <Link to="/login">Login</Link>{" | "}

          <Link to="/register">Register</Link>
        </>
      ) : (
        <button onClick={handleLogout}>
          Logout
        </button>
      )}
    </nav>
  );
}

export default Navbar;