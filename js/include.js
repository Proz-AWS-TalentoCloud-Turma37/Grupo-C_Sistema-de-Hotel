document.addEventListener('DOMContentLoaded', function() {
    // Função para carregar componentes
    async function loadComponent(containerId, componentPath) {
        try {
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

    // Carrega os componentes
    loadComponent('header-container', './components/header.html');
    loadComponent('nav-container', './components/nav.html');
    loadComponent('footer-container', './components/footer.html');

    // Inicializa funcionalidades do formulário de cadastro se estiver na página de cadastro
    if (document.getElementById('cadastroForm')) {
        const form = document.querySelector('#cadastroForm');
        const successModal = new bootstrap.Modal(document.getElementById('successModal'));
        
        form.addEventListener('submit', event => {
            event.preventDefault();
            event.stopPropagation();
            
            if (form.checkValidity()) {
                // Coletar dados do formulário
                const firstName = document.getElementById('firstName').value;
                const lastName = document.getElementById('lastName').value;
                const username = document.getElementById('username').value;
                const city = document.getElementById('city').value;
                const state = document.getElementById('state');
                const stateValue = state.options[state.selectedIndex].text;
                const zip = document.getElementById('zip').value;

                // Preencher o modal com os dados
                document.getElementById('modalNome').textContent = `${firstName} ${lastName}`;
                document.getElementById('modalUsuario').textContent = `@${username}`;
                document.getElementById('modalCidade').textContent = city;
                document.getElementById('modalEstado').textContent = stateValue;
                document.getElementById('modalCEP').textContent = zip;

                // Mostrar o modal
                successModal.show();
                
                // Resetar o formulário
                form.reset();
                form.classList.remove('was-validated');
            }
            
            form.classList.add('was-validated');
        });

        // Máscara para CEP
        const zipInput = document.getElementById('zip');
        zipInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 8) value = value.slice(0, 8);
            if (value.length > 5) {
                value = value.slice(0, 5) + '-' + value.slice(5);
            }
            e.target.value = value;
        });
    }
});