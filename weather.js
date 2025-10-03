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
    .catch((err) => 
        console.log(err)
    )
}
function puttingDataIntoSpans(tomb){

    $("idojaras").innerHTML = tomb.weather[0].main;
    $("idojaras_bo").innerHTML = tomb.weather[0].description;
    fetchingIcon(tomb.weather[0].icon);
    $("hom").innerHTML = Math.round(FromKelvinToCel(tomb.main.temp)) + "°C";
    $("hom_erzes").innerHTML = Math.round(FromKelvinToCel(tomb.main.feels_like))  + "°C";
    $('min_hom').innerHTML = Math.round(FromKelvinToCel(tomb.main.temp_min)) + "°C";
    $('max_hom').innerHTML = Math.round(FromKelvinToCel(tomb.main.temp_max)) + "°C";
    $("legnyomas").innerHTML = tomb.main.pressure + " Pa";
    $("para").innerHTML = tomb.main.humidity + " %";
    $("szel").innerHTML = tomb.wind.speed + " km/h";
    $("orszag").innerHTML = tomb.sys.country;

}

function fetchingIcon(bemeneti_tomb_prop){
    const url = `https://openweathermap.org/img/wn/${bemeneti_tomb_prop}@2x.png`;
     $("idojaras_ikon").src = url;
;
}
function FromKelvinToCel(bemeneti_ertek){
    return bemeneti_ertek - 273.15;
}
$('button-kereses').addEventListener('click', IdojarasKereses);
$('varos-kereses').addEventListener('keypress', e => {
    if(e.key === 'Enter'){
        IdojarasKereses();
    }
})