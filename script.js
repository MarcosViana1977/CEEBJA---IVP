// --- INTELIGÊNCIA E INTERATIVIDADE DA PÁGINA ---

// 1. Lógica do Relógio de Funcionamento (Abre às 13:00 e fecha às 22:00)
function verificarStatusEscola() {
    const agora = new Date();
    const horaAtual = agora.getHours();
    const diaSemana = agora.getDay(); // 0 = Domingo, 6 = Sábado

    const statusTag = document.getElementById('status-tag');
    const statusTexto = document.getElementById('status-texto');

    // Fim de semana (Sábado ou Domingo)
    if (diaSemana === 0 || diaSemana === 6) {
        statusTag.textContent = "Fechado";
        statusTag.className = "status-badge";
        statusTexto.textContent = "A escola funciona de segunda a sexta-feira. Abre na segunda às 13:00.";
    } 
    // Dias úteis de funcionamento
    else {
        if (horaAtual >= 13 && horaAtual < 22) {
            statusTag.textContent = "Aberto Agora";
            statusTag.className = "status-badge aberto";
            statusTexto.textContent = "Venha nos visitar! Fechamos hoje às 22:00.";
        } else {
            statusTag.textContent = "Fechado";
            statusTag.className = "status-badge";
            if (horaAtual < 13) {
                statusTexto.textContent = "Ainda estamos fechados. Abriremos hoje às 13:00.";
            } else {
                statusTexto.textContent = "Encerramos o expediente por hoje. Abriremos amanhã às 13:00.";
            }
        }
    }
}

// Executa a função assim que o site carrega
verificarStatusEscola();


// 2. Interatividade do Formulário de Contato (Simulação de Envio)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que a página dê "refresh" ao enviar
    
    const nome = document.getElementById('nome').value;
    const feedback = document.getElementById('formFeedback');

    // Mostra o aviso de sucesso na tela
    feedback.style.display = 'block';
    feedback.innerHTML = `Obrigado pelo interesse, ${nome}! Entraremos em contato em breve.`;
    
    // Reseta os campos do formulário
    document.getElementById('contactForm').reset();

    // Faz o aviso sumir após 5 segundos automaticamente
    setTimeout(() => {
        feedback.style.display = 'none';
    }, 5000);
});
