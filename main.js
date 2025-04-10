
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

window.addEventListener('DOMContentLoaded', () => {
    const ctx1 = document.getElementById('chart1').getContext('2d');
    const chart1 = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['USA', 'India', 'China', 'Brazil'],
            datasets: [{
                label: 'Total Cases',
                data: [10637465, 4623737, 8627456, 2512456],
                fill: false,
                borderColor: '#00d09c',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: true },
                title: {
                    display: true,
                    text: 'Total Cases by Country'
                }
            }
        }
    });

    const ctx2 = document.getElementById('chart2').getContext('2d');
    const chart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['Recovered', 'Deaths', 'Infected'],
            datasets: [{
                label: 'Status',
                data: [8647746, 2767657, 1000000],
                fill: false,
                borderColor: '#ffb700',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: true },
                title: {
                    display: true,
                    text: 'Overall COVID Status'
                }
            }
        }
    });
});
