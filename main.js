import './style.css';

// Initialize particles.js
document.addEventListener('DOMContentLoaded', () => {
  particlesJS('particles-js', {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#ffffff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000'
        },
        polygon: {
          nb_sides: 5
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });
});

// Navigation
const navLinks = document.querySelectorAll('.nav-links a');
const pages = document.querySelectorAll('.page');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Remove active class from all links and pages
    navLinks.forEach(link => link.classList.remove('active'));
    pages.forEach(page => page.classList.remove('active'));
    
    // Add active class to clicked link
    link.classList.add('active');
    
    // Show corresponding page
    const pageName = link.getAttribute('data-page');
    document.getElementById(pageName).classList.add('active');
    
    // If home page is active, animate welcome text
    if (pageName === 'home') {
      animateWelcomeText();
    }
  });
});

// Welcome page text animation
function animateWelcomeText() {
  const welcomeText = document.getElementById('welcome-text');
  const nameText = document.getElementById('name-text');
  const roleText = document.getElementById('role-text');
  
  // Reset text content and styles
  welcomeText.textContent = 'Welcome! 👋';
  nameText.textContent = 'My name is Luis';
  roleText.textContent = "I'm a software engineer";
  
  welcomeText.style.opacity = '0';
  nameText.style.opacity = '0';
  roleText.style.opacity = '0';
  
  welcomeText.style.transform = 'translateY(20px)';
  nameText.style.transform = 'translateY(20px)';
  roleText.style.transform = 'translateY(20px)';
  
  // Animate welcome text
  setTimeout(() => {
    welcomeText.style.transition = 'opacity 1s, transform 1s';
    welcomeText.style.opacity = '1';
    welcomeText.style.transform = 'translateY(0)';
    
    // Animate name text
    setTimeout(() => {
      nameText.style.transition = 'opacity 1s, transform 1s';
      nameText.style.opacity = '1';
      nameText.style.transform = 'translateY(0)';
      
      // Animate role text
      setTimeout(() => {
        roleText.style.transition = 'opacity 1s, transform 1s';
        roleText.style.opacity = '1';
        roleText.style.transform = 'translateY(0)';
      }, 1000);
    }, 1000);
  }, 500);
}

// Contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', { name, email, message });
    
    // Show success message (in a real app, you'd wait for server response)
    alert('Message sent successfully!');
    
    // Reset form
    contactForm.reset();
  });
}

// Initialize the page
function init() {
  // Show home page by default
  document.getElementById('home').classList.add('active');
  document.querySelector('[data-page="home"]').classList.add('active');
  
  // Animate welcome text on initial load
  animateWelcomeText();
}

// Run initialization
init();