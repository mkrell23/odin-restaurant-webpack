const menu = document.createElement("div");
menu.classList.add("cards");

const menuCard = document.createElement("div");
const header = document.createElement("h2");
header.textContent = "Our Menu";
menuCard.appendChild(header);
const desc = document.createElement("p");
desc.textContent = "The thing you really care about here";
menuCard.appendChild(desc);

const menuList = document.createElement("ul");
const menuItem1 = document.createElement("li");
const menuItem1Title = document.createElement("h3");
menuItem1Title.textContent = "Fried Chicken";
menuItem1.appendChild(menuItem1Title);
const menuItem1desc = document.createElement("p");
menuItem1desc.textContent = "Crispy Fried Chicken, I'm not sure what you're expecting"
menuItem1.appendChild(menuItem1desc);
menuList.appendChild(menuItem1);

const menuitem2 = document.createElement("li");
const menuitem2Title = document.createElement("h3");
menuitem2Title.textContent = "Flattened Fried Chicken";
menuitem2.appendChild(menuitem2Title);
const menuitem2desc = document.createElement("p");
menuitem2desc.textContent = "Crispy Fried Chicken, but we pound it flat this time"
menuitem2.appendChild(menuitem2desc);
menuList.appendChild(menuitem2);

const menuitem3 = document.createElement("li");
const menuitem3Title = document.createElement("h3");
menuitem3Title.textContent = "Sausage Platter";
menuitem3.appendChild(menuitem3Title);
const menuitem3desc = document.createElement("p");
menuitem3desc.textContent = "A delightful assortment of various sausages to enjoy"
menuitem3.appendChild(menuitem3desc);
menuList.appendChild(menuitem3);

menuCard.appendChild(menuList);

menu.appendChild(menuCard);

export default menu