const xmlAlumnosData = `
<DATA>
      <ROW>
        <dni>12345678A</dni>
        <nombre>Alumno1</nombre>
        <apellido>Apellido1</apellido>
        <correo>alumno1@gmail.com</correo>
        <idioma>Ingles</idioma>
        <nivelIdioma>C1</nivelIdioma>
        <dia>Lunes</dia>
        <horario>16:00 - 17:30</horario>
        <asistencia>8</asistencia>
        <participacion>7</participacion>
        <rendimiento>8</rendimiento>
      </ROW>
      <ROW>
        <dni>12345678A</dni>
        <nombre>Alumno1</nombre>
        <apellido>Apellido1</apellido>
        <correo>alumno1@gmail.com</correo>
        <idioma>Euskera</idioma>
        <nivelIdioma>B1</nivelIdioma>
        <dia>Miercoles</dia>
        <horario>17:00 - 18:30</horario>
        <asistencia>7</asistencia>
        <participacion>6</participacion>
        <rendimiento>7</rendimiento>
      </ROW>
      <ROW>
        <dni>12345678B</dni>
        <nombre>Alumno2</nombre>
        <apellido>Apellido2</apellido>
        <correo>alumno2@gmail.com</correo>
        <idioma>Ingles</idioma>
        <nivelIdioma>B1</nivelIdioma>
        <dia>Martes</dia>
        <horario>19:00 - 20:30</horario>
        <asistencia>9</asistencia>
        <participacion>8</participacion>
        <rendimiento>7</rendimiento>
      </ROW>
      <ROW>
        <dni>12345678B</dni>
        <nombre>Alumno2</nombre>
        <apellido>Apellido2</apellido>
        <correo>alumno2@gmail.com</correo>
        <idioma>Frances</idioma>
        <nivelIdioma>C1</nivelIdioma>
        <dia>Jueves</dia>
        <horario>16:00 - 17:30</horario>
        <asistencia>8</asistencia>
        <participacion>7</participacion>
        <rendimiento>6</rendimiento>
      </ROW>
      <ROW>
        <dni>12345678C</dni>
        <nombre>Alumno3</nombre>
        <apellido>Apellido3</apellido>
        <correo>alumno3@gmail.com</correo>
        <idioma>Euskera</idioma>
        <nivelIdioma>C1</nivelIdioma>
        <dia>Miercoles</dia>
        <horario>17:00 - 18:30</horario>
        <asistencia>10</asistencia>
        <participacion>9</participacion>
        <rendimiento>9</rendimiento>
      </ROW>
      <ROW>
        <dni>12345678C</dni>
        <nombre>Alumno3</nombre>
        <apellido>Apellido3</apellido>
        <correo>alumno3@gmail.com</correo>
        <idioma>Español</idioma>
        <nivelIdioma>C1</nivelIdioma>
        <dia>Viernes</dia>
        <horario>19:30 - 21:00</horario>
        <asistencia>9</asistencia>
        <participacion>8</participacion>
        <rendimiento>8</rendimiento>
      </ROW>
      <ROW>
        <dni>12345678D</dni>
        <nombre>Alumno4</nombre>
        <apellido>Apellido4</apellido>
        <correo>alumno4@gmail.com</correo>
        <idioma>Euskera</idioma>
        <nivelIdioma>B1</nivelIdioma>
        <dia>Jueves</dia>
        <horario>20:30 - 22:00</horario>
        <asistencia>7</asistencia>
        <participacion>8</participacion>
        <rendimiento>7</rendimiento>
      </ROW>
      <ROW>
        <dni>12345678D</dni>
        <nombre>Alumno4</nombre>
        <apellido>Apellido4</apellido>
        <correo>alumno4@gmail.com</correo>
        <idioma>Aleman</idioma>
        <nivelIdioma>B1</nivelIdioma>
        <dia>Lunes</dia>
        <horario>20:30 - 22:00</horario>
        <asistencia>6</asistencia>
        <participacion>7</participacion>
        <rendimiento>8</rendimiento>
      </ROW>
      <ROW>
        <dni>12345678E</dni>
        <nombre>Alumno5</nombre>
        <apellido>Apellido5</apellido>
        <correo>alumno5@gmail.com</correo>
        <idioma>Aleman</idioma>
        <nivelIdioma>B1</nivelIdioma>
        <dia>Lunes</dia>
        <horario>20:30 - 22:00</horario>
        <asistencia>8</asistencia>
        <participacion>7</participacion>
        <rendimiento>6</rendimiento>
      </ROW>
      <ROW>
        <dni>12345678E</dni>
        <nombre>Alumno5</nombre>
        <apellido>Apellido5</apellido>
        <correo>alumno5@gmail.com</correo>
        <idioma>Frances</idioma>
        <nivelIdioma>A1</nivelIdioma>
        <dia>Viernes</dia>
        <horario>21:30 - 23:00</horario>
        <asistencia>9</asistencia>
        <participacion>6</participacion>
        <rendimiento>7</rendimiento>
      </ROW>
      <ROW>
        <dni>12345678F</dni>
        <nombre>Alumno6</nombre>
        <apellido>Apellido6</apellido>
        <correo>alumno6@gmail.com</correo>
        <idioma>Aleman</idioma>
        <nivelIdioma>A2</nivelIdioma>
        <dia>Miercoles</dia>
        <horario>15:00 -16:30</horario>
        <asistencia>9</asistencia>
        <participacion>9</participacion>
        <rendimiento>8</rendimiento>
      </ROW>
      <ROW>
        <dni>12345678F</dni>
        <nombre>Alumno6</nombre>
        <apellido>Apellido6</apellido>
        <correo>alumno6@gmail.com</correo>
        <idioma>Chino</idioma>
        <nivelIdioma>A2</nivelIdioma>
        <dia>Jueves</dia>
        <horario>18:00 - 19:30</horario>
        <asistencia>7</asistencia>
        <participacion>8</participacion>
        <rendimiento>7</rendimiento>
      </ROW>
      <ROW>
        <dni>12345678G</dni>
        <nombre>Alumno7</nombre>
        <apellido>Apellido7</apellido>
        <correo>alumno7@gmail.com</correo>
        <idioma>Chino</idioma>
        <nivelIdioma>A2</nivelIdioma>
        <dia>Jueves</dia>
        <horario>18:00 - 19:30</horario>
        <asistencia>8</asistencia>
        <participacion>6</participacion>
        <rendimiento>7</rendimiento>
      </ROW>
      <ROW>
        <dni>12345678G</dni>
        <nombre>Alumno7</nombre>
        <apellido>Apellido7</apellido>
        <correo>alumno7@gmail.com</correo>
        <idioma>Italiano</idioma>
        <nivelIdioma>A1</nivelIdioma>
        <dia>Martes</dia>
        <horario>18:00 - 19:30</horario>
        <asistencia>7</asistencia>
        <participacion>7</participacion>
        <rendimiento>8</rendimiento>
      </ROW>
      <ROW>
        <dni>12345678H</dni>
        <nombre>Alumno8</nombre>
        <apellido>Apellido8</apellido>
        <correo>alumno8@gmail.com</correo>
        <idioma>Chino</idioma>
        <nivelIdioma>B2</nivelIdioma>
        <dia>Martes</dia>
        <horario>21:00 - 22:30</horario>
        <asistencia>6</asistencia>
        <participacion>7</participacion>
        <rendimiento>7</rendimiento>
      </ROW>
      <ROW>
        <dni>12345678H</dni>
        <nombre>Alumno8</nombre>
        <apellido>Apellido8</apellido>
        <correo>alumno8@gmail.com</correo>
        <idioma>Español</idioma>
        <nivelIdioma>B1</nivelIdioma>
        <dia>Lunes</dia>
        <horario>18:00 - 19:30</horario>
        <asistencia>8</asistencia>
        <participacion>9</participacion>
        <rendimiento>8</rendimiento>
      </ROW>
      <ROW>
        <dni>12345678I</dni>
        <nombre>Alumno9</nombre>
        <apellido>Apellido9</apellido>
        <correo>alumno9@gmail.com</correo>
        <idioma>Español</idioma>
        <nivelIdioma>C2</nivelIdioma>
        <dia>Viernes</dia>
        <horario>19:30 - 21:00</horario>
        <asistencia>10</asistencia>
        <participacion>9</participacion>
        <rendimiento>10</rendimiento>
      </ROW>
      <ROW>
        <dni>12345678I</dni>
        <nombre>Alumno9</nombre>
        <apellido>Apellido9</apellido>
        <correo>alumno9@gmail.com</correo>
        <idioma>Italiano</idioma>
        <nivelIdioma>A1</nivelIdioma>
        <dia>Viernes</dia>
        <horario>17:30 - 19:00</horario>
        <asistencia>9</asistencia>
        <participacion>8</participacion>
        <rendimiento>9</rendimiento>
      </ROW>
      <ROW>
        <dni>12345678J</dni>
        <nombre>Alumno10</nombre>
        <apellido>Apellido10</apellido>
        <correo>alumno10@gmail.com</correo>
        <idioma>Frances</idioma>
        <nivelIdioma>A1</nivelIdioma>
        <dia>Viernes</dia>
        <horario>21:30 - 23:00</horario>
        <asistencia>7</asistencia>
        <participacion>6</participacion>
        <rendimiento>8</rendimiento>
      </ROW>
      <ROW>
        <dni>12345678J</dni>
        <nombre>Alumno10</nombre>
        <apellido>Apellido10</apellido>
        <correo>alumno10@gmail.com</correo>
        <idioma>Italiano</idioma>
        <nivelIdioma>A1</nivelIdioma>
        <dia>Viernes</dia>
        <horario>17:30 - 19:00</horario>
        <asistencia>6</asistencia>
        <participacion>7</participacion>
        <rendimiento>7</rendimiento>
      </ROW>
      <ROW>
        <dni>12345678K</dni>
        <nombre>Alumno11</nombre>
        <apellido>Apellido11</apellido>
        <correo>alumno11@gmail.com</correo>
        <idioma>Ingles</idioma>
        <nivelIdioma>C2</nivelIdioma>
        <dia>Lunes</dia>
        <horario>16:00 - 17:30</horario>
        <asistencia>9</asistencia>
        <participacion>9</participacion>
        <rendimiento>9</rendimiento>
      </ROW>
      <ROW>
        <dni>12345678K</dni>
        <nombre>Alumno11</nombre>
        <apellido>Apellido11</apellido>
        <correo>alumno11@gmail.com</correo>
        <idioma>Euskera</idioma>
        <nivelIdioma>C2</nivelIdioma>
        <dia>Miercoles</dia>
        <horario>17:00 - 18:30</horario>
        <asistencia>8</asistencia>
        <participacion>7</participacion>
        <rendimiento>8</rendimiento>
      </ROW>
      <ROW>
        <dni>12345678L</dni>
        <nombre>Alumno12</nombre>
        <apellido>Apellido12</apellido>
        <correo>alumno12@gmail.com</correo>
        <idioma>Aleman</idioma>
        <nivelIdioma>B2</nivelIdioma>
        <dia>Lunes</dia>
        <horario>20:30 - 22:00</horario>
        <asistencia>5</asistencia>
        <participacion>6</participacion>
        <rendimiento>7</rendimiento>
      </ROW>
      <ROW>
        <dni>12345678L</dni>
        <nombre>Alumno12</nombre>
        <apellido>Apellido12</apellido>
        <correo>alumno12@gmail.com</correo>
        <idioma>Frances</idioma>
        <nivelIdioma>C1</nivelIdioma>
        <dia>Jueves</dia>
        <horario>16:00 - 17:30</horario>
        <asistencia>6</asistencia>
        <participacion>5</participacion>
        <rendimiento>6</rendimiento>
      </ROW>
      <ROW>
        <dni>12345678M</dni>
        <nombre>Alumno13</nombre>
        <apellido>Apellido13</apellido>
        <correo>alumno13@gmail.com</correo>
        <idioma>Chino</idioma>
        <nivelIdioma>A2</nivelIdioma>
        <dia>Jueves</dia>
        <horario>18:00 - 19:30</horario>
        <asistencia>10</asistencia>
        <participacion>9</participacion>
        <rendimiento>8</rendimiento>
      </ROW>
      <ROW>
        <dni>12345678M</dni>
        <nombre>Alumno13</nombre>
        <apellido>Apellido13</apellido>
        <correo>alumno13@gmail.com</correo>
        <idioma>Español</idioma>
        <nivelIdioma>B1</nivelIdioma>
        <dia>Lunes</dia>
        <horario>18:00 - 19:30</horario>
        <asistencia>9</asistencia>
        <participacion>10</participacion>
        <rendimiento>9</rendimiento>
      </ROW>
    </DATA>`;

function parseXMLToArray(xmlString) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "text/xml");
  const rows = xmlDoc.getElementsByTagName("ROW");
  const data = [];
  
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const rowData = {};
    const children = row.children;
    for (let j = 0; j < children.length; j++) {
      const child = children[j];
      rowData[child.tagName] = child.textContent;
    }
    data.push(rowData);
  }
  return data;
}

// Variables de paginación para alumnos
let currentPage = 1;
let alumnosDataGlobal = [];
const itemsPerPage = 5; // Puedes ajustar el número de registros por página

// Función para mostrar los alumnos en la tabla (con paginación)
function displayAlumnosPage(page) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageData = alumnosDataGlobal.slice(startIndex, endIndex);
  
  const tbody = document.querySelector("#StudentsTable tbody")
  tbody.innerHTML = "";
  
  pageData.forEach(alumno => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td data-label="DNI" style="padding: 12px 8px;">${alumno.dni}</td>
      <td data-label="Nombre" style="padding: 12px 8px;">${alumno.nombre}</td>
      <td data-label="Apellido" style="padding: 12px 8px;">${alumno.apellido}</td>
      <td data-label="Correo" style="padding: 12px 8px; max-width: 200px; word-break: break-word;">
        ${alumno.correo}
      </td>
      <td data-label="Idioma" style="padding: 12px 8px;">
        <span class="badge badge-info">${alumno.idioma}</span>
      </td>
      <td data-label="Nivel" style="padding: 12px 8px;">
        <span class="badge ${getLevelBadgeClass(alumno.nivelIdioma)}">${alumno.nivelIdioma}</span>
      </td>
      <td data-label="Día" style="padding: 12px 8px;">${alumno.dia}</td>
      <td data-label="Horario" style="padding: 12px 8px;">${alumno.horario}</td>
      <td data-label="Asistencia" class="text-center" style="padding: 12px 8px;">
        <div class="progress progress-sm">
          <div class="progress-bar ${getAttendanceBadgeClass(alumno.asistencia)}" 
               style="width: ${(alumno.asistencia * 10)}%"
               title="${alumno.asistencia}/10"></div>
        </div>
      </td>
      <td data-label="Participación" class="text-center" style="padding: 12px 8px;">
        <div class="progress progress-sm">
          <div class="progress-bar ${getParticipationProgressClass(alumno.participacion)}"
               style="width: ${(alumno.participacion * 10)}%"
               title="${alumno.participacion}/10"></div>
        </div>
      </td>
      <td data-label="Rendimiento" class="text-center" style="padding: 12px 8px;">
        <div class="progress progress-sm">
          <div class="progress-bar ${getRendimientoBadgeClass(alumno.rendimiento)}"
               style="width: ${(alumno.rendimiento * 10)}%"
               title="${alumno.rendimiento}/10"></div>
        </div>
      </td>
    `;
    tbody.appendChild(row);
  });
  
  currentPage = page;
}

function setupPagination() {
  // Calcula el total de páginas
  const totalPages = Math.ceil(alumnosDataGlobal.length / itemsPerPage);
  let paginationContainer = document.getElementById("pagination");
  
  // Si no existe el contenedor, lo creamos
  if (!paginationContainer) {
    const cardBody = document.getElementById("studentsCardBody");
    const paginationDiv = document.createElement("div");
    paginationDiv.id = "pagination";
    paginationDiv.className = "mt-3 d-flex justify-content-center";
    cardBody.appendChild(paginationDiv);
    paginationContainer = paginationDiv;
  }
  
  paginationContainer.innerHTML = "";
  
  if (totalPages > 1) {
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    ul.className = "pagination pagination-sm";
    
    // Botón Anterior
    const prevLi = document.createElement("li");
    prevLi.className = `page-item ${currentPage === 1 ? "disabled" : ""}`;
    prevLi.innerHTML = `<a class="page-link" href="#" onclick="changePage(${currentPage - 1}); return false;">Anterior</a>`;
    ul.appendChild(prevLi);
    
    // Números de página
    for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement("li");
      li.className = `page-item ${i === currentPage ? "active" : ""}`;
      li.innerHTML = `<a class="page-link" href="#" onclick="changePage(${i}); return false;">${i}</a>`;
      ul.appendChild(li);
    }
    
    // Botón Siguiente
    const nextLi = document.createElement("li");
    nextLi.className = `page-item ${currentPage === totalPages ? "disabled" : ""}`;
    nextLi.innerHTML = `<a class="page-link" href="#" onclick="changePage(${currentPage + 1}); return false;">Siguiente</a>`;
    ul.appendChild(nextLi);
    
    nav.appendChild(ul);
    paginationContainer.appendChild(nav);
  }
}

function changePage(page) {
  const totalPages = Math.ceil(alumnosDataGlobal.length / itemsPerPage);
  if (page >= 1 && page <= totalPages) {
    displayAlumnosPage(page);
    setupPagination();
  }
}

// Funciones auxiliares para otorgar clases a los badges/progress
function getLevelBadgeClass(level) {
  switch (level?.toLowerCase()) {
    case "a1":
    case "a2":
      return "badge-success";
    case "b1":
    case "b2":
      return "badge-warning";
    case "c1":
    case "c2":
      return "badge-danger";
    default:
      return "badge-secondary";
  }
}

function getAttendanceBadgeClass(attendance) {
  const score = parseFloat(attendance);
  if (score >= 8) return "bg-success";
  if (score >= 6) return "bg-warning";
  if (score >= 4) return "bg-info";
  return "bg-danger";
}

function getParticipationProgressClass(participation) {
  const score = parseFloat(participation);
  if (score >= 8) return "bg-success";
  if (score >= 6) return "bg-warning";
  if (score >= 4) return "bg-info";
  return "bg-danger";
}

function getRendimientoBadgeClass(rendimiento) {
  const score = parseFloat(rendimiento);
  if (score >= 8) return "bg-success";
  if (score >= 6) return "bg-warning";
  if (score >= 4) return "bg-info";
  return "bg-danger";
}

// Una función opcional para filtrar la tabla (si se necesita)
function filterStudentsTable() {
  const input = document.getElementById("studentSearch");
  const filter = input.value.toUpperCase();
  
  let allData = parseXMLToArray(xmlAlumnosData);
  if (filter !== "") {
    alumnosDataGlobal = allData.filter(alumno =>
      Object.values(alumno).some(value => value.toString().toUpperCase().indexOf(filter) > -1)
    );
  } else {
    alumnosDataGlobal = allData;
  }
  
  displayAlumnosPage(1);
  setupPagination();
  // Actualizar contador si lo hay
  document.getElementById("studentCount").textContent = alumnosDataGlobal.length;
}

// Al cargar el DOM, se ejecuta la carga de los alumnos
document.addEventListener("DOMContentLoaded", function() {
  alumnosDataGlobal = parseXMLToArray(xmlAlumnosData);
  displayAlumnosPage(1);
  setupPagination();
  
  // Si existe un input de búsqueda con id "studentSearch", se añade el listener:
  const searchInput = document.getElementById("studentSearch");
  if (searchInput) {
    searchInput.addEventListener("keyup", filterStudentsTable);
  }
});