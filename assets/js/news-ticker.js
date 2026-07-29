const newsList = [
    "🌍 Now in Santiago.",
    "📰 I started my postdoc in the UTFSM",
    "🚀 Cristian Vega will be in COMCA 2026",
    "💻 New optimization algorithms incoming!!!"
];
(function() {
    const ticker = document.getElementById("news-ticker");
    if (!ticker) return;
    const items = newsList.map(n => `<span>${n}</span>`).join("");
    ticker.innerHTML = items + items;
})();
