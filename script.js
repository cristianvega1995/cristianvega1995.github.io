// script.js
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('indicators');
    if (!container) return;

    fetch('https://mindicador.cl/api')
        .then(response => response.json())
        .then(data => {
            if (data.error) throw new Error('API error');
            
            const items = [
                { name: 'UF', value: data.uf.valor, unit: '$' },
                { name: 'Dólar observado', value: data.dolar.valor, unit: '$' },
                { name: 'Dólar acuerdo', value: data.dolar_intercambio.valor, unit: '$' },
                { name: 'Euro', value: data.euro.valor, unit: '$' },
                { name: 'IPC', value: data.ipc.valor, unit: '%' },
                { name: 'UTM', value: data.utm.valor, unit: '$' },
                { name: 'IVP', value: data.ivp.valor, unit: '$' },
                { name: 'Imacec', value: data.imacec.valor, unit: '%' }
            ];

            let html = '<ul>';
            items.forEach(item => {
                html += `<li><strong>${item.name}:</strong> ${item.unit}${item.value.toFixed(2)}</li>`;
            });
            html += '</ul><p><small>Fuente: <a href="https://mindicador.cl" target="_blank">mindicador.cl</a></small></p>';
            
            container.innerHTML = html;
        })
        .catch(error => {
            container.innerHTML = '<p class="error">Indicadores no disponibles en este momento.</p>';
            console.error(error);
        });
});
