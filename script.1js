const newsList = [
    " AI revolutionizing the tech industry!",
    " Global warming concerns rise in 2025.",
    " New smartphone released with insane features!",
    " Upcoming blockbuster movie breaks records!",
    " Football championship finals this weekend!"
];

function updateNews() {
    const ticker = document.getElementById("news-ticker");
    const newsItems = newsList.map(news => `<span>${news}</span>`).join("");
    
    // Duplicate content to ensure smooth looping
    ticker.innerHTML = newsItems + newsItems;
}

updateNews();
