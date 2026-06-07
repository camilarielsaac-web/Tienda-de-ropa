const imgs = document.querySelectorAll('.c1 img');
imgs.forEach(img => {
  img.addEventListener('mousemove', function(e) {
    const rect = img.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    img.style.transformOrigin = `${x}% ${y}%`;
    img.style.transform = 'scale(2)'; 
  });
  img.addEventListener('mouseleave', function() {
    img.style.transformOrigin = 'center center';
    img.style.transform = 'scale(1)';
  });
});
