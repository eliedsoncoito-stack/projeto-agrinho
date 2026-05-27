// Efeito simples de confetes quando carregar a página
window.addEventListener('load', () => {
    console.log("%cBem-vindo ao site do Yuri 22! 🐐", "color: #ff00ff; font-size: 20px;");
    
    // Animação no botão
    const button = document.querySelector('button');
    if (button) {
        button.addEventListener('click', () => {
            button.textContent = "Goti na área!!! 🐐🔥";
            setTimeout(() => {
                button.textContent = "Entrar na Live";
            }, 3000);
        });
    }
});