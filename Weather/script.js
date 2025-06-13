const btn = document.getElementById("btn");
const place = document.getElementById("place");
const img = document.getElementById("img");
const humidity = document.getElementById("humidity");
const temp = document.getElementById("temp");
const winds = document.getElementById("wind");

const apihandler = async (val) => {
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=fc67731a8ebafd1846bc27fd4df75cf2`;
  const data = await fetch(api);
  const response = await data.json();
  console.log(response);
  const { cod, name, weather, main, wind } = response;

  if (cod === 200) {
    console.log("data received");
    place.innerText = name;
    humidity.innerText = main.humidity;
    const w_data = weather?.[0].main;
    temp.innerHTML = Math.round(main.temp - 273.15);
    winds.innerHTML = wind.speed + "km/hr";

    switch (w_data) {
      case "Clouds":
        img.src = "images/clouds.png";
        break;
      case "Mist":
        img.src = "images/mist.png";
        break;
      case "Drizzle":
        img.src = "images/drizzle.png";
        break;
      case "Rain":
        img.src = "images/rain.png";
        break;
      case "Snow":
        img.src = "images/snow.png";
        break;
      case "Clear":
        img.src = "images/clear.png";
        break;
    }
  } else {
    alert("Enter a Correct city");
    console.log("Error occured");
  }
};

// Adding Event listener for handling the function when the button is clicked
btn.addEventListener("click", () => {
  btnhandler();
});

const btnhandler = (v) => {
  const input = document.getElementById("city").value;
  // APi function called and input value is passed in the parameter
  apihandler(input ? input : v);
};
// It is used for initially call a api pass parameter as nagercoil
window.onload = btnhandler("nagercoil");

const input = document.getElementById("city");
input.addEventListener("keypress", (keypress) => {
  //if we press enter it call the function
  if (keypress.key === "Enter") {
    btnhandler();
  }
});
