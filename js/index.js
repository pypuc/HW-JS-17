// 1
const buttonElement = document.querySelector(".practice-button")
const textElement = document.querySelector(".practice-text")
buttonElement.textContent = "button rename"
console.log(buttonElement)

// 2
const pictureElement = document.querySelector(".practice-picture");
pictureElement.setAttribute("src", "https://bon-boisson.ua/wp-content/uploads/2023/09/Dyzajn-bez-nazvanyia-16.png");

// 3
const imgElement = document.querySelector(".practice-img");
const linkElement = document.querySelector(".practice-link");
linkElement.setAttribute("href", "https://rozetka.com.ua/")
imgElement.setAttribute("alt", "чайочок")
const check = imgElement.hasAttribute("alt");
console.log(check)

// 4
const firstItem = document.querySelector("ul li");
firstItem.textContent = "чай";



