// Fade in product cards on scroll
const productCards = document.querySelectorAll('.product-card');
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.9;
  productCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < triggerBottom){
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }
  });
});
