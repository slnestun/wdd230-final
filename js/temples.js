const cards = document.getElementById("cards");

const requestURL = "https://slnestun.github.io/wdd230-final/data/temple-list.json";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temple = jsonObject["temples"];
    temple.forEach(displayTemples);
  });

function displayTemples(temple){
    let cardView = document.createElement("div");
    cardView.setAttribute("class", "temple-card");
    let imgDiv = document.createElement("div");
    imgDiv.setAttribute("class","img-temple");
    let image = document.createElement("img");
    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", `${temple.templeName} Logo`);
    image.setAttribute("height", `400`);
    image.setAttribute("width", `600`);
    let hover = document.createElement("div");
    hover.setAttribute("class","hover-image");
    let container = document.createElement("div");
    container.setAttribute("class", "container");
    let h3 = document.createElement("h3");
    h3.textContent = `${temple.templeName}`; 
    let p = document.createElement("p");
    p.textContent = `Addres: ${temple.address}`;
    let p1 = document.createElement("p");
    p1.textContent = `Telephone: ${temple.phone}`;
    let p2 = document.createElement("p");
    p2.textContent = `Email: ${temple.email}`;
    let p3 = document.createElement("p");
    p3.textContent = `Services: ${temple.services}`;
    let p4 = document.createElement("p");
    p4.textContent = `Ordinandce Schedule: ${temple.ordinance_schedule}`;
    let p5 = document.createElement("p");
    p5.textContent = `Session Schedule: ${temple.session_schedule}`;
    let p6 = document.createElement("p");
    p6.textContent = `Closure Schedule: ${temple.closure_schedule}`;
    hover.textContent = `${temple.history}`;
    let likeCounter = Number(window.localStorage.getItem(temple.templeName));
    let likeIcon = document.createElement("i");
    likeIcon.setAttribute("class","material-icons");
    likeIcon.setAttribute("id",`${temple.templeName}`);
    likeIcon.textContent = `thumb_up`;
    
    let likeView = document.createElement("p");
    likeView.textContent = `${likeCounter} Likes`
    
    cardView.appendChild(imgDiv);
    imgDiv.appendChild(image);
    cardView.appendChild(hover);
    cardView.appendChild(container);
    container.appendChild(h3);
    container.appendChild(p);
    container.appendChild(p1);
    container.appendChild(p2);
    container.appendChild(p3);
    container.appendChild(p4);
    container.appendChild(p5);
    container.appendChild(p6);
    container.appendChild(likeIcon);
    likeIcon.appendChild(likeView);
    document.querySelector("#cards").appendChild(cardView);

    function likeCount (){
        likeCounter++;
        localStorage.setItem(likeIcon.id,likeCounter);
        window.location.reload();
    }
    likeIcon.onclick = likeCount;
}



  