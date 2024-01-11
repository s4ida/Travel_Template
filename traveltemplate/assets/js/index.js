const submit = document.getElementById('myform')
const nameinput = document.getElementById('nameinput');
const arrivinginput = document.getElementById('arrivinginput');
const leavinginput = document.getElementById('leavinginput');
function axiosPost(event) {
    event.preventDefault()
    axios.post("https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products", {
        Name: nameinput.value,
        ArrivingTime: arrivinginput.value,
      LeavingTime: leavinginput.value,
    }).then(res => {
        console.log(res);
    })
}
submit.addEventListener('submit', axiosPost);
const apidiv = document.getElementById('apidiv');
const filterdata = document.getElementById('filterdata');
const form = document.getElementById('form');
const btnn = document.getElementById('btn');
const input = document.getElementById('input');
function getProducts() {
    page = 1
    limit = 3
    axios.get(`https://65680f2a9927836bd97406ef.mockapi.io/food/products?page=${page}&limit=${limit}`)
        .then(res => {
            products = res.data
            products.map(item => {
                let product = document.createElement('div')
                product.className = 'proBox col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4'
                product.innerHTML = `
                <div class="proBoxDiv">
                <img src="${item.image}" alt="">
                <p>"${item.name}"</p>
                <p>"${item.price}"</p>
                <div class="btns">
                <button class="addtowishlistbtn" onclick="addtowishlist(${item.id})"><i class="fa-regular fa-heart fa-lg"></i></button>
                <button class="addtobasketbtn" onclick="addtoBasket(${item.id})">Add to <i class="fa-solid fa-cart-shopping"></i></button>
</div>
           
        </div>
            `
                apidiv.appendChild(product)
            })
            page++
        })
}
getProducts();
function findByName(e) {
    e.preventDefault();
    apidiv.innerHTML = ''
    axios.get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products`)
        .then((res) => {
            products = res.data;
            let filteredData = products.filter((item) =>
                item.name.toLowerCase().includes(input.value.toLowerCase())
            );
            console.log(filteredData);
            filteredData.map((item) => {
                let myDiv = document.createElement("div");
                myDiv.className = "myDiv col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4";
                myDiv.innerHTML = `
                <div class="proBoxDiv">
                <img src="${item.image}" alt="">
                <p>"${item.name}"</p>
                <p>"${item.price}"</p>
                <div class="btns">
                <button class="addtowishlistbtn" onclick="addtowishlist(${item.id})"><i class="fa-regular fa-heart fa-lg"></i></button>
                <button class="addtobasketbtn" onclick="addtoBasket(${item.id})">Add to <i class="fa-solid fa-cart-shopping"></i></button>
</div>
      </div>
          `;
                apidiv.appendChild(myDiv);
            });
        });
}
form.addEventListener("submit", findByName);

function addtowishlist(id) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    wishlist.push(products.find(item => item.id == id))
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
}

function addtoBasket(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(products.find(item => item.id == id))
    localStorage.setItem('cart', JSON.stringify(cart))
}
function sortedFunctions() {
    apidiv.innerHTML = ''
    let selectvalue = filterdata.value

    if (selectvalue === "1") {
        page = 1
        limit = 3
        axios.get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products?page=${page}&limit=${limit}`)
            .then(res => {
                products = res.data
                products.map(item => {
                    let product = document.createElement('div')
                    product.className = 'proBox col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4'
                    product.innerHTML = `
              <img src="${item.image}" alt="">
              <p>"${item.name}"</p>
              <p>"${item.price}"</p>
              <div class="btns">
              <button class="addtowishlistbtn" onclick="addtowishlist(${item.id})"><i class="fa-regular fa-heart fa-lg"></i></button>
              <button class="addtobasketbtn" onclick="addtoBasket(${item.id})">Add to <i class="fa-solid fa-cart-shopping"></i></button>
              </div>
              `
                    apidiv.appendChild(product)
                })
                page++
            })
    }

}

filterdata.addEventListener('change', sortedFunctions);

function sortedFunction() {
    apidiv.innerHTML = ''
    let selectvalue = filterdata.value
    if (selectvalue === "2") {
        page = 1
        limit = 3
        axios.get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products?page=${page}&limit=${limit}`)
            .then(res => {
                products = res.data
                let sortProduct = products.sort((a, b) => a.name.localeCompare(b.name))
                sortProduct.map(item => {
                    let product = document.createElement('div')
                    product.className = 'proBox col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4'
                    product.innerHTML = `
              <img src="${item.image}" alt="">
              <p>"${item.name}"</p>
              <p>"${item.price}"</p>
              <div class="btns">
              <button class="addtowishlistbtn" onclick="addtowishlist(${item.id})"><i class="fa-regular fa-heart fa-lg"></i></button>
              <button class="addtobasketbtn" onclick="addtoBasket(${item.id})">Add to <i class="fa-solid fa-cart-shopping"></i></button>
          </div>
              `
                    apidiv.appendChild(product)
                })
                page++
            })
    }
}
filterdata.addEventListener('change', sortedFunction)
function sortFunction() {
    apidiv.innerHTML = ''
    let selectvalue = filterdata.value
    if (selectvalue === "3") {
        page = 1
        limit = 3
        axios.get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products?page=${page}&limit=${limit}`)
            .then(res => {
                products = res.data
                let sortProduct = products.sort((a, b) => b.name.localeCompare(a.name))
                sortProduct.map(item => {
                    let product = document.createElement('div')
                    product.className = 'proBox col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4'
                    product.innerHTML = `
              <img src="${item.image}" alt="">
              <p>"${item.name}"</p>
              <p>"${item.price}"</p>
              <div class="btns">
              <button class="addtowishlistbtn" onclick="addtowishlist(${item.id})"><i class="fa-regular fa-heart fa-lg"></i></button>
              <button class="addtobasketbtn" onclick="addtoBasket(${item.id})">Add to <i class="fa-solid fa-cart-shopping"></i></button>
          </div>
              `
                    apidiv.appendChild(product)
                })
                page++
            })
    }
}
filterdata.addEventListener('change', sortFunction);
