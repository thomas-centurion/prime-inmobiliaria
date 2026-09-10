import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Properties from "./pages/Properties/Properties";
import PropertyDetail from "./pages/PropertyDetail/PropertyDetail";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Admin from "./pages/Admin/Admin";
import Login from "./pages/Login/Login";
import AdminPropertyForm from "./pages/AdminPropertyForm/AdminPropertyForm";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/propiedades" element={<Properties />} />

      <Route
        path="/propiedades/:id"
        element={<PropertyDetail />}
      />

      <Route path="/nosotros" element={<About />} />

      <Route path="/contacto" element={<Contact />} />

      <Route path="/admin/login" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/admin" element={<Admin />} />

        <Route
          path="/admin/propiedades/nueva"
          element={<AdminPropertyForm />}
        />

        <Route
          path="/admin/propiedades/:id/editar"
          element={<AdminPropertyForm />}
        />
      </Route>
    </Routes>
  );
};

export default App;