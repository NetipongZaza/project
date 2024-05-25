// JavaScript from before + the following...

const skillsListItems = document.querySelectorAll('.skills-list li');

skillsListItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = '#007bff'; // เปลี่ยนสีเมื่อ hover
    });

    item.addEventListener('mouseout', () => {
        item.style.color = '#333'; 
    });
});
