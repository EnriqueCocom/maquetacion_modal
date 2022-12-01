//FUNCIÓN PARA EL MODAL
var mostrarmodal = document.getElementById("modal");
var btnejecutar = document.getElementById("Btn");
var cerrarmodal = document.getElementById("cerrarbtn");

btnejecutar.onclick = function () {
  mostrarmodal.style.display = "block";
};

cerrarmodal.onclick = function () {
  mostrarmodal.style.display = "none";
};

// window.onclick = function (event) {
//   if (event.target == mostrarmodal) {
//     mostrarmodal.style.display = "none";
//   }
//};
