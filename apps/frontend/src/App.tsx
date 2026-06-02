import { Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import Home from "./pages/Home";
import Events from "./pages/Events";
import "./styles/index.css";

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events/:event" element={<Events />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
}