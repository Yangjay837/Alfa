const products = [
    { name: "Men letters",
     price: 59.99,
      image:"image/aa.jpeg" 
    },
    { name: "Official Wear",
     price: 49.99,
      image: "image/bb.jpeg"
     },
     { name: "Winter Jumpers",
     price: 111.99,
      image: "image/cc.jpeg"
     },
     { name: "Logos Sweatpants",
     price: 149.99,
      image: "image/dd.jpeg"
     },
     { name: "Wizzy Cargos",
     price: 149.99,
      image: "image/ee.jpeg"
     },
     { name: "Off_limits",
     price: 145.99,
      image: "image/ww.jpeg"
     },
     { name: "Vayola Shrit",
     price: 29.99,
      image: "image/vv.jpeg"
     },
     { name: "Booty shapers",
     price: 45.99,
      image: "image/hh.jpeg"
     },
     { name: "Summer wear",
     price: 149.99,
      image: "image/ii.jpeg"
     },
     { name: "Fashionista Jumper",
     price: 120.99,
      image: "image/ss.jpeg"
     },
     { name: "Tuff backpack",
     price: 163.99,
      image: "image/jj.jpeg"
     },


    

]

const cart = [];

function displayProducts() {
    const productGallery = document.getElementById("product-gallery");

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.image}" style="width: 100px; height: 100px;">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;
        productGallery.appendChild(productElement);
    });
}

function addToCart(name, price,image) {
    const item = { name, price ,image};
    cart.push(item);
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalCostElement = document.getElementById("total-cost");
    let totalCost = 0;

    
    cartItems.innerHTML = "";

   
    cart.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.onclick = () => removeFromCart(index);
        listItem.appendChild(removeBtn);
        cartItems.appendChild(listItem);

        totalCost += item.price;
    });

  
    totalCostElement.textContent = totalCost.toFixed(2);
}

function checkout() {
    cart.length = 0; 
    updateCart();
    alert("Thank you for your purchase!");
}

function search() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();

   
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchInput));

   
    document.getElementById("product-gallery").innerHTML = "";
    filteredProducts.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="width: 100px; height: 100px;">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;
        document.getElementById("product-gallery").appendChild(productElement);
    });
}


displayProducts();
