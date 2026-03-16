document.addEventListener('DOMContentLoaded', () => {
    // Lógica do Carrossel de Projetos
    const cards = document.querySelectorAll('.project-card');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    // O card do meio (índice 1) começa ativo no seu HTML
    let currentIndex = 1; 

    function updateCarousel() {
        // Remove a classe 'active' e 'solid' de todos
        cards.forEach((card) => {
            card.classList.remove('active');
            const label = card.querySelector('.project-label');
            if(label) label.classList.remove('solid');
        });

        // Adiciona a classe apenas no card atual
        cards[currentIndex].classList.add('active');
        const activeLabel = cards[currentIndex].querySelector('.project-label');
        if(activeLabel) activeLabel.classList.add('solid');
    }

    // Botão Próximo
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    });

    // Botão Anterior
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel();
    });
});