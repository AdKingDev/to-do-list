// Inicializa o ScrollReveal com a opção de resetar as animações ao rolar a página
window.revelar = ScrollReveal({reset:true});

/* Animação
 * Duração: 2000ms
 * Distância: 90px
 * Origem: Topo
*/

revelar.reveal('.efeito-text', {
    duration: 2000,
    distance: '90px',
    origin: 'top',
});

revelar.reveal('.efeito-tasks', {
    duration: 3000,
    distance: '1500px',
    delay: 500,
    origin: 'left',
});

revelar.reveal('.content--body', {
    duration: 3000,
    distance: '1500px',
    delay: 500,
    origin: 'bottom',
})