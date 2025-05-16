// XML con los datos de los cursos
        const xmlData = `
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

        // Variables para almacenar los datos y los filtros
        let cursos = [];
        let filtros = {
            idioma: '',
            dia: '',
            dificultad: '',
            horario: ''
        };

        // Función para parsear el XML y extraer los datos
        function parseXML() {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlData, "text/xml");
            
            const rows = xmlDoc.getElementsByTagName("ROW");
            const cursosArray = [];
            
            for (let i = 0; i < rows.length; i++) {
                const row = rows[i];
                const curso = {
                    idCurso: getElementTextContent(row, "idCurso"),
                    idioma: getElementTextContent(row, "idioma"),
                    dia: getElementTextContent(row, "dia"),
                    horario: getElementTextContent(row, "horario"),
                    dificultad: getElementTextContent(row, "dificultad"),
                    programa: getElementTextContent(row, "programa")
                };
                cursosArray.push(curso);
            }
            
            return cursosArray;
        }
        
        // Función auxiliar para obtener el contenido de texto de un elemento
        function getElementTextContent(parent, tagName) {
            const elements = parent.getElementsByTagName(tagName);
            if (elements.length > 0 && elements[0].textContent) {
                return elements[0].textContent.trim();
            }
            return "";
        }
        
        // Función para cargar los datos en la tabla
        function cargarTabla() {
            const tbody = document.getElementById("cursosBody");
            tbody.innerHTML = "";
            
            // Aplicar filtros
            const cursosFiltrados = cursos.filter(curso => {
                return (filtros.idioma === '' || curso.idioma === filtros.idioma) &&
                       (filtros.dia === '' || curso.dia === filtros.dia) &&
                       (filtros.dificultad === '' || curso.dificultad === filtros.dificultad) &&
                       (filtros.horario === '' || curso.horario === filtros.horario);
            });
            
            // Mostrar mensaje si no hay resultados
            if (cursosFiltrados.length === 0) {
                const row = document.createElement("tr");
                const cell = document.createElement("td");
                cell.colSpan = 6;
                cell.className = "no-results";
                cell.textContent = "No se encontraron cursos con los filtros seleccionados";
                row.appendChild(cell);
                tbody.appendChild(row);
            } else {
                // Agregar cada curso a la tabla
                cursosFiltrados.forEach(curso => {
                    const row = document.createElement("tr");
                    
                    // Crear celdas para cada propiedad
                    const properties = ["idCurso", "idioma", "dia", "horario", "dificultad", "programa"];
                    properties.forEach(prop => {
                        const cell = document.createElement("td");
                        cell.textContent = curso[prop];
                        row.appendChild(cell);
                    });
                    
                    tbody.appendChild(row);
                });
            }
            
            // Actualizar contador de cursos
            document.getElementById("totalCursos").textContent = cursos.length;
            document.getElementById("cursosVisibles").textContent = cursosFiltrados.length;
        }
        
        // Función para inicializar los filtros
        function inicializarFiltros() {
            // Obtener valores únicos para cada filtro
            const idiomas = [...new Set(cursos.map(c => c.idioma))].sort();
            const dias = [...new Set(cursos.map(c => c.dia))].sort();
            const dificultades = [...new Set(cursos.map(c => c.dificultad))].sort();
            const horarios = [...new Set(cursos.map(c => c.horario))].sort();
            
            // Llenar los selectores
            llenarSelector("filtroIdioma", idiomas);
            llenarSelector("filtroDia", dias);
            llenarSelector("filtroDificultad", dificultades);
            llenarSelector("filtroHorario", horarios);
            
            // Agregar eventos de cambio
            document.getElementById("filtroIdioma").addEventListener("change", function() {
                filtros.idioma = this.value;
                cargarTabla();
            });
            
            document.getElementById("filtroDia").addEventListener("change", function() {
                filtros.dia = this.value;
                cargarTabla();
            });
            
            document.getElementById("filtroDificultad").addEventListener("change", function() {
                filtros.dificultad = this.value;
                cargarTabla();
            });
            
            document.getElementById("filtroHorario").addEventListener("change", function() {
                filtros.horario = this.value;
                cargarTabla();
            });
            
            // Agregar evento para resetear filtros
            document.getElementById("resetFilters").addEventListener("click", function() {
                document.getElementById("filtroIdioma").value = "";
                document.getElementById("filtroDia").value = "";
                document.getElementById("filtroDificultad").value = "";
                document.getElementById("filtroHorario").value = "";
                
                filtros = {
                    idioma: '',
                    dia: '',
                    dificultad: '',
                    horario: ''
                };
                
                cargarTabla();
            });
        }
        
        // Función auxiliar para llenar un selector con opciones
        function llenarSelector(id, valores) {
            const selector = document.getElementById(id);
            valores.forEach(valor => {
                const option = document.createElement("option");
                option.value = valor;
                option.textContent = valor;
                selector.appendChild(option);
            });
        }
        
        // Inicializar la aplicación cuando el DOM esté listo
        document.addEventListener("DOMContentLoaded", function() {
            // Parsear el XML y cargar los datos
            cursos = parseXML();
            
            // Inicializar filtros
            inicializarFiltros();
            
            // Cargar la tabla inicial
            cargarTabla();
        });