# Portal Operativo de Compras · Versión 2

Portal interno de la Gerencia de Suministros y Contrataciones (Compras Mantenimiento, División Limpieza y Gestión de Residuos, Intendencia de Montevideo) para orientar solicitudes, consultar procedimientos, descargar modelos y acceder al consumo de servicios.

El portal tiene carácter informativo y operativo. Ante diferencias, prevalecen la normativa vigente, los procedimientos aprobados y las actuaciones administrativas. SAP es el registro oficial.

## Estructura

| Archivo o carpeta | Contenido |
|---|---|
| `index.html` | Inicio: presentación, accesos, trabajo conjunto, orientación rápida |
| `procedimientos.html` | Catálogo PR-01 a PR-04 y comparación PR-01 / PR-02 |
| `pr-01.html` a `pr-04.html` | Ficha de cada procedimiento |
| `documentos.html` | Modelos Word, procedimientos PDF y Protocolo |
| `servicios.html` | Acceso al Dashboard de Cuentas Corrientes (Google Sheets) |
| `seguimiento.html` | Seguimiento general de solicitudes y compras (Próximamente) |
| `como-empezar.html`, `preguntas.html` | Ayuda: cómo empezar una solicitud, preguntas frecuentes y contacto |
| `assets/css/styles.css` | Estilos |
| `assets/js/app.js` | Menú en celular, buscador y datos editables |
| `assets/img/` | Logotipo y flujogramas (tomados de los PDF de los procedimientos) |
| `documentos/procedimientos/` | PDF de PR-01 a PR-04 y Protocolo |
| `documentos/modelos/` | Modelos Word editables |
| `.nojekyll` | Indica a GitHub Pages que publique los archivos tal cual |

Todos los enlaces son relativos. El sitio funciona abriendo `index.html` en la computadora y publicado en `https://USUARIO.github.io/portal.comprasyalmacenes/`.

## Cambios frecuentes

- **Reemplazar un PDF o un Word por una versión nueva:** subirlo con el mismo nombre en la misma carpeta. Si cambia el contenido (pasos, versión), hay que actualizar también la ficha HTML correspondiente.
- **Activar el seguimiento (2027):** en `seguimiento.html`, reemplazar el bloque `Acceso pendiente` por un enlace a la planilla, y quitar la etiqueta «Próximamente» en el menú de cada página.
- **Cambiar el enlace del Dashboard:** en `servicios.html`, buscar `docs.google.com`.
- **Buscador:** lista `SEARCH_INDEX` en `assets/js/app.js`.
- **Menú:** está repetido en cada página HTML; si se cambia, hay que cambiarlo en todas.
