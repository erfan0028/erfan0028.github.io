function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    // برای همه دراپ‌دان‌ها
    const customSelects = document.querySelectorAll('.custom-select');
    
    customSelects.forEach(select => {
        const selected = select.querySelector('.selected');
        const dropdownMenu = select.querySelector('.dropdown-menu');
        const dropdownItems = select.querySelectorAll('.dropdown-item');
        
        // باز و بسته کردن منو با کلیک روی selected
        selected.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // بستن بقیه دراپ‌دان‌های باز
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                if (menu !== dropdownMenu) {
                    menu.style.display = 'none';
                }
            });
            
            // toggle نمایش منوی جاری
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        });
        
        // انتخاب یک آیتم از منو
        dropdownItems.forEach(item => {
            item.addEventListener('click', function() {
                const value = this.getAttribute('data-value');
                const text = this.textContent;
                
                // آپدیت selected با آیتم انتخاب شده
                selected.innerHTML = `
                    ${this.innerHTML.includes('<img') ? 
                        `<span><img alt="" src="${this.querySelector('img').getAttribute('src')}"/> ${text}</span>` : 
                        `<span><i class="${this.querySelector('i')?.className || ''}"></i> ${text}</span>`}
                    <span class="select-icon"><i class="bi bi-chevron-down"></i></span>
                `;
                
                dropdownMenu.style.display = 'none';
                
                // می‌توانید رویداد سفارشی برای تغییر مقدار ایجاد کنید
                const event = new CustomEvent('selectChange', {
                    detail: {
                        value: value,
                        text: text
                    }
                });
                select.dispatchEvent(event);
            });
        });
    });
    
    // بستن منوها با کلیک خارج از آنها
    document.addEventListener('click', function() {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.style.display = 'none';
        });
    });
});

document.querySelectorAll('.custom-select').forEach(select => {
    select.addEventListener('selectChange', function(e) {
        console.log('مقدار جدید:', e.detail.value);
        console.log('متن نمایشی:', e.detail.text);
    });
});

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
