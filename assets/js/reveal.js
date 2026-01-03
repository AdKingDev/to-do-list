window.revelar = ScrollReveal({reset:true});

// Animação para o título
revelar.reveal('.efeito-text', {
    duration: 2000,
    distance: '90px',
    origin: 'top',
});

// Animação para as tasks
revelar.reveal('.efeito-tasks', {
    duration: 3000,
    distance: '1500px',
    delay: 500,
    origin: 'left',
});