const div = document.getElementById('basketdiv');
function getproducts() {
    div.innerHTML = ``;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(cart);
    cart.map((item, index) => {
        const box = document.createElement('div');
        box.className = "basketproducts col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4";
        box.innerHTML = `
        <div class="proBoxDiv">
        <img style="max-width:100% "src='${item.image}' alt="">
        <p>${item.name}</p>
        <p>"${item.price}"</p>
        <div class="btns">
        <button class="addtowishlistbtn" onclick="addtowishlist(${item.id})"><i class="fa-regular fa-heart fa-lg"></i></button>
        <button class="removebtn" onclick="removeItem(${index})">Remove from <i class="fa-solid fa-cart-shopping"></i></button>
    </div>
    </div>
        `;
        div.appendChild(box);
    });
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    getproducts();
}

getproducts();