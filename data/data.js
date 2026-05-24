const headshotPlaceholder = new URL("../images/headshot_placeholder.webp", import.meta.url).href;
const cardPlaceholderBg = new URL("../images/card_placeholder_bg.webp", import.meta.url).href;
const spotlightPlaceholderBg = new URL("../images/spotlight_placeholder_bg.webp", import.meta.url).href;

export const aboutMeData = {
  "bio": "Frontend developer passionate about creating modern and responsive web applications.",
  "headshot_url": headshotPlaceholder
};

export const projectsData = [
  {
    "project_id": 1,
    "project_name": "Hangman Game",
    "short_description": "Interactive word guessing game built with JavaScript.",
    "long_description": "An interactive Hangman word guessing game built with JavaScript. Players test their vocabulary and problem-solving skills by guessing hidden words before running out of attempts. The game includes dynamic UI updates, responsive interactions, and smooth gameplay mechanics.",
    "card_image": cardPlaceholderBg,
    "spotlight_image": spotlightPlaceholderBg,
    "url": "https://osamaabdallah8.github.io/Hangman-Game/"
  },
  {
    "project_id": 2,
    "project_name": "Memory Game",
    "short_description": "Interactive memory card matching game.",
    "long_description": "A fun and interactive memory card matching game developed using JavaScript. Players flip cards to find matching pairs while improving concentration and memory skills. The project includes responsive design, smooth animations, and dynamic game logic.",
    "card_image": cardPlaceholderBg,
    "spotlight_image": spotlightPlaceholderBg,
    "url": "https://osamaabdallah8.github.io/MemoryGame/"
  }
];
