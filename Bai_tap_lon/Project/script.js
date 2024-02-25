//Section-two
const buttonReduce = document.querySelector('.reduce');
const buttonAdd = document.querySelector('.add');
const cardInput = document.querySelector('.card_input');

buttonReduce.onclick = function() {
    cardInput.value = parseInt(cardInput.value) - 1;
}
buttonAdd.onclick = function() {
    cardInput.value = parseInt(cardInput.value) + 1;    
}

//End section-two