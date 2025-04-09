
import { useEffect, useState } from "react";

export const Listado = () => {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem("datosAPI")) || [];
    console.log("Contenido de datosAPI:", datos);
    // Aplanar todas las reservas por espacio
    const todasLasReservas = datos.flatMap((espacio) =>
      espacio.calendario.map((reserva) => ({
        espacio: espacio.nombreEspacio,
        dia: reserva.dia,
        hora: reserva.hora
      }))
    );

    setReservas(todasLasReservas);
  }, []);

  return (
    <div className="container mt-5">
      <span className="mt-5 fw-bold d-block">Listado de las personas que han reservado</span>
      <div className="bd-example">
        <table className="table mt-4">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Espacio</th>
              <th scope="col">Día</th>
              <th scope="col">Hora</th>
            </tr>
          </thead>
          <tbody>
            {reservas.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center">
                  No hay reservas registradas.
                </td>
              </tr>
            ) : (
              reservas.map((reserva, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{reserva.espacio}</td>
                  <td>{reserva.dia}</td>
                  <td>{reserva.hora}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

