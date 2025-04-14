function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

window.addEventListener('DOMContentLoaded', () => {
    // Common chart options
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false, // Hide legend as per image
            },
            tooltip: {
                enabled: true,
                mode: 'index',
                intersect: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    font: {
                        size: 10
                    },
                    stepSize: 10,
                    padding: 5
                },
                grid: {
                    display: true,
                    color: 'rgba(0, 0, 0, 0.05)',
                    drawBorder: false
                }
            },
            x: {
                ticks: {
                    font: {
                        size: 10
                    },
                    padding: 5
                },
                grid: {
                    display: false
                }
            }
        },
        elements: {
            line: {
                borderWidth: 2
            },
            point: {
                radius: 3,
                hoverRadius: 5
            }
        }
    };

    // Chart 1 (Total Cases)
    const ctx1 = document.getElementById('chart1').getContext('2d');
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            datasets: [{
                label: 'Total Cases',
                data: [20, 30, 25, 40, 35, 50, 45, 60],
                borderColor: '#00d09c',
                backgroundColor: 'rgba(0, 208, 156, 0.1)',
                fill: false,
                tension: 0.3
            }]
        },
        options: chartOptions
    });

    // Chart 2 (Worldwide)
    const ctx2 = document.getElementById('chart2').getContext('2d');
    new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            datasets: [
                {
                    label: 'Total Cases',
                    data: [50, 45, 40, 35, 30, 25, 20, 15],
                    borderColor: '#ff0000', // Red for Worldwide cases as per image
                    backgroundColor: 'rgba(255, 0, 0, 0.1)',
                    fill: false,
                    tension: 0.3
                }
            ]
        },
        options: chartOptions
    });
});