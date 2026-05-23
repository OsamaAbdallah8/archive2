import { aboutMeData, projectsData } from '../data/data.js';
import { renderAboutMe, renderProjectsList, renderSpotlight, renderFooter, FALLBACKS, renderCharCounter, updateCharCounter, showError, clearError } from './utilityRenderFunctions.js';
import { shuffle } from './Shuffle.js';

function createProjectCard(project, index, fallbacks) {
    const card = document.createElement('div');
    card.className = 'projectCard';
    card.dataset.id = project.project_id || `proj_${index}`;
    
    const bgImage = project.card_image || fallbacks.cardImage;
    card.style.backgroundImage = `url('${bgImage}')`;

    const title = document.createElement('h4');
    title.textContent = project.project_name || fallbacks.projectName;

    const desc = document.createElement('p');
    desc.textContent = project.short_description || fallbacks.shortDesc;

    card.appendChild(title);
    card.appendChild(desc);

    return card;
}

function bindProjectListEvents() {
    const container = document.getElementById('projectsList');
    if (!container) return;

    container.addEventListener('click', (e) => {
        const card = e.target.closest('.projectCard');
        if (!card) return;

        const projectId = card.dataset.id;
        const projects = Array.isArray(projectsData) ? projectsData : [];
        
        const project = projects.find((p, idx) => {
            const pId = p.project_id ? String(p.project_id) : `proj_${idx}`;
            return pId === String(projectId);
        });

        if (project) {
            renderSpotlight(project);
        }
    });
}

function bindScrollingEvents() {
    const container = document.getElementById('projectsList');
    if (!container) return;

    const prevBtn = document.getElementById('prevArrow');
    const nextBtn = document.getElementById('nextArrow');

    const scrollAmount = 300;

    const handleScroll = (direction) => {
        const offset = direction === 'next' ? scrollAmount : -scrollAmount;
        container.scrollBy({ top: offset, behavior: 'smooth' });
    };

    if (prevBtn) prevBtn.addEventListener('click', () => handleScroll('prev'));
    if (nextBtn) nextBtn.addEventListener('click', () => handleScroll('next'));
}

function validateEmail(value, errorEl) {
    const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const illegalCharsRegex = /[^a-zA-Z0-9@._\-\s]/;

    if (!value) {
        showError(errorEl, "Email cannot be empty.");
        return false;
    } 
    if (!validEmailRegex.test(value)) {
        showError(errorEl, "Please enter a valid email format.");
        return false;
    } 
    if (illegalCharsRegex.test(value)) {
        showError(errorEl, "Email contains illegal characters.");
        return false;
    }
    return true;
}

function validateMessage(value, errorEl) {
    const illegalCharsRegex = /[^a-zA-Z0-9@._\-\s]/;
    const MAX_LENGTH = 300;

    if (!value || value.trim() === '') {
        showError(errorEl, "Message cannot be empty.");
        return false;
    } 
    if (illegalCharsRegex.test(value)) {
        showError(errorEl, "Message contains illegal characters.");
        return false;
    } 
    if (value.length > MAX_LENGTH) {
        showError(errorEl, `Message exceeds maximum length of ${MAX_LENGTH} characters.`);
        return false;
    }
    return true;
}

function handleFormSubmit(e, emailInput, messageInput) {
    e.preventDefault(); 

    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    clearError(emailError);
    clearError(messageError);

    const emailValue = emailInput ? emailInput.value.trim() : '';
    const messageValue = messageInput ? messageInput.value : '';

    const isEmailValid = validateEmail(emailValue, emailError);
    const isMessageValid = validateMessage(messageValue, messageError);

    if (isEmailValid && isMessageValid) {
        alert('Form submitted successfully!');
    }
}

function bindContactFormEvents() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.setAttribute('novalidate', true);

    const emailInput = form.querySelector('input[type="email"]') || document.getElementById('email') || form.querySelector('[name="email"]');
    const messageInput = form.querySelector('textarea') || document.getElementById('message') || form.querySelector('[name="message"]');
    
    if (messageInput && messageInput.hasAttribute('maxlength')) {
        messageInput.removeAttribute('maxlength');
    }

    const counterEl = renderCharCounter(messageInput);

    if (messageInput) {
        updateCharCounter(messageInput.value.length, counterEl);
        messageInput.addEventListener('input', (e) => {
            updateCharCounter(e.target.value.length, counterEl);
        });
    }

    form.addEventListener('submit', (e) => handleFormSubmit(e, emailInput, messageInput));
}

function initApp() {
    renderAboutMe(aboutMeData);
    renderProjectsList(projectsData, createProjectCard);
    renderFooter();
    bindProjectListEvents();
    bindScrollingEvents();
    bindContactFormEvents();
    
    if (projectsData && projectsData.length > 0) {
        renderSpotlight(projectsData[0]);
    }
}

document.addEventListener('DOMContentLoaded', initApp);
