# Portfolio: rodricg30

Este proyecto es un sitio web de portafolio de alto rendimiento, diseñado con un enfoque "Mobile First" y optimizado para una experiencia de usuario premium.

## Tecnologías Utilizadas
- **HTML5 Semántico**: Estructura limpia y optimizada para SEO.
- **CSS3 Moderno**: Variables CSS, Flexbox, Grid y animaciones de alto rendimiento (GPU accelarated).
- **Vanilla JavaScript**: Sin dependencias pesadas para asegurar la máxima velocidad de carga.
- **Fuentes**: 'Outfit' de Google Fonts para una tipografía moderna.

## Estructura del Proyecto
- `index.html`: Estructura principal.
- `style.css`: Estilos globales, animaciones y diseño responsivo.
- `main.js`: Lógica de interacciones (Menú, Cursor, Scroll Animations).

## Cómo Desplegar en GitHub Pages

1. Inicializa el repositorio si no lo has hecho:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Crea un repositorio en GitHub con el nombre `rodricg30` (o `rodricg30.github.io` si es tu repo principal).

3. Vincula el repositorio remoto:
   ```bash
   git remote add origin https://github.com/TU_USUARIO/rodricg30.git
   git branch -M main
   git push -u origin main
   ```

4. En GitHub, ve a **Settings** > **Pages**.
5. En "Source", selecciona `Deploy from a branch`.
6. Selecciona la rama `main` y guarda.

¡Tu sitio estará en vivo en unos minutos!

## Personalización
- Para cambiar las imágenes del banner "Marquee", edita la sección `.marquee` en `index.html` y reemplaza los `<span>` con `<img>`.
