// const btn = document.querySelector('.btn');
function getData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=69128368e7fda9431f3c1118acf5b94e')
    .then(function (resp){
        return resp.json()
    })
    .then(function (data){
        document.querySelector('.city-name').textContent = data.name;
        document.querySelector('.temp').innerHTML = `${Math.floor((data.main.temp-273))}&degC`;
        // document.querySelector('.feels').innerHTML = `feels like ${Math.floor((data.main.feels_like-273))}&degC  `;
        document.querySelector('.humidity').textContent = `humidity: ${data.main.humidity}%`;
        document.querySelector('.pressure').textContent = `pressure: ${data.main.pressure}hPa`;
        document.querySelector('.wind').textContent = `wind: ${data.wind.speed}m/s`;
        document.querySelector('.descr').textContent = data.weather[0]['description'];
        console.log(data)
    })
    .catch(function(){
        
    })
}
// btn.addEventListener('click', getData)
getData()
    