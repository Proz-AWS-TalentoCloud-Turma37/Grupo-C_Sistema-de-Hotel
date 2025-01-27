document.addEventListener('DOMContentLoaded', function() {
    async function loadComponent(containerId, componentPath) {
        try {
            // Log para debug
            console.log(`Tentando carregar: ${componentPath}`);
            
            const response = await fetch(componentPath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const content = await response.text();
            
            const container = document.getElementById(containerId);
            if (!container) {
                throw new Error(`Container ${containerId} não encontrado`);
            }
            
            container.innerHTML = content;
            console.log(`Componente ${componentPath} carregado com sucesso`);
            
        } catch (error) {
            console.error('Erro ao carregar componente:', error);
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = `<div class="alert alert-danger">Erro ao carregar componente: ${componentPath}</div>`;
            }
        }
    }

    // Carregar componentes com caminho relativo
    loadComponent('header-container', './components/header.html');
    loadComponent('nav-container', './components/nav.html');
    loadComponent('footer-container', './components/footer.html');
});