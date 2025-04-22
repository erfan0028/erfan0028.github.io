function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}


document.addEventListener('DOMContentLoaded', function() {
    const customSelects = document.querySelectorAll('.custom-select');

    customSelects.forEach(select => {
        const selected = select.querySelector('.selected');
        const dropdownMenu = select.querySelector('.dropdown-menu');
        const dropdownItems = select.querySelectorAll('.dropdown-item');

        // Toggle dropdown menu on click
        selected.addEventListener('click', function(e) {
            e.stopPropagation();
            // Close other open dropdowns
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                if (menu !== dropdownMenu) {
                    menu.style.display = 'none';
                }
            });
            // Toggle current dropdown
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        });

        // Handle item selection
        dropdownItems.forEach(item => {
            item.addEventListener('click', function() {
                const value = this.getAttribute('data-value');
                const text = this.textContent.trim();
                const img = this.querySelector('img');
                const icon = this.querySelector('i');

                // Update selected display
                selected.innerHTML = `
                    <span>
                        ${img ? `<img alt="" src="${img.src}"/> ${text}` : 
                        icon ? `<i class="${icon.className}"></i> ${text}` : text}
                    </span>
                    <span class="select-icon"><i class="bi bi-chevron-down"></i></span>
                `;

                // Hide dropdown
                dropdownMenu.style.display = 'none';

                // Dispatch custom event
                const event = new CustomEvent('selectChange', {
                    detail: { value, text }
                });
                select.dispatchEvent(event);
            });
        });
    });

    // Close all dropdowns when clicking outside
    document.addEventListener('click', function() {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.style.display = 'none';
        });
    });
});

// Log selected values for debugging
document.querySelectorAll('.custom-select').forEach(select => {
    select.addEventListener('selectChange', function(e) {
        console.log('Selected Value:', e.detail.value);
        console.log('Selected Text:', e.detail.text);
    });
});


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
