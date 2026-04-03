import './index.css';

declare const THREE: any;
declare const gsap: any;
declare const ScrollTrigger: any;
declare const VanillaTilt: any;

let scene: any, camera: any, renderer: any, particles: any[] = [];
let mouseX = 0, mouseY = 0;
let targetX = 0, targetY = 0;

function initThreeJS() {
  const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement;
  if (!canvas) return;

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 50;

  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: window.innerWidth > 768
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const isMobile = window.innerWidth < 768;
  const particleCount = isMobile ? 80 : 180;

  const geometry = new THREE.SphereGeometry(0.5, 16, 16);

  for (let i = 0; i < particleCount; i++) {
    const isAccent = Math.random() < 0.15;
    const color = isAccent ? 0xC8832A : (Math.random() < 0.5 ? 0xE8E4DF : 0xF0EDE8);
    const opacity = isAccent ? 0.3 : 0.6;

    const material = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: opacity
    });

    const particle = new THREE.Mesh(geometry, material);

    particle.position.x = (Math.random() - 0.5) * 100;
    particle.position.y = (Math.random() - 0.5) * 60;
    particle.position.z = (Math.random() - 0.5) * 50;

    particle.userData = {
      speedX: (Math.random() - 0.5) * 0.02,
      speedY: (Math.random() - 0.5) * 0.015,
      originalX: particle.position.x,
      originalY: particle.position.y,
      phase: Math.random() * Math.PI * 2
    };

    scene.add(particle);
    particles.push(particle);
  }

  animate();
}

function animate() {
  requestAnimationFrame(animate);

  targetX += (mouseX - targetX) * 0.05;
  targetY += (mouseY - targetY) * 0.05;

  camera.position.x = targetX * 0.01;
  camera.position.y = -targetY * 0.01;
  camera.lookAt(scene.position);

  particles.forEach((particle) => {
    particle.userData.phase += 0.01;

    particle.position.x += particle.userData.speedX;
    particle.position.y += particle.userData.speedY;
    particle.position.z += Math.sin(particle.userData.phase) * 0.02;

    if (particle.position.x > 50) particle.position.x = -50;
    if (particle.position.x < -50) particle.position.x = 50;
    if (particle.position.y > 30) particle.position.y = -30;
    if (particle.position.y < -30) particle.position.y = 30;
  });

  renderer.render(scene, camera);
}

function initGSAPAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const letters = heroTitle.querySelectorAll('span');
    gsap.to(letters, {
      rotateX: 0,
      opacity: 1,
      duration: 0.9,
      stagger: 0.06,
      ease: 'expo.out',
      delay: 0.3
    });
  }

  gsap.to('.hero-subtitle', {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: 'expo.out',
    delay: 0.8
  });

  gsap.to('.hero-body', {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: 'expo.out',
    delay: 1
  });

  gsap.to('.hero-buttons', {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: 'expo.out',
    delay: 1.2
  });

  const missionBgMap = document.querySelector('.mission-bg-map');
  if (missionBgMap) {
    gsap.to(missionBgMap, {
      y: 100,
      scrollTrigger: {
        trigger: '.mission-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });
  }

  const missionBgGrid = document.querySelector('.mission-bg-grid');
  if (missionBgGrid) {
    gsap.to(missionBgGrid, {
      y: 50,
      scrollTrigger: {
        trigger: '.mission-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });
  }

  const missionTitle = document.querySelector('.mission-title');
  if (missionTitle) {
    const lines = missionTitle.innerHTML.split(/<br\s*\/?>/i);
    missionTitle.innerHTML = lines
      .map(line => line.trim().split(/\s+/).filter(Boolean)
        .map(word => `<span style="display: inline-block; opacity: 0; transform: translateY(12px);">${word}</span>`)
        .join(' '))
      .join('<br>');

    const wordSpans = missionTitle.querySelectorAll('span');
    gsap.to(wordSpans, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: missionTitle,
        start: 'top 85%'
      }
    });
  }

  const statCards = document.querySelectorAll('.stat-card');
  statCards.forEach((card, index) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 0.7,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 85%'
      },
      delay: index * 0.12
    });
  });

  const founderLeft = document.querySelector('.founder-left');
  if (founderLeft) {
    gsap.fromTo(founderLeft,
      { rotateY: 25, x: -30, scale: 0.95 },
      {
        rotateY: 0,
        x: 0,
        scale: 1,
        scrollTrigger: {
          trigger: '.founders-section',
          start: 'top 80%',
          end: 'center center',
          scrub: 1
        }
      }
    );
  }

  const founderRight = document.querySelector('.founder-right');
  if (founderRight) {
    gsap.fromTo(founderRight,
      { rotateY: -25, x: 30, scale: 0.95 },
      {
        rotateY: 0,
        x: 0,
        scale: 1,
        scrollTrigger: {
          trigger: '.founders-section',
          start: 'top 80%',
          end: 'center center',
          scrub: 1
        }
      }
    );
  }

  const stepCards = document.querySelectorAll('.step-card');
  stepCards.forEach((card, index) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 85%'
      },
      delay: index * 0.1
    });
  });

  const eventCards = document.querySelectorAll('.event-card');
  eventCards.forEach((card, index) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 85%'
      },
      delay: index * 0.15
    });
  });

  const sectionLabels = document.querySelectorAll('.section-label');
  sectionLabels.forEach(label => {
    gsap.fromTo(label,
      { opacity: 0, letterSpacing: '0.1em' },
      {
        opacity: 1,
        letterSpacing: '0.25em',
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: label,
          start: 'top 85%'
        }
      }
    );
  });

  const donateSection = document.querySelector('.donate-section');
  if (donateSection) {
    gsap.fromTo(donateSection,
      { backgroundColor: 'transparent' },
      {
        backgroundColor: '#1A1A1A',
        ease: 'none',
        scrollTrigger: {
          trigger: donateSection,
          start: 'top bottom+=40%',
          end: 'top top',
          scrub: 2
        }
      }
    );
  }

}

function initVanillaTilt() {
  const isMobile = window.innerWidth < 768;
  if (isMobile) return;

  const founderCards = document.querySelectorAll('.founder-card[data-tilt]');
  founderCards.forEach(card => {
    VanillaTilt.init(card, {
      max: 6,
      speed: 600,
      glare: true,
      'max-glare': 0.06
    });
  });
}

function initContactForm() {
  const form = document.getElementById('contactForm') as HTMLFormElement;
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    await new Promise(resolve => setTimeout(resolve, 1500));

    submitButton.textContent = 'Message Sent!';

    setTimeout(() => {
      form.reset();
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }, 2000);
  });
}

function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;
  const line = loader.querySelector('.loader-line') as HTMLElement;
  // Double rAF ensures paint has occurred before triggering the CSS transition
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (line) line.style.width = '60px';
    });
  });
  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => { loader.style.display = 'none'; }, 300);
  }, 900);
}

function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (total > 0 ? (window.scrollY / total) * 100 : 0) + '%';
  }, { passive: true });
}

function initActiveNav() {
  const navLinks = document.querySelectorAll<HTMLElement>('.nav-link');
  if (!navLinks.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.dataset.section === id);
        });
      }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('section[id]').forEach(s => observer.observe(s));
}

function handleMouseMove(event: MouseEvent) {
  mouseX = (event.clientX - window.innerWidth / 2) * 0.5;
  mouseY = (event.clientY - window.innerHeight / 2) * 0.5;
}

function handleResize() {
  if (camera && renderer) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initScrollProgress();
  initActiveNav();
  setTimeout(() => {
    if (typeof THREE !== 'undefined') {
      initThreeJS();
    }
    if (typeof gsap !== 'undefined') {
      initGSAPAnimations();
    }
    if (typeof VanillaTilt !== 'undefined') {
      initVanillaTilt();
    }
    initContactForm();
  }, 100);
});

document.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleResize);
