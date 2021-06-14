let city = " "
let api = `https://api.weatherapi.com/v1/current.json?key=783efe18101246e8b38185020210806&q=${city}&aqi=no`
const weatherCollection = document.getElementById("weather-collection");
const submit = document.querySelector(".submit")
const inputText = document.querySelector(".input-text")



function showCity(city){
    console.log("city", city)

    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const p1 = document.createElement('p1');
    const button = document.createElement('button');
    const addbtn = document.createElement('button');
    const img = document.createElement('img');
    const fahrenheit = city.current.temp_f + " " + '°F';
    const celcius = city.current.temp_c + " " + '°C';
    const space = " ";
    
    div.className = "card"
    h3.innerHTML = city.location.name + ", " + city.location.region 
    p.innerHTML  = city.current.condition.text 
    button.innerHTML = fahrenheit;
    addbtn.innerHTML = "delete"
    p1.innerHTML = "Wind speed:" + " " + city.current.wind_mph + " " + "Mph"
    img.src = "http:" + city.current.condition.icon

    

    button.addEventListener('click', (e) => {
        if (button.innerHTML === fahrenheit){
            button.innerHTML = celcius;
        }else {
            button.innerHTML = fahrenheit;
        }
    })

    
    addbtn.addEventListener('click', (e) => {
        div.remove()
    })
    
    p.append(img)
    h3.append(p, p1, space, addbtn)

    div.append(h3, button)
    weatherCollection.append(div)
    
}

inputText.addEventListener('change', (e) => {
        city = e.target.value
    })
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(city)
        fetch(`https://api.weatherapi.com/v1/current.json?key=783efe18101246e8b38185020210806&q=${city}&aqi=no&foo=bar`)
       .then(resp => resp.json())
       .then(city => showCity(city))
       .catch(() => {
        alert("Please search for a valid city")
       })
     })

    