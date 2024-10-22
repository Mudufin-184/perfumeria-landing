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
  