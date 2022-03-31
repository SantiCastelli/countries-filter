let paises = [];

async function callApiCountrys(){
    
    let res = await fetch('https://restcountries.com/v2/all');
    let country = await res.json();
    console.log(country);

    //json = json.filter(country=> country.name.includes('A'))    
    paises = country;
    
    for (let index = 0; index < country.length; index++) {
        let card = `
    <div class="card card-{country.name}">
    <img class="flag" src="${country[index].flag}" alt="${country[index].name} flag" />
    <div class="content">
      <h3 class="name">${country[index].name}</h3>
      <div><span class="country-info">Population: </span><span class="population">${country[index].population}</span></div>
      <div><span class="country-info">Region: </span><span class="region">${country[index].region}</span></div>
  
      <div><span class="country-info">Capital: </span><span class="capital">${country[index].capital}</span></div>
    </div>
  </div> `
        // document.querySelector(".flag").src = json[index].flag;
        // document.querySelector(".name").textContent = json[index].name;
        // document.querySelector(".population").textContent = json[index].population;
        // document.querySelector(".region").textContent = json[index].region;
        // document.querySelector(".capital").textContent = json[index].capital;
        document.querySelector(".cards").innerHTML += card;

    }
  

    
}

document.querySelector(".search-input").addEventListener("keyup", function(){

    document.querySelector(".cards").innerHTML = '';

    let resp = document.querySelector(".search-input").value;    

    let filterCountry = paises.filter(country=> country.name.includes(resp))

    for (let index = 0; index < filterCountry.length; index++) {
        document.querySelector(".cards").innerHTML += '<img src="'+filterCountry[index].flag+'">'        
    }

    console.log(resp);

})

callApiCountrys();