/**
 * FIFA World Cup 2026 countdown ticker widget.
 * Usage: <div id="fc-ticker"></div> + <script src="assets/js/fifa-ticker.js"></script>
 * then call initFifaTicker({ ...overrides }) once the DOM is ready.
 */
function initFifaTicker(options) {
    const defaults = {
        containerId: 'fc-ticker',
        targetDate: 'June 11, 2026 18:00:00 GMT-0600',
        badge: 'FIFA World Cup 2026',
        title: 'Copa Mundial de la FIFA 2026™',
        subtitle: '11 de junio – 19 de julio &nbsp;·&nbsp; Canada · Mexico · USA',
        ctaHref: 'https://www.fifa.com/es/tournaments/mens/worldcup/canadamexicousa2026/scores-fixtures',
        ctaText: 'See Fixture',
        labels: { days: 'Días', hours: 'Horas', minutes: 'Min', seconds: 'Seg.' }
    };
    const config = Object.assign({}, defaults, options, {
        labels: Object.assign({}, defaults.labels, options && options.labels)
    });

    const container = document.getElementById(config.containerId);
    if (!container) {
        console.error(`FIFA ticker container #${config.containerId} not found.`);
        return;
    }

    const uid = config.containerId;
    container.classList.add('fc-wrap');
    container.innerHTML = `
        <div class="fc-left">
            <span class="fc-badge">${config.badge}</span>
            <p class="fc-title">${config.title}</p>
            <p class="fc-subtitle">${config.subtitle}</p>
        </div>
        <div class="fc-right">
            <div class="fc-clock">
                <div class="fc-unit"><span class="fc-val" id="${uid}-d">00</span><span class="fc-lbl">${config.labels.days}</span></div>
                <span class="fc-sep">:</span>
                <div class="fc-unit"><span class="fc-val" id="${uid}-h">00</span><span class="fc-lbl">${config.labels.hours}</span></div>
                <span class="fc-sep">:</span>
                <div class="fc-unit"><span class="fc-val" id="${uid}-m">00</span><span class="fc-lbl">${config.labels.minutes}</span></div>
                <span class="fc-sep">:</span>
                <div class="fc-unit"><span class="fc-val" id="${uid}-s">00</span><span class="fc-lbl">${config.labels.seconds}</span></div>
            </div>
            <a class="fc-cta" href="${config.ctaHref}" target="_blank" rel="noopener">${config.ctaText}</a>
        </div>
    `;

    const target = new Date(config.targetDate);
    const dEl = document.getElementById(`${uid}-d`);
    const hEl = document.getElementById(`${uid}-h`);
    const mEl = document.getElementById(`${uid}-m`);
    const sEl = document.getElementById(`${uid}-s`);

    function tick() {
        const diff = target - new Date();
        if (diff <= 0) {
            container.querySelector('.fc-clock').innerHTML = '<span class="fc-val">EXPIRED</span>';
            clearInterval(timer);
            return;
        }
        dEl.textContent = String(Math.floor(diff / 86400000)).padStart(2, '0');
        hEl.textContent = String(Math.floor(diff / 3600000) % 24).padStart(2, '0');
        mEl.textContent = String(Math.floor(diff / 60000) % 60).padStart(2, '0');
        sEl.textContent = String(Math.floor(diff / 1000) % 60).padStart(2, '0');
    }

    tick();
    const timer = setInterval(tick, 1000);
}
