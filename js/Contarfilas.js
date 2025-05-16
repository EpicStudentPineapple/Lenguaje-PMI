function contarFilas() {
            // Obtener el XML del textarea
            const xmlText = document.getElementById("xmlInput").value;
            
            if (!xmlText) {
                alert("Por favor, ingresa un XML válido");
                return;
            }
            
            try {
                // Parsear el XML
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xmlText, "text/xml");
                
                // Verificar si hay errores en el parsing
                const errorNode = xmlDoc.querySelector("parsererror");
                if (errorNode) {
                    throw new Error("XML inválido");
                }
                
                // Buscar todas las filas (esto es configurable según la estructura del XML)
                const filas = xmlDoc.querySelectorAll("fila");
                
                // Mostrar el resultado
                document.getElementById("rowCount").textContent = filas.length;
                document.getElementById("resultContainer").style.display = "block";
                
            } catch (error) {
                alert("Error al procesar el XML: " + error.message);
            }
        }