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