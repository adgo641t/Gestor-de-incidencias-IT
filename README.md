# Gestor IT — Gestor de incidencias informáticas

Aplicación web desarrollada con HTML, CSS y JavaScript vanilla para gestionar incidencias informáticas de una organización. Permite consultar las incidencias registradas, cambiar su estado, asignar técnicos y visualizar estadísticas de seguimiento.

## Funcionalidades implementadas

- **Listado de incidencias:** visualización de las incidencias en una tabla.
- **Gestión de estados:** transición entre `Pendiente`, `En curso` y `Resuelto`.
- **Asignación aleatoria de técnicos:** asignación de Carlos o Laura al iniciar una incidencia.
- **Botones dinámicos:** el texto cambia según el estado de la incidencia y se deshabilita cuando está resuelta.
- **Contadores de incidencias:** estadísticas de incidencias pendientes, en curso y resueltas.
- **Actualización dinámica de la interfaz:** la tabla y los contadores se actualizan al modificar una incidencia.
- **Interfaz personalizada:** diseño con tarjetas estadísticas, tabla de incidencias, etiquetas de estado y botones estilizados.

## Tecnologías utilizadas

- **HTML5:** estructura de la página, tabla de incidencias, encabezados y tarjetas estadísticas.
- **CSS3:** diseño visual, colores, espaciado, bordes redondeados, efectos hover y etiquetas de estado.
- **JavaScript vanilla (ES6+):** lógica de negocio, manipulación del DOM, gestión de estados y renderizado dinámico.

No se utilizan frameworks ni bibliotecas externas.

## Conceptos de JavaScript practicados

| Concepto                         | Uso en el proyecto                                               |
| -------------------------------- | ---------------------------------------------------------------- |
| Arrays de objetos                | Almacenamiento de las incidencias y los técnicos.                |
| `find()`                         | Localizar una incidencia mediante su ID.                         |
| `filter()`                       | Contar incidencias según su estado.                              |
| `length`                         | Obtener el número de incidencias filtradas.                      |
| `Math.random()` y `Math.floor()` | Seleccionar un técnico aleatoriamente.                           |
| Plantillas literales             | Generar dinámicamente las filas de la tabla.                     |
| `map()` y `join()`               | Crear el HTML de las incidencias.                                |
| `if / else if`                   | Controlar las transiciones de estado.                            |
| Operador ternario                | Cambiar el texto y los atributos de los botones según el estado. |
| `toLowerCase()` y `replace()`    | Generar clases CSS a partir de los estados.                      |
| `document.getElementById()`      | Acceder a elementos del DOM.                                     |
| `innerHTML`                      | Actualizar la tabla y los contadores.                            |

## Estructura del proyecto

```text
gestor-it/
├── index.html
├── style.css
├── script.js
└── README.md
```

- `index.html`: estructura y elementos de la interfaz.
- `style.css`: estilos y diseño visual.
- `script.js`: datos, lógica de las incidencias, asignación de técnicos y estadísticas.
- `README.md`: documentación del proyecto.

## Modelo de datos

Cada incidencia utiliza un objeto con las siguientes propiedades:

```js
{
    id: 1,
    titulo: "No funciona la impresora",
    departamento: "Administración",
    prioridad: "Alta",
    estado: "Pendiente",
    tecnico: null,
    fecha: "2026-10-26"
}
```

Los estados utilizados son:

- `Pendiente`
- `En curso`
- `Resuelto`

Cuando una incidencia pasa a estar en curso, se le asigna un técnico disponible entre los definidos en el array de técnicos.

## Diseño de la interfaz

La interfaz incluye:

- Cabecera con el nombre y la descripción de la aplicación.
- Tarjetas con los contadores por estado.
- Tabla con los datos de cada incidencia.
- Etiquetas de colores para identificar visualmente los estados.
- Botones de acción que cambian según el estado.

## Próximas mejoras

- [ ] Búsqueda por título de incidencia.
- [ ] Filtros por departamento, prioridad y estado.
- [ ] Creación de nuevas incidencias mediante un formulario.
- [ ] Asignación manual de técnicos.
- [ ] Ordenación por prioridad y fecha.
- [ ] Persistencia de los datos mediante `localStorage`.
- [ ] Mejoras de accesibilidad y adaptación a dispositivos móviles.

## Objetivo del proyecto

Practicar los fundamentos del desarrollo web frontend mediante una aplicación funcional, reforzando la manipulación del DOM, los arrays de objetos, los métodos de arrays, la lógica condicional y la separación entre estructura, estilos y comportamiento.

El proyecto se desarrolla de forma incremental, incorporando funcionalidades a medida que se consolidan los conceptos de programación.
