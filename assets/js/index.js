// index.js
document.addEventListener('DOMContentLoaded', function() {
    // Carrega componentes
    loadComponents();
    
    // Inicializa componentes do Bootstrap
    initializeBootstrapComponents();
});

// Função para carregar todos os componentes
async function loadComponents() {
    try {
        await Promise.all([
            loadComponent('components/indexHeader.html', 'header-container'),
            loadComponent('components/indexNav.html', 'nav-container'),
            loadComponent('components/indexFooter.html', 'footer-container')
        ]);
        
        // Depois que os componentes são carregados, inicializa o login
        initializeLoginModal();
    } catch (error) {
        console.error('Erro ao carregar componentes:', error);
    }
}

// Função para carregar um componente individual
async function loadComponent(url, targetId) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const html = await response.text();
        document.getElementById(targetId).innerHTML = html;
    } catch (error) {
        console.error(`Erro ao carregar ${url}:`, error);
        document.getElementById(targetId).innerHTML = '<p>Erro ao carregar o componente</p>';
    }
}

// Inicialização dos componentes Bootstrap
function initializeBootstrapComponents() {
    // Inicializa carrosséis
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        new bootstrap.Carousel(carousel, {
            interval: 5000,
            wrap: true,
            pause: 'hover'
        });
    });

    // Inicializa tooltips
    const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltips.forEach(tooltip => new bootstrap.Tooltip(tooltip));

    // Inicializa modais
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => new bootstrap.Modal(modal));
}

// Função para validar email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Função para mostrar alertas
function showAlert(type, message) {
    const alertContainer = document.getElementById('alert-container');
    if (!alertContainer) return;

    const alert = document.createElement('div');
    alert.className = `alert alert-${type} alert-dismissible fade show`;
    alert.innerHTML = `
        <i class="bi bi-${type === 'success' ? 'check-circle' : 'exclamation-triangle'} me-2"></i>
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

    alertContainer.innerHTML = '';
    alertContainer.appendChild(alert);

    setTimeout(() => {
        alert.classList.add('fade');
        setTimeout(() => alert.remove(), 300);
    }, 4000);
}

// Inicialização e validação do Modal de Login
function initializeLoginModal() {
    const form = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    if (!form || !emailInput || !passwordInput) return;

    // Validação em tempo real do email
    emailInput.addEventListener('input', function() {
        if (this.value && !validateEmail(this.value)) {
            this.classList.add('is-invalid');
            this.classList.remove('is-valid');
        } else if (this.value) {
            this.classList.add('is-valid');
            this.classList.remove('is-invalid');
        } else {
            this.classList.remove('is-valid', 'is-invalid');
        }
    });

    // Validação em tempo real da senha
    passwordInput.addEventListener('input', function() {
        if (this.value && this.value.length < 6) {
            this.classList.add('is-invalid');
            this.classList.remove('is-valid');
        } else if (this.value) {
            this.classList.add('is-valid');
            this.classList.remove('is-invalid');
        } else {
            this.classList.remove('is-valid', 'is-invalid');
        }
    });

    // Validação no envio do formulário
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        
        const email = emailInput.value;
        const password = passwordInput.value;
        let isValid = true;

        // Validação do email
        if (!email) {
            showAlert('danger', 'Por favor, preencha o campo de email.');
            emailInput.classList.add('is-invalid');
            isValid = false;
        } else if (!validateEmail(email)) {
            showAlert('danger', 'Por favor, insira um email válido.');
            emailInput.classList.add('is-invalid');
            isValid = false;
        }

        // Validação da senha
        if (!password) {
            showAlert('danger', 'Por favor, preencha o campo de senha.');
            passwordInput.classList.add('is-invalid');
            isValid = false;
        } else if (password.length < 6) {
            showAlert('danger', 'A senha deve ter pelo menos 6 caracteres.');
            passwordInput.classList.add('is-invalid');
            isValid = false;
        }

        form.classList.add('was-validated');

        if (isValid) {
            // Se a validação passar, redireciona para a página de login
            window.location.href = 'Login.html';
        }
    });

    // Limpar validação quando o modal é fechado
    const loginModal = document.getElementById('loginModal');
    if (loginModal) {
        loginModal.addEventListener('hidden.bs.modal', function() {
            form.classList.remove('was-validated');
            emailInput.classList.remove('is-valid', 'is-invalid');
            passwordInput.classList.remove('is-valid', 'is-invalid');
            form.reset();
            const alertContainer = document.getElementById('alert-container');
            if (alertContainer) alertContainer.innerHTML = '';
        });
    }
}