import {Routes, Route} from "react-router-dom"
import {Home} from "../pages/Home/Home"
import {DashBoard} from "../pages/DashBoard/Dashboard"
import {Booking} from "../pages/Booking/Booking"

import { Prueba } from "../pages/Prueba/Prueba"
import { FormularioReserva } from "../common/FormularioReserva/FormularioReserva"

import { Menu } from "../common/Menu/Menu"
import { Catalogo } from "../common/Catalogo/Catalogo"
import { Listado } from "../common/Listado/Listado"
import { Footer } from "../common/Footer/Footer"
import {NotFound}from "../common/NotFound/NotFound";


export function Rutas(){

    return(
<div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    <Menu />

    <div style={{ flex: 1 }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/pepe" element={<Prueba />} />
        <Route path="/formulario" element={<FormularioReserva />} />
        <Route path="/cata" element={<Catalogo />} />
        <Route path="/listarpro" element={<Listado />} />
        <Route path="*" element={<NotFound />} /> {/* Ruta 404 */}
      </Routes>
    </div>

    <Footer />
  </div>
    )

}