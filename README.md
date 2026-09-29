# Portal Operativo de Compras

**Versión 0.1**

Primera versión del portal de consulta y orientación de la Gerencia de Suministros y Contrataciones (Mantenimiento, División Limpieza y Gestión de Residuos, Intendencia de Montevideo).

**Objetivo:** centralizar procedimientos, documentos y orientaciones de uso frecuente.

**Estado:** en desarrollo.

El portal tiene carácter informativo y operativo. Ante diferencias, prevalecen la normativa vigente, los procedimientos aprobados y las actuaciones administrativas correspondientes.

---

## Contenido de la carpeta

| Archivo o carpeta | Qué contiene |
|---|---|
| `index.html` | Inicio: para qué sirve el portal, tarjetas de tareas, guía "¿Por dónde empiezo?" y "Sobre este portal" |
| `como-empezar.html` | Cómo preparar y presentar una solicitud de compra |
| `procedimientos.html` | PR-01 (descentralizada), PR-02 (centralizada) y sus diferencias |
| `servicios.html` | PR-03: utilización de servicios contratados por pedido SAP |
| `documentos.html` | Biblioteca de documentos y modelos |
| `preguntas.html` | Preguntas frecuentes y contacto |
| `css/styles.css` | Estilos |
| `js/app.js` | Configuración editable, menú móvil, buscador, guía y biblioteca |
| `assets/img/` | Logotipo institucional y flujogramas de los procedimientos |
| `documentos/` | PDF de los procedimientos, Protocolo y modelo RET en Word |
| `.nojekyll` | Indica a GitHub Pages que publique los archivos tal cual |

No requiere instalación ni servidor. Para verlo en la computadora, alcanza con abrir `index.html` con el navegador.

---

## Cómo editar lo más habitual

Buscar el comentario `EDITAR AQUÍ` en los archivos.

- **Versión, estado, correo y texto de aviso:** en `js/app.js`, objeto `CONFIG`, al comienzo del archivo. Se actualizan automáticamente en todas las páginas.
- **Agregar un documento:** copiar el archivo en `documentos/` y agregar una entrada en `CONFIG.documentos` (hay un ejemplo comentado). Aparece solo en la biblioteca.
- **Reemplazar un documento:** subir el archivo nuevo con el mismo nombre (por ejemplo `PR-01.pdf`).
- **Logotipo:** reemplazar `assets/img/logo-im.png` manteniendo el nombre.
- **Buscador:** en `js/app.js`, lista `SEARCH_INDEX`. Si se agrega una sección nueva, agregar una línea con título, página, enlace y palabras clave.
- **Encabezado, menú y pie:** están repetidos en cada página HTML. Si se cambia el menú, hay que cambiarlo en los seis archivos.

Todos los enlaces son relativos (`./documentos/PR-01.pdf`), por lo que el sitio funciona igual en la raíz de un dominio o en una subcarpeta como `/portal-compras/`.

---

## Cómo publicarlo con GitHub Pages

Se necesita una cuenta en GitHub (https://github.com). Todo se hace desde el navegador.

### 1. Crear el repositorio

1. Iniciar sesión en GitHub.
2. Arriba a la derecha, hacer clic en el botón **+** y elegir **New repository**.
3. En **Repository name** escribir: `portal-compras`
4. Elegir **Public**. (GitHub Pages gratuito publica solo repositorios públicos.)
5. No marcar ninguna otra opción.
6. Hacer clic en **Create repository**.

### 2. Subir los archivos

1. En la página del repositorio recién creado, hacer clic en el enlace **uploading an existing file**.
   (Si no aparece: botón **Add file** → **Upload files**.)
2. Descomprimir el ZIP en la computadora.
3. Abrir la carpeta `portal-compras` y **seleccionar todo su contenido** (los archivos `index.html`, `README.md`, etc. y las carpetas `css`, `js`, `assets`, `documentos`).
4. Arrastrar esa selección a la zona de carga de GitHub.

   Importante: arrastrar el **contenido** de la carpeta, no la carpeta `portal-compras` entera. El archivo `index.html` tiene que quedar en la raíz del repositorio.

   El archivo `.nojekyll` está oculto en algunos sistemas. Si no se sube, el sitio igual funciona.

### 3. Confirmar los cambios

1. Esperar a que terminen de cargar todos los archivos.
2. Abajo, en **Commit changes**, dejar el mensaje propuesto o escribir, por ejemplo: `Versión 0.1 del portal`.
3. Hacer clic en **Commit changes**.

### 4. Ir a Settings

En el repositorio, hacer clic en la pestaña **Settings** (arriba, a la derecha de las pestañas).

### 5. Entrar en Pages

En el menú lateral izquierdo, sección **Code and automation**, hacer clic en **Pages**.

### 6. Elegir "Deploy from a branch"

En **Build and deployment**, en **Source**, elegir **Deploy from a branch**.

### 7. Elegir la rama `main`

En **Branch**, desplegar el primer selector y elegir **main**.

### 8. Elegir la carpeta `/(root)`

En el segundo selector, junto a `main`, dejar **/(root)**.

### 9. Guardar

Hacer clic en **Save**.

### 10. Identificar la URL generada

1. Esperar uno o dos minutos y recargar la página de **Settings → Pages**.
2. Arriba aparecerá un recuadro con el texto **Your site is live at** y la dirección, que tendrá esta forma:

   `https://USUARIO.github.io/portal-compras/`

   donde `USUARIO` es el nombre de la cuenta de GitHub.
3. Hacer clic en **Visit site** para comprobarlo.

### Para actualizar el portal más adelante

1. Entrar al repositorio y usar **Add file → Upload files** para subir los archivos modificados con el mismo nombre (se reemplazan).
2. Hacer clic en **Commit changes**.
3. Los cambios se ven publicados en uno o dos minutos. Si no se ven, recargar el navegador con Ctrl + F5.
