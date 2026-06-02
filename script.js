// Aguarda o carregamento total do DOM
document.addEventListener("DOMContentLoaded", () => {
    
    // Seleciona todos os cards de árvores
    const cards = document.querySelectorAll(".card");

    // Banco de dados simples para os fatos curiosos
    const fatosCuriosos = {
        ipe: "Sabia que o Ipê-Amarelo foi declarado a Flor Nacional do Brasil em 1961? Ele costuma florescer justamente nos meses mais secos do ano!",
        paubrasil: "O Pau-Brasil possui uma seiva interior de cor vermelha-brasa (daí o nome 'Brasil'). Ele quase foi extinto devido à exploração massiva no período colonial.",
        araucaria: "A Araucária é uma árvore pré-histórica que conviveu com os dinossauros. Suas sementes (os pinhões) alimentam mais de 70 espécies de animais no inverno."
    };

    // Adiciona evento de clique a cada card
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const tipoArvore = card.getAttribute("data-tree");
            const curiosidade = fatosCuriosos[tipoArvore];
            
            if (curiosidade) {
                alert(`🌲 Fato Curioso:\n\n${curiosidade}`);
            }
        });
    });
});
