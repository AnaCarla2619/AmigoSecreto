//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();
        input.value = '';
    } else {
        alert('Por favor, digite um nome válido ou evite duplicatas.');
    }
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear pares de amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Você precisa de pelo menos 2 amigos para realizar o sorteio.');
        return;
    }

    const sorteio = [...amigos];
    sorteio.sort(() => Math.random() - 0.5); // Embaralha os nomes
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    for (let i = 0; i < sorteio.length; i++) {
        const amigo1 = sorteio[i];
        const amigo2 = sorteio[(i + 1) % sorteio.length];
        const li = document.createElement('li');
        li.textContent = `${amigo1} tirou ${amigo2}`;
        resultado.appendChild(li);
    }
}