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
  
  cleanupFooter();
});

// Navigation with footer visibility control
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
    
    // Toggle contact footer visibility based on current page
    const contactFooter = document.getElementById('contact-footer');
    if (pageName === 'contact') {
      contactFooter.style.display = 'flex';
    } else {
      contactFooter.style.display = 'none';
    }
    
    // If home page is active, animate welcome text
    if (pageName === 'home') {
      animateWelcomeText();
    }
  });
});

// Define roles for typewriter effect and ensure container is sized for longest word
const roles = ["software engineer", "tech enthusiast", "student"];

// Improved welcome text function with working typewriter
function animateWelcomeText() {
  const welcomeText = document.getElementById('welcome-text');
  const nameText = document.getElementById('name-text');
  const roleText = document.getElementById('role-text');
  
  // Set text content directly
  welcomeText.textContent = 'Welcome! 👋';
  nameText.textContent = 'My name is Luis';
  
  // Debug output
  console.log('Setting up typewriter effect');
  
  // Setup typewriter container with proper visibility
  const longestRole = "software engineer     "; // Added extra spaces for safety
  const containerWidthNeeded = (("I'm a").length + longestRole.length) * 14;
  
  // Set up typewriter container
  roleText.innerHTML = `
    <div class="typewriter-container" style="min-width: ${containerWidthNeeded}px;">
      <span class="static-text">I'm a</span>
      <span class="dynamic-text"></span><span class="cursor"></span>
    </div>
  `;
  
  // Ensure the container is visible by forcing visibility with inline styles
  roleText.style.opacity = '1';
  roleText.style.visibility = 'visible';
  
  // Start typewriter animation with a small delay to ensure DOM is ready
  setTimeout(() => {
    console.log('Starting typewriter effect');
    startTypewriterEffect();
  }, 100);
}

// Modified typewriter implementation with debug logging
function startTypewriterEffect() {
  const dynamicText = document.querySelector('.dynamic-text');
  
  // Check if we found the element
  if (!dynamicText) {
    console.error('Dynamic text element not found');
    return;
  }
  
  console.log('Dynamic text element found:', dynamicText);
  
  let currentRoleIndex = 0;
  let isDeleting = false;
  let charIndex = 0;
  
  function type() {
    const currentRole = roles[currentRoleIndex];
    console.log('Typing:', currentRole, 'at index:', charIndex, 'deleting:', isDeleting);
    
    if (isDeleting) {
      charIndex--;
      dynamicText.textContent = currentRole.substring(0, charIndex);
    } else {
      dynamicText.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }
    
    // Typing speed
    const typingSpeed = isDeleting ? 30 : 70;
    
    // If finished typing the current role
    if (!isDeleting && charIndex === currentRole.length) {
      setTimeout(() => {
        isDeleting = true;
        type();
      }, 1200);
      return;
    }
    
    // If finished deleting the current role
    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      currentRoleIndex = (currentRoleIndex + 1) % roles.length;
      setTimeout(type, 300);
      return;
    }
    
    // Continue typing or deleting
    setTimeout(type, typingSpeed);
  }
  
  // Start the effect
  type();
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

// Project details modal
const projectDetails = {
  'rocket-game': {
    title: 'Rocket Game',
    content: `
## Key Technical Achievements

* Implemented a custom API for score submission and data management
* Deployed backend on Azure with PostgreSQL on Neon.tech
* Utilized GitHub Actions for CI/CD, ensuring automated deployment
* Hosted Flutter frontend on Firebase for seamless cross-platform accessibility

## Impact & Skills Demonstrated

* Demonstrated proficiency in Dart for interactive, responsive frontends
* Strengthened full-stack skills integrating ASP.NET, PostgreSQL, and cloud hosting
* Learned end-to-end deployment pipelines leveraging GitHub Actions
    `
  },
  'tastm': {
    title: 'TASTM',
    content: `
## Key Technical Achievements

* Created a Python-based simulation using CircuitPython on Raspberry Pi Pico
* Emulated real rocket-to-ground station communication for rigorous testing
* Implemented robust testing strategies for improved software quality

## Impact & Skills Demonstrated

* Showcased ability to design and deploy embedded systems
* Enhanced telemetry capabilities through systematic testing
* Demonstrated adaptability in applying engineering principles to complex real-time data systems
    `
  },
  'tdas-gui': {
    title: 'TDAS-GUI',
    content: `
## Key Technical Achievements

* Built with Tauri 2.0, utilizing Rust for backend performance and React for frontend
* Integrated high-frequency data handling (up to 100Hz) with asynchronous Rust libraries
* Implemented real-time display of acceleration, altitude, GPS, and data recording

## Impact & Skills Demonstrated

* Delivered a robust platform for real-time telemetry analysis
* Demonstrated proficiency with Vite, Tailwind CSS, and Rust's async ecosystems
* Showcased strong problem-solving skills by addressing complex data handling challenges
    `
  },
  'portfolio-site': {
    title: 'Portfolio Site',
    content: `
## Key Technical Achievements

* Built with TypeScript and React for a robust, maintainable codebase
* Styled with Tailwind CSS for efficient, responsive design
* Hosted on Render for reliable and scalable performance
* Integrated dynamic SVG background, Google reCAPTCHA, and EmailJS for enhanced UX

## Impact & Skills Demonstrated

* Showcased strong front-end development skills with TypeScript
* Gained real-world experience in secure form handling and service integration
* Demonstrated ability to create visually appealing and interactive web experiences
    `
  },
  'portfolio-site-v1': {
    title: 'Portfolio Site v1',
    content: `
## Key Technical Achievements

* Employed basic JavaScript for interactive elements
* Learned fundamental web dev practices in styling and layout
* Transitioned to React for code maintainability and scalability

## Impact & Skills Demonstrated

* Established a foundation in front-end web development
* Demonstrated self-motivation to learn and expand technical skill sets
    `
  },
  'semester-project': {
    title: 'Semester Project',
    content: `
## Key Technical Achievements

* Deployed to Render with a PostgreSQL database on Neon.tech
* Implemented RSpec for backend testing and Cucumber for frontend/UI testing
* Managed SCRUM-based workflows via Jira, achieving a perfect score

## Impact & Skills Demonstrated

* Proven leadership as SCRUM Master, coordinating tasks and ensuring on-time delivery
* Showcased proficiency in Rails, database integration, and automated testing
* Demonstrated ability to build reliable, role-based web applications
    `
  },
  'sentinel': {
    title: 'SENTINEL',
    content: `
## Key Technical Achievements

* Implemented real-time 3D rocket orientation tracking and flight trajectory visualization
* Employed an event-driven architecture for seamless communication between hardware and software
* Leveraged Rust, Tauri, and React for performant, cross-platform data analysis

## Impact & Skills Demonstrated

* Enhanced rocket launches with comprehensive flight monitoring and sensor data analysis
* Demonstrated ability to collaborate on complex, production-ready systems
* Applied lessons from previous projects to improve reliability and performance
    `
  },
  'ai-assistant': {
    title: 'AI Assistant',
    content: `
## Key Technical Achievements

* **Frontend Development**
  * Built responsive UI with Next.js and TypeScript
  * Rapid prototyping using V0 by Vercel
  * Created reusable components with Radix UI and Tailwind CSS

* **Backend Architecture**
  * Implemented scalable FastAPI/Python backend
  * Designed robust API architecture with Pydantic
  * Integrated OpenAI SDK efficiently

* **Engineering Best Practices**
  * Implemented comprehensive error handling
  * Utilized TypeScript for type safety
  * Secured API keys with environment variables
  * Followed modern state management patterns

## Impact & Skills Demonstrated

* Initiative in learning and applying new technologies
* Ability to deliver production-quality code
* Strong understanding of modern web development
* Practical experience with API integration
* Focus on user experience and clean architecture
    `
  },
  'chatbot-demo': {
    title: 'Chatbot Demo',
    content: `
## Key Technical Achievements

* Ingested source code and documentation with a text processing pipeline
* Utilized FAISS for efficient vector similarity search
* Integrated Hugging Face API for contextual response generation with advanced prompt engineering

## Impact & Skills Demonstrated

* Showcased expertise in AI technologies and developer tool creation
* Overcame context window constraints and API rate limits
* Demonstrated effective use of embedding models and vector databases for technical documentation
    `
  },
  'clinostat': {
    title: 'SARE Clinostat project',
    content: `
## Key Technical Achievements

* Architected a Tauri 2.0 desktop app for real-time motor control and data monitoring
* Implemented bidirectional communication via ESP-NOW for high-precision RPM management
* Streamlined device connectivity with automated serial port detection and error handling

## Impact & Skills Demonstrated

* Demonstrated full-stack expertise in hardware-software integration
* Showcased leadership by guiding protocol and framework decisions
* Delivered a robust, user-friendly solution for scientific research applications
    `
  }
};

// Add a modal container to the body
let modalContainer = document.createElement('div');
modalContainer.id = 'project-modal';
modalContainer.className = 'modal-container';
modalContainer.style.display = 'none'; // Ensure it's hidden by default
modalContainer.innerHTML = `
  <div class="modal-content">
    <span class="close-modal">&times;</span>
    <h2 id="modal-title"></h2>
    <div id="modal-body"></div>
  </div>
`;
document.body.appendChild(modalContainer);

// Function to render markdown
function renderMarkdown(text) {
  // Simple markdown parser (for a production app, you should use a proper library)
  // Convert headers
  text = text.replace(/## (.*)/g, '<h2>$1</h2>');
  text = text.replace(/\* (.*)/g, '<li>$1</li>');
  text = text.replace(/\n\n/g, '<br>');
  
  // Wrap lists
  let inList = false;
  const lines = text.split('\n');
  const result = [];
  
  for (const line of lines) {
    if (line.includes('<li>') && !inList) {
      inList = true;
      result.push('<ul>');
      result.push(line);
    } else if (!line.includes('<li>') && inList) {
      inList = false;
      result.push('</ul>');
      result.push(line);
    } else {
      result.push(line);
    }
  }
  
  if (inList) {
    result.push('</ul>');
  }
  
  return result.join('\n');
}

// Setup event listeners for project detail buttons
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('see-more') || e.target.closest('.see-more')) {
    const button = e.target.classList.contains('see-more') ? e.target : e.target.closest('.see-more');
    const projectId = button.getAttribute('data-project');
    const project = projectDetails[projectId];
    
    if (project) {
      document.getElementById('modal-title').textContent = project.title;
      document.getElementById('modal-body').innerHTML = renderMarkdown(project.content);
      const modal = document.getElementById('project-modal');
      modal.classList.add('active');
      modal.style.display = 'flex';
    }
  }
  
  if (e.target.classList.contains('close-modal') || e.target === document.getElementById('project-modal')) {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    modal.style.display = 'none';
  }
});

// Function to remove unwanted elements from footer
function cleanupFooter() {
  const footer = document.querySelector('footer');
  
  // Check for any elements that might be the "x" button
  const possibleXElements = footer.querySelectorAll('button, .close, .collapse, [class*="collapse"], [class*="toggle"]');
  
  possibleXElements.forEach(element => {
    element.remove();
  });
  
  // Also check for any elements positioned at bottom-left
  const allFooterElements = footer.querySelectorAll('*');
  allFooterElements.forEach(element => {
    const style = window.getComputedStyle(element);
    if (style.position === 'absolute' || style.position === 'fixed') {
      if (style.bottom && style.left) {
        element.remove();
      }
    }
  });
  
  // Remove unwanted project-modal that might have been duplicated
  const modalElements = document.querySelectorAll('#project-modal');
  if (modalElements.length > 1) {
    for (let i = 1; i < modalElements.length; i++) {
      modalElements[i].remove();
    }
  }
}

// CSS animation-based arrow with clockwise-rotated arrowhead
function setupArrow() {
  // Create container for arrow
  const arrowContainer = document.createElement('div');
  arrowContainer.className = 'nav-arrow';
  arrowContainer.id = 'nav-arrow';
  
  // SVG with paths that will be animated via CSS - arrowhead rotated more clockwise
  arrowContainer.innerHTML = `
    <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
      <!-- Arrow shaft -->
      <path class="arrow-shaft" d="M10,70 Q50,10 170,30" />
      <!-- Arrow head - adjusted to have more clockwise rotation -->
      <path class="arrow-head" d="M145,30 L170,30 L160,55" />
    </svg>
  `;
  
  document.body.appendChild(arrowContainer);
  
  // Function to show and animate arrow
  function showArrow() {
    const homePage = document.getElementById('home');
    if (homePage && homePage.classList.contains('active')) {
      // Reset animations by removing and re-adding the element
      const oldArrow = document.getElementById('nav-arrow');
      if (oldArrow) {
        oldArrow.remove();
      }
      
      // Create a fresh arrow
      document.body.appendChild(arrowContainer);
      
      // Make visible and add completed class after animation time
      arrowContainer.classList.add('visible');
      
      // Add completed class after animation finishes
      setTimeout(() => {
        arrowContainer.classList.add('completed');
      }, 2500); // Time after both animations complete
      
      console.log('Arrow shown and animation started');
    } else {
      arrowContainer.classList.remove('visible', 'completed');
    }
  }
  
  // Listen for page changes
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      console.log('Navigation clicked, checking if home page');
      setTimeout(showArrow, 100);
    });
  });
  
  // Show on initial page load
  showArrow();
}

// Update the init function to use our new arrow function
function init() {
  // Show home page by default
  document.getElementById('home').classList.add('active');
  document.querySelector('[data-page="home"]').classList.add('active');
  
  // Hide contact footer initially
  const contactFooter = document.getElementById('contact-footer');
  if (contactFooter) {
    contactFooter.style.display = 'none';
  }
  
  // Animate welcome text on initial load
  animateWelcomeText();
  
  // Final cleanup
  cleanupFooter();
  
  // Setup the arrow with Vivus animation
  setupArrow();
}

// Run initialization
init();