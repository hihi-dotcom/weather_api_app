const WeatherApiKey = "e11abb9259e9d4b7f9533776fceb61ff";

function $(string){
    return document.getElementById(string)
}

function IdojarasKereses(){
    let varos = $('varos-kereses').value
    varos = varos.trim();
    varos = varos.replaceAll(' ','+');

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${varos}&appid=${WeatherApiKey}`;

    fetch(URL)
    .then(resp => 
        resp.json()
    )
    .then(adat => 
        console.log(adat)
    )
    .catch(() => 
        console.log("A beírt város nem található!!!")
    )
}



$('button-kereses').addEventListener('click', IdojarasKereses);
$('varos-kereses').addEventListener('keypress', e => {
    if(e.key === 'Enter'){
        IdojarasKereses();
    }
})