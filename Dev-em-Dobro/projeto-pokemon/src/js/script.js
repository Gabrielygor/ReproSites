
const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocDeTema = document.getElementById("imagem-botao");

//Função de seta 
botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro")

    if (modoEscuroAtivo) {
        imagemBotaoTrocDeTema.setAttribute("src", "src/image/sun.png")
    } else {
        imagemBotaoTrocDeTema.setAttribute("src", "src/image/moon.png")
    }


})
