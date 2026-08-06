const horoscopeData = {

    aries: {
        title: "♈ Aries",
        prediction: "Today is a great day to begin something new. Stay confident and trust your instincts.",
        love: "❤️ Good",
        career: "🚀 Excellent",
        health: "💚 Stable",
        color: "Red",
        number: "9",
        mood: "Energetic"
    },

    taurus: {
        title: "♉ Taurus",
        prediction: "Patience will bring success today. Avoid unnecessary arguments.",
        love: "💖 Positive",
        career: "📈 Growing",
        health: "😊 Good",
        color: "Green",
        number: "6",
        mood: "Calm"
    },

    gemini: {
        title: "♊ Gemini",
        prediction: "Communication will open new opportunities today.",
        love: "💕 Romantic",
        career: "💼 Productive",
        health: "💪 Good",
        color: "Yellow",
        number: "5",
        mood: "Happy"
    },

    cancer: {
        title: "♋ Cancer",
        prediction: "Family support will give you confidence.",
        love: "❤️ Excellent",
        career: "⭐ Positive",
        health: "💚 Good",
        color: "White",
        number: "2",
        mood: "Peaceful"
    },

    leo: {
        title: "♌ Leo",
        prediction: "Leadership skills will help you shine today.",
        love: "💘 Strong",
        career: "🔥 Amazing",
        health: "💪 Excellent",
        color: "Gold",
        number: "1",
        mood: "Confident"
    },

    virgo: {
        title: "♍ Virgo",
        prediction: "Focus on planning instead of rushing.",
        love: "💖 Good",
        career: "📊 Stable",
        health: "😊 Healthy",
        color: "Blue",
        number: "8",
        mood: "Focused"
    },

    libra: {
        title: "♎ Libra",
        prediction: "Balance your work and personal life today.",
        love: "❤️ Positive",
        career: "📈 Growing",
        health: "💚 Stable",
        color: "Pink",
        number: "7",
        mood: "Relaxed"
    },

    scorpio: {
        title: "♏ Scorpio",
        prediction: "Trust your intuition before making decisions.",
        love: "💕 Strong",
        career: "🚀 Excellent",
        health: "💪 Great",
        color: "Maroon",
        number: "4",
        mood: "Powerful"
    },

    sagittarius: {
        title: "♐ Sagittarius",
        prediction: "Travel or learning can bring exciting opportunities.",
        love: "💖 Good",
        career: "⭐ Positive",
        health: "💚 Healthy",
        color: "Purple",
        number: "3",
        mood: "Excited"
    },

    capricorn: {
        title: "♑ Capricorn",
        prediction: "Hard work will finally pay off.",
        love: "❤️ Stable",
        career: "🏆 Success",
        health: "😊 Good",
        color: "Brown",
        number: "10",
        mood: "Motivated"
    },

    aquarius: {
        title: "♒ Aquarius",
        prediction: "Creative ideas will impress others today.",
        love: "💕 Positive",
        career: "🚀 Excellent",
        health: "💚 Good",
        color: "Sky Blue",
        number: "11",
        mood: "Creative"
    },

    pisces: {
        title: "♓ Pisces",
        prediction: "Listen to your heart and avoid overthinking.",
        love: "❤️ Wonderful",
        career: "📈 Good",
        health: "💪 Stable",
        color: "Sea Green",
        number: "12",
        mood: "Dreamy"
    }

};

const cards = document.querySelectorAll(".zodiac-card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        const sign = card.dataset.sign;

        const data = horoscopeData[sign];

        document.getElementById("signTitle").innerText = data.title;
        document.getElementById("prediction").innerText = data.prediction;
        document.getElementById("love").innerText = data.love;
        document.getElementById("career").innerText = data.career;
        document.getElementById("health").innerText = data.health;
        document.getElementById("color").innerText = data.color;
        document.getElementById("number").innerText = data.number;
        document.getElementById("mood").innerText = data.mood;

    });

});
