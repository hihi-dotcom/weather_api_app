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
        puttingDataIntoSpans(adat)

    )
    .catch(() => 
        console.log("A beírt város nem található!!!")
    )
}
function puttingDataIntoSpans(tomb){
    $("nev").innerHTML = tomb.name;
    $("idojaras").innerHTML = tomb.weather[0].main;
    $("idojaras_bo").innerHTML = tomb.weather[0].description;
    fetchingIcon(tomb.weather[0].icon);
    $("hom").innerHTML = tomb.main.temp;
    $("hom_erzes").innerHTML = tomb.main.feels_like;
    $("legnyomas").innerHTML = tomb.main.pressure;
    $("para").innerHTML = tomb.main.humidity;
    $("szel").innerHTML = tomb.wind.speed;
    $("orszag").innerHTML = tomb.sys.country;

}

function fetchingIcon(bemeneti_tomb_prop){
    const url = `https://openweathermap.org/img/wn/${bemeneti_tomb_prop}@2x.png`;
     $("idojaras_ikon").innerHTML = `<img src="${url}">`;
;
}
$('button-kereses').addEventListener('click', IdojarasKereses);
$('varos-kereses').addEventListener('keypress', e => {
    if(e.key === 'Enter'){
        IdojarasKereses();
    }
})