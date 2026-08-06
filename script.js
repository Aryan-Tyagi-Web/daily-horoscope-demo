const cards = document.querySelectorAll(".zodiac-card");

cards.forEach(card => {

    card.addEventListener("click", async () => {

        const sign = card.dataset.sign;

        document.getElementById("signTitle").innerHTML = "Loading...";

        document.getElementById("prediction").innerHTML = "Fetching today's horoscope...";

        try{

            const response = await fetch(`https://freehoroscopeapi.com/api/v1/get-horoscope/daily?sign=${sign}`);

            const result = await response.json();

            document.getElementById("signTitle").innerHTML = result.data.sign;

            document.getElementById("prediction").innerHTML = result.data.horoscope;

            document.getElementById("love").innerHTML = "Coming Soon";

            document.getElementById("career").innerHTML = "Coming Soon";

            document.getElementById("health").innerHTML = "Coming Soon";

            document.getElementById("color").innerHTML = "--";

            document.getElementById("number").innerHTML = "--";

            document.getElementById("mood").innerHTML = "Positive";

        }

        catch(error){

            document.getElementById("signTitle").innerHTML="Error";

            document.getElementById("prediction").innerHTML="Unable to load horoscope.";

        }

    });

});
