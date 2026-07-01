import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import MyRegistrations from "./pages/MyRegistrations";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/events" element={<Layout><Events /></Layout>} />
        <Route path="/events/:id" element={<Layout><EventDetail /></Layout>} />
        <Route path="/my-registrations" element={<Layout><MyRegistrations /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;