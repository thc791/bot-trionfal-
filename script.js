document.addEventListener('DOMContentLoaded', () => {

    // Il nostro "database" di domande e risposte
    const faqs = {
        'orari': {
            answer: `
                <p>È un vero piacere aiutarti! Ecco i nostri orari:</p>
                <ul>
                    <li><strong>Spesa Mattutina:</strong><br>Dal Lunedì al Sabato, dalle 07:00 alle 14:00.</li>
                    <br>
                    <li><strong>Apertura Serale (Street Food & Ristorazione):</strong><br>Giovedì, Venerdì e Sabato, dalle 18:00 alle 23:00.</li>
                </ul>
                <p>Vieni a gustare tantissime cucine diverse: sushi, thailandese, arrosticini e molto altro!</p>
            `
        },
        'parcheggio': {
            answer: `
                <p>Certo! L'ingresso del parcheggio convenzionato si trova in <strong>Via Tunisi, 52, 00192 Roma</strong>.</p>
                <p>Puoi trovare maggiori informazioni e tariffe a questo link: <a href="https://www.bestinparking.com/it/it/garage/parcheggio-mercato-trionfale-musei-vaticani" target="_blank" rel="noopener noreferrer">Dettagli Parcheggio Best in Parking</a>.</p>
            `
        },
        'affitto_vendita': {
            answer: `
                <p>È un piacere! Per qualsiasi informazione commerciale riguardo l'affitto o la vendita di spazi, ti invitiamo a contattare direttamente il responsabile al numero:</p>
                <p><strong><a href="tel:3921239242">392 123 9242</a></strong></p>
            `
        },
        'festivi': {
            answer: `
                <p>Generalmente siamo chiusi nei giorni festivi.</p>
                <p>Tuttavia, per aperture straordinarie ti consigliamo di controllare sempre gli avvisi sulla <strong>home page</strong> del nostro sito ufficiale.</p>
            `
        },
        'consegne': {
            answer: `
                <p>Certo! Molti dei nostri operatori offrono un servizio di consegna a domicilio.</p>
                <p>Poiché ogni banco gestisce le consegne in modo autonomo, ti consigliamo di visitare la sezione 'I Banchi' del nostro sito per trovare i contatti e accordarti direttamente con loro.</p>
            `
        }
    };

    // Selezioniamo gli elementi dall'HTML
    const chatOpenBtn = document.getElementById('chat-open-btn');
    const chatWidget = document.getElementById('chat-widget-container');
    const chatCloseBtn = document.getElementById('chat-close-btn');
    const questionsView = document.getElementById('questions-view');
    const answerView = document.getElementById('answer-view');
    const answerContent = document.querySelector('.answer-content');
    const backBtn = document.querySelector('.back-btn');
    const questionButtons = document.querySelectorAll('.question-btn');

    // Funzione per mostrare/nascondere la finestra del chat
    function toggleChatWidget() {
        chatWidget.classList.toggle('hidden');
        // Se stiamo aprendo la finestra, nascondiamo il pulsante di apertura e viceversa
        chatOpenBtn.classList.toggle('hidden'); 
    }
    
    chatOpenBtn.addEventListener('click', toggleChatWidget);
    chatCloseBtn.addEventListener('click', toggleChatWidget);


    // Gestiamo il click sui pulsanti delle domande
    questionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const questionId = button.dataset.id;
            const faqData = faqs[questionId];

            if (faqData) {
                answerContent.innerHTML = faqData.answer;
                questionsView.classList.add('hidden');
                answerView.classList.remove('hidden');
            }
        });
    });

    // Gestiamo il click sul pulsante "Indietro"
    backBtn.addEventListener('click', () => {
        questionsView.classList.remove('hidden');
        answerView.classList.add('hidden');
    });
});
