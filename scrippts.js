document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.animacion-scroll .info-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});

//preguntas frecuentes 
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

document.querySelectorAll('.sub-question').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.sub-answer').forEach(answer => {
            answer.classList.remove('active');
        });

        const target = button.getAttribute('data-target');
        document.getElementById(target).classList.add('active');
    });
});
