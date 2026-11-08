
/* ==================================================
   PROJECT PAGE — PORTFOLIO LUDOVIC GAYARD
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const projectId = document.body.dataset.project;

    if (!projectId) {
        console.error("Aucun identifiant de projet trouvé.");
        return;
    }

    const projects = window.portfolioContent?.projects;

    if (!projects) {
        console.error("Impossible de charger content.js.");
        return;
    }

    const project = projects.find(item => item.id === projectId);

    if (!project) {
        console.error(`Projet introuvable : ${projectId}`);
        return;
    }

    renderProject(project);

});


/* =========================
   01 — MAIN RENDER
========================= */

function renderProject(project) {

    renderHero(project);
    renderPresentation(project);
    renderTimeline(project);
    renderContributions(project);
    renderTechnicalPoints(project);
    renderPostMortem(project);

}


/* =========================
   02 — UTILITIES
========================= */

// Récupère un élément HTML.
function getElement(selector) {
    return document.querySelector(selector);
}


// Crée un élément HTML sécurisé.
function createElement(tag, className, content = "") {

    const element = document.createElement(tag);

    if (className) {
        element.className = className;
    }

    if (content !== undefined && content !== null) {
        element.textContent = content;
    }

    return element;
}


// Convertit les chemins d'assets pour les pages situées
// dans le dossier projets/.
function getAssetPath(path) {

    if (!path) return "";

    if (
        path.startsWith("http://") ||
        path.startsWith("https://") ||
        path.startsWith("../") ||
        path.startsWith("/")
    ) {
        return path;
    }

    return `../${path}`;
}


// Affiche un texte avec conservation des retours à la ligne.
function setText(selector, value) {

    const element = getElement(selector);

    if (!element || !value) return;

    if (Array.isArray(value)) {
        element.textContent = value.join(" · ");
    } else {
        element.textContent = value;
    }
}


// Accepte aussi bien une chaîne de caractères
// qu'un tableau de paragraphes.
function renderText(container, value) {

    if (!container || !value) return;

    container.replaceChildren();

    const values = Array.isArray(value) ? value : [value];

    values.forEach(item => {

        if (!item) return;

        const text = typeof item === "string"
            ? item
            : item.description || item.text || "";

        if (!text) return;

        const paragraph = createElement("p", "", text);

        container.appendChild(paragraph);

    });

}


// Récupère une valeur textuelle dans un objet.
function getTextValue(value) {

    if (typeof value === "string") {
        return value;
    }

    if (value && typeof value === "object") {
        return value.description || value.text || "";
    }

    return "";

}


/* =========================
   03 — HERO
========================= */

function renderHero(project) {

    setText("[data-project-title]", project.title);
    setText("[data-project-subtitle]", project.subtitle);
    setText("[data-project-status]", project.status);
    setText("[data-project-role]", project.role);
    setText("[data-project-description]", project.description);

    setText("[data-project-role-card]", project.role);

    const cover = getElement("[data-project-cover]");
    const placeholder = getElement(".project-cover-placeholder");

    if (cover && project.cover) {

        cover.src = getAssetPath(project.cover);

        cover.onload = () => {
            cover.hidden = false;

            if (placeholder) {
                placeholder.hidden = true;
            }
        };

        cover.onerror = () => {
            cover.hidden = true;

            if (placeholder) {
                placeholder.hidden = false;
            }
        };

    }

    // Met à jour le titre de la page.
    document.title = `${project.title} — Ludovic GAYARD | Producer`;

}


/* =========================
   04 — PRESENTATION
========================= */

function renderPresentation(project) {

    const presentation = project.presentation;

    const container = getElement("[data-project-presentation]");

    if (container && presentation) {

        if (typeof presentation === "string" || Array.isArray(presentation)) {
            renderText(container, presentation);
        } else {

            const paragraphs = Object.values(presentation)
                .map(getTextValue)
                .filter(Boolean);

            renderText(container, paragraphs);

        }

    }

    // Résumé des contributions.
    const summary = getElement("[data-project-contributions-summary]");

    if (summary && project.contributions) {

        const contributions = Array.isArray(project.contributions)
            ? project.contributions
            : [project.contributions];

        const contributionNames = contributions
            .map(item => typeof item === "string" ? item : item.title)
            .filter(Boolean);

        summary.textContent = contributionNames.join(" • ");

    }

}


/* =========================
   05 — TIMELINE
========================= */

function renderTimeline(project) {

    const container = getElement("[data-project-timeline]");

    if (!container || !Array.isArray(project.timeline)) return;

    container.replaceChildren();

    project.timeline.forEach((phase, index) => {

        const item = createElement("article", "timeline-item");

        const number = createElement(
            "div",
            "timeline-number",
            String(index + 1).padStart(2, "0")
        );

        const content = createElement("div", "timeline-content");

        const title = createElement(
            "h3",
            "",
            phase.title || phase.name || `Étape ${index + 1}`
        );

        const description = createElement(
            "p",
            "",
            phase.description || ""
        );

        content.appendChild(title);

        if (phase.date || phase.period) {

            const date = createElement(
                "span",
                "timeline-date",
                phase.date || phase.period
            );

            content.insertBefore(date, title);

        }

        content.appendChild(description);

        item.append(number, content);

        container.appendChild(item);

    });

}


/* =========================
   06 — CONTRIBUTIONS
========================= */

function renderContributions(project) {

    const container = getElement("[data-project-contributions]");

    if (!container || !Array.isArray(project.contributions)) return;

    container.replaceChildren();

    project.contributions.forEach((contribution, index) => {

        const item = createElement("article", "contribution-card");

        const number = createElement(
            "span",
            "",
            `CONTRIBUTION / ${String(index + 1).padStart(2, "0")}`
        );

        const title = createElement(
            "h3",
            "",
            typeof contribution === "string"
                ? contribution
                : contribution.title || "Contribution"
        );

        const description = createElement(
            "p",
            "",
            typeof contribution === "string"
                ? ""
                : contribution.description || ""
        );

        item.append(number, title);

        if (description.textContent) {
            item.appendChild(description);
        }

        container.appendChild(item);

    });

}


/* =========================
   07 — TECHNICAL POINTS
========================= */

function renderTechnicalPoints(project) {

    const container = getElement("[data-project-technical]");

    if (!container || !Array.isArray(project.technicalPoints)) return;

    container.replaceChildren();

    project.technicalPoints.forEach((point, index) => {

        const item = createElement("article", "technical-point");

        const media = createElement("div", "technical-media");

        const content = createElement("div", "technical-content");

        const number = createElement(
            "span",
            "",
            `POINT TECHNIQUE / ${String(index + 1).padStart(2, "0")}`
        );

        const title = createElement(
            "h3",
            "",
            point.title || `Point technique ${index + 1}`
        );

        const description = createElement(
            "p",
            "",
            point.description || ""
        );

        content.append(number, title, description);

        // Gestion des médias.
        const mediaPath = point.image || point.video || point.media;

        if (mediaPath) {

            const path = getAssetPath(mediaPath);

            const mediaType = point.mediaType ||
                (point.video ? "video" : "image");

            if (mediaType === "video") {

                const video = document.createElement("video");

                video.src = path;
                video.controls = true;
                video.preload = "metadata";

                media.appendChild(video);

            } else if (mediaType === "document") {

                const link = createElement(
                    "a",
                    "",
                    point.caption || "Consulter le document ↗"
                );

                link.href = path;
                link.target = "_blank";
                link.rel = "noopener noreferrer";

                media.appendChild(link);

            } else {

                const image = document.createElement("img");

                image.src = path;
                image.alt = point.alt || point.title || "Illustration du projet";
                image.loading = "lazy";

                image.onerror = () => {
                    image.remove();
                };

                media.appendChild(image);

            }

        } else {

            media.textContent = "ILLUSTRATION À AJOUTER";

        }

        // Légende de l'illustration.
        if (point.caption) {

            const caption = createElement(
                "p",
                "technical-caption",
                point.caption
            );

            content.appendChild(caption);

        }

        item.append(media, content);

        container.appendChild(item);

    });

}


/* =========================
   08 — POST MORTEM
========================= */

function renderPostMortem(project) {
    const postMortem = project.postMortem;
    if (!postMortem) return;
    const positive = getElement("[data-postmortem-positive]");
    if (positive) {
        positive.replaceChildren();
        if (postMortem.positive) {
            positive.appendChild(createElement("h4", "", "Points positifs"));
            const content = createElement("div");
            renderText(content, postMortem.positive);
            positive.appendChild(content);
        }
        if (postMortem.negative) {
            positive.appendChild(createElement("h4", "", "Difficultés rencontrées"));
            const content = createElement("div");
            renderText(content, postMortem.negative);
            positive.appendChild(content);
        }
    }
    renderText(getElement("[data-postmortem-feeling]"), postMortem.feeling);
    renderText(getElement("[data-postmortem-lessons]"), postMortem.lessons);
    renderText(getElement("[data-postmortem-improvements]"), postMortem.improvements);
}
