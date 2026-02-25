/**
 * Countdown Timer – vanilla JavaScript
 * Usage: include this file and call initCountdown(options)
 */

function initCountdown(options) {
    // Default options
    const defaults = {
        targetDate: new Date(),          // fallback (will show zeros)
        containerId: 'countdown-container', // ID of the element where timer will be inserted
        labels: {                         // Customizable labels
            days: 'days',
            hours: 'hours',
            minutes: 'minutes',
            seconds: 'seconds'
        }
    };

    // Merge user options with defaults
    const config = Object.assign({}, defaults, options);
    const target = config.targetDate instanceof Date ? config.targetDate : new Date(config.targetDate);
    const container = document.getElementById(config.containerId);

    if (!container) {
        console.error(`Countdown container #${config.containerId} not found.`);
        return;
    }

    // Helper to pad numbers with leading zero
    function pad(number) {
        return number.toString().padStart(2, '0');
    }

    // Build the initial HTML structure (will be updated by the timer)
    function createTimerHTML(days, hours, minutes, seconds) {
        return `
            <div class="time-unit">
                <span class="days-number">${days}</span>
                <span class="label">${config.labels.days}</span>
            </div>
            <div class="time-unit">
                <span class="hours-number two-numbers">${pad(hours)}</span>
                <span class="label">${config.labels.hours}</span>
            </div>
            <div class="time-unit">
                <span class="minutes-number two-numbers">${pad(minutes)}</span>
                <span class="label">${config.labels.minutes}</span>
            </div>
            <div class="time-unit">
                <span class="seconds-number two-numbers">${pad(seconds)}</span>
                <span class="label">${config.labels.seconds}</span>
            </div>
        `;
    }

    function updateTimer() {
        const now = new Date();
        const diffMs = target - now;

        if (diffMs <= 0) {
            // Timer expired – show zeros
            container.innerHTML = createTimerHTML(0, 0, 0, 0);
            return;
        }

        const totalSeconds = Math.floor(diffMs / 1000);
        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        container.innerHTML = createTimerHTML(days, hours, minutes, seconds);
    }

    // Initial call
    updateTimer();
    // Update every second
    setInterval(updateTimer, 1000);
}
