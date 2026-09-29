/* =========================================================
   Portal Operativo de Compras · app.js
   JavaScript sin dependencias. Funciona abriendo index.html
   directamente o publicado en GitHub Pages.
   ========================================================= */

/* <!-- EDITAR AQUÍ --> Datos que cambian con frecuencia */
const CONFIG = {
  version: "V0.1",
  estado: "Portal en desarrollo",
  correo: "comprasyalmacenes.suministros@imm.gub.uy",
  aviso: "Contenido en proceso de actualización y mejora.",

  /* <!-- EDITAR AQUÍ --> Biblioteca de documentos.
     Para agregar un documento: subir el archivo a /documentos
     y agregar una entrada en el grupo correspondiente.
     Solo agregar documentos que existan y estén aprobados. */
  documentos: {
    "PR-01": {
      grupo: "Procedimientos",
      titulo: "Procedimiento de Compras Descentralizadas",
      descripcion: "Desde la solicitud de compra hasta la notificación de la adjudicación y el archivo del expediente.",
      archivo: "./PR-01.pdf",
      formato: "PDF"
    },
    "PR-02": {
      grupo: "Procedimientos",
      titulo: "Procedimiento de Compras Centralizadas",
      descripcion: "Compras que se tramitan con la intervención de la Unidad U5320.",
      archivo: "./PR-02.pdf",
      formato: "PDF"
    },
    "PR-03": {
      grupo: "Procedimientos",
      titulo: "Utilización de Servicios Contratados por Pedido SAP",
      descripcion: "Cómo se solicitan, coordinan, verifican y registran los servicios que ya cuentan con pedido SAP.",
      archivo: "./PR-03.pdf",
      formato: "PDF"
    },
    "PROTOCOLO": {
      grupo: "Documento marco",
      codigo: "Marco",
      titulo: "Protocolo de Actuación de Almacenes y Compras de Servicios Generales",
      descripcion: "Documento marco de los procedimientos. Establece responsabilidades de las dependencias, Compras y Almacenes.",
      archivo: "./protocolo.pdf",
      formato: "PDF"
    },
    "RET-SERVICIOS": {
      grupo: "Modelos",
      codigo: "Modelo",
      titulo: "Requisitos y Especificaciones Técnicas · Servicios",
      descripcion: "Plantilla editable para preparar los requisitos y especificaciones técnicas de un servicio.",
      archivo: "./RET-Servicios.docx",
      formato: "Word",
      soloDescarga: true
    }
    /* Ejemplo para futuras incorporaciones (no activar hasta que exista el archivo):
    ,"PR-04": {
      grupo: "Procedimientos",
      titulo: "Nombre del procedimiento",
      descripcion: "Descripción breve.",
      archivo: "./PR-04.pdf",
      formato: "PDF"
    }
    Grupos previstos: "Procedimientos", "Documento marco", "Modelos",
    "Plantillas", "Checklists", "Modelos de informes". */
  },

  /* Orden en que se muestran los grupos en la biblioteca */
  ordenGrupos: ["Procedimientos", "Documento marco", "Modelos", "Plantillas", "Checklists", "Modelos de informes"]
};

/* <!-- EDITAR AQUÍ --> Índice del buscador.
   t: título del resultado · p: página · u: enlace · k: palabras clave y resumen */
const SEARCH_INDEX = [
  { t: "Cómo iniciar una compra", p: "Cómo empezar", u: "./como-empezar.html", k: "iniciar empezar compra solicitud necesidad pasos checklist comprar contratar" },
  { t: "Qué debe contener la solicitud de compra", p: "Cómo empezar", u: "./como-empezar.html#contenido-solicitud", k: "solicitud contenido minimo justificacion cantidades plazo disponibilidad presupuestal prioridad presentar enviar" },
  { t: "Documentación técnica de la solicitud", p: "Cómo empezar", u: "./como-empezar.html#documentacion-tecnica", k: "documentacion tecnica especificaciones terminos de referencia memoria descriptiva pliego planos anexos cronogramas requisitos minimos admisibilidad" },
  { t: "Quién hace qué: dependencia y Compras", p: "Cómo empezar", u: "./como-empezar.html#quien-hace-que", k: "responsabilidades roles dependencia solicitante compras gerencia trabajo conjunto referente tecnico" },
  { t: "¿Por dónde empiezo?", p: "Inicio", u: "./index.html#guia", k: "guia empezar empiezo orientacion procedimiento servicio bien repuesto insumo equipamiento" },
  { t: "Diferencias entre compra descentralizada y centralizada", p: "Procedimientos", u: "./procedimientos.html#comparacion", k: "diferencia comparacion centralizada descentralizada PR-01 PR-02 U5320 U5881 publicacion pliego" },
  { t: "PR-01 · Compra descentralizada", p: "Procedimientos", u: "./procedimientos.html#pr01", k: "PR-01 compra descentralizada etapas actividades solicitud de pedido SAP U5881 publicacion tres dias ofertas evaluacion adjudicacion notificacion archivo expediente" },
  { t: "PR-02 · Compra centralizada", p: "Procedimientos", u: "./procedimientos.html#pr02", k: "PR-02 compra centralizada U5320 escribano pliego de condiciones borrador publicacion proveedores ofertas evaluacion adjudicacion autorizaciones" },
  { t: "Pliego de condiciones (compra centralizada)", p: "Procedimientos", u: "./procedimientos.html#pr02-etapas", k: "pliego borrador escribano U5320 validar contenido tecnico" },
  { t: "Después de la adjudicación: ejecución y recepción", p: "Procedimientos", u: "./procedimientos.html#despues", k: "adjudicacion recepcion conformidad tecnica almacen despacho cantidades recepcion administrativa ejecucion" },
  { t: "Utilizar un servicio ya contratado", p: "Servicios contratados", u: "./servicios.html", k: "servicio contratado utilizar pedido SAP PR-03 empresa adjudicataria" },
  { t: "Circuito de utilización de servicios", p: "Servicios contratados", u: "./servicios.html#circuito", k: "circuito solicitud utilizacion urgencia saldo coordinacion ejecucion remito conformidad hoja de servicio" },
  { t: "Saldo del pedido SAP", p: "Servicios contratados", u: "./servicios.html#saldo", k: "saldo pedido agotado disponible descontar hoja de servicio planilla seguimiento" },
  { t: "Remito y conformidad técnica", p: "Servicios contratados", u: "./servicios.html#conformidad", k: "remito conformidad tecnica verificar observaciones aprobado trabajo" },
  { t: "Hoja de servicio y facturación", p: "Servicios contratados", u: "./servicios.html#hoja-servicio", k: "hoja de servicio SAP facturar factura facturacion proveedor empresa numero" },
  { t: "Biblioteca de documentos y modelos", p: "Documentos", u: "./documentos.html", k: "documentos modelos descargar procedimientos protocolo plantilla RET PDF" },
  { t: "Protocolo de Actuación de Almacenes y Compras", p: "Documentos", u: "./documentos.html", k: "protocolo documento marco almacenes stock inventario TOCAF" },
  { t: "Modelo de Requisitos y Especificaciones Técnicas (servicios)", p: "Documentos", u: "./documentos.html", k: "RET modelo plantilla especificaciones tecnicas servicios requisitos cotizacion" },
  { t: "¿Qué tengo que presentar para iniciar una compra?", p: "Preguntas frecuentes", u: "./preguntas.html#faq-presentar", k: "presentar solicitud iniciar compra documentacion" },
  { t: "¿Quién prepara las especificaciones técnicas?", p: "Preguntas frecuentes", u: "./preguntas.html#faq-especificaciones", k: "especificaciones tecnicas quien prepara dependencia" },
  { t: "¿Compras puede ayudarme a preparar la solicitud?", p: "Preguntas frecuentes", u: "./preguntas.html#faq-ayuda", k: "ayuda orientacion compras preparar solicitud" },
  { t: "¿Quién responde una consulta técnica de un proveedor?", p: "Preguntas frecuentes", u: "./preguntas.html#faq-consultas", k: "consulta tecnica proveedor oferentes publicacion referente" },
  { t: "¿Quién evalúa técnicamente las ofertas?", p: "Preguntas frecuentes", u: "./preguntas.html#faq-evaluacion", k: "evaluacion tecnica ofertas informe tecnico" },
  { t: "¿Quién da la conformidad de un servicio?", p: "Preguntas frecuentes", u: "./preguntas.html#faq-conformidad", k: "conformidad servicio tecnica quien" },
  { t: "¿Qué pasa si el pedido SAP ya no tiene saldo?", p: "Preguntas frecuentes", u: "./preguntas.html#faq-saldo", k: "saldo agotado pedido SAP" },
  { t: "¿El remito significa que el servicio quedó aprobado?", p: "Preguntas frecuentes", u: "./preguntas.html#faq-remito", k: "remito aprobado conformidad" },
  { t: "¿Cuándo puede facturar el proveedor?", p: "Preguntas frecuentes", u: "./preguntas.html#faq-facturar", k: "facturar factura proveedor empresa hoja de servicio" },
  { t: "Contacto con Compras", p: "Contacto", u: "./preguntas.html#contacto", k: "contacto correo consulta email mail comprasyalmacenes" },
  { t: "Sobre este portal", p: "Inicio", u: "./index.html#sobre", k: "sobre portal version desarrollo" }
];

/* ---------- Utilidades ---------- */

function normalize(s) {
  return (s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/* ---------- Aplicar configuración ---------- */

function applyConfig() {
  document.querySelectorAll('[data-cfg="version"]').forEach(el => { el.textContent = CONFIG.version; });
  document.querySelectorAll('[data-cfg="estado"]').forEach(el => { el.textContent = CONFIG.estado; });
  document.querySelectorAll('[data-cfg="aviso"]').forEach(el => { el.textContent = CONFIG.aviso; });
  document.querySelectorAll('[data-cfg="correo"]').forEach(el => { el.textContent = CONFIG.correo; });
  document.querySelectorAll('[data-cfg-mail]').forEach(el => {
    const asunto = el.getAttribute("data-cfg-mail");
    el.href = "mailto:" + CONFIG.correo + (asunto ? "?subject=" + encodeURIComponent(asunto) : "");
  });
  document.querySelectorAll("[data-doc]").forEach(el => {
    const d = CONFIG.documentos[el.getAttribute("data-doc")];
    if (d) el.href = d.archivo;
  });
}

/* ---------- Menú móvil ---------- */

function initNav() {
  const btn = document.querySelector(".nav-toggle");
  const list = document.getElementById("nav-list");
  if (!btn || !list) return;
  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!open));
    list.classList.toggle("is-open", !open);
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && list.classList.contains("is-open")) {
      btn.setAttribute("aria-expanded", "false");
      list.classList.remove("is-open");
      btn.focus();
    }
  });
}

/* ---------- Buscador ---------- */

function initSearch() {
  const form = document.getElementById("search-form");
  const input = document.getElementById("search-input");
  const out = document.getElementById("search-results");
  if (!form || !input || !out) return;

  let current = [];

  function run(q) {
    const terms = normalize(q).split(/\s+/).filter(t => t.length > 1);
    if (!terms.length) { out.hidden = true; out.innerHTML = ""; input.setAttribute("aria-expanded", "false"); current = []; return; }
    current = SEARCH_INDEX
      .map(item => {
        const title = normalize(item.t);
        const hay = title + " " + normalize(item.k) + " " + normalize(item.p);
        if (!terms.every(t => hay.includes(t))) return null;
        const score = terms.reduce((s, t) => s + (title.includes(t) ? 3 : 1), 0);
        return { item, score };
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map(r => r.item);

    out.innerHTML = current.length
      ? current.map(r => '<li><a href="' + r.u + '"><span class="r-title">' + escapeHtml(r.t) + '</span><span class="r-page">' + escapeHtml(r.p) + "</span></a></li>").join("")
      : '<li class="r-empty">No hay resultados. Probá con otra palabra o escribí a Compras.</li>';
    out.hidden = false;
    input.setAttribute("aria-expanded", "true");
  }

  input.addEventListener("input", () => run(input.value));
  form.addEventListener("submit", e => {
    e.preventDefault();
    run(input.value);
    if (current.length) window.location.href = current[0].u;
  });
  input.addEventListener("keydown", e => {
    if (e.key === "ArrowDown") {
      const first = out.querySelector("a");
      if (first) { e.preventDefault(); first.focus(); }
    }
    if (e.key === "Escape") { out.hidden = true; input.setAttribute("aria-expanded", "false"); }
  });
  out.addEventListener("keydown", e => {
    const links = Array.from(out.querySelectorAll("a"));
    const i = links.indexOf(document.activeElement);
    if (e.key === "ArrowDown" && i < links.length - 1) { e.preventDefault(); links[i + 1].focus(); }
    if (e.key === "ArrowUp") { e.preventDefault(); (i > 0 ? links[i - 1] : input).focus(); }
    if (e.key === "Escape") { out.hidden = true; input.focus(); }
  });
  document.addEventListener("click", e => {
    if (!form.contains(e.target)) { out.hidden = true; input.setAttribute("aria-expanded", "false"); }
  });
}

/* ---------- Abrir desplegable al llegar por enlace (#faq-...) ---------- */

function openHashTarget() {
  if (!location.hash) return;
  const el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
  if (el && el.tagName === "DETAILS") {
    el.open = true;
    el.scrollIntoView();
    const s = el.querySelector("summary");
    if (s) s.focus({ preventScroll: true });
  }
}

/* ---------- Guía "¿Por dónde empiezo?" ---------- */

function initGuide() {
  const guide = document.getElementById("guide-form");
  if (!guide) return;
  const results = document.querySelectorAll("[data-guide-result]");
  guide.addEventListener("change", e => {
    if (e.target.name !== "necesidad") return;
    results.forEach(r => { r.hidden = r.getAttribute("data-guide-result") !== e.target.value; });
  });
}

/* ---------- Biblioteca de documentos ---------- */

function renderLibrary() {
  const box = document.getElementById("doc-library");
  if (!box) return;
  const grupos = {};
  Object.keys(CONFIG.documentos).forEach(code => {
    const d = CONFIG.documentos[code];
    (grupos[d.grupo] = grupos[d.grupo] || []).push({ code, ...d });
  });
  const orden = CONFIG.ordenGrupos.filter(g => grupos[g]).concat(Object.keys(grupos).filter(g => !CONFIG.ordenGrupos.includes(g)));
  box.innerHTML = orden.map(g => {
    const items = grupos[g].map(d => {
      const codigo = d.codigo || d.code;
      const nombreArchivo = d.archivo.split("/").pop();
      const ver = d.soloDescarga ? "" :
        '<a class="btn btn--secondary" href="' + d.archivo + '" target="_blank" rel="noopener">Ver <span class="visually-hidden">' + escapeHtml(d.titulo) + " (se abre en otra pestaña)</span></a>";
      const bajar = '<a class="btn" href="' + d.archivo + '" download="' + escapeHtml(nombreArchivo) + '">' +
        (d.soloDescarga ? "Descargar modelo" : "Descargar") + ' <span class="visually-hidden">' + escapeHtml(d.titulo) + "</span></a>";
      return '<li class="doc-item"><span class="doc-code">' + escapeHtml(codigo) + "</span>" +
        '<div class="doc-meta"><h3>' + escapeHtml(d.titulo) + "</h3><p>" + escapeHtml(d.descripcion) +
        ' <span class="doc-format">(' + escapeHtml(d.formato) + ")</span></p></div>" +
        '<div class="doc-actions">' + ver + bajar + "</div></li>";
    }).join("");
    return '<section class="doc-group" aria-labelledby="g-' + normalize(g).replace(/\W+/g, "-") + '"><h2 id="g-' + normalize(g).replace(/\W+/g, "-") + '">' + escapeHtml(g) + '</h2><ul class="doc-list">' + items + "</ul></section>";
  }).join("");
}

/* ---------- Inicio ---------- */

document.addEventListener("DOMContentLoaded", () => {
  applyConfig();
  initNav();
  initSearch();
  initGuide();
  renderLibrary();
  openHashTarget();
});
window.addEventListener("hashchange", openHashTarget);
