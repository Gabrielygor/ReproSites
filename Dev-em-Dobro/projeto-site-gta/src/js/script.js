const botao = document.querySelector(".btn-plataformas")
const elementoPlataformas = document.querySelector(".btn-plataformas .plataformas")

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});