document.getElementById("loveForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Afișează mesajul de mulțumire
    document.getElementById("message").innerText = "🥰 Mulțumesc pentru răspuns! Voi analiza cererea ta. 💖";

    // Colectează datele din formular
    const name = document.getElementById("name").value;
    const response = document.getElementById("why").value;

    // Salvează răspunsurile în localStorage
    let responses = JSON.parse(localStorage.getItem("responses") || "[]");
    responses.push({ name, response });
    localStorage.setItem("responses", JSON.stringify(responses));

    // Afișează răspunsurile
    displayResponses();
    
    // Resetează formularul
    e.target.reset();
});

function displayResponses() {
    const responses = JSON.parse(localStorage.getItem("responses") || "[]");
    const responsesDiv = document.getElementById("responses");
    responsesDiv.innerHTML = "";

    responses.forEach(r => {
        const div = document.createElement("div");
        div.innerHTML = `<strong>${r.name}:</strong> ${r.response}`;
        responsesDiv.appendChild(div);
    });
}

displayResponses();  // Încarcă răspunsurile la început

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    document.getElementById("hearts-container").appendChild(heart);

    const size = Math.random() * 20 + 10 + "px";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = size;
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

setInterval(createHeart, 300);
