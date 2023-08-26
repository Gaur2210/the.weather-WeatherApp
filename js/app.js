const search_btn = document.querySelector('.searchicon');
const searchBar = document.querySelector('#searchbar');
const cloudy = document.querySelector('.cloudy');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');

const temp = document.querySelector('.temp');
const place = document.querySelector('.place');
const desc = document.querySelector('.condition');
const icon = document.querySelector('.icon');
const time = document.querySelector('.time');

search_btn.addEventListener('click',()=>{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchBar.value+
    '&appid=53e07259e69374467f61f7a531344d85')
      .then(response => response.json())
      .then(data => {
          const cloudyValue = data.clouds.all;
          const humidityValue = data.main.humidity;
          const windValue = data.wind.speed;
          const tempValue = data.main.temp;
          const placeValue = data.name;
          const countryName = data.sys.country;
          const condition = data.weather[0].main;
          const iconValue = data.weather[0].icon;
          
          cloudy.innerHTML= `${cloudyValue}%`;
          humidity.innerHTML= `${humidityValue}%`;
          wind.innerHTML= `${windValue} km/h`;

          temp.innerHTML= `${Math.ceil(tempValue-273.15)}&deg`;
          place.innerText= `${placeValue},${countryName}`;
          desc.innerHTML= `${condition}`;

          icon.src = `https://openweathermap.org/img/wn/${iconValue}@2x.png`;
          icon.style.display = "block";
      })
    
    .catch(error => alert('Wrong city name!'))    

});
