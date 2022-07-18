window.addEventListener("load", () => {
  const params = new URL(document.location).searchParams;
  const name = params.get("fname");
  const phone = params.get("phone");
  const email = params.get("email");
  const country = params.get("country");
  const checkin = params.get("checkin")
  const checkout = params.get("checkout")
  const location = params.get("location");
  const typeofroom = params.get("typeroom");
  const numberofroom = params.get("numberofroom");
  const description = params.get("description");
  const dateform = params.get("current-date");

  document.getElementById("name-form").innerHTML = name;
  document.getElementById("cellphone-form").innerHTML = phone;
  document.getElementById("email-form").innerHTML = email;
  document.getElementById("country-form").innerHTML = country;
  document.getElementById("checkin-form").innerHTML = checkin;
  document.getElementById("checkout-form").innerHTML = checkout;
  document.getElementById("location-form").innerHTML = location;
  document.getElementById("typeofroom-form").innerHTML = typeofroom;
  document.getElementById("numberofroom-form").innerHTML = numberofroom;
  document.getElementById("description-form").innerHTML = description;
  document.getElementById("date-form").innerHTML = dateform;
});
