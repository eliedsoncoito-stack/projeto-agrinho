// script.js - Cidadania Digital 2026

document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');
    
    const questions = [
        {
            question: "O que é um Deepfake?",
            options: [
                "Uma imagem editada manualmente no Photoshop",
                "Um vídeo ou áudio criado por Inteligência Artificial que parece real",
                "Uma notícia falsa escrita por jornalistas",
                "Um vírus de computador"
            ],
            correct: 1
        },
        {
            question: "Qual é um dos principais perigos dos deepfakes?",
            options: [
                "Melhorar a qualidade de vídeos antigos",
                "Manipulação de eleições e difamação de pessoas",
                "Aumentar a velocidade da internet",
                "Criar novos filtros para redes sociais"
            ],
            correct: 1
        },
        {
            question: "Qual das seguintes é uma boa prática para evitar desinformação?",
            options: [
                "Compartilhar imediatamente notícias impactantes",
                "Verificar a fonte e checar se outros veículos confiáveis publicaram",
                "Acreditar em tudo que seus amigos enviam",
                "Só ler títulos das notícias"
            ],
            correct: 1
        },
        {
            question: "O que você deve observar para identificar um possível deepfake?",
            options: [
                "Se a pessoa está sorrindo",
                "Movimentos estranhos dos olhos, piscadas irregulares e sincronia dos lábios",
                "A qualidade da imagem",
                "A roupa que a pessoa está usando"
            ],
            correct: 1
        },
        {
            question: "Por que as deepfakes são perigosas para a democracia?",
            options: [
                "Porque elas são muito bonitas",
                "Porque podem fazer as pessoas não acreditarem mais em nada que veem",
                "Porque aumentam o preço das eleições",
                "Porque são ilegais"
            ],
            correct: 1
        }
    ];

    let currentQuestion = 0;
    let score = 0;

    function loadQuestion() {
        const q = questions[currentQuestion];
        
        let html = `
            <h3 style="margin-bottom: 25px; color: #ff00ff;">Pergunta ${currentQuestion + 1} de ${questions.length}</h3>
            <p style="font-size: 1.3rem; margin-bottom: 30px;">${q.question}</p>
            <div style="display: flex; flex-direction: column; gap: 12px;">
        `;

        q.options.forEach((option, index) => {
            html += `
                <button onclick="selectAnswer(${index})" 
                        style="padding: 15px; font-size: 1.1rem; background: rgba(255,0,255,0.1); 
                               border: 2px solid #ff00ff; border-radius: 10px; cursor: pointer;
                               transition: all 0.3s;">
                    ${option}
                </button>
            `;
        });

        html += `</div>`;
        quizContainer.innerHTML = html;
    }

    // Função global para o onclick
    window.selectAnswer = function(selectedIndex) {
        const q = questions[currentQuestion];
        
        if (selectedIndex === q.correct) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        const percentage = Math.round((score / questions.length) * 100);
        
        let message = "";
        if (percentage >= 80) message = "🎉 Excelente! Você está bem preparado!";
        else if (percentage >= 60) message = "👏 Bom trabalho! Continue aprendendo.";
        else message = "⚠️ Recomendamos estudar mais sobre o tema.";

        quizContainer.innerHTML = `
            <div style="text-align: center;">
                <h2 style="color: #00ffff; margin-bottom: 20px;">Quiz Finalizado!</h2>
                <h3>Você acertou ${score} de ${questions.length} perguntas</h3>
                <p style="font-size: 2.5rem; margin: 20px 0;">${percentage}%</p>
                <p style="font-size: 1.3rem; margin: 25px 0;">${message}</p>
                <button onclick="restartQuiz()" 
                        style="padding: 14px 40px; font-size: 1.2rem; background: #ff00ff; 
                               color: white; border: none; border-radius: 50px; cursor: pointer;">
                    Fazer Quiz Novamente
                </button>
            </div>
        `;
    }

    window.restartQuiz = function() {
        currentQuestion = 0;
        score = 0;
        loadQuestion();
    }

    // Iniciar o quiz
    loadQuestion();
});
