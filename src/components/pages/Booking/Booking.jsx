import { datosAPI } from "../DashBoard/DatosJSON"
import carne from "../../../assets/img/carne.png";
import { useNavigate } from "react-router-dom";



export const Booking=()=>{
    const navigate = useNavigate();

    return(
    
        <>

            <section className="container mt-5">
                <section className="row row-cols-1 row-cols-md-3 g-3">
                    {
                        datosAPI.map(function(espacioFisico){
                            return(
                                <section className="col" key={espacioFisico.id}>
                                    <div className="card shadow h-100 p-4">
                                        <div className="row">
                                            <div className="col-6">
                                                
                                                <img src={carne} alt="Espacio Fisico" className="img-fluid rounded-start" style={{height:"200px", objectFit:"cover"}}/>
                        
                                            </div>
                                            <div className="col-6">
                                                <h3 className="fw-bold">
                                                    {espacioFisico.nombreEspacio}
                                                </h3>
                                                <p>
                                                    {espacioFisico.descripcion}
                                                </p>
                                                <button className="btn btn-primary"
                                                onClick={() => {
                                                    localStorage.setItem("itemSeleccionado", espacioFisico.nombreEspacio);
                                                    navigate("/dashboard");
                                                  }}>Reservar</button>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            )
                        })
                    }
                </section>
            </section>
            
        </>
    )
    
    }