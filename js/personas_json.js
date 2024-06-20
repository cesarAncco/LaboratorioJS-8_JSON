class Personas {
  id;
  nombres;
  apellidos;
}

const personas = [
  {
    id: 1,
    nombre: 'Ana',
    apellidos: 'Macias Pajas'
  },
  {
    id: 2,
    nombre: 'Antonio',
    apellidos: 'Sueltamelo'
  },
  {
    id: 3,
    nombre: 'Elba',
    apellidos: 'Lazo'
  },
]

// Obtener el elemento contenedor
const contenedor = document.getElementById('contenedor');

// Crear la tabla
const tabla = document.createElement('table');
tabla.border = '1'; // Añadir un borde a la tabla (opcional)

// Crear el encabezado de la tabla
const thead = document.createElement('thead');
const encabezadoFila = document.createElement('tr');

const encabezadoNombre = document.createElement('th');
encabezadoNombre.textContent = 'Nombre';
encabezadoFila.appendChild(encabezadoNombre);

const encabezadoApellidos = document.createElement('th');
encabezadoApellidos.textContent = 'Apellidos';
encabezadoFila.appendChild(encabezadoApellidos);

thead.appendChild(encabezadoFila);
tabla.appendChild(thead);

// Crear el cuerpo de la tabla
const tbody = document.createElement('tbody');

personas.forEach((persona) => {
    const fila = document.createElement('tr');

    const celdaNombre = document.createElement('td');
    celdaNombre.textContent = persona.nombre;
    fila.appendChild(celdaNombre);

    const celdaApellidos = document.createElement('td');
    celdaApellidos.textContent = persona.apellidos;
    fila.appendChild(celdaApellidos);

    tbody.appendChild(fila);
});

tabla.appendChild(tbody);
contenedor.appendChild(tabla);
