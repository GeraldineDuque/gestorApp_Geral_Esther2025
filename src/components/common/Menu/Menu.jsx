
import { Link } from "react-router-dom";
import A from "../../../assets/img/A.png";
export const Menu = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ background: "black" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            <img src={A} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link fw-bold" style={{ color: "White" }}>Inicio</Link>
              </li>
              <li className="nav-item">
                <Link to="/booking" className="nav-link fw-bold" style={{ color: "white" }}>Booking</Link>
              </li>
              {/* <li className="nav-item text-white">
                <Link to="/dashboard" className="nav-link fw-bold" style={{ color: "#1c6eb4" }}>Dashboard</Link>
              </li> */}

              <li className="nav-item text-white">
                <Link className="nav-link fw-bold" style={{ color: "White" }} to="/formulario">
                 Formulario
                 </Link>
              </li>

              <li className="nav-item text-white">
                <Link to="/cata" className="nav-link fw-bold" style={{ color: "White" }}>Catalogo</Link>
              </li>
              <li className="nav-item dropdown">
              <a
                    className="nav-link dropdown-toggle fw-bold"
                    href="/#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: "White" }}
                >
                    Reservas
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/dashboard" className="nav-link fw-bold" style={{ color: "black" }}> Crear Reserva</Link>
                  </li>
                  <li>
                    <Link to="/listarpro" className="nav-link fw-bold" style={{ color: "black" }}> Listar Reserva</Link>
                  </li>
                  <li>
                    <Link to="/admin" className="nav-link fw-bold" style={{ color: "black" }}>  Administrar</Link>
                  </li>
                </ul>
              </li>
            </ul>
           
            <span>
              <Link to= "/entra"  className="navbar-text fw-bold"  style={{ color: "white" }}>Iniciar sesión</Link>
            </span>
            <span>
              <Link to= "/car"  className="navbar-text fw-bold gap-5"  style={{ color: "white" }}><i className="bx bx-cart"></i></Link>
            </span>

          </div>
        </div>
      </nav>
    </div>
  );
};
