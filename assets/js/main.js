let cartCounterLabel = document.querySelector('#cart-counter');
let contentContainer = document.querySelector('#content-container');
let cartButtons = document.querySelectorAll('.item-actions__cart');
let cartCounter = 0;
let cartPrice = 0;

let btnClickHandler =(e) => {
  let target = e.target;

  if (target.classList.contains('item-actions__cart')) {
    cartCounterLabel.innerHTML = ++cartCounter;
    if (cartCounter === 1) cartCounterLabel.style.display = 'block';

    const mockData = +target.parentElement.previousElementSibling.innerHTML.replace(/^\$(\d+)\s\D+(\d+).*$/gui, '$1.$2');
    const restoreHTML = target.innerHTML;

    cartPrice = Math.round((cartPrice + mockData) * 100) / 100;

    target.innerHTML = `Added ${cartPrice.toFixed(2)} $`;
    contentContainer.removeEventListener('click', btnClickHandler);
    target.disabled = true;
    
    setTimeout(() => {
      target.innerHTML = restoreHTML;
      console.log(restoreHTML);
      contentContainer.addEventListener('click', btnClickHandler);
      cartButtons.forEach((item) => item.disabled = false);
      console.log(cartButtons);
    }, 2000);
  }
};

contentContainer.addEventListener('click', btnClickHandler);

