// import './Banner.css'
// export function Banner(){

//     return(

//         <>
//             <section className="banner">
//                 <h2 className='text-white'>
//                     <span className="display-1">GestorApp</span>
//                     Aplicación para gestión de espacios en tu lugar
//                     de descanso...
//                 </h2>

//             </section>
//         </>
//     )

// }

import piña from '../../../assets/img/piña.png';

export const Banner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5 mt-4"
        style={{
          backgroundImage: `url(${piña})`, 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          backgroundRepeat: "no-repeat", 
          height: "500px",
          width: "57%",
         
        }}>
        <button
          type="button"
          className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill"
          aria-label="Close"
        ></button>
        <svg className="bi mt-1 mb-3" width="48" height="48">
          <use xlinkHref="#check2-circle"></use>
        </svg>
        <h1 className="text-white fw-bold">Alquiler de experiencias en Antioquia</h1>
        <h5 className="col-lg-6 mx-auto mb-4 text-white  fst-italic">
        &quot;Descubre sabores, paisajes y momentos que te quedarán para siempre.
        Alquila experiencias, crea recuerdos.&quot;
        </h5>
       
      </div>
    </div>
  );
};
