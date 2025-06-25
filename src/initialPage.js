// <div class="cards">
//     <div>
//         <h3>Our History</h2>
//         <p>This is a paragraph of something you really don't care about.</p>
//     </div>
//     <div>
//         <h3>Our Chef</h3>
//         <p>Here's something else you're not interested in</p>
//     </div>
//     <div>
//         <h3>Our Partners</h3>
//         <p>You just want the menu and hours but you can't have them.</p>
//     </div>
// </div>

const firstContent = document.createElement("div");

const cardContainer = document.createElement("div");
cardContainer.classList.add("cards");

const historyCard = document.createElement("div");
const historyTitle = document.createElement("h3");
const historyBlurb = document.createElement("p");
historyTitle.innerText = "Our History";
historyBlurb.innerText = "This is a paragraph of something you really don't care about.";
historyCard.appendChild(historyTitle);
historyCard.appendChild(historyBlurb);
cardContainer.appendChild(historyCard);

const chefCard = document.createElement("div");
const chefTitle = document.createElement("h3");
const chefBlurb = document.createElement("p");
chefTitle.innerText = "Our Chef";
chefBlurb.innerText = "Here's something else you're not interested in";
chefCard.appendChild(chefTitle);
chefCard.appendChild(chefBlurb);
cardContainer.appendChild(chefCard);

const partnersCard = document.createElement("div");
const partnersTitle = document.createElement("h3");
const partnersBlurb = document.createElement("p");
partnersTitle.textContent = "Our Partners";
partnersBlurb.innerText = "You just want the menu and hours but you can't have them.";
partnersCard.appendChild(partnersTitle);
partnersCard.appendChild(partnersBlurb);
cardContainer.appendChild(partnersCard);

firstContent.appendChild(cardContainer);

export default firstContent