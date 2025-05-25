// Inicializa o EmailJS com seu User ID
(function() {
    // Substitua 'YOUR_USER_ID' pelo seu User ID do EmailJS quando você criar a conta
    emailjs.init('tQ9xr0eJ2fQt27RB2');
})();

// Função para validar o formulário
function validateForm() {
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    
    // Validação básica
    if (!name || !email || !message) {
        showNotification('Por favor, preencha todos os campos.', 'error');
        return false;
    }
    
    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Por favor, insira um email válido.', 'error');
        return false;
    }
    
    return true;
}

// Função para mostrar notificações
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Adiciona a notificação ao DOM
    document.body.appendChild(notification);
    
    // Anima a notificação
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Remove a notificação após 5 segundos
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Função para lidar com o envio do formulário
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Valida o formulário
    if (!validateForm()) {
        return;
    }
    
    // Mostra indicador de carregamento
    const submitButton = document.getElementById('submit-button');
    const originalButtonText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.innerHTML = '<span class="loading-spinner"></span> Enviando...';
    
    // Prepara os parâmetros para o EmailJS
    const templateParams = {
        from_name: document.getElementById('contact-name').value,
        from_email: document.getElementById('contact-email').value,
        message: document.getElementById('contact-message').value,
        to_email: 'ruandallarosa@gmail.com'
    };
    
    // Envia o email usando EmailJS
    // Substitua 'YOUR_SERVICE_ID' e 'YOUR_TEMPLATE_ID' pelos IDs que você obterá ao configurar o EmailJS
    emailjs.send('service_0npqrrt', 'template_fvkhasg', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
            
            // Limpa o formulário
            document.getElementById('contact-form').reset();
        }, function(error) {
            console.log('FAILED...', error);
            showNotification('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.', 'error');
        })
        .finally(function() {
            // Restaura o botão
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        });
}

// Adiciona o event listener quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});