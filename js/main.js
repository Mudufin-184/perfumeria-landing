// js/main.js
document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
  
    function showItem(index) {
      items.forEach((item, i) => {
        item.style.display = i === index ? 'block' : 'none';
      });
    }
  
    function nextItem() {
      currentIndex = (currentIndex + 1) % totalItems;
      showItem(currentIndex);
    }
  
    setInterval(nextItem, 3000); // Cambia cada 3 segundos
  
    showItem(currentIndex); // Mostrar primer elemento
  });

  
  document.getElementById('mobile-menu').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
});
document.getElementById('fragranceForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const gender = document.getElementById('gender').value;
  const type = document.getElementById('type').value;
  const recommendationElement = document.getElementById('recommendation');
  
  const fragrances = [
    { name: 'Can Can', gender: 'mujer', type: 'floral' },
    { name: 'Amor Amor', gender: 'mujer', type: 'frutal' },
    { name: 'Mon Paris', gender: 'mujer', type: 'frutal' },
    { name: 'Insolence', gender: 'mujer', type: 'floral' },
    { name: 'Be Delicious', gender: 'mujer', type: 'fresca' },
    { name: 'Love Me Tous', gender: 'mujer', type: 'floral' },
    { name: 'Viva la Juicy', gender: 'mujer', type: 'frutal' },
    { name: 'To Be Woman EDP', gender: 'mujer', type: 'amaderada' },
    { name: 'Daisy Eau So Fresh', gender: 'mujer', type: 'floral' },
    { name: 'Bloom', gender: 'mujer', type: 'floral' },
    { name: 'Flowerbomb', gender: 'mujer', type: 'floral' },
    { name: 'Aventus', gender: 'hombre', type: 'amaderada' },
    { name: 'Bleu de Chanel', gender: 'hombre', type: 'fresca' },
    { name: 'Dior Sauvage', gender: 'hombre', type: 'cítrica' },
    { name: 'Terre d’Hermès', gender: 'hombre', type: 'amaderada' },
    { name: 'Acqua di Giò', gender: 'hombre', type: 'fresca' },
    { name: '1 Million', gender: 'hombre', type: 'frutal' },
    { name: 'Eros', gender: 'hombre', type: 'floral' },
    { name: 'L’Homme', gender: 'hombre', type: 'amaderada' },
  ];
  
  let recommendedFragrance = '';

  if (gender && type) {
    const result = fragrances.find(f => f.gender === gender && f.type === type);
    recommendedFragrance = result ? `Te recomendamos: ${result.name}` : 'No se encontraron coincidencias para la selección realizada.';
  } else {
    recommendedFragrance = 'Por favor selecciona tanto género como tipo de fragancia.';
  }

  recommendationElement.textContent = recommendedFragrance;
});
