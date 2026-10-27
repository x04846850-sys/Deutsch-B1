const words = [
    { de: "die Anforderung", uz: "talab / shart" },
    { de: "bewerben (sich)", uz: "hujjat topshirmoq (ishga)" },
    { de: "die Veranstaltung", uz: "tadbir" }
];

let currentIndex = 0;

function nextWord() {
    const wordBox = document.getElementById("word-box");
    const current = words[currentIndex];
    wordBox.innerHTML = `<strong>${current.de}</strong> - ${current.uz}`;
    currentIndex = (currentIndex + 1) % words.length;
}

function checkAnswer(selected) {
    const feedback = document.getElementById("feedback");
    if (selected === 'auf') {
        feedback.innerText = "✅ Richtig! (aufpassen auf + Akk)";
        feedback.style.color = "green";
    } else {
        feedback.innerText = "❌ Falsch! Versuche es nochmal.";
        feedback.style.color = "red";
    }
}

// Sahifa ochilganda birinchi so'zni chiqarish
window.onload = nextWord;

