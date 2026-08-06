const cards = document.querySelectorAll(".zodiac-card");
const tabs = document.querySelectorAll(".tab");

let currentSign = "aries";
let currentType = "daily";

function updateDateTime(){

    const now=new Date();

    document.getElementById("todayDate").innerHTML=

    "📅 "+now.toLocaleDateString("en-IN",{

        day:"numeric",

        month:"long",

        year:"numeric"

    });

    document.getElementById("lastUpdated").innerHTML=

    "🕒 Updated "+now.toLocaleTimeString("en-IN",{

        hour:"2-digit",

        minute:"2-digit"

    });

}

async function loadHoroscope(sign, type){

    currentSign = sign;
    currentType = type;

    document.getElementById("signTitle").innerHTML="Loading...";
    document.getElementById("prediction").innerHTML=`

<div class="skeleton">

<div class="skeleton-line"></div>

<div class="skeleton-line"></div>

<div class="skeleton-line"></div>

</div>

`;

    try{

        const response = await fetch(`https://horoscope-api-demo.tyagiaryannda.workers.dev/?sign=${sign}&type=${type}`);

        const result = await response.json();

        document.getElementById("signTitle").innerHTML=result.data.sign;

        document.getElementById("prediction").innerHTML=result.data.horoscope;

        updateDateTime();

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

cards.forEach(card => {

    card.addEventListener("click", () => {

        // Agar wahi card dobara click hua
        if (card.classList.contains("active")) {

            card.classList.remove("active");

            document.getElementById("signTitle").innerHTML = "Choose Your Zodiac";

            document.getElementById("prediction").innerHTML =
                "Click on any zodiac sign above to load today's horoscope.";

            document.getElementById("love").innerHTML = "--";
            document.getElementById("career").innerHTML = "--";
            document.getElementById("health").innerHTML = "--";
            document.getElementById("color").innerHTML = "--";
            document.getElementById("number").innerHTML = "--";
            document.getElementById("mood").innerHTML = "--";

            return;
        }

        cards.forEach(c => c.classList.remove("active"));

        card.classList.add("active");

        loadHoroscope(card.dataset.sign, currentType);

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
