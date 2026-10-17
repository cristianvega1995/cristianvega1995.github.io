(function() {
    const list = document.getElementById('collaborators-list');
    if (!list) return;

    const items = Array.from(list.querySelectorAll(':scope > li > details'));
    const allowMultiple = document.getElementById('collab-allow-multiple');

    items.forEach(function(details) {
        details.addEventListener('toggle', function() {
            if (!details.open) return;
            if (allowMultiple && allowMultiple.checked) return;
            items.forEach(function(other) {
                if (other !== details) other.open = false;
            });
        });
    });

    const expandAll = document.getElementById('collab-expand-all');
    if (expandAll) {
        expandAll.addEventListener('click', function() {
            items.forEach(function(d) { d.open = true; });
        });
    }

    const collapseAll = document.getElementById('collab-collapse-all');
    if (collapseAll) {
        collapseAll.addEventListener('click', function() {
            items.forEach(function(d) { d.open = false; });
        });
    }
})();
