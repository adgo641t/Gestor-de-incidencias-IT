let incidencias = [
    {
    id: 1,
    titulo: "No funciona la impresora",
    departamento: "Administración",
    prioridad: "Alta",
    estado: "Pendiente",
    tecnico: null,
    fecha: "2026-10-26"
    },
    {
    id: 2,
    titulo: "Pc no enciende",
    departamento: "Recursos Humanos",
    prioridad: "Alta",
    estado: "Pendiente",
    tecnico: null,
    fecha: "2026-10-20"
    },
    {
    id: 3,
    titulo: "Proyector no muestra",
    departamento: "IT",
    prioridad: "Alta",
    estado: "Pendiente",
    tecnico: null,
    fecha: "2026-10-25"
    },
    {
    id: 4,
    titulo: "Teclado no funciona",
    departamento: "Administración",
    prioridad: "Medio",
    estado: "Resuelto",
    tecnico: null,
    fecha: "2026-10-25"
    },
    {
    id: 5,
    titulo: "Red no funciona",
    departamento: "IT",
    prioridad: "Alta",
    estado: "En reparacion",
    tecnico: null,
    fecha: "2026-10-24"
    }
];

const tecnicos = ["Carlos", "Laura"]


function renderIncidencias(incidencias) {
    let body = document.getElementById("mostrarIncidencias");

    body.innerHTML = incidencias.map(inc => `
        <tr>
            <td>${inc.id}</td>
            <td>${inc.titulo}</td>
            <td>${inc.departamento}</td>
            <td>${inc.prioridad}</td>
            <td>${inc.estado}</td>
            <td>${inc.tecnico}</td>
            <td>${inc.fecha}</td>
            <td><button ${inc.estado === "Resuelto" ? "disabled" : ""} onclick ="cambiarEstado(${inc.id})">${inc.estado === "Pendiente" ? "Iniciar incidencia": inc.estado === "En curso" ? "Reparando" : "Resuelto"}</button></td>
        </tr>
        `).join("");
}

function cambiarEstado(id) {
    const incidencia = incidencias.find((inc) => inc.id === id);


    if(incidencia.estado === "Pendiente") {
        //poner En curso 
        let num = Math.floor(Math.random()*tecnicos.length);
        const nombreTecnico = tecnicos[num];
        incidencia.tecnico = nombreTecnico
        incidencia.estado = 'En curso';
    } else if(incidencia.estado === "En curso") {
        //resolver
        incidencia.estado = "Resuelto";
    }

    contadorIncidencias(incidencias)
    renderIncidencias(incidencias);
}

function contadorIncidencias(incidencias) {
    let pPendientes = document.getElementById("pendientes");
    let pResueltas = document.getElementById("resueltas");
    let pcurso = document.getElementById("encurso");


    let pendientes = incidencias.filter((inc) => inc.estado == "Pendiente").length;
    let resueltas = incidencias.filter((inc) => inc.estado == "Resuelto").length;    
    let encurso = incidencias.filter((inc) => inc.estado == "En curso").length;

    pPendientes.innerHTML = "Hay " + pendientes+ " tareas pendientes";
    pResueltas.innerHTML = "Hay " + resueltas+ " tareas resueltas";
    pcurso.innerHTML = "Hay " + encurso+ " tareas en curso";

}
document.getElementById("input_busc").addEventListener("input",(e) => {
    const texto = e.target.value.toLowerCase();

    const filtrado = incidencias.filter((inc) => 
        inc.titulo.toLowerCase().includes(texto) || 
        inc.departamento.toLowerCase().includes(texto) || 
        inc.tecnico && inc.tecnico.toLowerCase().includes(texto));

    renderIncidencias(filtrado);
})
contadorIncidencias(incidencias);

renderIncidencias(incidencias);