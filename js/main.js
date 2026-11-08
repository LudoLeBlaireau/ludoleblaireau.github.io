
/* =========================================================
   LUDOVIC GAYARD — PORTFOLIO
   Navigation, projets et animations
   ========================================================= */


/* =========================
   01 — INITIALISATION
========================= */

document.addEventListener("DOMContentLoaded", () => {

    if (!window.portfolioContent) {
        console.error("Erreur : portfolioContent est introuvable.");
        return;
    }

    initMobileMenu();
    initProjectGallery();
    initScrollAnimations();
    initSmoothNavigation();

});


/* =========================
   02 — MENU MOBILE
========================= */

function initMobileMenu() {

    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".main-nav");
    const navigationLinks = document.querySelectorAll(".main-nav a");

    if (!menuButton || !navigation) return;

    function closeMenu() {
        menuButton.classList.remove("active");
        navigation.classList.remove("open");
        document.body.classList.remove("menu-open");

        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Ouvrir le menu");
    }

    menuButton.addEventListener("click", () => {

        const isOpen = navigation.classList.toggle("open");

        menuButton.classList.toggle("active", isOpen);
        document.body.classList.toggle("menu-open", isOpen);

        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Fermer le menu" : "Ouvrir le menu"
        );

    });

    navigationLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

}


/* =========================
   03 — GÉNÉRATION DES PROJETS
========================= */

function initProjectGallery() {

    const gallery = document.querySelector("#projects-grid");
    const filters = document.querySelectorAll(".filter-button");

    if (!gallery) return;

    const projects = window.portfolioContent.projects;

    renderProjects(projects, gallery);

    filters.forEach(button => {

        button.addEventListener("click", () => {

            // Actualiser le bouton actif.
            filters.forEach(filter => {
                filter.classList.remove("active");
            });

            button.classList.add("active");

            // Récupérer le filtre sélectionné.
            const selectedFilter = button.dataset.filter;

            let filteredProjects = projects;

            if (selectedFilter !== "all") {

                filteredProjects = projects.filter(project => {

                    return project.category.includes(selectedFilter);

                });

            }

            renderProjects(filteredProjects, gallery);

        });

    });

}


/* =========================
   04 — AFFICHAGE DES CARTES
========================= */

function renderProjects(projects, gallery) {

    gallery.innerHTML = "";

    if (projects.length === 0) {

        gallery.innerHTML = `
            <p class="empty-projects">
                Aucun projet ne correspond à ce filtre.
            </p>
        `;

        return;

    }

    projects.forEach((project, index) => {

        const card = document.createElement("article");

        card.className = "project-card reveal visible";

        if (index === 0 && projects.length > 1) {
            card.classList.add("featured-project");
        }

        const roles = project.role.join(" / ");

        const tags = project.tags
            .map(tag => `<span>${escapeHTML(tag)}</span>`)
            .join("");

        card.innerHTML = `

            <a href="${escapeHTML(project.page)}"
               class="project-card-link"
               aria-label="Découvrir le projet ${escapeHTML(project.title)}">

                <div class="project-visual">

                    <span class="project-visual-label">
                        ${escapeHTML(project.status)}
                    </span>

                    <div class="project-visual-placeholder">
                        <span>${escapeHTML(project.title)}</span>
                    </div>

                    <img
                        src="${escapeHTML(project.cover)}"
                        alt="Illustration du projet ${escapeHTML(project.title)}"
                        loading="lazy"
                    >

                </div>

                <div class="project-card-content">

                    <div class="project-meta">
                        <span>${escapeHTML(project.subtitle)}</span>
                        <span>${String(index + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}</span>
                    </div>

                    <h3>${escapeHTML(project.title)}</h3>

                    <p>${escapeHTML(project.shortDescription)}</p>

                    <div class="project-meta" style="margin-top: 12px;">
                        <span>${escapeHTML(roles)}</span>
                    </div>

                    <div class="project-tags">
                        ${tags}
                    </div>

                    <div class="project-card-cta">
                        <span>DÉCOUVRIR LE PROJET</span>
                        <span>↗</span>
                    </div>

                </div>

            </a>

        `;

        gallery.appendChild(card);

        const image = card.querySelector("img");
        const placeholder = card.querySelector(".project-visual-placeholder");

        image.addEventListener("load", () => {
            placeholder.style.display = "none";
        });

        image.addEventListener("error", () => {
            image.style.display = "none";
            placeholder.style.display = "flex";
        });

    });

}


/* =========================
   05 — SÉCURISATION DU HTML
========================= */

// Évite d'interpréter les caractères spéciaux du contenu
// comme du code HTML lors de la génération des cartes.

function escapeHTML(value) {

    return String(value ?? "").replace(/[&<>"']/g, character => {

        const characters = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        };

        return characters[character];

    });

}


/* =========================
   06 — ANIMATIONS AU SCROLL
========================= */

function initScrollAnimations() {

    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {

        elements.forEach(element => {
            element.classList.add("visible");
        });

        return;

    }

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                // Une fois visible, l'élément ne sera plus observé.
                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"

    });

    elements.forEach(element => {
        observer.observe(element);
    });

}


/* =========================
   07 — NAVIGATION FLUIDE
========================= */

function initSmoothNavigation() {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches ? "auto" : "smooth",
                block: "start"
            });

        });

    });

}
