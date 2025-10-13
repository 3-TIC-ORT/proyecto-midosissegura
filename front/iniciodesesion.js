let cabello = 0;
const cabellos = document.querySelectorAll ('#cabellos .pelo')

cabellos.forEach (img => {
if (img.classList.contains ('visible')) {
    img.style.display = 'inline-block';
} else {
    img.style.display = 'none';
}
})

