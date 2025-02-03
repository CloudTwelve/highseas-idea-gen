const beginnerWebsites = [
  ["displays random quotes", "uses a simple API"],
  ["helps track daily tasks", "implements a to-do list with local storage"],
  ["shows a gallery of images", "includes a responsive navbar"],
  ["provides a personal portfolio", "validates password strength"],
  ["generates password suggestions", "fetches data from an external JSON file"],
  ["converts units (e.g., miles to km)", "allows users to change themes"],
  ["shows a clock with different time zones", "adds basic animations"],
  ["teaches basic math skills", "implements a simple search filter"],
  ["shares daily motivational tips", "has dark/light mode toggle"],
  ["displays upcoming tasks", "includes user-input values"],
];

const intermediateWebsites = [
  ["allows users to create notes", "implements a database for storage"],
  ["displays live weather data", "fetches and updates information dynamically"],
  ["offers an interactive quiz", "tracks and saves user progress"],
  ["helps users find recipes", "uses an external API to fetch data"],
  ["lets users draw and save sketches", "implements a canvas-based drawing tool"],
  ["tracks expenses over time", "includes a user authentication system"],
  ["displays stock market trends", "adds real-time data visualization"],
  ["generates personalized workout plans", "integrates a chatbot for user support"],
  ["creates a personal finance dashboard", "includes user-uploaded content"],
  ["compares prices across different stores", "supports offline mode with service workers"],
];

const advancedWebsites = [
  ["functions as a social media feed", "implements real-time updates using WebSockets"],
  ["creates an AI-powered chatbot", "integrates an NLP model for conversations"],
  ["tracks fitness activities", "visualizes data using interactive charts"],
  ["manages user authentication", "includes OAuth and multi-factor authentication"],
  ["hosts a multiplayer browser game", "runs on a microservices architecture"],
  ["builds an AI image generation tool", "uses blockchain for data security"],
  ["runs a decentralized voting system", "incorporates AI-driven recommendations"],
  ["manages IoT smart home devices", "allows multi-user collaboration in real time"],
  ["simulates statistics samples for learning", "optimizes performance with server-side rendering"],
];

const themeEffects = [
  ["Cyberpunk", "Neon glow effects"],
  ["Minimalist", "Smooth fade-in transitions"],

let genButton = document.querySelector("button");
let dropdown = document.querySelector("#levels");
let themeCont = document.querySelector("#themecont");
let ideaCont = document.querySelector("#ideacont");
let currentArr;

genButton.addEventListener('click', () => {
  switch (dropdown.value) {
    case "Beginner":
      currentArr = beginnerWebsites;
      break;
    case "Intermediate":
      currentArr = intermediateWebsites;
      break;
    case "Advanced":
      currentArr = advancedWebsites;
      break;
    default:
      currentArr = beginnerWebsites;
} 
  let [func, imp] = genRandomXY(currentArr);
  let [theme, effect] = genRandomXY(themeEffects);
  let ideaStr = "Hmm... What about a website that " + func + " and " + imp + "?";
  let themeStr = "A(n) " + theme + " theme and a(n) " + effect + ".";
  ideaCont.textContent = ideaStr;
  themeCont.textContent = themeStr;
});
