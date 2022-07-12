let oLastModif = new Date(document.lastModified);
let currentYear = oLastModif.getFullYear();
document.querySelector("#year").innerText = currentYear;
let dateFormated = oLastModif.toLocaleString();
document.getElementById("currentDate").innerText = dateFormated;
