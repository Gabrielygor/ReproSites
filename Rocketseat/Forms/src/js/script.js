
let participantes = [
    {
        nome: 'Mayk',
        email: 'mayk@gmail.com',
        dataInscricao: new Date(2024, 2, 22, 19, 20),
        dataCheckin: new Date(2024, 2, 25, 22, 0),
    },
    {
        nome: 'Gabriel',
        email: 'gabriel@gmail.com',
        dataInscricao: new Date(2024, 2, 22, 19, 20),
        dataCheckin: new Date(2024, 2, 25, 22, 0),
    },
    {
        nome: 'Ana',
        email: 'ana@gmail.com',
        dataInscricao: new Date(2024, 2, 23, 10, 0),
        dataCheckin: new Date(2024, 2, 26, 15, 30),
    },
    {
        nome: 'João',
        email: 'joao@gmail.com',
        dataInscricao: new Date(2024, 2, 23, 12, 45),
        dataCheckin: new Date(2024, 2, 27, 8, 15),
    },
    {
        nome: 'Maria',
        email: 'maria@gmail.com',
        dataInscricao: new Date(2024, 2, 24, 8, 0),
        dataCheckin: new Date(2024, 2, 28, 16, 45),
    },
    {
        nome: 'Carlos',
        email: 'carlos@gmail.com',
        dataInscricao: new Date(2024, 2, 25, 14, 30),
        dataCheckin: new Date(2024, 2, 29, 10, 20),
    },
    {
        nome: 'Patrícia',
        email: 'patricia@gmail.com',
        dataInscricao: new Date(2024, 2, 26, 11, 15),
        dataCheckin: new Date(2024, 3, 1, 9, 0),
    },
    {
        nome: 'Lucas',
        email: 'lucas@gmail.com',
        dataInscricao: new Date(2024, 2, 26, 16, 0),
        dataCheckin: new Date(2024, 3, 2, 14, 10),
    },
    {
        nome: 'Sara',
        email: 'sara@gmail.com',
        dataInscricao: new Date(2024, 2, 27, 9, 30),
        dataCheckin: new Date(2024, 3, 3, 11, 45),
    },
    {
        nome: 'Pedro',
        email: 'pedro@gmail.com',
        dataInscricao: new Date(2024, 2, 28, 13, 20),
        dataCheckin: new Date(2024, 3, 4, 19, 30),
    }
];


const criarNovoParticipante = (participante) => {
    const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao);

    let dataCheckin = dayjs(Date.now()).to(participante.dataCheckin);

    if (participante.dataCheckin == null) {
        dataCheckin = `
            <button class="btn-check-in" 
            data-email="${participante.email}" 
            onclick="fazerCheclIn(event)">
                Confirmar Check - In
            </button>
        `;
    }

    return `
        <tr>
            <td>
                <strong>${participante.nome}</strong>
                <br>
                <small>${participante.email}</small>
            </td>
            <td>${dataInscricao}</td>
            <td>${dataCheckin}</td>
        </tr>
    `;
};


const atualizarLista = (participantes) => {
    let output = ""

    for (let participante of participantes) {
        output = output + criarNovoParticipante(participante);
    };

    document.querySelector('tbody').innerHTML = output;


};


atualizarLista(participantes);


const adicionarParticipante = (event) => {
    event.preventDefault();

    const dadosDoFormulario = new FormData(event.target);

    const participante = {
        nome: dadosDoFormulario.get("nome"),
        email: dadosDoFormulario.get("email"),
        dataInscricao: new Date(),
        dataCheckin: null
    }

    const participanteExiste = participantes.find((p) => p.email == participante.email 
    );

    if(participanteExiste) {
        alert("Email já cadastrado")
        return
    }


    participantes = [participante, ...participantes];

    atualizarLista(participantes);

    event.target.querySelector('[name="nome"]').value = "";
    event.target.querySelector('[name="email"]').value = "";
};

const fazerCheclIn = (event) => {

    const participante = participantes.find((p) => {
        return p.email == event.target.dataset.email
    }); 

    participante.dataCheckin = new Date();

    atualizarLista(participantes);
};