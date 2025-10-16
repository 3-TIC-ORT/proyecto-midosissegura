let cabello = 0;
const cabellos = document.querySelectorAll ('#cabellos .pelo')

cabellos.forEach (img => {
    img.addEventListener ("click", () => {
        cabellos[cabello].classList.remove ('visible');
        cabello = (cabello + 1) % cabellos.length;
        cabellos[cabello].classList.add ('visible');
    })
})

