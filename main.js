

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.querySelector("i");

if (menuBtn && navLinks && menuBtnIcon) {
  menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  });

  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });
}



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

    localStorage.setItem("emailEntered", emailInput);

    const storedEmail = localStorage.getItem("emailEntered", emailInput);

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
  duration: 650,
};

ScrollReveal().reveal(".ri-heart-3-line", {
  ...scrollRevealOption,
  delay: 400,
});

 
ScrollReveal().reveal(".ri-book-open-fill", {
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
        'autoplay': 1,       
        'controls': 1,      
        'rel': 0,         
        'modestbranding': 1, 
        'showinfo': 0,      
        'loop': 1,         
        'playlist': 'TsKbOUadw7g', 
        'mute': 1,           
        'start': 0,        
        'end': 120,         
        'playsinline': 1,   
        'fs': 0,           
        'cc_load_policy': 1, 
        'iv_load_policy': 3, 
        'disablekb': 1      
      }
    });
  }


document.getElementById("downloadBtn").addEventListener("click", async () => {
  console.log("downloadBtn clicked");
  try {
    const response = await fetch("downloads/King-James-Version.pdf");
    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "King-James-Version.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
} catch (error) {
    console.error("Download failed:", error);
}
});


let uri = process.env.APIKEY
const API_KEY = 'APIKEY'; 
const PLAYLIST_ID = 'PLVlQHNRLflP8-lDPOcKw-SvGqQ61PQ-SP';  
let nextPageToken = '';

function loadVideos() {
  $.get(`https://www.googleapis.com/youtube/v3/playlistItems`, {
    part: 'snippet',
    maxResults: 5, 
    playlistId: PLAYLIST_ID,
    key: API_KEY,
    pageToken: nextPageToken
  }, function(data) {
    nextPageToken = data.nextPageToken || ''; 

    data.items.forEach(item => {
      const videoId = item.snippet.resourceId.videoId;
      const videoTitle = item.snippet.title;
      const videoThumb = item.snippet.thumbnails.medium.url;
  
      $('#videoContainer').append(`
          <div class="video">
              <iframe width="560" height="315" 
                  src="https://www.youtube.com/embed/${videoId}" 
                  frameborder="0" allowfullscreen>
              </iframe>
              <p>${videoTitle}</p>
          </div>
      `);
  });
  

    if (!nextPageToken) {
      $('#loadMore').hide(); 
    }
  });
}

// Load initial videos
$(document).ready(loadVideos);

// Load more videos on button click
$('#loadMore').click(loadVideos);




data.items.forEach(item => {
  const videoId = item.snippet.resourceId.videoId;
  console.log("Video ID:", videoId); // Debugging

  $('#videoContainer').append(`
    <div class="video">
      <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">
        <img src="${item.snippet.thumbnails.medium.url}" alt="${item.snippet.title}">
        <p>${item.snippet.title}</p>
      </a>
    </div>
  `);
});
