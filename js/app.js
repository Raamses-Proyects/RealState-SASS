const imagenes = document.querySelectorAll('.propiedad__imagen');

window.addEventListener( 'scroll', () => {
    let scroll = this.scrollY;

    imagenes.forEach( (imagen) => {
        imagen.style.backgroundPositionY = `${scroll / -18}px`; 
    });
});