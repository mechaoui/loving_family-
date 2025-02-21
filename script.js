document.addEventListener('DOMContentLoaded', function() {
    const icons = document.querySelectorAll('.social-icons a');
    icons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.color = '#f1c40f';
        });
        icon.addEventListener('mouseout', () => {
            icon.style.color = '#ffffff';
        });
    });
});