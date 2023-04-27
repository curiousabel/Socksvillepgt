
const products = [
    {
      id: 1,
      name: "Men's Athletic Socks",
      image: "https://source.unsplash.com/300x300/?socks",
      price: 12.99,
      description: "Stay comfortable during your workouts with our men's athletic socks.",
      category: "Men's Socks"
    },
    {
      id: 2,
      name: "Women's Ankle Socks",
      image:"https://images.unsplash.com/photo-1640026199235-c24aa417b552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80",
      price: 9.99,
      description: "Our women's ankle socks are perfect for everyday wear.",
      category: "Women's Socks"
    },
    {
      id: 3,
      name: "Kid's Crew Socks",
      image: "https://images.unsplash.com/photo-1582966772680-860e372bb558?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1227&q=80",
      price: 7.99,
      description: "Keep your kids' feet warm and cozy with our kid's crew socks.",
      category: "Kid's Socks"
    },
{
id: 4,
name: "Women's Knee-High Socks",
image: "https://source.unsplash.com/300x300/?shoes",
price: 15.99,
description: "Stay stylish and comfortable with our women's knee-high socks.",
category: "Women's Socks"
},
{
id: 5,
name: "Men's Dress Socks",
image: "https://source.unsplash.com/300x300/?longsocks",
price: 19.99,
description: "Look sharp and feel comfortable in our men's dress socks.",
category: "Men's Socks"
},
{
id: 6,
name: "Kid's Fuzzy Socks",
image: "https://source.unsplash.com/300x300/?sock",
price: 8.99,
description: "Our kid's fuzzy socks are perfect for lounging around the house.",
category: "Kid's Socks"
}

  ];
  
  const productContainer = document.querySelector('.products');
  
  products.forEach((product) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    
    const productLink = document.createElement('a');
    productLink.href = `product.html?id=${product.id}`;
    
    const productImg = document.createElement('img');
    productImg.src = product.image;
    productImg.alt = product.name;
    
    const productName = document.createElement('h4');
    productName.textContent = product.name;
    
    const productPrice = document.createElement('p');
    productPrice.classList.add('price');
    productPrice.textContent = `$${product.price}`;
     
    const productAdd =document.createElement('button');
    productAdd.classList.add('add-to-cart');
    productAdd.textContent = 'Add to Cart';
    productAdd.dataset.id  = product.id;
    
    productDiv.appendChild(productImg);
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(productAdd);
   // productDiv.appendChild(productLink);
    
    productContainer.appendChild(productDiv);
  });


let cart = [];

const cartList = document.querySelector('.cart ul');
const cartTotal = document.querySelector('.cart p');

function addToCart(productId) {
const productToAdd = products.find(product => product.id == productId);
cart.push(productToAdd);
updateCart(cart);
}

// function addToCart(product) {
//   cart.push(product);
//   updateCart();
// }
function clearCart() {
cart.length = 0; 
 

// Removes all items from the cart array
}


function updateCart(cart) {
cartList.innerHTML = '';
let total = 0;
//console.log(cart.length)
if (cart.length > 0) {
    cart.forEach(product => {
        const li = document.createElement('li');
        li.innerHTML = `${product.name} - $${product.price}`;
        cartList.appendChild(li);
        total += product.price;
        });
}

cartTotal.innerHTML = `Total: $${total.toFixed(2)}`;
}


const checkoutButton = document.querySelector(".checkout-button");




checkoutButton.addEventListener("click", function() {
clearCart();
cartList.innerHTML = '';
let total = 0;
cartTotal.innerHTML = `Total: $${total.toFixed(2)}`;
});

const buttons = document.querySelectorAll('.add-to-cart');
// buttons.forEach(button => {
//   button.addEventListener('click', event => {
//     const index = event.target.dataset.id;
//     addToCart(products[index-1]);
//   });
// });

buttons.forEach(button => {
button.addEventListener('click', event => {
const productId = event.target.dataset.id;
addToCart(productId);
});
});


// function addClickListeners() {
// const buttons = document.querySelectorAll('.add-to-cart');
// buttons.forEach(button => {
// button.addEventListener('click', event => {
//   const index = event.target.dataset.id;
//   addToCart(products[index-1]);
// });
// });
// }


