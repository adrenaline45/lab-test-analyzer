let burger = document.getElementById("burger");
let header = document.getElementById("header");

const CLOSED_HEADER_HEIGHT = 60 + "px";
const OPENED_HEADER_HEIGHT = 250 + "px";
const NUMBER_OF_QUESTIONS = 6;

const onBurgerClick = () => {
  let height = header.style.height;

  header.style.height = height !== OPENED_HEADER_HEIGHT ? OPENED_HEADER_HEIGHT : CLOSED_HEADER_HEIGHT;
  burger.classList.toggle("change-burger");
}

const onNavItemClick = (navItemId, contentId) => {
  const navItem = document.getElementById(navItemId);

  if (!navItem) {
    return;
  }

  navItem.addEventListener("click", scrollToElement.bind(this, contentId));
}

const scrollToElement = (id) => {
  const element = document.getElementById(id);
  
  if (!element) {
    return;
  }
  
  element.scrollIntoView({ behavior: "smooth" });
  onBurgerClick();
};

const setQuestionListener = () => {
  for (let i = 1; i <= NUMBER_OF_QUESTIONS; i++) {
    let closeBtn = document.getElementById("close" + i);
    let questionBox = document.getElementById("questionBox" + i);

    if (!closeBtn || !questionBox) {
      return;
    }

    closeBtn.addEventListener("click", () => {
      questionBox.classList.toggle("toggle-question");
    });
  }
};

burger.addEventListener("click", onBurgerClick);

onNavItemClick("howItWorksNav", "howItWorksContent");
onNavItemClick("pricingNav", "pricingContent");
onNavItemClick("meetTheTeamNav", "meetTheTeamContent");

setQuestionListener();