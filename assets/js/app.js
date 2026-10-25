/* =========================================================
   Portal Operativo de Compras · V2 · app.js
   JavaScript sin dependencias. El sitio se puede leer y
   navegar sin JavaScript; este archivo agrega el menú móvil
   y el buscador.
   ========================================================= */

/* EDITAR AQUÍ: datos generales que se muestran en todas las páginas */
const CONFIG = {
  version: "V2",
  correo: "comprasyalmacenes.suministros@imm.gub.uy"
};

/* EDITAR AQUÍ: índice del buscador.
   t: título · p: página · u: enlace · k: palabras clave */
const SEARCH_INDEX = [
  { t: "Inicio", p: "Inicio", u: "index.html", k: "inicio portal mantenimiento compras trabajo conjunto" },
  { t: "¿Por dónde empiezo?", p: "Inicio", u: "index.html#por-donde", k: "empezar empiezo orientacion guia necesito" },
  { t: "Procedimientos PR-01 a PR-04", p: "Procedimientos", u: "procedimientos.html", k: "procedimientos guias circuito pr01 pr02 pr03 pr04" },
  { t: "Diferencias entre compra descentralizada y centralizada", p: "Procedimientos", u: "procedimientos.html#comparacion", k: "diferencia comparacion descentralizada centralizada u5320 escribano pliego" },
  { t: "PR-01 Compras descentralizadas", p: "Procedimientos", u: "pr-01.html", k: "pr-01 pr01 descentralizada compra solicitud publicacion tres dias u5881 informe tecnico adjudicacion" },
  { t: "PR-02 Compras centralizadas", p: "Procedimientos", u: "pr-02.html", k: "pr-02 pr02 centralizada u5320 escribano pliego condiciones validar adjudicacion" },
  { t: "PR-03 Utilización de servicios contratados", p: "Procedimientos", u: "pr-03.html", k: "pr-03 pr03 servicio contratado pedido sap saldo remito conformidad hoja de servicio" },
  { t: "Cómo pedir un servicio contratado", p: "PR-03", u: "pr-03.html#como-pedir", k: "pedir servicio correo jefatura unidad sim matricula urgencia" },
  { t: "PR-04 Compras directas sin publicación y por excepción", p: "Procedimientos", u: "pr-04.html", k: "pr-04 pr04 sin publicacion excepcion cde tocaf articulo 33 literal d causal desarme urgencia exclusividad" },
  { t: "Criterios según el monto estimado", p: "PR-04", u: "pr-04.html#montos", k: "monto tope tramo cotizaciones tres 35 65 100 lit c" },
  { t: "Causales del art. 33, lit. D", p: "PR-04", u: "pr-04.html#causales", k: "causal numeral 7 desarme 3 exclusividad 10 urgencia 2 desierto 12 escasez" },
  { t: "Modelos y documentos", p: "Modelos y documentos", u: "documentos.html", k: "modelos documentos word descargar plantillas pdf" },
  { t: "Anexo de artículos (requisitos y especificaciones técnicas)", p: "Modelos y documentos", u: "documentos.html#modelos", k: "anexo articulos ret requisitos especificaciones tecnicas repuestos bienes word" },
  { t: "Anexo de servicios (requisitos y especificaciones técnicas)", p: "Modelos y documentos", u: "documentos.html#modelos", k: "anexo servicios ret requisitos especificaciones tecnicas word" },
  { t: "Constancia de recepción de muestras", p: "Modelos y documentos", u: "documentos.html#modelos", k: "constancia recepcion muestras word" },
  { t: "Intimación por incumplimiento de entrega", p: "Modelos y documentos", u: "documentos.html#modelos", k: "intimacion entrega incumplimiento proveedor atraso word" },
  { t: "Protocolo de Actuación de Almacenes y Compras", p: "Modelos y documentos", u: "documentos.html#marco", k: "protocolo documento marco numerales" },
  { t: "Servicios contratados: Dashboard de Cuentas Corrientes", p: "Servicios contratados", u: "servicios.html", k: "dashboard cuentas corrientes google sheets planilla consumo saldo servicios" },
  { t: "Seguimiento general de solicitudes y compras", p: "Seguimiento", u: "seguimiento.html", k: "seguimiento estado solicitudes compras proximamente 2027" },
  { t: "Cómo empezar una solicitud", p: "Cómo empezar", u: "como-empezar.html", k: "iniciar empezar solicitud necesidad justificacion cantidades plazo prioridad documentacion tecnica" },
  { t: "Preguntas frecuentes y contacto", p: "Preguntas frecuentes", u: "preguntas.html", k: "preguntas frecuentes dudas contacto correo consulta" }
];

(function () {
  "use strict";
  document.documentElement.classList.add("js");

  /* Datos de configuración */
  document.querySelectorAll("[data-cfg]").forEach(function (el) {
    var v = CONFIG[el.getAttribute("data-cfg")];
    if (v) { el.textContent = v; }
  });

  /* Menú en pantallas chicas */
  var toggle = document.querySelector(".nav-toggle");
  var side = document.getElementById("menu");
  if (toggle && side) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      side.classList.toggle("is-open", !open);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && side.classList.contains("is-open")) {
        side.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* Buscador */
  var input = document.getElementById("search-input");
  var list = document.getElementById("search-results");
  var form = document.getElementById("search-form");
  if (!input || !list) { return; }
  if (form) { form.hidden = false; }
  function norm(s) { return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  function render(q) {
    list.innerHTML = "";
    if (q.length < 2) { list.hidden = true; input.setAttribute("aria-expanded", "false"); return; }
    var words = norm(q).split(/\s+/).filter(Boolean);
    var hits = SEARCH_INDEX.filter(function (it) {
      var hay = norm(it.t + " " + it.p + " " + it.k);
      return words.every(function (w) { return hay.indexOf(w) !== -1; });
    }).slice(0, 8);
    if (!hits.length) {
      var li = document.createElement("li");
      li.className = "r-empty";
      li.textContent = "Sin resultados. Probá con otra palabra o escribí a Compras.";
      list.appendChild(li);
    }
    hits.forEach(function (it) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = it.u;
      var t = document.createElement("span"); t.className = "r-t"; t.textContent = it.t;
      var p = document.createElement("span"); p.className = "r-p"; p.textContent = it.p;
      a.appendChild(t); a.appendChild(p); li.appendChild(a); list.appendChild(li);
    });
    list.hidden = false;
    input.setAttribute("aria-expanded", "true");
  }
  input.addEventListener("input", function () { render(input.value.trim()); });
  input.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") { var f = list.querySelector("a"); if (f) { e.preventDefault(); f.focus(); } }
    if (e.key === "Escape") { input.value = ""; render(""); }
  });
  list.addEventListener("keydown", function (e) {
    var links = Array.prototype.slice.call(list.querySelectorAll("a"));
    var i = links.indexOf(document.activeElement);
    if (e.key === "ArrowDown" && i < links.length - 1) { e.preventDefault(); links[i + 1].focus(); }
    if (e.key === "ArrowUp") { e.preventDefault(); if (i > 0) { links[i - 1].focus(); } else { input.focus(); } }
    if (e.key === "Escape") { input.focus(); input.value = ""; render(""); }
  });
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var f = list.querySelector("a");
      if (f) { window.location.href = f.getAttribute("href"); }
    });
  }
})();
