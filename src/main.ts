import './index.css';

declare const THREE: any;
declare const gsap: any;
declare const ScrollTrigger: any;
declare const VanillaTilt: any;

let scene: any, camera: any, renderer: any, particles: any[] = [];
let mouseX = 0, mouseY = 0;
let targetX = 0, targetY = 0;
let mouseActive = false;
let time = 0;
let pencilGroup: any = null;
let inkCanvas: HTMLCanvasElement | null = null;
let inkCtx: CanvasRenderingContext2D | null = null;
let shatterCanvas: HTMLCanvasElement | null = null;
let shatterCtx: CanvasRenderingContext2D | null = null;

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
      homeX: particle.position.x,
      homeY: particle.position.y,
      originalX: particle.position.x,
      originalY: particle.position.y,
      phase: Math.random() * Math.PI * 2,
      velocityX: 0,
      velocityY: 0,
      originalColor: color,
      originalOpacity: opacity
    };

    scene.add(particle);
    particles.push(particle);
  }

  createGlassPencil();
  addLighting();
  animate();
}

function createGlassPencil() {
  if (!scene) return;

  pencilGroup = new THREE.Group();

  const bodyGeo = new THREE.CylinderGeometry(0.15, 0.15, 3.5, 6);
  const bodyMat = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: 0.0,
    roughness: 0.05,
    transmission: 0.92,
    thickness: 0.5,
    transparent: true,
    opacity: 0.85,
    envMapIntensity: 1.5,
    clearcoat: 1.0,
    clearcoatRoughness: 0.05,
    ior: 1.5,
  });
  const body = new THREE.Mesh(bodyGeo, bodyMat);
  pencilGroup.add(body);

  const eraserGeo = new THREE.CylinderGeometry(0.16, 0.16, 0.4, 6);
  const eraserMat = new THREE.MeshPhysicalMaterial({
    color: 0xC8832A,
    metalness: 0.1,
    roughness: 0.1,
    transmission: 0.7,
    transparent: true,
    opacity: 0.8,
    clearcoat: 1.0,
  });
  const eraser = new THREE.Mesh(eraserGeo, eraserMat);
  eraser.position.y = 1.95;
  pencilGroup.add(eraser);

  const bandGeo = new THREE.CylinderGeometry(0.17, 0.17, 0.08, 6);
  const bandMat = new THREE.MeshStandardMaterial({
    color: 0xC8832A,
    metalness: 0.9,
    roughness: 0.1,
  });
  const band = new THREE.Mesh(bandGeo, bandMat);
  band.position.y = 1.74;
  pencilGroup.add(band);

  const tipGeo = new THREE.ConeGeometry(0.15, 0.6, 6);
  const tipMat = new THREE.MeshPhysicalMaterial({
    color: 0xF5E6D0,
    transmission: 0.3,
    transparent: true,
    roughness: 0.4,
  });
  const tip = new THREE.Mesh(tipGeo, tipMat);
  tip.position.y = -2.05;
  tip.rotation.z = Math.PI;
  pencilGroup.add(tip);

  const graphiteGeo = new THREE.ConeGeometry(0.03, 0.15, 6);
  const graphiteMat = new THREE.MeshStandardMaterial({
    color: 0x1A1A1A,
    metalness: 0.3,
    roughness: 0.6,
  });
  const graphite = new THREE.Mesh(graphiteGeo, graphiteMat);
  graphite.position.y = -2.45;
  graphite.rotation.z = Math.PI;
  pencilGroup.add(graphite);

  pencilGroup.position.set(8, 6, 0);
  pencilGroup.rotation.set(0.3, 0, -2.2);
  pencilGroup.visible = false;

  scene.add(pencilGroup);
}

function addLighting() {
  if (!scene) return;

  const pointLight1 = new THREE.PointLight(0xC8832A, 2, 20);
  pointLight1.position.set(5, 5, 5);
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0xffffff, 1, 20);
  pointLight2.position.set(-5, -3, 3);
  scene.add(pointLight2);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambientLight);
}

function animate() {
  requestAnimationFrame(animate);
  time += 0.01;

  targetX += (mouseX - targetX) * 0.05;
  targetY += (mouseY - targetY) * 0.05;

  camera.position.x = targetX * 0.01;
  camera.position.y = -targetY * 0.01;
  camera.lookAt(scene.position);

  particles.forEach((particle, i) => {
    particle.userData.phase += 0.01;

    const dx = mouseX * 0.02 - particle.position.x;
    const dy = mouseY * 0.02 - particle.position.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const minDist = 1.2;

    if (dist < 2.5 && dist > minDist && mouseActive) {
      const force = (dist - minDist) / dist;
      particle.position.x += dx * 0.03 * force;
      particle.position.y += dy * 0.03 * force;
    } else if (dist <= minDist && mouseActive) {
      particle.position.x -= dx * 0.05;
      particle.position.y -= dy * 0.05;
    } else {
      particle.position.x += (particle.userData.homeX - particle.position.x) * 0.02 + particle.userData.speedX;
      particle.position.y += (particle.userData.homeY + Math.sin(time + i * 0.5) * 0.3 - particle.position.y) * 0.02 + particle.userData.speedY;
    }

    particle.position.x += particle.userData.velocityX;
    particle.position.y += particle.userData.velocityY;
    particle.userData.velocityX *= 0.95;
    particle.userData.velocityY *= 0.95;

    particle.position.z += Math.sin(particle.userData.phase) * 0.02;

    if (particle.position.x > 50) particle.position.x = -50;
    if (particle.position.x < -50) particle.position.x = 50;
    if (particle.position.y > 30) particle.position.y = -30;
    if (particle.position.y < -30) particle.position.y = 30;

    if (pencilGroup && pencilGroup.visible) {
      const pencilDx = pencilGroup.position.x - particle.position.x;
      const pencilDy = pencilGroup.position.y - particle.position.y;
      const pencilDist = Math.sqrt(pencilDx * pencilDx + pencilDy * pencilDy);

      if (pencilDist < 3) {
        particle.position.x -= pencilDx * 0.04;
        particle.position.y -= pencilDy * 0.04;
      }
    }
  });

  renderer.render(scene, camera);
}

function initInkCanvas() {
  inkCanvas = document.querySelector('.ink-canvas') as HTMLCanvasElement;
  if (!inkCanvas) return;

  inkCanvas.width = window.innerWidth;
  inkCanvas.height = window.innerHeight;
  inkCtx = inkCanvas.getContext('2d');
}

function initShatterCanvas() {
  shatterCanvas = document.querySelector('.shatter-canvas') as HTMLCanvasElement;
  if (!shatterCanvas) return;

  shatterCanvas.width = window.innerWidth;
  shatterCanvas.height = window.innerHeight;
  shatterCtx = shatterCanvas.getContext('2d');
}

function drawInkBleed(progress: number) {
  if (!inkCanvas || !inkCtx) return;

  const inkOriginX = window.innerWidth * 0.6;
  const inkOriginY = window.innerHeight * 0.45;
  const maxRadius = Math.sqrt(
    Math.pow(inkCanvas.width, 2) + Math.pow(inkCanvas.height, 2)
  );

  inkCtx.clearRect(0, 0, inkCanvas.width, inkCanvas.height);
  inkCtx.beginPath();
  inkCtx.arc(inkOriginX, inkOriginY, maxRadius * progress, 0, Math.PI * 2);
  inkCtx.fillStyle = '#1A1A1A';
  inkCtx.fill();
}

function drawShatter() {
  if (!shatterCanvas || !shatterCtx) return;

  const centerX = shatterCanvas.width / 2;
  const centerY = shatterCanvas.height / 2;

  shatterCtx.clearRect(0, 0, shatterCanvas.width, shatterCanvas.height);
  shatterCtx.strokeStyle = 'rgba(255,255,255,0.9)';
  shatterCtx.lineWidth = 1;

  for (let i = 0; i < 12; i++) {
    const angle = (Math.PI * 2 / 12) * i + Math.random() * 0.3;
    const length = 150 + Math.random() * 100;

    shatterCtx.beginPath();
    shatterCtx.moveTo(centerX, centerY);

    const segments = 3 + Math.floor(Math.random() * 3);
    let currentX = centerX;
    let currentY = centerY;

    for (let j = 0; j < segments; j++) {
      const segmentLength = length / segments;
      const jitter = (Math.random() - 0.5) * 30;
      currentX += Math.cos(angle) * segmentLength + jitter;
      currentY += Math.sin(angle) * segmentLength + jitter;
      shatterCtx.lineTo(currentX, currentY);
    }

    shatterCtx.stroke();
  }
}

function initGSAPAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.normalizeScroll(true);

  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const letters = heroTitle.querySelectorAll('span');
    gsap.to(letters, {
      rotateX: 0,
      opacity: 1,
      duration: 0.9,
      stagger: 0.06,
      ease: 'expo.out',
      delay: 1.2
    });
  }

  gsap.to('.hero-subtitle', {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: 'expo.out',
    delay: 1.7
  });

  gsap.to('.hero-body', {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: 'expo.out',
    delay: 1.9
  });

  gsap.to('.hero-buttons', {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: 'expo.out',
    delay: 2.1
  });

  initCinematicSequence();
  initExistingScrollAnimations();
}

function initCinematicSequence() {
  const heroSection = document.querySelector('.hero-section');
  if (!heroSection) return;

  const isMobile = window.innerWidth < 768;

  ScrollTrigger.create({
    trigger: heroSection,
    start: '5% top',
    end: '20% top',
    scrub: 1.5,
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      drawInkBleed(self.progress);

      particles.forEach((particle) => {
        const originalColor = particle.userData.originalColor;
        const targetColor = (originalColor === 0xC8832A) ? 0xC8832A : 0xFFFFFF;
        const currentColor = particle.material.color.getHex();
        const newColor = Math.floor(currentColor + (targetColor - currentColor) * self.progress * 0.1);
        particle.material.color.setHex(newColor);
      });
    }
  });

  ScrollTrigger.create({
    trigger: heroSection,
    start: '18% top',
    end: '25% top',
    scrub: 1.5,
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      gsap.to('.problem-top, .problem-bottom', {
        opacity: self.progress,
        y: 20 - self.progress * 20,
        duration: 0.1
      });
      gsap.to('.pulse-dot', {
        opacity: self.progress * 0.8,
        duration: 0.1
      });
    }
  });

  if (!isMobile && pencilGroup) {
    ScrollTrigger.create({
      trigger: heroSection,
      start: '22% top',
      end: '42% top',
      scrub: 1.5,
      invalidateOnRefresh: true,
      onEnter: () => {
        if (pencilGroup) pencilGroup.visible = true;
      },
      onLeaveBack: () => {
        if (pencilGroup) pencilGroup.visible = false;
      },
      onUpdate: (self) => {
        if (!pencilGroup) return;

        const progress = self.progress;
        pencilGroup.position.x = 8 - progress * 8;
        pencilGroup.position.y = 6 - progress * 5.5;
        pencilGroup.rotation.x = 0.3 - progress * 0.3;
        pencilGroup.rotation.z = -2.2 + progress * 2.05;
        pencilGroup.rotation.y = progress * 0.3;
      }
    });

    ScrollTrigger.create({
      trigger: heroSection,
      start: '40% top',
      end: '48% top',
      scrub: 1.5,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        if (!pencilGroup) return;

        if (self.progress > 0 && self.progress < 0.3) {
          pencilGroup.position.y = 0.5 + Math.sin(self.progress * 30) * 0.15;
        }

        if (self.progress > 0.1 && self.progress < 0.4) {
          gsap.to('.shockwave', {
            scale: 80 * self.progress,
            opacity: 0.6 - self.progress * 0.6,
            duration: 0.1
          });

          gsap.to('.impact-flash', {
            opacity: self.progress < 0.2 ? self.progress * 2.5 : (0.5 - (self.progress - 0.2) * 2.5),
            duration: 0.1
          });

          if (self.progress > 0.15 && self.progress < 0.25) {
            drawShatter();
            gsap.to('.shatter-canvas', {
              opacity: 0.8,
              duration: 0.1
            });
          } else if (self.progress >= 0.25) {
            gsap.to('.shatter-canvas', {
              opacity: 0,
              duration: 0.1
            });
          }

          particles.forEach((particle) => {
            const dx = particle.position.x;
            const dy = particle.position.y - 0.5;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 3 && self.progress > 0.15 && self.progress < 0.3) {
              particle.userData.velocityX = (dx / dist) * 0.3;
              particle.userData.velocityY = (dy / dist) * 0.3;
            }
          });
        }

        gsap.to('.problem-top', {
          y: -180 * self.progress,
          x: -60 * self.progress,
          rotation: -8 * self.progress,
          opacity: 1 - self.progress * 0.8,
          filter: `blur(${self.progress}px)`,
          duration: 0.1
        });

        gsap.to('.problem-bottom', {
          y: 180 * self.progress,
          x: 60 * self.progress,
          rotation: 6 * self.progress,
          opacity: 1 - self.progress * 0.8,
          filter: `blur(${self.progress}px)`,
          duration: 0.1
        });
      }
    });
  }

  ScrollTrigger.create({
    trigger: heroSection,
    start: '48% top',
    end: '72% top',
    scrub: 1.5,
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      const startFade = 0.3;
      const endFade = 1;

      if (self.progress >= startFade) {
        const fadeProgress = (self.progress - startFade) / (endFade - startFade);

        gsap.to('.btn-donate-cinematic', {
          opacity: fadeProgress,
          scale: 0.9 + fadeProgress * 0.1,
          duration: 0.1
        });

        gsap.to('.btn-learn-cinematic', {
          opacity: fadeProgress,
          scale: 0.9 + fadeProgress * 0.1,
          duration: 0.1
        });

        gsap.to('.cinematic-tagline', {
          opacity: fadeProgress * 0.6,
          duration: 0.1
        });
      }
    }
  });

  if (!isMobile && pencilGroup) {
    ScrollTrigger.create({
      trigger: heroSection,
      start: '70% top',
      end: '85% top',
      scrub: 1.5,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        if (!pencilGroup) return;

        pencilGroup.rotation.x = 0 * (1 - self.progress);
        pencilGroup.rotation.y = 0.3 * (1 - self.progress);
        pencilGroup.rotation.z = -0.15 * (1 - self.progress);
        pencilGroup.position.y = 0.5 + self.progress * 3.5;
        pencilGroup.scale.set(1 - self.progress, 1 - self.progress, 1 - self.progress);
      },
      onLeave: () => {
        if (pencilGroup) pencilGroup.visible = false;
      },
      onEnterBack: () => {
        if (pencilGroup) pencilGroup.visible = true;
      }
    });
  }

  ScrollTrigger.create({
    trigger: heroSection,
    start: '82% top',
    end: '95% top',
    scrub: 1.5,
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      drawInkBleed(1 - self.progress);

      gsap.to('.btn-donate-cinematic, .btn-learn-cinematic, .cinematic-tagline', {
        opacity: 1 - self.progress,
        duration: 0.1
      });

      gsap.to('.hero-title, .hero-subtitle, .hero-body, .hero-buttons', {
        opacity: self.progress,
        duration: 0.1
      });

      particles.forEach((particle) => {
        const targetColor = particle.userData.originalColor;
        const currentColor = particle.material.color.getHex();
        const whiteColor = (currentColor === 0xC8832A) ? 0xC8832A : 0xFFFFFF;
        const newColor = Math.floor(whiteColor + (targetColor - whiteColor) * self.progress * 0.1);
        particle.material.color.setHex(newColor);
      });
    }
  });
}

function initExistingScrollAnimations() {
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
    const words = missionTitle.textContent?.split(' ') || [];
    missionTitle.innerHTML = words.map(word => `<span style="display: inline-block; opacity: 0; transform: translateY(12px);">${word}</span>`).join(' ');

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
}

function initVanillaTilt() {
  const isMobile = window.innerWidth < 768;
  if (isMobile) return;

  const statCards = document.querySelectorAll('.stat-card[data-tilt]');
  statCards.forEach(card => {
    VanillaTilt.init(card, {
      max: 8,
      speed: 400,
      glare: true,
      'max-glare': 0.08
    });
  });

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

function initProgressBar() {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total = document.body.scrollHeight - window.innerHeight;
    const progress = (scrolled / total) * 100;
    const progressBar = document.querySelector('.progress-bar') as HTMLElement;
    if (progressBar) {
      progressBar.style.width = progress + '%';
    }
  });
}

function handleMouseMove(event: MouseEvent) {
  mouseX = (event.clientX - window.innerWidth / 2) * 0.5;
  mouseY = (event.clientY - window.innerHeight / 2) * 0.5;
  mouseActive = true;
}

function handleResize() {
  if (camera && renderer) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  if (inkCanvas) {
    inkCanvas.width = window.innerWidth;
    inkCanvas.height = window.innerHeight;
  }

  if (shatterCanvas) {
    shatterCanvas.width = window.innerWidth;
    shatterCanvas.height = window.innerHeight;
  }

  ScrollTrigger.refresh();
}

window.addEventListener('DOMContentLoaded', () => {
  const loader = document.querySelector('.loader');

  setTimeout(() => {
    if (loader) {
      loader.classList.add('hidden');
    }
  }, 900);

  setTimeout(() => {
    if (typeof THREE !== 'undefined') {
      initThreeJS();
      initInkCanvas();
      initShatterCanvas();
    }
    if (typeof gsap !== 'undefined') {
      initGSAPAnimations();
    }
    if (typeof VanillaTilt !== 'undefined') {
      initVanillaTilt();
    }
    initContactForm();
    initProgressBar();
  }, 100);
});

document.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleResize);
