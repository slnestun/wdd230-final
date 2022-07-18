const cards = document.getElementById("cards");

const requestURL = "https://slnestun.github.io/wdd230-final/data/temple-list.json";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temple = jsonObject["temples"];
    temple.forEach(displayTemples);
    console.log(temple)
  });

  function displayTemples(temple){
    let cardView = document.createElement("div");
    cardView.setAttribute("class", "temple-card");
    let imgDiv = document.createElement("div");
    imgDiv.setAttribute("class","img-temple");
    let image = document.createElement("img");
    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", `${temple.templesName} Logo`);
    image.setAttribute("height", `500`);
    image.setAttribute("width", `800`);
    let container = document.createElement("div");
    container.setAttribute("class", "container");
    let h3 = document.createElement("h3");
    h3.textContent = `${temple.templeName}` 
    let p = document.createElement("p");
    p.textContent = `Addres: ${temple.address}`;
    let p1 = document.createElement("p");
    p1.textContent = `Telephone: ${temple.phone}`;
    let p2 = document.createElement("p");
    p2.textContent = `Email: ${temple.email}`;
    let p3 = document.createElement("p");
    p3.textContent = `Services: ${temple.services}`;
    cardView.appendChild(imgDiv);
    imgDiv.appendChild(image);
    cardView.appendChild(container);
    container.appendChild(h3);
    container.appendChild(p);
    container.appendChild(p1);
    container.appendChild(p2);
    container.appendChild(p3);
    document.querySelector("#cards").appendChild(cardView);

  }

  