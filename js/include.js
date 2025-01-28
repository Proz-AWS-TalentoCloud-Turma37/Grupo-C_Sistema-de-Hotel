document.addEventListener('DOMContentLoaded', function() {
    // Constante para armazenar o caminho base
    const BASE_PATH = '/SistemadeHotel';

    // Função para carregar os componentes
    async function loadComponent(containerId, componentPath) {
        try {
            const fullPath = `${BASE_PATH}/components/${componentPath}`;
            console.log('Carregando componente:', fullPath);
            
            const response = await fetch(fullPath);
            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }
            
            const content = await response.text();
            const container = document.getElementById(containerId);
            
            if (!container) {
                throw new Error(`Container ${containerId} não encontrado`);
            }
            
            container.innerHTML = content;
            console.log(`Componente ${componentPath} carregado com sucesso`);
            
        } catch (error) {
            console.error('Erro ao carregar componente:', error.message);
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = `
                    <div class="alert alert-danger">
                        Erro ao carregar componente: ${error.message}
                    </div>`;
            }
        }
    }

    // Carregar todos os componentes
    Promise.all([
        loadComponent('header-container', 'header.html'),
        loadComponent('nav-container', 'nav.html'),
        loadComponent('footer-container', 'footer.html')
    ]).then(() => {
        console.log('Todos os componentes foram carregados');
    }).catch(error => {
        console.error('Erro ao carregar componentes:', error);
    });
});