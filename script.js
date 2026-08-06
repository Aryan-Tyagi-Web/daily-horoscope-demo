const cards = document.querySelectorAll(".zodiac-card");
const tabs = document.querySelectorAll(".tab");

let currentSign = "aries";
let currentType = "daily";

async function loadHoroscope(sign, type){

    currentSign = sign;
    currentType = type;

    document.getElementById("signTitle").innerHTML="Loading...";
    document.getElementById("prediction").innerHTML="Fetching Horoscope...";

    try{

        const response = await fetch(`https://horoscope-api-demo.tyagiaryannda.workers.dev/?sign=${sign}&type=${type}`);

        const result = await response.json();

        document.getElementById("signTitle").innerHTML=result.data.sign;

        document.getElementById("prediction").innerHTML=result.data.horoscope;

        document.getElementById("love").innerHTML="Available in Premium";

        document.getElementById("career").innerHTML="Available in Premium";

        document.getElementById("health").innerHTML="Available in Premium";

        document.getElementById("color").innerHTML="--";

        document.getElementById("number").innerHTML="--";

        document.getElementById("mood").innerHTML=result.data.period;

    }

    catch(e){

        document.getElementById("prediction").innerHTML="Unable to fetch horoscope.";

    }

}

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        cards.forEach(c=>c.classList.remove("active"));

        card.classList.add("active");

        loadHoroscope(card.dataset.sign,currentType);

    });

});

tabs.forEach(tab=>{

    tab.addEventListener("click",()=>{

        tabs.forEach(t=>t.classList.remove("active"));

        tab.classList.add("active");

        currentType=tab.dataset.type;

        loadHoroscope(currentSign,currentType);

    });

});

loadHoroscope("aries","daily");
