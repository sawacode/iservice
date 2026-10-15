/* ============================================================
       0. GESTION DU THÈME
       ============================================================ */
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const backToTop = document.getElementById('backToTop');
const themeToggle = document.getElementById('themeToggle');
const htmlEl = document.documentElement;

menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function getInitialTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) return saved;
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

function applyTheme(theme) {
  htmlEl.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

applyTheme(getInitialTheme());

themeToggle.addEventListener('click', () => {
  const current = htmlEl.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

/* ============================================================
   1. ICÔNES SVG
   ============================================================ */
const ICONS = {
  code: '<svg class="icon" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  shield: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  cloud: '<svg class="icon" viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
  wrench: '<svg class="icon" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  network: '<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="6.5" y1="6.5" x2="10.5" y2="10.5"/><line x1="17.5" y1="6.5" x2="13.5" y2="10.5"/><line x1="6.5" y1="17.5" x2="10.5" y2="13.5"/><line x1="17.5" y1="17.5" x2="13.5" y2="13.5"/></svg>',
  graduation: '<svg class="icon" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
  user: '<svg class="icon" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  star: '<svg class="icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  check: '<svg class="icon" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>',
  linkedin: '<svg class="icon" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  twitter: '<svg class="icon" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>',
  mail: '<svg class="icon" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  arrowRight: '<svg class="icon" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
};

/* ============================================================
   2. DONNÉES
   ============================================================ */


/* ============================================================
   3. INJECTION SERVICES
   ============================================================ */
/*  const servicesGrid = document.getElementById('servicesGrid');
 services.forEach(s => {
   servicesGrid.insertAdjacentHTML('beforeend', `
 <div class="service-card">
   <div class="service-icon">${ICONS[s.icon]}</div>
   <h3>${s.title}</h3>
   <p>${s.description}</p>
 </div>
`);
 }); */

/* ============================================================
   4. INJECTION PROJETS
   ============================================================ */
/*  const projectsGrid = document.getElementById('projectsGrid');
const projectsFilter = document.getElementById('projectsFilter');

projects.forEach(p => {
 projectsGrid.insertAdjacentHTML('beforeend', `
<div class="project-card" data-category="${p.category}">
 <div class="project-image">
   <span class="project-category-badge">${p.category}</span>
   <img src="${p.image}" alt="${p.title}" loading="lazy">
   <div class="project-overlay">
     <p>${p.description}</p>
     <div class="project-tags">
       ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
     </div>
   </div>
 </div>
 <div class="project-body">
   <h3>${p.title}</h3>
   <div class="project-meta">
     <span class="project-client">${ICONS.user} ${p.client}</span>
     <span class="project-year">${p.year}</span>
   </div>
 </div>
</div>
`);
}); */



/* ============================================================
   5. INJECTION FORMATIONS
   ============================================================ */


/* ============================================================
   5bis. CARROUSEL DE FORMATIONS DANS LE HEADER
   ============================================================ */
const formationsCarousel = document.getElementById('formationsCarousel');
const fcPrev = document.getElementById('fcPrev');
const fcNext = document.getElementById('fcNext');
const fcProgress = document.getElementById('fcProgress');

// Injection des slides


// Navigation : scroll horizontal par carte
function scrollCarousel(direction) {
  const slide = formationsCarousel.querySelector('.formation-slide');
  if (!slide) return;
  const slideWidth = slide.offsetWidth + 20; // + gap
  formationsCarousel.scrollBy({ left: direction * slideWidth, behavior: 'smooth' });
}

fcPrev.addEventListener('click', () => scrollCarousel(-1));
fcNext.addEventListener('click', () => scrollCarousel(1));

// Barre de progression
/* function updateProgress() {
  const scrollLeft = formationsCarousel.scrollLeft;
  const maxScroll = formationsCarousel.scrollWidth - formationsCarousel.clientWidth;
  const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
  // largeur barre : 20%, déplacement sur 80% restant
  fcProgress.style.setProperty('--progress', progress);
  fcProgress.style.position = 'relative';
  // On utilise un pseudo ::after dynamique via style inline
  fcProgress.style.setProperty('--x', (progress * 80) + '%');
} */

/*  formationsCarousel.addEventListener('scroll', updateProgress, { passive: true });
 window.addEventListener('resize', updateProgress);
 updateProgress(); */