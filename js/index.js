const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Task 1

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//Task 2

let navBar = document.querySelectorAll("a");
navBar[0].textContent = siteContent["nav"]["nav-item-1"];
navBar[1].textContent = siteContent["nav"]["nav-item-2"];
navBar[2].textContent = siteContent["nav"]["nav-item-3"];
navBar[3].textContent = siteContent["nav"]["nav-item-4"];
navBar[4].textContent = siteContent["nav"]["nav-item-5"];
navBar[5].textContent = siteContent["nav"]["nav-item-6"];

let title = document.querySelector("h1");
title.textContent = siteContent.cta.h1;

let button = document.querySelector("button");
button.textContent = siteContent.cta.button;

let smallTitle = document.querySelectorAll("h4");
smallTitle[0].textContent = siteContent["main-content"]["features-h4"];
smallTitle[1].textContent = siteContent["main-content"]["about-h4"];
smallTitle[2].textContent = siteContent["main-content"]["services-h4"];
smallTitle[3].textContent = siteContent["main-content"]["product-h4"];
smallTitle[4].textContent = siteContent["main-content"]["vision-h4"];
smallTitle[5].textContent = siteContent["contact"]["contact-h4"];

let content = document.querySelectorAll("p");
content[0].textContent = siteContent["main-content"]["features-content"];
content[1].textContent = siteContent["main-content"]["about-content"];
content[2].textContent = siteContent["main-content"]["services-content"];
content[3].textContent = siteContent["main-content"]["product-content"];
content[4].textContent = siteContent["main-content"]["vision-content"];
content[5].textContent = siteContent["contact"]["address"];
content[6].textContent = siteContent["contact"]["phone"];
content[7].textContent = siteContent["contact"]["email"];
content[8].textContent = siteContent["footer"]["copyright"];

//Task 3

for (var i = 0; i < navBar.length; i++){
  navBar[i].style.color = 'green';
}


let nav = document.querySelector("nav");
let a = document.createElement('a');
let a2 = document.createElement('a');
nav.prepend(a);
nav.appendChild(a2);
a.textContent = "Home";
a2.textContent = "Alone";
a.setAttribute('href', "#")
a2.setAttribute('href', "#")
a.style.color = 'green';
a2.style.color = 'green';

//Stretch

let blues = document.getElementsByTagName('h4');
for (var i = 0; i < blues.length; i++){
  blues[i].style.color = 'blue';
}

let reds = document.getElementsByTagName('p');
for (var i = 0; i < reds.length; i++){
  reds[i].style.color = 'red';
}