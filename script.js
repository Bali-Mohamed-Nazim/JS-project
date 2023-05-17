const likeButtons = document.querySelectorAll('.like-button')

for (let button of likeButtons) {
  const heartIcon = button.querySelector('.heart-icon')
  const likesAmountLabel = button.querySelector('.like-amount')
  let likesAmount = 7

  heartIcon.addEventListener('click', () => {
    heartIcon.classList.toggle('liked');
    if (heartIcon.classList.contains('liked')) {
      likesAmount++;
    } else {
      likesAmount--;
    }
    likesAmountLabel.innerHTML = likesAmount;
  });
}

let iphones = document.getElementsByClassName('iphones');
let listcard = document.getElementsByClassName('list-card')[0];
let array = Array.from(listcard)

let total = 0

for (let iphone of iphones) {
    const btn = iphone.querySelector('button');
    
    btn.addEventListener('click', () => {
        const price = parseFloat(iphone.querySelector('p span').innerHTML);

        if (!array.includes(iphone)) {
            let newDiv = document.createElement('div');
            newDiv.innerHTML = `
                <div style="margin: 10px;">
                    ${iphone.querySelector('img').outerHTML}
                </div>
                <div>
                    ${iphone.querySelector('p').innerHTML}
                </div>
                <input type="number" value="1" style="width: 30px; margin: 10px;"/> 
                <button style="background-color: red; color: white;">REMOVE</button>  
            `;
            let input = newDiv.querySelector('input')
            let originalQuantity = 1
            
            total += price
            document.querySelector('.total').innerHTML = '$' + total
            
            listcard.appendChild(newDiv);
            array.push(iphone)

            input.addEventListener('input', () => {
                let quantity = input.value
                if (quantity > originalQuantity){
                    total += price
                    document.querySelector('.total').innerHTML = '$' + total
                } else{
                    total -= price
                    document.querySelector('.total').innerHTML = '$' + total
                }
                originalQuantity = quantity
            })

            let remove = newDiv.querySelector('button');
            remove.addEventListener('click', () => {
                let quantity = input.value
                total -= price * quantity
                document.querySelector('.total').innerHTML = '$' + total
                newDiv.remove();
                array.splice(array.indexOf(iphone), 1)
            });

        } else{
            alert('You have already added to the card');
        }
    });
}

let closeShopping = document.getElementsByClassName('closeShopping')[0];

closeShopping.addEventListener('click', () => {
    array.splice(0, array.length)
    total = 0
    document.querySelector('.total').innerHTML = '0'
    while (listcard.firstChild) {
        listcard.removeChild(listcard.firstChild);
    }
});
