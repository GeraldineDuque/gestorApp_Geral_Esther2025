import { useEffect,useState } from "react";
import {calendario} from "./datosCalendario"

import { useNavigate } from "react-router-dom";
import { datosAPI } from "../../pages/DashBoard/DatosJSON";

export function Calendario(){

    const[dias, setDias]=useState([])
    const[horas, setHoras]=useState([])

    const navegador = useNavigate()

    useEffect(()=>{
        setDias(calendario[0])
        setHoras(calendario[1])
    })

    //funcion que capture los dos valores (hora y fecha)
    function crearReserva(dia, hora){

         // ejemplo: agregamos la reserva al primer espacio (id = 1)
        const espacio = datosAPI.find((e) => e.id === 1); // o el que quieras
        espacio.calendario.push({ dia, hora });
       navegador("/formulario",{state:{dia,hora}})
    }

    //funcion para ver si el dia y la hora estan ocupados
    function estaOcupado(dia, hora){
        return datosAPI.some(function(espacio){
            return espacio.calendario.some(function(reserva){
                return reserva.dia.toLowerCase()===dia.toLowerCase() && reserva.hora==hora
            })
        })
    }

    function reiniciarDatos() {
        localStorage.removeItem("datosAPI");
        window.location.reload();
      }
    


    return(

        <>
        <div className="container">
            <button className="btn btn-danger mb-3" onClick={reiniciarDatos}>
              🗑️ Borrar reservas
             </button>
       </div>
      
     <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Hora</th>
                        {
                            dias.map((dia)=>{
                                return <th key={dia}>{dia}</th>
                            })
                        }
                    </tr>

                </thead>
                <tbody>

                    {
                        horas.map((hora)=>{
                            return <tr key={hora}>
                                <td>{hora}</td>
                                {
                                    dias.map((dia)=>{
                                        return <td key={dia}>
                                            <button 
                                                className={`btn ${estaOcupado(dia,hora) ? "btn-danger" : "btn-success" } `}
                                                onClick={()=>{
                                                    crearReserva(dia,hora)
                                                }}
                                            >reservar</button>
                                        </td>
                                    })
                                }
                            </tr>
                        })
                    }

                </tbody>
            </table>
            </div>
        </>
    )

}