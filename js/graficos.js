  // Función para generar los gráficos
  const generarGraficos = (datosAnimales) => {
    const perros = datosAnimales.filter(animal => animal.tipo === 'Perro').length;
    const gatos = datosAnimales.filter(animal => animal.tipo === 'Gato').length;

    const esterilizados = datosAnimales.filter(animal => animal.esterilizado).length;
    const noEsterilizados = datosAnimales.length - esterilizados;

    const edades = datosAnimales.map(animal => {
      const arrayEdad = animal.edad.split(" ");
      if (arrayEdad[1] === "Años" || arrayEdad[1] === "Año") {
        return parseInt(arrayEdad[0]) * 12;
      }
      return parseInt(arrayEdad[0]);
    });

    // Gráfico de % de perros versus gatos (circular)
    const ctxPerrosGatos = document.getElementById('graficoPerrosGatos').getContext('2d');

    new Chart(ctxPerrosGatos, {
      type: 'doughnut',
      data: {
        labels: ['Perros', 'Gatos'],
        datasets: [{
          label: '% de Perros y Gatos',
          data: [perros, gatos],
          backgroundColor: ['#D35400', '#273746'],
        }],
      },
      options: {
        plugins: {
          legend: {
            labels: {
              color: 'white' // Cambia el color del texto de las etiquetas aquí
            }
          }
        }
      }
    });
    

  
    // Gráfico de % de esterilizados (circular)
    const ctxEsterilizado = document.getElementById('graficoEsterilizado').getContext('2d');
    new Chart(ctxEsterilizado, {
      type: 'doughnut',
      data: {
        labels: ['Esterilizados', 'No Esterilizados'],
        datasets: [{
          label: '% de Esterilizados',
          data: [esterilizados, noEsterilizados],
          backgroundColor: ['#FFCE56', '#6E2C00'],
        }],
      },
      options: {
        plugins: {
          legend: {
            labels: {
              color: 'white' // Cambia el color del texto de las etiquetas aquí
            }
          }
        }
      }
    });

// Gráfico de edades (barras)
const ctxEdad = document.getElementById('graficoEdad').getContext('2d');

new Chart(ctxEdad, {
  type: 'bar',
  data: {
    labels: [...new Set(edades)], // Filtrar edades únicas
    datasets: [{
      label: 'Edades de los Animales',
      data: edades,
      backgroundColor: '#c52c2c',
    }],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: 'white' // Cambia el color del texto de las etiquetas en el eje Y aquí
        }
      },
      x: {
        ticks: {
          color: 'white' // Cambia el color del texto de las etiquetas en el eje X aquí
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: 'white' // Cambia el color del texto de las leyendas aquí
        }
      }
    }
  }
});
  }
