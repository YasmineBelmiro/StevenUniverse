const personagens = document.querySelectorAll('.personagem');
personagens.forEach(personagem => {personagem.addEventListener('mouseenter', () => {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
    
    personagem.classList.add('selecionado');

    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-escolhido-${idPersonagem}.webp`;
    
    const nomePersonagem = document.getElementById('nome-personagem');

    nomePersonagem.innerText = personagem.getAttribute("data-name");
    })
});