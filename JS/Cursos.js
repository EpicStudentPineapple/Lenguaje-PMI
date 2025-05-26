// XML con los datos de los cursos (sin cambios)        
const xmlCursosData = `
<DATA> 
    <ROW>
        <idCurso>1</idCurso>
        <idioma>Ingles</idioma>
        <dia>Lunes</dia>
        <horario>16:00 - 17:30</horario>
        <dificultad>C2</dificultad>
        <programa>Plan 1</programa>
    </ROW>

    <ROW>
        <idCurso>2</idCurso>
        <idioma>Ingles</idioma>
        <dia>Martes</dia>
        <horario>19:00 - 20:30</horario>
        <dificultad>B1</dificultad>
        <programa>Plan 2</programa>
    </ROW>

    <ROW>
        <idCurso>3</idCurso>
        <idioma>Euskera</idioma>    
        <dia>Miercoles</dia>    
        <horario>17:00 - 18:30</horario>    
        <dificultad>C2</dificultad>    
        <programa>Plan 3</programa>
    </ROW>

    <ROW>
        <idCurso>4</idCurso>
        <idioma>Euskera</idioma>
        <dia>Jueves</dia>    
        <horario>20:30 - 22:00</horario>
        <dificultad>B2</dificultad>
        <programa>Plan 4</programa>	
    </ROW>

	<ROW>
		<idCurso>5</idCurso>
		<idioma>Aleman</idioma>
		<dia>Lunes</dia>
		<horario>20:30 - 22:00</horario>
		<dificultad>B2</dificultad>
		<programa>Plan 5</programa>
	</ROW>

	<ROW>
		<idCurso>6</idCurso>
		<idioma>Aleman</idioma>
		<dia>Miercoles</dia>
		<horario>15:00 -16:30</horario>
		<dificultad>A2</dificultad>
		<programa>Plan 6</programa>
	</ROW>

	<ROW>
		<idCurso>7</idCurso>
		<idioma>Frances</idioma>
		<dia>Viernes</dia>
		<horario>21:30 - 23:00</horario>
		<dificultad>A1</dificultad>
		<programa>Plan 7</programa>
	</ROW>

	<ROW>
		<idCurso>8</idCurso>
		<idioma>Frances</idioma>
		<dia>Jueves</dia>
		<horario>16:00 - 17:30</horario>
		<dificultad>C1</dificultad>
		<programa>Plan 8</programa>
	</ROW>

	<ROW>
		<idCurso>9</idCurso>
		<idioma>Chino</idioma>
		<dia>Jueves</dia>
		<horario>18:00 - 19:30</horario>
		<dificultad>A2</dificultad>
		<programa>Plan 9</programa>
	</ROW>

	<ROW>
		<idCurso>10</idCurso>
		<idioma>Chino</idioma>
		<dia>Martes</dia>
		<horario>21:00 - 22:30</horario>
		<dificultad>B2</dificultad>
		<programa>Plan 10</programa>
	</ROW>

	<ROW>
		<idCurso>11</idCurso>
		<idioma>Español</idioma>
		<dia>Viernes</dia>
		<horario>19:30 - 21:00</horario>
		<dificultad>C2</dificultad>
		<programa>Plan 11</programa>
	</ROW>

	<ROW>
		<idCurso>12</idCurso>
		<idioma>Español</idioma>
		<dia>Lunes</dia>
		<horario>18:00 - 19:30</horario>
		<dificultad>B1</dificultad>
		<programa>Plan 12</programa>
	</ROW>

	<ROW>
		<idCurso>13</idCurso>
		<idioma>Italiano</idioma>
		<dia>Martes</dia>
		<horario>18:00 - 19:30</horario>
		<dificultad>A1</dificultad>
		<programa>Plan 13</programa>
	</ROW>

	<ROW>
		<idCurso>14</idCurso>
		<idioma>Italiano</idioma>
		<dia>Viernes</dia>
		<horario>17:30 - 19:00</horario>
		<dificultad>A1</dificultad>
		<programa>Plan 14</programa>
	</ROW>
</DATA>`;

        // Función para procesar XML y convertir a array de objetos
function parseXMLToArray(xmlString) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "text/xml");
  const rows = xmlDoc.getElementsByTagName("ROW");
  const data = [];
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const rowData = {};
    for (let j = 0; j < row.children.length; j++) {
      const child = row.children[j];
      rowData[child.tagName] = child.textContent;
    }
    data.push(rowData);
  }
  return data;
}

// Variables de paginación para cursos
let currentPageCourses = 1;
let coursesDataGlobal = [];
const itemsPerPageCourses = 5; // Máximo 5 líneas por página

// Función para mostrar una página específica de cursos
function displayCoursesPage(page) {
  const startIndex = (page - 1) * itemsPerPageCourses;
  const endIndex = startIndex + itemsPerPageCourses;
  const pageData = coursesDataGlobal.slice(startIndex, endIndex);
  
  // Usamos el ID "CoursesTable" (asegúrate de que tu HTML lo tenga)
  const tbody = document.querySelector("#CoursesTable tbody");
  tbody.innerHTML = "";
  
  pageData.forEach(curso => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td data-label="ID" class="text-center">${curso.idCurso}</td>
      <td data-label="Idioma">
        <span class="badge badge-primary">${curso.idioma}</span>
      </td>
      <td data-label="Día">${curso.dia}</td>
      <td data-label="Horario" class="text-nowrap">${curso.horario}</td>
      <td data-label="Dificultad">
        <span class="badge ${getDifficultyBadgeClass(curso.dificultad)}">${curso.dificultad}</span>
      </td>
      <td data-label="Programa" class="text-truncate" title="${curso.programa}">${curso.programa}</td>
    `;
    tbody.appendChild(row);
  });
  
  currentPageCourses = page;
}

// Función para generar la paginación en la tabla de cursos
function setupPaginationCourses() {
  const totalPages = Math.ceil(coursesDataGlobal.length / itemsPerPageCourses);
  let paginationContainer = document.getElementById("paginationCourses");
  
  if (!paginationContainer) {
    // Si no existe, crea el contenedor dentro del card-body (o el div que prefieras)
    const cardBody = document.getElementById("coursesCardBody");
    const paginationDiv = document.createElement("div");
    paginationDiv.id = "paginationCourses";
    paginationDiv.className = "mt-3 d-flex justify-content-center";
    cardBody.appendChild(paginationDiv);
    paginationContainer = paginationDiv;
  }
  
  paginationContainer.innerHTML = "";
  
  if (totalPages > 1) {
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    ul.className = "pagination pagination-sm";
    
    // Botón "Anterior"
    const prevLi = document.createElement("li");
    prevLi.className = `page-item ${currentPageCourses === 1 ? "disabled" : ""}`;
    prevLi.innerHTML = `<a class="page-link" href="#" onclick="changeCoursePage(${currentPageCourses - 1}); return false;">Anterior</a>`;
    ul.appendChild(prevLi);
    
    // Enlaces de números de página
    for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement("li");
      li.className = `page-item ${i === currentPageCourses ? "active" : ""}`;
      li.innerHTML = `<a class="page-link" href="#" onclick="changeCoursePage(${i}); return false;">${i}</a>`;
      ul.appendChild(li);
    }
    
    // Botón "Siguiente"
    const nextLi = document.createElement("li");
    nextLi.className = `page-item ${currentPageCourses === totalPages ? "disabled" : ""}`;
    nextLi.innerHTML = `<a class="page-link" href="#" onclick="changeCoursePage(${currentPageCourses + 1}); return false;">Siguiente</a>`;
    ul.appendChild(nextLi);
    
    nav.appendChild(ul);
    paginationContainer.appendChild(nav);
  }
}

// Función para cambiar de página en cursos
function changeCoursePage(page) {
  const totalPages = Math.ceil(coursesDataGlobal.length / itemsPerPageCourses);
  if (page >= 1 && page <= totalPages) {
    displayCoursesPage(page);
    setupPaginationCourses();
  }
}

// Función auxiliar para asignar clases a la dificultad (puedes ajustar los valores)
function getDifficultyBadgeClass(difficulty) {
  switch (difficulty?.toLowerCase()) {
    case "basico":
    case "básico":
      return "badge-success";
    case "intermedio":
      return "badge-warning";
    case "avanzado":
      return "badge-danger";
    default:
      return "badge-secondary";
  }
}

// Al cargar el DOM, parseamos el XML de cursos y mostramos la primera página
document.addEventListener("DOMContentLoaded", function() {
  coursesDataGlobal = parseXMLToArray(xmlCursosData);
  displayCoursesPage(1);
  setupPaginationCourses();
});