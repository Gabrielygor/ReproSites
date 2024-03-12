const botoesPersonagem = document.querySelectorAll('.personagem-btn button');
    const imagensPersonagem = document.querySelectorAll('.personagens .personagem');

    botoesPersonagem.forEach((botao, index) => {
        botao.addEventListener('click', function() {
            botoesPersonagem.forEach(botao => {
                botao.parentElement.classList.remove('selecionado');
            });

            this.parentElement.classList.add('selecionado');

            imagensPersonagem.forEach(imagem => {
                imagem.style.display = 'none';
            });

            imagensPersonagem[index].style.display = 'block';
        });
    }); 