

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



document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  const dropdownMenu = document.querySelector(".dropdown_menu");

  dropdown.addEventListener("click", function (event) {
      event.stopPropagation();
      dropdownMenu.classList.toggle("open");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function () {
      dropdownMenu.classList.remove("open");
  });
});






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

const subscribedEmails = new Set(); // Set to store unique emails

document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault();  

    const emailInput = document.getElementById('emailInput').value.trim();  
    const notification = document.getElementById('subscribeNotification');

    if (emailInput) {
        if (subscribedEmails.has(emailInput)) {
            
            // If the email already exists in the Set
            notification.textContent = `You are already subscribed with the email: ${emailInput}.`;
            notification.style.color = '#B80000';
            notification.style.fontWeight = 'bold';
        } else {
            // If it's a new email, add it to the Set
            subscribedEmails.add(emailInput);
            notification.textContent = `Thank you for subscribing! A confirmation email has been sent to ${emailInput}.`;
            notification.style.color = 'green';
            notification.style.fontWeight = 'bold';
        }
    } else {
        notification.textContent = 'Please enter a valid email address.';
        notification.style.color = 'red';
    }

    // Clear the input field after submission
    document.getElementById('subscribeForm').reset();

    setTimeout(() => {
        notification.textContent = '';  
    }, 10000);


});