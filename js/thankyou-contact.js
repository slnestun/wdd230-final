window.addEventListener("load", () => {
    const params = new URL(document.location).searchParams;
    const name = params.get("fname");
    const phone = params.get("phone");
    const email = params.get("email");
    const description = params.get("description");
    const dateform = params.get("current-date");
  
    document.getElementById("name-form").innerHTML = name;
    document.getElementById("cellphone-form").innerHTML = phone;
    document.getElementById("email-form").innerHTML = email;
    document.getElementById("description-form").innerHTML = description;
    document.getElementById("date-form").innerHTML = dateform;
  });
  