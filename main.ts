import { Serie } from "./serie.js";
import { seriesData } from "./data.js";


const cuerpotabla = document.getElementById("cuerpo")!;
const temporadasTxt = document.getElementById("seasons")!;

function llenartabla(): void {
  let temporadas = 0
  let filas = "";
  seriesData.forEach((serie: Serie) => {
  const fila = `<tr>
  <td>${serie.num}</td>
  <td><a href="#" data-id="${serie.num}" class="serie-link">${serie.name}</a></td>
  <td>${serie.producer}</td>
  <td>${serie.seasons}</td>
  </tr>`;
  filas += fila;
  temporadas += serie.seasons;
});
  cuerpotabla.innerHTML = filas;
  temporadasTxt.innerHTML = "Seasons average: " + (temporadas/seriesData.length).toString();
}

llenartabla();

const filas = document.querySelectorAll("tr");
function agregarDetalles(): void{
  filas.forEach((fila) => {
  fila.addEventListener("click", () => {
    const serie = seriesData[fila.rowIndex - 1];

    const detalle = document.getElementById("detalles")!;
    detalle.innerHTML = `
      <div class="card">
        <img class="card-img-top" src="${serie.image}" alt="Imagen ${serie.name}">
        <div class="card-body">
          <h5 class="card-title">${serie.name}</h5>
          <p class="card-text">${serie.description}</p>
          <p class="card-text"><a href="${serie.link}" class="serie-link">${serie.link}</a></p>
        </div>
      </div>
    `;
  });
});
}

agregarDetalles();