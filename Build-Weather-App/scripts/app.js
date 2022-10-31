const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');


// updating UI:

const updateUI = (data)=>{


    // const cityDetails = data.cityDetails;
    // const weather = data.weather;

    // Destructure properties:
    /*  from object data, we get the cityDetails and weather properties 
    and store them in constant calld cityDetails and weather, and it is doing the same thing as
    creating const citydetails = data.cityDetails as above commented const
    */
    const {cityDetails, weather} = data;

    //  update details template:
    details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    //  update the night/day & icon images

    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    // Ternary operator:
    /*
    it is an operator which return a value or another based on a condition if it is true or not
    exactly the same as if statement, the syntax is:

    const result = condition ? 'value1' : 'value 2'

    if the condition is true, then will return value 1, if flase will return value 2
    */
    

    weather.IsDayTime ? (timeSrc = "img/day.svg") : (timeSrc = "img/night.svg");
    time.setAttribute('src', timeSrc)

    // let timeSrc = null;
    // if(weather.IsDayTime){
    //     timeSrc = 'img/day.svg';
    // }else{
    //     timeSrc = 'img/night.svg'
    // };

    // remove the d-none class if present:
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
    };

};


const updateCity = async (city) =>{

    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

/*object shorthand notation:
at the minute, the property name and the value looks exactly the same.
City debts and city debts, weather and weather.
Now, when that is the case, we can make use of something called object shorthand notation, which
is a fairly modern feature in the language.
So when this is the case, when we have a property name and a value that are exactly the same name we
can if we want to just delete one of them. */
    return {
        cityDetails,
        weather
    };
}

cityForm.addEventListener('submit', e=>{

    // prevernt default
    e.preventDefault();

    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //  update the ui with new city
    updateCity(city)
    .then(data => updateUI(data))
    .catch(err=> console.log(err));

    // set local storage:
    
    localStorage.setItem('city', city);

});

if(localStorage.getItem('city')){
    updateCity(localStorage.getItem('city'))
    .then(data=>updateUI(data))
    .catch(err=>console.log(err));
};