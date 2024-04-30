const Mario = document.querySelector('.mario')
const Cano = document.querySelector('.cano')

const pular = () => {
    Mario.classList.add('pular')
    
    setTimeout(()=> {
        Mario.classList.remove('pular')
    } , 500 )
}

const loop = setInterval(() => {

    const Canopos = Cano.offsetLeft;
    const Mariopos = +window.getComputedStyle(Mario).bottom.replace('px', '');

    console.log(Mariopos)

    if (Canopos <= 120 && Canopos > 0 && Mariopos < 80){

        Cano.style.animation = 'none';
        Cano.style.left = `${Canopos}px`

        Mario.style.animation = 'none';
        Mario.style.bottom = `${Mariopos}px`

        Mario.src = 'img/game-over.png';
        Mario.style.width = '80px'
        Mario.style.marginLeft = '44px'

        clearInterval(loop)
        
    }

}, 10);

document.addEventListener('keydown', pular)