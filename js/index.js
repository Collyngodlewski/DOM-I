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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let firstImg = document.getElementById("cta-img");
firstImg.setAttribute('src', siteContent["cta"]["img-src"]);

let secondImg = document.getElementById("middle-img");
secondImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//  Updating HTML

// Nav
const nav1 = document.querySelector('.container a:nth-of-type(1)');
const nav2 = document.querySelector('.container a:nth-of-type(2)');
const nav3 = document.querySelector('.container a:nth-of-type(3)');
const nav4 = document.querySelector('.container a:nth-of-type(4)');
const nav5 = document.querySelector('.container a:nth-of-type(5)');
const nav6 = document.querySelector('.container a:nth-of-type(6)');

nav1.textContent = siteContent['nav']['nav-item-1'];
nav2.textContent = siteContent['nav']['nav-item-2'];
nav3.textContent = siteContent['nav']['nav-item-3'];
nav4.textContent = siteContent['nav']['nav-item-4'];
nav5.textContent = siteContent['nav']['nav-item-5'];
nav6.textContent = siteContent['nav']['nav-item-6'];



// CTA
const ctah1 = document.querySelector('.cta-text h1');
ctah1.textContent = siteContent['cta']['h1'];

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button'];


// Main content 

const firstText = document.querySelector('.top-content .text-content:nth-of-type(1) h4');
firstText.textContent = siteContent['main-content']['features-h4'];

const firstTextTwo = document.querySelector('.top-content .text-content:nth-of-type(1) p');
firstTextTwo.textContent = siteContent['main-content']['features-content'];

const secondText = document.querySelector('.top-content .text-content:nth-of-type(2) h4');
secondText.textContent = siteContent['main-content']['about-h4'];

const secondTextTwo = document.querySelector('.top-content .text-content:nth-of-type(2) p');
secondTextTwo.textContent = siteContent['main-content']['about-content'];


// Bottom Content

const firstBottom = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4');
firstBottom.textContent = siteContent ['main-content']['services-h4'];

const firstBottomText = document.querySelector('.bottom-content .text-content:nth-of-type(1) p');
firstBottomText.textContent = siteContent ['main-content']['services-content'];

const secondBottom = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
secondBottom.textContent = siteContent['main-content']['product-h4'];

const secondBottomText = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
secondBottomText.textContent = siteContent['main-content']['product-content'];

const thirdBottom = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
thirdBottom.textContent = siteContent['main-content']['vision-h4'];

const thirdBottomText = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');
thirdBottomText.textContent = siteContent['main-content']['vision-content'];





//Contact
const contactH4 = document.querySelector('.contact h4');
const address = document.querySelector('.contact p:nth-of-type(1)');
const phone = document.querySelector('.contact p:nth-of-type(2)');
const email = document.querySelector('.contact p:nth-of-type(3)');

contactH4.textContent = siteContent['contact']['contact-h4'];
address.textContent = siteContent['contact']['address'];
phone.textContent = siteContent['contact']['phone'];
email.textContent = siteContent['contact']['email'];



// Footer
const footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];

// Changing color
nav1.style.color = 'green';
nav2.style.color = 'green';
nav3.style.color = 'green';
nav4.style.color = 'green';
nav5.style.color = 'green';
nav6.style.color = 'green';


// Creating new elements

const blog = document.createElement('a');
blog.textContent = 'Blog';
blog.href = '#';
document.querySelector('nav').appendChild(blog);
blog.style.color = 'green';

const youtube = document.createElement('a');
youtube.textContent = 'Youtube';
youtube.href = '#';
youtube.prepend("Youtube", '#');
