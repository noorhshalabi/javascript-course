/*Handle Cost key Function - Enter*/
function handleCostKeyDown(event) {
  if(event.key === 'Enter'){
    calculateTotal();
  }
}
/*
  Amazon Calculator
  When we click the button: 
  1. Get the text in the box
  2. If the amount < $40, add shipping
  3. Display total on the page
*/
function calculateTotal(){
  const inputElement = document.querySelector('.js-cost-input');
  //no HTML inside, we need to use value instead
  //let cost = inputElement.value;
  //cost is a string, JS will convert number + string, to string. So will append
  //manually convert string to number to fix this issue using Number
  let cost = Number(inputElement.value);
  if(cost < 40){
    cost+=10;

  } 
  document.querySelector('.js-total-cost').innerHTML = `$${cost}`;
  
}

/*
  if text is subscribe -> change to subscribed
  else, change back to subscribe
*/
function subscribeFunction(){
  const buttonElement = document.querySelector('.js-subscribe-button');
  //innerHTML gives text + spaces all around element, we want just text
  //the reason to do this is if we clean up code the way above, won't change. 
  //Too much space bc of Subscribe now being in it's own line
  //do innerText instead
  if(buttonElement.innerText === 'Subscribe'){
    buttonElement.innerHTML='Subscribed';
    buttonElement.classList.add(`is-subscribed`);
  }else {
    buttonElement.innerHTML='Subscribe';
    buttonElement.classList.remove('is-subscribed');
  }
}