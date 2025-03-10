

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

document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("searchBar");
    let searchTimeout; // Variable to store the timeout ID

    searchBar.addEventListener("input", function () {
        clearTimeout(searchTimeout); // Clear any previous timeout
        
        searchTimeout = setTimeout(() => {
            const searchTerm = searchBar.value.trim().toLowerCase();
            const contentElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, li, span:not(.ignore-search), div:not(.ignore-search)");

            contentElements.forEach(element => {
            // Skip links
              if (element.closest("a")) return;
                element.normalize(); // Fix broken text nodes
                
                if (!element.hasAttribute("data-original")) {
                    element.setAttribute("data-original", element.innerHTML);
                }

                let originalContent = element.getAttribute("data-original");

                if (searchTerm === "") {
                    element.innerHTML = originalContent; // Restore original text
                    return;
                }

                // Create a safe regex without breaking structure
                const regex = new RegExp(`(${searchTerm})`, "gi");
                const newText = originalContent.replace(regex, `<mark class="highlight">$1</mark>`);
                element.innerHTML = newText;
            });

        }, 1500); // 4 seconds delay
    });
});

const scrollRevealOption = {
    distance: "30px",
    origin: "top",
    duration:650,
};

const sr = ScrollReveal();

// Apply the reveal effect
sr.reveal(".member", {
    ...scrollRevealOption,
    delay: 400,
});


// feature container
ScrollReveal().reveal(".feature__card", {
    ...scrollRevealOption,
    interval: 400,
  });


  //youtube api

  function onYouTubeIframeAPIReady() {
    new YT.Player('player', {
      height: '315',
      width: '560',
      videoId: 'TsKbOUadw7g',
      playerVars: {
        'autoplay': 1,       // 1 = Auto-play the video, 0 = Don't autoplay
        'controls': 1,       // 1 = Show controls, 0 = Hide controls
        'rel': 0,            // 0 = No related videos at the end, 1 = Show related videos
        'modestbranding': 1, // 1 = Hide YouTube logo
        'showinfo': 0,       // 0 = Hide video title and uploader info
        'loop': 1,           // 1 = Loop the video (requires playlist param)
        'playlist': 'TsKbOUadw7g', // Needed for looping a single video
        'mute': 1,           // 1 = Start muted, 0 = Start with sound
        'start': 0,         // Start at 30 seconds into the video
        'end': 120,          // Stop at 120 seconds (2 minutes)
        'playsinline': 1,    // 1 = Play in the inline player on mobile instead of fullscreen
        'fs': 0,             // 0 = Disable fullscreen button, 1 = Allow fullscreen
        'cc_load_policy': 1, // 1 = Force captions on (if available)
        'iv_load_policy': 3, // 3 = Hide annotations
        'disablekb': 1       // 1 = Disable keyboard controls
      }
    });
  }


document.getElementById("downloadBtn").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "downloads/King-James-Version.pdf"; // Make sure the path is correct
    link.download = "King-James-Version.pdf"; // Set the download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
