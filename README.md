# iNUSUAL Web — Proyecto Astro

Web corporativa de iNUSUAL construida con [Astro](https://astro.build).  
Estructura inspirada en shakersworks.com, adaptada a la identidad de iNUSUAL.

---

## 🚀 Inicio rápido

### 1. Requisitos previos
- [Node.js](https://nodejs.org) v18 o superior
- [VS Code](https://code.visualstudio.com) (recomendado)

### 2. Instalar extensión Astro para VS Code
Busca **"Astro"** en el marketplace de VS Code e instálala.  
Proporciona syntax highlighting, autocompletado e IntelliSense para archivos `.astro`.

### 3. Instalar dependencias
```bash
npm install
```

### 4. Arrancar el servidor de desarrollo
```bash
npm run dev
```
Abre [http://localhost:4321](http://localhost:4321) en tu navegador.

### 5. Build de producción
```bash
npm run build
npm run preview   # para previsualizar el build
```

---

## 📁 Estructura del proyecto

```
inusual-web/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── clients/      ← logos de clientes (añadir aquí)
│       ├── projects/     ← fotos de proyectos (añadir aquí)
│       └── team/         ← fotos de equipo (añadir aquí)
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AnnouncementBar.astro   ← franja superior
│   │   │   ├── Navbar.astro            ← navegación principal
│   │   │   └── Footer.astro            ← pie de página
│   │   └── home/
│   │       ├── Hero.astro              ← sección principal
│   │       ├── LogoSlider.astro        ← carrusel de logos
│   │       ├── ProjectCards.astro      ← tarjetas de proyectos
│   │       ├── WhyUs.astro             ← acordeón "¿Por qué iNUSUAL?"
│   │       ├── StatsCounter.astro      ← contadores animados
│   │       ├── CaseStudies.astro       ← casos de éxito
│   │       ├── ServiceGrid.astro       ← lista de soluciones
│   │       ├── Testimonials.astro      ← slider de testimonios
│   │       └── CtaFinal.astro          ← bloque CTA final
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro    ← layout base con SEO y scripts
│   │
│   ├── pages/
│   │   ├── index.astro               ← Home ES
│   │   ├── en/index.astro            ← Home EN
│   │   ├── soluciones/index.astro
│   │   ├── proyectos/index.astro
│   │   ├── sobre-nosotros/index.astro
│   │   ├── contacto/index.astro
│   │   └── recursos/index.astro
│   │
│   ├── i18n/
│   │   ├── es.json     ← textos en español
│   │   ├── en.json     ← textos en inglés
│   │   └── utils.ts    ← helper de traducciones
│   │
│   └── styles/
│       ├── tokens.css  ← variables CSS (colores, fuentes, espaciado)
│       └── global.css  ← estilos globales y reset
│
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 🎨 Personalización

### Colores
Edita `src/styles/tokens.css`:
```css
--color-accent: #C8FF00;   /* lima eléctrico — cambiar al color iNUSUAL */
--color-accent-2: #FF4D00; /* naranja */
```

### Textos
Edita `src/i18n/es.json` y `src/i18n/en.json` para actualizar todos los textos.

### Imágenes
Añade las imágenes en `public/images/` y referéncialas desde los componentes.  
Los placeholders de color se sustituyen automáticamente cuando hay imagen disponible.

### Nuevas páginas
Crea un archivo `.astro` en `src/pages/` y usa `BaseLayout` como wrapper.

---

## 🌍 Internacionalización

- Español: rutas base (`/`, `/soluciones`, etc.)
- Inglés: rutas con prefijo `/en` (`/en`, `/en/solutions`, etc.)

El selector de idioma en la navbar cambia entre versiones automáticamente.

---

## 📦 Tecnologías

| Tecnología | Uso |
|---|---|
| [Astro 4](https://astro.build) | Framework principal |
| CSS nativo con variables | Estilos (sin Tailwind) |
| TypeScript | Tipado de props y utils |
| Intersection Observer API | Animaciones scroll |
| CSS animations | Marquee, float, fade |

---

## ✅ Próximos pasos sugeridos

- [ ] Reemplazar placeholders de color con imágenes reales de proyectos
- [ ] Añadir logos reales de clientes en `LogoSlider`
- [ ] Configurar formulario de contacto (Netlify Forms, Resend, o Brevo)
- [ ] Conectar blog con colección de contenido Astro (`src/content/blog/`)
- [ ] Añadir Google Analytics o Plausible
- [ ] Deploy en Netlify o Vercel
