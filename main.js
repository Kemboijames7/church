

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
});
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
 menuBtnIcon.setAttribute("class", "ri-menu-line");

})









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