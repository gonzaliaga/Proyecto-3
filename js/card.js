import obtenerDatos from "./card.js";
// Tarjeta de Animales


// URL de la API para obtener datos de animales
const urlApi = "https://huachitos.cl/api/animales";

// Función principal para obtener los datos de la API y generar tarjetas
const obtenerDatos = async () => {
  try {
    // Hacer la petición a la API
    const response = await fetch(urlApi);
    const respuestaJson = await response.json();
    console.log(respuestaJson);

    // Extraer datos relevantes de la respuesta JSON
    const { data } = respuestaJson;

    // Limpiar las tarjetas existentes
    limpiarTarjetas();

    // Crear tarjetas con los datos obtenidos de la API
    data.forEach((element) => {
      crearTarjeta(element);
    });
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
};
//export default obtenerDatos;
// Función para crear una tarjeta con información del animal y agregarla al HTML
const crearTarjeta = (data) => {
    const tarjeta = `
      <div class="tarjetaInner">
        <img src="${data.imagen}" alt="">
        <div class="tarjetaBottom">
          <div class="textosBottom">
            <h2 class="textoTarjeta">${data.nombre}</h2>
            <p>&nbsp;</p>
            <h3 class="textoTarjeta">${data.edad}</h3>
            <h3 class="textoTarjeta">${data.comuna}</h3>
            <h3 class="textoTarjeta">${data.desc_personalidad}</h3>
          </div>
        </div>  
        <div class="divWsp">  
          <a target="_blank" href="https://wa.me/+56975467484" class="buttonWsp">
            <i class="wp">¡Contacta a ${data.nombre}!</i>
            <i class="fab fa-whatsapp wp"></i>
          </a>
        </div>
      </div>
    `;
    const crear = document.getElementById("crearTarjeta");
    crear.innerHTML += tarjeta;
  };
  export default data