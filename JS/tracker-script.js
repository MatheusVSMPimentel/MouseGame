const AREA = document.body;
const RIGHTBOTTOM = document.querySelector("#right-bottom");
const LEFTTOP = document.querySelector("#left-top");

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function mouseCoordinates(e) {
  // Captura o objeto de evento (movimento do mouse).
  // Obtém a coordenada X (distância da borda esquerda da janela de visualização) através da propriedade clientX.
  // Pega a largura total da janela, subtrai a coordenada atual e a largura do círculo.
  // Faz o mesmo para a coordenada Y (distância da borda superior da janela de visualização).
  var horizontalPosition = windowWidth - e.clientX - 26;
  var verticalPosition = windowHeight - e.clientY - 26;

  // Define a posição horizontal e vertical.
  RIGHTBOTTOM.style.right = horizontalPosition + "px";
  RIGHTBOTTOM.style.top = verticalPosition + "px";
  LEFTTOP.style.left = horizontalPosition + "px";
  LEFTTOP.style.top = verticalPosition + "px";
}

function changeColorOnTouchLeft() {
  LEFTTOP.style.backgroundColor = "green";
  LEFTTOP.style.borderColor = "green";
}

function changeColorOnTouchRight() {
  RIGHTBOTTOM.style.backgroundColor = "green";
  RIGHTBOTTOM.style.borderColor = "green";
}

// Quando o mouse se move, executa a função mouseCoordinates.
AREA.addEventListener("mousemove", mouseCoordinates, false);

// Quando o mouse toca o círculo, executa a função changeColorOnTouch.
LEFTTOP.addEventListener("mouseenter", changeColorOnTouchLeft, false);
RIGHTBOTTOM.addEventListener(
  "mouseenter",
  changeColorOnTouchRight,
  false
);

// Quando o mouse sai do círculo, remove estilos embutidos com uma função anônima.
LEFTTOP.addEventListener(
  "mouseleave",
  function () {
    LEFTTOP.removeAttribute("style");
  },
  false
);
RIGHTBOTTOM.addEventListener(
  "mouseleave",
  function () {
    RIGHTBOTTOM.removeAttribute("style");
  },
  false
);
