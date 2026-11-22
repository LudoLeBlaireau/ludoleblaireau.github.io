
/* =========================================
   NAVIGATION LATÉRALE
   Progression et repères des sections
========================================= */

(() => {
  const init = () => {

    const isProject = document.body.hasAttribute('data-project');

    const sections = isProject
      ? [...document.querySelectorAll(
          '.project-hero, .project-section, .project-next'
        )]
      : [...document.querySelectorAll('main > section[id]')];

    if (!sections.length) return;

    const labels = isProject
      ? [
          'Projet',
          'Présentation',
          'Chronologie',
          'Contributions',
          'Analyse',
          'Bilan',
          'Autres projets'
        ]
      : [
          'Accueil',
          'À propos',
          'Compétences',
          'Projets',
          'CV',
          'Contact'
        ];

    // Création de la barre latérale

    const rail = document.createElement('nav');
    rail.className = 'reading-rail';

    rail.setAttribute(
      'aria-label',
      'Progression et navigation dans la page'
    );

    rail.innerHTML = `
      <div class="reading-rail-track" aria-hidden="true">
        <div class="reading-rail-fill"></div>
      </div>
      <div class="reading-rail-markers"></div>
    `;

    const markers = rail.querySelector(
      '.reading-rail-markers'
    );

    const fill = rail.querySelector(
      '.reading-rail-fill'
    );

    // Création des étoiles

    sections.forEach((section, i) => {

      if (!section.id) {
        section.id = 'section-' + (i + 1);
      }

      const a = document.createElement('a');

      a.className = 'reading-rail-star';
      a.href = '#' + section.id;

      a.setAttribute(
        'aria-label',
        'Aller à : ' + (labels[i] || 'Section')
      );

      a.title = labels[i] || 'Section';

      a.innerHTML = `
        <svg
          class="reading-rail-spark"
          viewBox="0 0 48 58"
          aria-hidden="true"
          focusable="false"
        >
          <path d="
            M24 2
            C26 15 29 22 46 28
            C29 31 26 41 24 56
            C21 40 18 31 2 28
            C18 24 21 15 24 2
            Z
          " />
        </svg>
      `;

      markers.appendChild(a);
    });

    document.body.appendChild(rail);

    const links = [
      ...markers.querySelectorAll('a')
    ];

    let ticking = false;

    // Mise à jour de la progression

    function update() {

      const doc = document.documentElement;

      const maxScroll = Math.max(
        0,
        doc.scrollHeight - window.innerHeight
      );

      const scrollPosition = window.scrollY;

      const progress = maxScroll
        ? Math.min(
            1,
            Math.max(0, scrollPosition / maxScroll)
          )
        : 1;

      fill.style.height = (progress * 100) + '%';

      // Détection de la section active

      const focusLine = window.innerHeight * 0.38;

      let active = 0;

      sections.forEach((section, i) => {

        if (
          section.getBoundingClientRect().top <= focusLine
        ) {
          active = i;
        }

      });

      // CORRECTION :
      // Activer la dernière étoile en bas de page

      const isAtBottom =
        scrollPosition + window.innerHeight >=
        doc.scrollHeight - 10;

      if (isAtBottom) {
        active = sections.length - 1;
      }

      // Actualisation des étoiles

      links.forEach((link, i) => {

        const isActive = i === active;

        link.classList.toggle(
          'is-active',
          isActive
        );

        if (isActive) {
          link.setAttribute(
            'aria-current',
            'location'
          );
        } else {
          link.removeAttribute('aria-current');
        }

      });

      ticking = false;
    }

    // Événement de défilement

    window.addEventListener(
      'scroll',
      () => {

        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }

      },
      { passive: true }
    );

    // Redimensionnement

    window.addEventListener(
      'resize',
      update
    );

    // Initialisation

    update();
  };

  if (document.readyState === 'loading') {
    document.addEventListener(
      'DOMContentLoaded',
      init
    );
  } else {
    init();
  }

})();
