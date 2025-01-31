document.addEventListener('DOMContentLoaded', function() {
    // Carrega o cabeçalho
    fetch("components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
        })
        .catch(error => console.error("Erro ao carregar o cabeçalho:", error));

    // Carrega o menu de navegação
    fetch("components/nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav-container").innerHTML = data;
        })
        .catch(error => console.error("Erro ao carregar o menu:", error));

    // Carrega o rodapé
    fetch("components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        })
        .catch(error => console.error("Erro ao carregar o rodapé:", error));

    // Carrega o FAQ (se necessário nesta página)
    if (document.getElementById('faqAccordion')) {
        fetch('../faq.php')
            .then(response => response.json())
            .then(data => {
                const faqContainer = document.getElementById('faqAccordion');
                data.forEach(item => {
                    const faqItem = `
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq${item.id}">
                                    ${item.pergunta}
                                </button>
                            </h2>
                            <div id="faq${item.id}" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
                                    ${item.resposta}
                                </div>
                            </div>
                        </div>
                    `;
                    faqContainer.innerHTML += faqItem;
                });
            })
            .catch(error => console.error('Erro ao carregar FAQ:', error));
    }
});