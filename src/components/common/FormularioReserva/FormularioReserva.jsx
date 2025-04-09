
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { datosAPI } from "../../pages/DashBoard/DatosJSON";

export function FormularioReserva() {
  const [espacioId, setEspacioId] = useState("");
  const [getResponsableReserva, setResponsableReserva] = useState("");
  const [getContactoReserva, setContactoReserva] = useState("");
  const [getCorreoReserva, setCorreoReserva] = useState("");
  const [getApartamentoReserva, setApartamentoReserva] = useState("");
  const [getDiaReserva, setDiaReserva] = useState("");
  const [getHoraReserva, setHoraReserva] = useState("");
  const [getConsideracionesReserva, setConsideracionReserva] = useState("");
  const [ setFormularioHaSidoEnviado] = useState(false);
  const [getItemSeleccionado, setItemSeleccionado] = useState("");
  const receptor = useLocation();
  const navegar = useNavigate();
  const { dia, hora } = receptor.state || {};
  



  useEffect(() => {
    if (dia && hora) {
      setDiaReserva(dia);
      setHoraReserva(hora);
    }

    const itemGuardado = localStorage.getItem("itemSeleccionado");
  if (itemGuardado) {
    setItemSeleccionado(itemGuardado);
  }
  }, [dia, hora]);

  function capturarDatosFormulario(e) {
    e.preventDefault();

    const nuevaReserva = {
      dia: getDiaReserva,
      hora: getHoraReserva,
      responsable: getResponsableReserva,
      contacto: getContactoReserva,
      correo: getCorreoReserva,
      apartamento: getApartamentoReserva,
      consideraciones: getConsideracionesReserva,
    };

    const espacio = datosAPI.find(
      (esp) => esp.id === parseInt(espacioId)
    );

    if (espacio) {
      const yaExiste = espacio.calendario.some(
        (r) =>
          r.dia.toLowerCase() === nuevaReserva.dia.toLowerCase() &&
          r.hora === nuevaReserva.hora
      );

      if (yaExiste) {
        espacio.calendario.push(nuevaReserva);
        console.log("ANTES DE GUARDAR:", datosAPI); // para debug
        localStorage.setItem("datosAPI", JSON.stringify(datosAPI));
        setFormularioHaSidoEnviado(true);
        alert("✅ Reserva registrada con éxito.");
        setTimeout(() => {
          navegar("/listarpro"); // redirección al listado
        }, 1000);
      } else {
        alert("❌ Esa hora ya está ocupada.");
      }
    } else {
      alert("❌ Por favor selecciona un espacio válido.");
    }
  }

  return (
    <section className="container mt-5">
      <section className="row">
        <section className="col-12 col-md-8">
          <h3>Registra tu reserva</h3>
          <hr />
          <form
            className="border rounded p-4 shadow"
            onSubmit={capturarDatosFormulario}
          >
            {/* Selección de espacio */}
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="bi bi-geo-alt-fill"></i>
              </span>
              <select
                className="form-select"
                value={espacioId}
                onChange={(e) => setEspacioId(e.target.value)}
                required
              >
                <option value="">Selecciona un espacio</option>
                {datosAPI.map((espacio) => (
                  <option key={espacio.id} value={espacio.id}>
                    {espacio.nombreEspacio}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text">
                    <i className="bi bi-tag-fill"></i>
                </span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Item seleccionado"
                    value={getItemSeleccionado}
                    disabled
                />
            </div>


            {/* Responsable */}
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="bi bi-person-circle"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Responsable Reserva"
                value={getResponsableReserva}
                onChange={(e) => setResponsableReserva(e.target.value)}
                required
              />
            </div>

            {/* Contacto */}
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="bi bi-phone-fill"></i>
              </span>
              <input
                type="number"
                className="form-control"
                placeholder="Contacto Reserva"
                value={getContactoReserva}
                onChange={(e) => setContactoReserva(e.target.value)}
                required
              />
            </div>

            {/* Correo */}
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="bi bi-envelope-fill"></i>
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="Correo Contacto"
                value={getCorreoReserva}
                onChange={(e) => setCorreoReserva(e.target.value)}
                required
              />
            </div>

            {/* Apartamento */}
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="bi bi-building-fill"></i>
              </span>
              <input
                type="number"
                className="form-control"
                placeholder="Apartamento Reserva"
                value={getApartamentoReserva}
                onChange={(e) => setApartamentoReserva(e.target.value)}
                required
              />
            </div>

            {/* Día */}
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="bi bi-calendar-event-fill"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Día Reserva"
                value={getDiaReserva}
                disabled
              />
            </div>

            {/* Hora */}
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="bi bi-clock-fill"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Hora Reserva"
                value={getHoraReserva}
                disabled
              />
            </div>

            {/* Consideraciones */}
            <div className="mb-3">
              <div className="form-floating">
                <textarea
                  className="form-control"
                  value={getConsideracionesReserva}
                  onChange={(e) => setConsideracionReserva(e.target.value)}
                  placeholder="Escribe alguna consideración especial"
                ></textarea>
                <label>Consideraciones</label>
              </div>
            </div>

            <button className="btn btn-outline-primary w-100" type="submit">
              Reservar
            </button>
          </form>
        </section>

        <section className="col-12 col-md-4 align-self-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5615/5615385.png"
            alt="Reserva"
            className="img-fluid"
          />
        </section>
      </section>
    </section>
  );
}

