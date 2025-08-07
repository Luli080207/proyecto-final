import { Link } from "react-router-dom"
import { useAuth } from "../context/UserContext"

const Header = () => {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
  <header style={{ backgroundColor: "lightblue", padding: "10px" }}>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/8/85/Logo-Test.png"
      alt="imagen de logo"
      style={{ height: "50px", marginRight: "20px" }}
    />

    <nav>
      <ul style={{ display: "flex", gap: "15px", listStyle: "none" }}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/about">Sobre Nosotros</Link></li>

        {user ? (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li>
              <button onClick={handleLogout}>Cerrar sesión</button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/registrate">Registrate</Link></li>
          </>
        )}
      </ul>
    </nav>
  </header>
);

};

export { Header }