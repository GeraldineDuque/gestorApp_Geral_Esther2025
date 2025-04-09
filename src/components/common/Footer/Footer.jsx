import logoPipe from "../../../assets/img/A.png";
export const Footer = () => {
    return (
        <div>
         <footer className="text-white pt-4 pb-2 mt-5" style={{background:"black"}}>
            <div className="container text-center">
                <div className="d-flex align-items-center gap-3 justify-content-center text-white">
                <a className="navbar-brand" href="/#">
                  <img src={logoPipe} alt="" />
                </a>
                <h5 className="mb-0">¡Síguenos en redes!</h5>
                
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-blue me-3 fs-4">
                    <i className="fab fa-instagram"></i>
                </a>
                
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-blue me-3 fs-4">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="text-blue me-3 fs-4">
                    <i className="fab fa-tiktok"></i>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-blue fs-4">
                    <i className="fab fa-youtube"></i>
                </a>

                </div>
                
                <p className="small">
                &copy; {new Date().getFullYear()} AFAS. Todos los derechos reservados.
                </p>

            </div>
        </footer>
        </div>
    );
}
   