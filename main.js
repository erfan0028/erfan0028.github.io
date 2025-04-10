function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

const customSelect = document.getElementById('customSelect');  
const dropdownMenu = document.getElementById('dropdownMenu');  
const selected = customSelect.querySelector('.selected span');  

customSelect.addEventListener('click', () => {  
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block'; // Toggle dropdown  
});  

const items = dropdownMenu.querySelectorAll('.dropdown-item');  
items.forEach(item => {  
    item.addEventListener('click', () => {  
        selected.textContent = item.textContent; // Set selected text  
        dropdownMenu.style.display = 'none';  
    });  
});  

// Close dropdown when clicking outside  
window.addEventListener('click', (e) => {  
    if (!customSelect.contains(e.target)) {  
        dropdownMenu.style.display = 'none';  
    }  
});  

window.addEventListener('DOMContentLoaded', () => {
    const ctx1 = document.getElementById('chart1').getContext('2d');
    const chart1 = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['USA', 'India', 'China', 'Brazil'],
            datasets: [{
                label: 'Total Cases',
                data: [10637465, 4623737, 8627456, 2512456],
                backgroundColor: '#00d09c'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Total Cases by Country'
                }
            }
        }
    });

    const ctx2 = document.getElementById('chart2').getContext('2d');
    const chart2 = new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: ['Recovered', 'Deaths', 'Infected'],
            datasets: [{
                label: 'Status',
                data: [8647746, 2767657, 1000000],
                backgroundColor: ['#00d09c', '#ffb700', '#1d3972']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Overall COVID Status'
                }
            }
        }
    });
});
