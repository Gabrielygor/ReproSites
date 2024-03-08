
const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocDeTema = document.getElementById("imagem-botao");

//Função de seta 
botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("modo-escuro");


    if (modoEscuroAtivo) {
        body.classList.remove("modo-escuro")
        imagemBotaoTrocDeTema.setAttribute("src", "src/image/sun.png")

    } else {

        body.classList.add("modo-escuro")
        imagemBotaoTrocDeTema.setAttribute("src", "src/image/moon.png")
    }


})
