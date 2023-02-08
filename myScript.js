let sum = 0
const totalo = document.querySelector('.total')

function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
  }
  let carts = document.querySelectorAll('.add-cart');
  let products = [{
    name:'marco reus',
    tag: 'marco reus' ,
    price: 249.99,
  inCart: 0  },
  {
    name:'toni kroos',
    tag: 'toni kroos' ,
    price: 199.99,
  inCart: 0  },
  {
    name:'emre can',
    tag: 'emre can' ,
    price: 129.99,
  inCart: 0  },
  ]
  for (let i=0; i< carts.length; i++) {
carts[i].addEventListener('click',(e)=>{  
  cartNumbers();
  let price = 0
  price = parseInt(e.target.parentNode.parentNode.children[2].innerText.split(' ')[1])
  sum += price
  console.log(sum)
  console.log(totalo)
  totalo.textContent = 'total: ' + sum
})}

function cartNumbers(){
let productNumbers = localStorage.getItem('cartNumbers');
productNumbers = parseInt(productNumbers);
if(productNumbers) {
localStorage.setItem('cartNumbers', productNumbers + 1);
document.querySelector('.cart span').textContent = productNumbers + 1;
} else{
localStorage.setItem('cartNumbers',1);
document.querySelector('.cart span').textContent = 1;
}
}
