// targeting all cards with the class of cards 
const cards = document.querySelectorAll('.card');


// using an advance array method map for controling the cards 

Array.from(cards).map(card => {
    card.addEventListener('mousemove', startRotate);
    card.addEventListener('mouseout', stopRotate);
})

function startRotate(e){
    const cardItem = this.querySelector('.card-item');
    const halfHeight = cardItem.offsetHeight / 2 ;
    const rotateX = `rotateX(${-(e.offsetY - halfHeight) / 5}deg)`;
    const rotateY = `rotateY(${(e.offsetX - halfHeight) / 5}deg)`;
    cardItem.style.transform = `${rotateX}${rotateY}`;
}

// this function stops the movement of the card 
function stopRotate(){
    const cardItem = this.querySelector('.card-item');
    cardItem.style.transform = `rotateX(0) rotateY(0)`;
}