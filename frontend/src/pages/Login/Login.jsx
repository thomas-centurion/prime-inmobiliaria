import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    try {
      const response = await fetch(
        "http://localhost:3000/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error al iniciar sesión");
      }

      localStorage.setItem("token", data.payload.token);

      navigate("/admin");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setError(error.message);
    }
  };

  return (
    <>
      <Navbar />

      <div className="login-page">
        <div className="login-card">

          <div className="brand login-brand">
            <span className="brand-mark">P</span>

            <div className="brand-text">
              <span className="brand-name">PRIME</span>
              <span className="brand-sub">INMOBILIARIA</span>
            </div>
          </div>

          <h2>Panel de administración</h2>

          <form onSubmit={handleSubmit} className="form">

            <div className="form-group">
              <label>Usuario</label>

              <input
                type="text"
                name="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Contraseña</label>

              <input
                type="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>

            {error && (
              <p className="login-error">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="btn btn-primary w-full"
            >
              Ingresar
            </button>

          </form>

          <div className="login-back">
            <Link to="/">
              ← Volver al sitio
            </Link>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;