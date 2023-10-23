import { seriesData } from "./data.js";
var cuerpotabla = document.getElementById("cuerpo");
var temporadasTxt = document.getElementById("seasons");
function llenartabla() {
    var temporadas = 0;
    var filas = "";
    seriesData.forEach(function (serie) {
        var fila = "<tr>\n  <td>".concat(serie.num, "</td>\n  <td><a href=\"#\" data-id=\"").concat(serie.num, "\" class=\"serie-link\">").concat(serie.name, "</a></td>\n  <td>").concat(serie.producer, "</td>\n  <td>").concat(serie.seasons, "</td>\n  </tr>");
        filas += fila;
        temporadas += serie.seasons;
    });
    cuerpotabla.innerHTML = filas;
    temporadasTxt.innerHTML = "Seasons average: " + (temporadas / seriesData.length).toString();
}
llenartabla();
var filas = document.querySelectorAll("tr");
function agregarDetalles() {
    filas.forEach(function (fila) {
        fila.addEventListener("click", function () {
            var serie = seriesData[fila.rowIndex - 1];
            var detalle = document.getElementById("detalles");
            detalle.innerHTML = "\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"".concat(serie.image, "\" alt=\"Imagen ").concat(serie.name, "\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">").concat(serie.name, "</h5>\n          <p class=\"card-text\">").concat(serie.description, "</p>\n          <p class=\"card-text\"><a href=\"").concat(serie.link, "\" class=\"serie-link\">").concat(serie.link, "</a></p>\n        </div>\n      </div>\n    ");
        });
    });
}
agregarDetalles();
