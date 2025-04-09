// Plantilla original
const datosIniciales = [
    {
      id: 1,
      nombreEspacio: "Comidas",
      descripcion: "Elegancia en cada bocado, arte en cada plato. Comer aquí es una experiencia que va más allá del sabor.",
      foto: "NAN",
      capacidad: 10,
      calendario: [
        {
          dia: "",
          hora: ""
          
        },
        {
          dia: "",
          hora: ""
         
        }
      ]
    },
    {
      id: 2,
      nombreEspacio: "Lugares ",
      descripcion: "Existen espacios que no se recorren con los pies, sino con el corazón. Lugares donde el alma encuentra sosiego y el tiempo parece hacerse silencio.",
      foto: "NAN",
      capacidad: 5,
      calendario: [
        {
          dia: "",
          hora: ""
        },
        {
          dia: "",
          hora: ""
        }
      ]
    }
  ];
  
  // Cargar desde localStorage si existe, si no, usar los datos por defecto
  const datosDesdeLocalStorage = localStorage.getItem("datosAPI");
  
  export let datosAPI = datosDesdeLocalStorage
    ? JSON.parse(datosDesdeLocalStorage)
    : datosIniciales;
  