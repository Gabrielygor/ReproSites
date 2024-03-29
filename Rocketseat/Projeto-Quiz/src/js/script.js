const perguntas = [
    //Lista de pergunta desenvilvidas com ajuda do ChatGpt
    {
        pergunta: "Qual é o nome do antagonista de 'Naruto'?",
        respostas: [
            "Itachi",
            "Naruto",
            "Sasuke"
        ],
        correta: 2
    },
    {
        pergunta: "Quem é o criador do 'One Piece'?",
        respostas: [
            "Eiichiro Oda",
            "Tite Kubo",
            "Masashi Kishimoto"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o título original de 'Attack on Titan'?",
        respostas: [
            "Fairy Tail",
            "Shingeki no Kyojin",
            "Bleach"
        ],
        correta: 1
    },
    {
        pergunta: "Quem é o protagonista de 'Dragon Ball Z'?",
        respostas: [
            "Vegeta",
            "Gohan",
            "Goku"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o nome da nave em 'Cowboy Bebop'?",
        respostas: [
            "Marauder",
            "Swordfish",
            "Bebop"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o nome de um clã de ninjas em 'Naruto'?",
        respostas: [
            "Hyuga",
            "Ambu",
            "Hokage"
        ],
        correta: 0
    },
    {
        pergunta: "Quem é o criador de 'Fullmetal Alchemist'?",
        respostas: [
            "Naoko Takeuchi",
            "Kentaro Miura",
            "Hiromu Arakawa"
        ],
        correta: 2
    },
    {
        pergunta: "Quem é o príncipe dos Sayajins em 'Dragpn Ball Z'?",
        respostas: [
            "Vegeta",
            "Goku",
            "Broly"
        ],
        correta: 0
    },
    {
        pergunta: "Quem é um dos Shinigamis em 'Death Note'?",
        respostas: [
            "Ryuk",
            "Light Yagami",
            "L"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o nome do protagonista de 'Demon Slayer'?",
        respostas: [
            "Zenitsu Agatsuma",
            "Tanjiro Kamado",
            "Inosuke Hashibira"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o nome do protagonista de 'One Punch Man'?",
        respostas: [
            "Saitama",
            "Genos",
            "Mumen Rider"
        ],
        correta: 0
    },
    {
        pergunta: "Quem é o autor de 'Hunter x Hunter'?",
        respostas: [
            "Eiichiro Oda",
            "Togashi Yoshihiro",
            "Kazue Kato"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o nome do protagonista de 'High School DXD'?",
        respostas: [
            "Yamato",
            "Akeno",
            "Issei"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o nome do cozinheiro da tripulação de Luffy em 'One Piece'?",
        respostas: [
            "Zoro",
            "Sanji",
            "Nami"
        ],
        correta: 1
    },
    {
        pergunta: "Quem é o protagonista de 'Tokyo Ghoul'?",
        respostas: [
            "Hideyoshi Nagachika",
            "Ken Kaneki",
            "Touka Kirishima"
        ],
        correta: 1
    },
];

const corretas = new Set()
const totalDePerguntas = perguntas.lengt
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + '15'



const quiz = document.querySelector('#quiz') //Seleciona a div quiz
const template = document.querySelector('template') //Seleciona o elemento template

//laço que usa a lista de pergunta para criar o Quiz
for (const item of perguntas) {
    const quizitem = template.content.cloneNode(true)
    quizitem.querySelector('h3').textContent = item.pergunta  //Muda o h3 de acordo com a pergunta

    for (let respostas of item.respostas) {
        const dt = quizitem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = respostas
        dt.querySelector('input').setAttribute('name', 'pergunta' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(respostas)

        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta //False or True
            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + ' de ' + '15'
            console.log(corretas.size)
        }


        quizitem.querySelector('dl').appendChild(dt)
    }

    quizitem.querySelector('dl dt').remove() //Remove a "OPÇÃO A DO HTML"


    quiz.appendChild(quizitem)
}
