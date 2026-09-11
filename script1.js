const newsList = [
    "AI revolutionizing the tech industry!",
    "Global warming concerns rise in 2025.",
    "New smartphone released with insane features!",
    "Upcoming blockbuster movie breaks records!",
    "Football championship finals this weekend!"
];

function updateNews() {
    const ticker = document.getElementById("news-ticker");
    const newsItems = newsList.map(news => `<span>${news}</span>`).join("");
    
    // Duplicate content to ensure smooth looping
    ticker.innerHTML = newsItems + newsItems;
}

updateNews();
/*
Source - https://stackoverflow.com/a/24978113
Posted by Roko C. Buljan, modified by community. See post 'Timeline' for change history
Retrieved 2026-09-11, License - CC BY-SA 4.0
*/

[id^="togList"],                        /* HIDE CHECKBOX */
[id^="togList"] ~ .list,                /* HIDE LIST */
[id^="togList"] + label  span + span,   /* HIDE "Collapse" */
[id^="togList"]:checked + label span{   /* HIDE "Expand" (IF CHECKED) */
  display:none;
}
[id^="togList"]:checked + label span + span{
  display:inline-block;                 /* SHOW "Collapse" (IF CHECKED) */
}
[id^="togList"]:checked ~ .list{
  display:block;                        /* SHOW LIST (IF CHECKED) */
}
