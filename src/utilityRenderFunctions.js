export const FALLBACKS = {
    aboutText: "Frontend Developer passionate about modern web experiences.",
    aboutImage: "images/headshots.jpeg",
    projectName: "Untitled Project",
    shortDesc: "No description available.",
    longDesc: "No detailed description available.",
    url: "#",
    cardImage: "images/card_placeholder_bg.webp",
    spotlightImage: "images/spotlight_placeholder_bg.webp"
};

export function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

export function showError(element, message) {
    if (element) {
        element.textContent = message;
        element.classList.add('error');
    }
}

export function clearError(element) {
    if (element) {
        element.textContent = '';
        element.classList.remove('error');
    }
}

export function renderCharCounter(messageInput) {
    let counterEl = document.getElementById('charCount');
    if (!counterEl && messageInput) {
        counterEl = document.createElement('div');
        counterEl.id = 'charCount';
        counterEl.className = 'counter';
        messageInput.parentNode.insertBefore(counterEl, messageInput.nextSibling);
    }
    return counterEl;
}

export function updateCharCounter(length, counterEl) {
    if (!counterEl) return;
    const MAX_LENGTH = 300;
    const remaining = MAX_LENGTH - length;
    
    counterEl.textContent = `${remaining} characters remaining`;
    
    if (remaining < 0) {
        counterEl.classList.add('error');
    } else {
        counterEl.classList.remove('error');
    }
}

export function renderAboutMe(aboutMeData) {
    const container = document.getElementById('aboutMe');
    if (!container) return;
    
    let bio = container.querySelector('p');
    let headshotContainer = container.querySelector('.headshotContainer');
    let img = headshotContainer ? headshotContainer.querySelector('img') : null;

    if (!bio || !headshotContainer || !img) {
        clearElement(container);

        bio = document.createElement('p');
        
        headshotContainer = document.createElement('div');
        headshotContainer.className = 'headshotContainer';

        img = document.createElement('img');
        img.alt = "Profile Headshot";

        headshotContainer.appendChild(img);
        container.appendChild(bio);
        container.appendChild(headshotContainer);
    }

    bio.textContent = aboutMeData?.bio || FALLBACKS.aboutText;
    img.src = 'images/headshots.jpeg';
    
    img.addEventListener('error', () => {
        img.src = FALLBACKS.aboutImage;
    }, { once: true });
}

export function renderProjectsList(projectsData, createProjectCard) {
    const container = document.getElementById('projectsList');
    if (!container) return;

    clearElement(container);
    
    const fragment = document.createDocumentFragment();
    const projects = Array.isArray(projectsData) ? projectsData : [];

    projects.forEach((project, index) => {
        const card = createProjectCard(project, index, FALLBACKS);
        fragment.appendChild(card);
    });

    container.appendChild(fragment);
}

export function renderSpotlight(project) {
    const container = document.getElementById('projectSpotlight');
    if (!container) return;

    let titleEl = document.getElementById('spotlightTitles');
    let descEl = container.querySelector('p');
    let linkEl = container.querySelector('a');

    if (!titleEl || !descEl || !linkEl) {
        clearElement(container);

        titleEl = document.createElement('h3');
        titleEl.id = 'spotlightTitles';

        descEl = document.createElement('p');

        linkEl = document.createElement('a');
        linkEl.textContent = "Click here to see more...";

        container.appendChild(titleEl);
        container.appendChild(descEl);
        container.appendChild(linkEl);
    }

    titleEl.textContent = project.project_name || FALLBACKS.projectName;
    descEl.textContent = project.long_description || project.short_description || FALLBACKS.longDesc;
    
    linkEl.href = project.url || FALLBACKS.url;

    const bgImage = project.spotlight_image || FALLBACKS.spotlightImage;
    container.style.backgroundImage = `url('${bgImage}')`;
}

export function renderFooter() {
    const footer = document.getElementById('mainFooter');
    if (!footer) return;

    footer.innerHTML = `&copy; 2026 <span class="footer-name">Osama Abdallah</span> &mdash; All Rights Reserved`;
}
