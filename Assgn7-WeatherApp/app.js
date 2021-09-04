const apiKey = 'b48f2fff5f1f52d7948e000544803467';
const form = document.querySelector('form'); 
const temp = document.querySelector('.temp');
const t_minmax = document.querySelector('.t_minmax');
const loc = document.querySelector('.loc');
const type = document.querySelector('.type');

function getWeather(city){
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.dir(data);
        const tempData = data.main.temp;
        const mintemp = data.main.temp_min;
        const maxtemp = data.main.temp_max;
        const place = data.name;
        const w_type = data.weather[0].main;

        loc.textContent = `${place}`;
        temp.textContent = `${tempData.toFixed(1)} °C`;
        t_minmax.textContent = `Hi: ${mintemp.toFixed(0)} °C | Lo: ${maxtemp.toFixed(0)} °C`;
        type.textContent = `${w_type}`;

    
    })
    
    .catch((err)=>{
        console.log(err.message);
    });
}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const city = form.elements[0].value;
    getWeather(city);

    form.elements[0].value="";
})
