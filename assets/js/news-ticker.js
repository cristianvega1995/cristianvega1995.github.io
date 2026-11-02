const newsList = [
    "📍 In Santiago for about 8 months.",
    "📰 I started my postdoc in the UTFSM",
    "🚀 Cristian Vega will be in SOMACHI 2026",
    "🚀 New article in AMO!!!",
    "💻 New optimization algorithms incoming!!!",
    "📤 New prepint on arxiv"
];
(function() {
    const ticker = document.getElementById("news-ticker");
    if (!ticker) return;
    const items = newsList.map(n => `<span>${n}</span>`).join("");
    ticker.innerHTML = items + items;
})();
