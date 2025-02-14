




const scrollTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
   
  const totalHeight = document.documentElement.scrollHeight;
  const viewportHeight = window.innerHeight;

  const showButtonAt = totalHeight * 0.25;

  if (window.scrollY > showButtonAt) {
      scrollTopButton.style.display = 'block';  
  } else {
      scrollTopButton.style.display = 'none';   
  }
});


scrollTopButton.addEventListener('click', () => {
  window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' 
      
  });
});