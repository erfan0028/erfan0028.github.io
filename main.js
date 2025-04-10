
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

window.addEventListener('DOMContentLoaded', () => {
    const ctx1 = document.getElementById('chart1').getContext('2d');
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['USA', 'India', 'China', 'Brazil'],
            datasets: [{
                label: 'Total Cases',
                data: [10637465, 4623737, 8627456, 2512456],
                borderColor: '#00d09c',
                backgroundColor: '#00d09c44',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Total Cases by Country'
                }
            }
        }
    });

    const ctx2 = document.getElementById('chart2').getContext('2d');
    new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['Recovered', 'Deaths', 'Infected'],
            datasets: [{
                label: 'Overall Status',
                data: [8647746, 2767657, 1000000],
                borderColor: '#ffb700',
                backgroundColor: '#ffb70044',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'COVID-19 Status Overview'
                }
            }
        }
    });
});
