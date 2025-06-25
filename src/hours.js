const hours = document.createElement("div");
hours.classList.add("hours");

const midWeek = document.createElement("h3");
midWeek.innerText = "Tuesday - Thursday";
hours.appendChild(midWeek);
const midWeekHours = document.createElement("p");
midWeekHours.innerText = "11am - 8pm";
hours.appendChild(midWeekHours);

const weekEnd = document.createElement("h3");
weekEnd.innerText = "Friday - Sunday";
hours.appendChild(weekEnd);
const weekEndHours = document.createElement("p");
weekEndHours.innerText = "11am - 10pm";
hours.appendChild(weekEndHours);

const monday = document.createElement("h3");
monday.innerText = "CLOSED MONDAYS";
hours.appendChild(monday);

export default hours