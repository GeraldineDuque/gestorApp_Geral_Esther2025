
import { useState, useEffect } from "react";
import "./Calendar.css";
import { calendar } from "./dataCalendar";

export const Calendar = () => {
  const [dias, setDias] = useState([]);
  const [horas, setHoras] = useState([]);

  useEffect(() => {
    setDias(calendar[0]);
    setHoras(calendar[1]);
  }, []);

  return (
    <table className="calendar-table">
      <thead>
        <tr>
          <th>Hora</th>
          {dias.map((dia, index) => (
            <th key={index}>{dia}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {horas.map((hora, rowIndex) => (
          <tr key={rowIndex}>
            <td>{hora}</td>
            {dias.map((dia, colIndex) => (
              <td key={colIndex}>oe</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
