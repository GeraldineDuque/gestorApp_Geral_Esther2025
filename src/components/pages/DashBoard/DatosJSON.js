// Plantilla original
const datosIniciales = [
    {
      id: 1,
      nombreEspacio: "Comidas",
      descripcion: "Cada plato es una obra de arte que despierta los sentidos y celebra el placer de comer con elegancia",
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
      nombreEspacio: "Lugares",
      descripcion: "Hay lugares que no solo se visitan, se sienten… espacios donde el alma encuentra calma y el tiempo se detiene",
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
  