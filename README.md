# CineFind

CineFind es una aplicación web desarrollada en ReactJS que permite a los usuarios buscar y ver información detallada sobre sus películas favoritas utilizando la API pública de The Movie Database (TMDb).

## Descripción del Proyecto

CineFind facilita a los usuarios encontrar información sobre películas de manera rápida y eficiente. La aplicación permite buscar películas por título y ver detalles específicos de cada una, incluyendo descripción, fecha de lanzamiento, puntuación y más.

## Funcionalidades

1. **Página de Búsqueda de Películas:**
   - Opción de búsqueda donde los usuarios pueden introducir el título de una película.
   - Lista de resultados de búsqueda de películas coincidentes.

2. **Detalles de Película:**
   - Página con detalles específicos de la película seleccionada (título, descripción, fecha de lanzamiento, puntuación, etc.).

3. **Integración con API:**
   - Uso de la API de TMDb para realizar consultas de búsqueda y obtener detalles de películas. Las llamadas HTTP se realizan mediante Fetch API o Axios.

4. **Componentización en React:**
   - Estructura basada en componentes reutilizables, utilizando el ciclo de vida adecuado (por ejemplo, useEffect para llamadas a la API).

5. **Estilización:**
   - Uso de TailwindCSS para estilizar los componentes y el diseño general de la aplicación.

6. **Extras:**
   - Implementación de un sistema de paginación para los resultados de búsqueda.

## Tecnologías Utilizadas

- ReactJS
- Fetch API / Axios
- TailwindCSS
- The Movie Database (TMDb) API
- Vite

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/CineFind.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd CineFind
   ```
3. Instala las dependencias:
   ```bash
   pnpm install
   ```
4. Configura tu clave de API de TMDb en el archivo de configuración.

## Uso

Inicia la aplicación en modo de desarrollo:
```bash
pnpm run dev
```
Abre [http://localhost:3000](http://localhost:3000) para ver la aplicación en tu navegador.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir cualquier cambio importante antes de enviar un pull request.
