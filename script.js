// Selecionando os elementos da página que vamos modificar
const botao = document.getElementById('botao-estacao');
const statusIpe = document.getElementById('status-ipe');
const corpoPagina = document.body;

// Variável para controlar o estado atual (se está florido ou não)
let estaFlorido = false;

// Função que muda o visual do site
botao.addEventListener('click', () => {
    if (!estaFlorido) {
        // Se não estiver florido, ele floresce!
        statusIpe.textContent = "🟡 O Ipê está totalmente florido em um amarelo radiante!";
        statusIpe.classList.add('amarelo-vivo');
        corpoPagina.classList.add('florido');
        botao.textContent = "Cair as folhas (Voltar ao Outono) 🍂";
        estaFlorido = true;
    } else {
        // Se já estiver florido, as folhas caem
        statusIpe.textContent = "🍂 O Ipê está sem folhas, se preparando para florir...";
        statusIpe.classList.remove('amarelo-vivo');
        corpoPagina.classList.remove('florido');
        botao.textContent = "Florescer Ipê! 🌸";
        estaFlorido = false;
    }
});
