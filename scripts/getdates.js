// getdates.js

// Get the current year for copyright
const currentYear = new Date().getFullYear();

// Insert the current year into the first paragraph of the footer
document.querySelector('footer p:nth-of-type(1)').innerHTML = 
    `&copy; ${currentYear} 🕸️ Nduka Ikor 🕸️ Nigeria`;

// Insert the last modified date into the second paragraph of the footer
document.getElementById('lastModified').innerHTML = document.lastModified;