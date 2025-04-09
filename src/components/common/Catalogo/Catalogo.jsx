import { useNavigate } from "react-router-dom";

import coctel from "../../../assets/img/cocteles.jpg";
import parrilla from "../../../assets/img/parrilla.jpg";
import perros from "../../../assets/img/perros.png";
import santa from "../../../assets/img/santa.png";
import jerico from "../../../assets/img/jerico.png";
import marinilla from "../../../assets/img/marinilla.png";
import "bootstrap-icons/font/bootstrap-icons.css";

export const Catalogo = () => {
  const navigate = useNavigate();

  function seleccionarItem(nombreItem) {
    localStorage.setItem("itemSeleccionado", nombreItem);
    navigate("/formulario"); // redirigir al formulario
  }

  return (
    <div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col">
          <div className="card shadow-sm">
            <img
              src={coctel}
              alt=""
              style={{
                height: "220px",
                objectFit: "cover",
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
              }}
            />
            <div className="card-body">
              <p className="card-text">
                &quot;Experimenta sabores que viajan y cuentan historias, en
                cada coctel y bebida una aventura.&quot;
              </p>
              <div className="d-flex align-items-center gap-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="coctelCheckbox"
                    onChange={() => seleccionarItem("Coctel")}
                  />
                  <label className="form-check-label" htmlFor="coctelCheckbox">
                    Seleccionar
                  </label>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card Parrilla */}
        <div className="col">
          <div className="card shadow-sm">
            <img
              src={parrilla}
              alt=""
              style={{
                height: "220px",
                objectFit: "cover",
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
              }}
            />
            <div className="card-body">
              <p className="card-text">
                &quot;La parrillada, un lugar donde la tradición se encuentra
                con la innovación.&quot;
              </p>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="parrillaCheckbox"
                />
                <label className="form-check-label" htmlFor="parrillaCheckbox">
                  Seleccionar
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Card Perros */}
        <div className="col">
          <div className="card shadow-sm">
            <img
              src={perros}
              alt=""
              style={{
                height: "220px",
                objectFit: "cover",
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
              }}
            />
            <div className="card-body">
              <p className="card-text">
                &quot;El aroma a carne asada, el crujir del pan y el sabor
                explosivo de las salsas crean una sinfonía de sensaciones.&quot;
              </p>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="perrosCheckbox"
                />
                <label className="form-check-label" htmlFor="perrosCheckbox">
                  Seleccionar
                </label>
              </div>
            </div>
          </div>
        </div>

          <>
            {/* Santa Elena */}
            <div className="col">
              <div className="card shadow-sm">
                <img
                  src={santa}
                  alt=""
                  style={{
                    height: "220px",
                    objectFit: "cover",
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius: "5px",
                  }}
                />
                <div className="card-body">
                  <p className="card-text">
                    &quot;Respira el aire puro de la montaña, donde el frío es
                    un abrazo de la naturaleza.&quot;{" "}
                    <span className="fw-bold">Santa Elena</span>
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="form-check me-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="santaCheckbox"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="santaCheckbox"
                      >
                        Seleccionar
                      </label>
                    </div>
                    <a
                      href="https://www.google.com/maps/place/Santa+Elena,+Antioquia,+Colombia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn btn-sm btn-outline-primary">
                        Ver en Google Maps
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Marinilla */}
            <div className="col">
              <div className="card shadow-sm">
                <img
                  src={marinilla}
                  alt=""
                  style={{
                    height: "220px",
                    objectFit: "cover",
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius: "5px",
                  }}
                />
                <div className="card-body">
                  <p className="card-text">
                    Marinilla, un rincón lleno de cultura, historia y tradición
                    antioqueña.
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="form-check me-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="marinillaCheckbox"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="marinillaCheckbox"
                      >
                        Seleccionar
                      </label>
                    </div>
                    <a
                      href="https://www.google.com/maps/place/marinilla,+Antioquia,+Colombia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn btn-sm btn-outline-primary">
                        Ver en Google Maps
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Jericó */}
            <div className="col">
              <div className="card shadow-sm">
                <img
                  src={jerico}
                  alt=""
                  style={{
                    height: "220px",
                    objectFit: "cover",
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius: "5px",
                  }}
                />
                <p className="card-text text-center">
                  Jericó, un pueblo mágico entre montañas, lleno de color, fe, y
                  paisajes de ensueño.   <span className="fw-bold">Jerico</span>
                </p>
                <div className="d-flex align-items-center">
                  <div className="form-check me-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="marinillaCheckbox"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="marinillaCheckbox"
                    >
                      Seleccionar
                    </label>
                  </div>
                  <a
                    href="https://www.google.com/maps/place/Jericó,+Antioquia,+Colombia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn btn-sm btn-outline-primary">
                      Ver en Google Maps
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </>
      
      </div>
    </div>
  );
};
