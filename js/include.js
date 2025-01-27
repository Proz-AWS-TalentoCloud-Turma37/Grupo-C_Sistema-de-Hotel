document.addEventListener('DOMContentLoaded', function() {
    async function loadComponent(containerId, componentPath) {
        try {
            const response = await fetch(componentPath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const content = await response.text();
            document.getElementById(containerId).innerHTML = content;
        } catch (error) {
            console.error('Erro ao carregar componente:', error);
            document.getElementById(containerId).innerHTML = 
                `<div class="alert alert-danger">Erro ao carregar componente</div>`;
        }
    }

    // Carrega os componentes
    loadComponent('header-container', '/components/header.html');
    loadComponent('nav-container', '/components/nav.html');
    loadComponent('footer-container', '/components/footer.html');
});