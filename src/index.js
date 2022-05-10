const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

// footer
const footerlink = document.querySelector('footer a');
footerlink.textContent = siteContent.footer.copyright;
footerlink.classList.add('bold');

// contact
const contact = document.querySelector('section.contact');
contact.children[0].textContent = siteContent.contact["contact-h4"];
contact.children[1].textContent = siteContent.contact.address;
contact.children[2].textContent = siteContent.contact.phone;
contact.children[3].textContent = siteContent.contact.email;

// main content
const main = document.querySelector('.main-content');

// top
const top = document.querySelector('.top-content');
top.children[0].children[0].textContent = siteContent["main-content"]["features-h4"];
top.children[0].children[0].classList.add('text-content');
top.children[0].children[1].textContent = siteContent["main-content"]["features-content"];
top.children[0].children[1].classList.add('text-content');
top.children[1].children[0].textContent = siteContent["main-content"]["about-h4"];
top.children[1].children[0].classList.add('text-content');
top.children[1].children[1].textContent = siteContent
["main-content"]["about-content"];
top.children[1].children[1].classList.add('text-content');

// middle img 
const middleImg = document.querySelector('#middle-img');
middleImg.classList.add('middle-img');
middleImg.setAttribute('src', siteContent.images["accent-img"]);

// bottom

const bottom = document.querySelector('.bottom-content');
bottom.children[0].children[0].textContent = siteContent["main-content"]["services-h4"];
bottom.children[0].children[0].classList.add('text-content');
bottom.children[0].children[1].textContent = siteContent["main-content"]["services-content"];
bottom.children[0].children[1].classList.add('text-content');
bottom.children[1].children[0].textContent = siteContent["main-content"]["product-h4"];
bottom.children[1].children[0].classList.add('text-content');
bottom.children[1].children[1].textContent = siteContent["main-content"]["product-content"];
bottom.children[1].children[1].classList.add('text-content');
bottom.children[2].children[0].textContent = siteContent["main-content"]["vision-h4"];
bottom.children[2].children[0].classList.add('text-content');
bottom.children[2].children[1].textContent = siteContent["main-content"]["vision-content"];
bottom.children[2].children[1].classList.add('text-content');

// cta
const cta = document.querySelector('.cta');
const ctaText = document.querySelector('.cta-text');
ctaText.children[0].textContent = siteContent.cta.h1;
ctaText.children[1].textContent = siteContent.cta.button;

// cta-img
const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent.images["cta-img"]);

// header
const container = document.querySelector('.container');
const header = document.querySelector('header');
const nav = document.querySelector('header nav');
nav.children[0].textContent = siteContent.nav["nav-item-1"];
nav.children[0].classList.add('italic');
nav.children[1].textContent = siteContent.nav["nav-item-2"];
nav.children[1].classList.add('italic');
nav.children[2].textContent = siteContent.nav["nav-item-3"];
nav.children[2].classList.add('italic');
nav.children[3].textContent = siteContent.nav["nav-item-4"];
nav.children[3].classList.add('italic');
nav.children[4].textContent = siteContent.nav["nav-item-5"];
nav.children[4].classList.add('italic');
nav.children[5].textContent = siteContent.nav["nav-item-6"];
nav.children[5].classList.add('italic');

// logo img 
const logoImg = document.querySelector('#logo-img');
logoImg.classList.add('logo');
logoImg.setAttribute('src', siteContent.images["logo-img"]);






