const perguntas = [
    //Lista de pergunta desenvilvidas com ajuda do ChatGpt
    { 
        pergunta: "Qual é o nome do protagonista de 'Naruto'?",
        respostas: [
            "Itachi",
            "Naruto",
            "Sasuke"
        ],
        correta: 1
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
        pergunta: "Qual é o nome do clã de ninjas em 'Naruto'?",
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
        pergunta: "Qual é o título original de 'My Hero Academia'?",
        respostas: [
            "Fairy Tail",
            "One Punch Man",
            "Boku no Hero Academia"
        ],
        correta: 2
    },
    {
        pergunta: "Quem é o Deus da Morte em 'Death Note'?",
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
        pergunta: "Qual é o título original de 'Sword Art Online'?",
        respostas: [
            "Log Horizon",
            "No Game No Life",
            "Sword Art Online"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o nome do animal de estimação de Luffy em 'One Piece'?",
        respostas: [
            "Zoro",
            "Chopper",
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

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')


for(const item of perguntas) {
    const quizitem = template.content.cloneNode(true)
    quizitem.querySelector('h3').textContent = item.pergunta

    for(let respostas of item.respostas) {
        const dt = quizitem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = respostas

        quizitem.querySelector('dl').appendChild(dt)
    }

    quizitem.querySelector('dl dt').remove()


    quiz.appendChild(quizitem)
}
