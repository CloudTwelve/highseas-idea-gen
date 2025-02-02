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
