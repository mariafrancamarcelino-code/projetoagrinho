// Selecionando os elementos da página
const botao = document.getElementById('botao-estacao');
const statusIpe = document.getElementById('status-ipe');
const fotoIpe = document.getElementById('foto-ipe'); // Seleciona a imagem
const corpoPagina = document.body;

// Variável para controlar o estado atual
let estaFlorido = false;

// Links das imagens na internet (você pode trocar por fotos locais depois)
const imagemIpeSemFolhas = "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=500&auto=format&fit=crop&q=60";
const imagemIpeFlorido = "https://images.unsplash.com/photo-1601564263071-419b4cfb26c2?w=500&auto=format&fit=crop&q=60";

// Função que muda o visual do site
botao.addEventListener('click', () => {
    if (!estaFlorido) {
        // Se não estiver florido, ele floresce!
        statusIpe.textContent = "🟡 O Ipê está totalmente florido em um amarelo radiante!";
        statusIpe.classList.add('amarelo-vivo');
        corpoPagina.classList.add('florido');
        
        // TROCA A IMAGEM PARA O IPÊ FLORIDO
        fotoIpe.src = imagemIpeFlorido;
        fotoIpe.alt = "Ipê Amarelo totalmente florido";
        
        botao.textContent = "Cair as folhas (Voltar ao Outono) 🍂";
        estaFlorido = true;
    } else {
        // Se já estiver florido, as folhas caem
        statusIpe.textContent = "🍂 O Ipê está sem folhas, se preparando para florir...";
        statusIpe.classList.remove('amarelo-vivo');
        corpoPagina.classList.remove('florido');
        
        // TROCA A IMAGEM PARA O IPÊ SEM FOLHAS
        fotoIpe.src = imagemIpeSemFolhas;
        fotoIpe.alt = "Árvore seca no outono";
        
        botao.textContent = "Florescer Ipê! 🌸";
        estaFlorido = false;
    }
});
