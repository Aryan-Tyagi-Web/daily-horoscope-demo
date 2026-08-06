const cards = document.querySelectorAll(".zodiac-card");
const tabs = document.querySelectorAll(".tab");

let currentSign = "aries";
let currentType = "daily";

async function loadHoroscope(sign, type){

    currentSign = sign;

    currentType = type;

    document.getElementById("signTitle").innerHTML="Loading...";

    document.getElementById("prediction").innerHTML="Fetching Horoscope...";

    if(type==="year"){

        document.getElementById("signTitle").innerHTML=sign.toUpperCase();

        document.getElementById("prediction").innerHTML="Yearly Horoscope will be available in Premium API.";

        return;

    }

    try{

        const url=`https://freehoroscopeapi.com/api/v1/get-horoscope/${type}?sign=${sign}`;

        const response=await fetch(url);

        const result=await response.json();

        document.getElementById("signTitle").innerHTML=result.data.sign+" ("+result.data.period+")";

        document.getElementById("prediction").innerHTML=result.data.horoscope;

    }

    catch(error){

        document.getElementById("signTitle").innerHTML="Error";

        document.getElementById("prediction").innerHTML="Unable to fetch horoscope.";

    }

}

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        loadHoroscope(card.dataset.sign,currentType);

    });

});

tabs.forEach(tab=>{

    tab.addEventListener("click",()=>{

        tabs.forEach(t=>t.classList.remove("active"));

        tab.classList.add("active");

        loadHoroscope(currentSign,tab.dataset.type);

    });

});

loadHoroscope("aries","daily");
