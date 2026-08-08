// Navigation
const ulElement = document.querySelector('ul');
const barsElement = document.querySelector('.bars');

barsElement.addEventListener('click', () => {
    ulElement.classList.toggle('show');
});

// Slider
const showImg1 = document.querySelector('.showImg1');
const showImg2 = document.querySelector('.showImg2');
const showImg3 = document.querySelector('.showImg3');

const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
let currentIndex = 0;

const imageCount =
    window.innerWidth <= 768
        ? 1
        : window.innerWidth <= 1024
        ? 2
        : 3;

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;

    [showImg1, showImg2, showImg3]
        .slice(0, imageCount)
        .forEach((img, i) => {
            img.style.backgroundImage =
                `url('images/${images[(currentIndex + i) % images.length]}')`;
        });
}, 2000);

// Product data
const mobiles = [
    { id: 1, name: 'Apple iPhone 16', marketPrice: 79900, discountPrice: 74999, image: 'images/product1.png', description: '6.1-inch OLED display, A18 chip, 128GB storage.' },
    { id: 2, name: 'Apple iPhone 16 Plus', marketPrice: 89900, discountPrice: 84999, image: 'images/product2.png', description: '6.7-inch OLED display with long battery life.' },
    { id: 3, name: 'Apple iPhone 17 Pro Max', marketPrice: 119900, discountPrice: 112999, image: 'images/product3.png', description: 'Titanium body with A18 Pro chip.' },
    { id: 4, name: 'Samsung Galaxy S25', marketPrice: 80999, discountPrice: 75999, image: 'images/product4.png', description: 'AMOLED display with flagship performance.' },
    { id: 5, name: 'Samsung Galaxy S25+', marketPrice: 99999, discountPrice: 93999, image: 'images/product5.png', description: 'Large AMOLED display and fast processor.' },
    { id: 6, name: 'Samsung Galaxy S25 Ultra', marketPrice: 129999, discountPrice: 121999, image: 'images/product6.png', description: '200MP camera with S Pen support.' },
    { id: 7, name: 'OnePlus 13', marketPrice: 69999, discountPrice: 64999, image: 'images/product7.png', description: 'Snapdragon flagship with 100W charging.' },
    { id: 8, name: 'OnePlus 13R', marketPrice: 42999, discountPrice: 39999, image: 'images/product8.png', description: 'Smooth AMOLED display and gaming performance.' },
    { id: 9, name: 'Xiaomi 15', marketPrice: 64999, discountPrice: 59999, image: 'images/product9.png', description: 'Premium design with Leica camera.' },
    { id: 10, name: 'Redmi Note 14 Pro', marketPrice: 29999, discountPrice: 26999, image: 'images/product10.png', description: '200MP camera and 120Hz AMOLED display.' },
    { id: 11, name: 'Redmi Note 14', marketPrice: 19999, discountPrice: 17999, image: 'images/product11.png', description: 'Budget 5G smartphone with 5000mAh battery.' },
    { id: 12, name: 'POCO X7 Pro', marketPrice: 31999, discountPrice: 28999, image: 'images/product12.png', description: 'Gaming performance with AMOLED screen.' },
    { id: 13, name: 'POCO F7', marketPrice: 36999, discountPrice: 33999, image: 'images/product13.png', description: 'Powerful processor with fast charging.' },
    { id: 14, name: 'Realme GT 7', marketPrice: 39999, discountPrice: 36999, image: 'images/product14.png', description: 'Flagship performance and premium display.' },
    { id: 15, name: 'Realme Narzo 80 Pro', marketPrice: 22999, discountPrice: 20999, image: 'images/product15.png', description: 'Smooth 120Hz display and long battery.' },
    { id: 16, name: 'Vivo X200', marketPrice: 74999, discountPrice: 69999, image: 'images/product16.png', description: 'ZEISS camera with premium performance.' },
    { id: 17, name: 'Vivo V50', marketPrice: 37999, discountPrice: 34999, image: 'images/product17.png', description: 'Stylish design with AMOLED display.' },
    { id: 18, name: 'Vivo T4', marketPrice: 24999, discountPrice: 22499, image: 'images/product18.png', description: 'Fast processor with 5G connectivity.' },
    { id: 19, name: 'OPPO Find X8', marketPrice: 79999, discountPrice: 74999, image: 'images/product19.png', description: 'Premium flagship with excellent camera.' },
    { id: 20, name: 'OPPO Reno 13', marketPrice: 39999, discountPrice: 36499, image: 'images/product20.png', description: 'AI camera and 80W fast charging.' },
    { id: 21, name: 'Motorola Edge 60', marketPrice: 34999, discountPrice: 31999, image: 'images/product21.png', description: 'Curved OLED display with clean Android.' },
    { id: 22, name: 'Motorola Razr 60', marketPrice: 89999, discountPrice: 84999, image: 'images/product22.png', description: 'Premium foldable smartphone.' },
    { id: 23, name: 'Google Pixel 9', marketPrice: 79999, discountPrice: 74999, image: 'images/product23.png', description: 'Best-in-class camera and AI features.' },
    { id: 24, name: 'Google Pixel 9 Pro', marketPrice: 109999, discountPrice: 102999, image: 'images/product24.png', description: 'Professional camera and premium design.' },
    { id: 25, name: 'Nothing Phone (3)', marketPrice: 49999, discountPrice: 46999, image: 'images/product25.png', description: 'Transparent design with Glyph lights.' },
    { id: 26, name: 'Nothing Phone (3a)', marketPrice: 29999, discountPrice: 27499, image: 'images/product26.png', description: 'Stylish mid-range smartphone.' },
    { id: 27, name: 'Nokia G60', marketPrice: 21999, discountPrice: 19999, image: 'images/product27.png', description: 'Reliable phone with clean Android.' },
    { id: 28, name: 'Honor 200 Pro', marketPrice: 49999, discountPrice: 45999, image: 'images/product28.png', description: 'AI-powered premium smartphone.' },
    { id: 29, name: 'Lava Agni 3', marketPrice: 29999, discountPrice: 26999, image: 'images/product29.png', description: 'Powerful 5G smartphone.' },
    { id: 30, name: 'JioPhone Prima 2', marketPrice: 3999, discountPrice: 3499, image: 'images/product30.png', description: 'Affordable 4G smartphone.' }
];

// Product display
const productContainer = document.querySelector('#productContainer');

function displayProducts(products = mobiles) {
    products.forEach(mobile => {
        const card = document.createElement('div');
        card.classList.add('product');

        card.innerHTML = `
            <div class="productOuterImg">
                <img src="${mobile.image}" alt="${mobile.name}" class="productImg">
            </div>
            <div class="productDetails">
                <span class="productName">${mobile.name}</span>
                <br>
                <span class="productPrice">
                    ₹${mobile.discountPrice.toLocaleString('en-IN')}
                    <del>₹${mobile.marketPrice.toLocaleString('en-IN')}</del>
                </span>
                <br>
                <span class="productDescription">${mobile.description}</span>
            </div>
        `;

        card.onclick = () => showProducts(mobile.id);
        productContainer.appendChild(card);
    });
}

displayProducts();

// Search
const searchValue = document.querySelector('#searchBar');

searchValue.addEventListener('input', () => {
    const searchString = searchValue.value.toLowerCase().trim();

    const filteredProducts = mobiles.filter(mobile =>
        mobile.name.toLowerCase().includes(searchString)
    );

    productContainer.innerHTML = '';
    displayProducts(filteredProducts);

    document.querySelector('.showImgOuterContainer').style.display =
        searchValue.value === '' ? 'flex' : 'none';
});

// Cart and product elements
const productView = document.querySelector('.ContainerproductView');
const main = document.querySelector('#main');
const exitBtn = document.querySelector('.exit');
const cartContainer = document.querySelector('#cartContainer');
const cartTotal = document.querySelector('#cartTotal');
const checkOut = document.querySelector('#checkOut');

const cartItems = [];

// Show product details
function showProducts(id) {
    main.style.display = 'none';
    exitBtn.style.display = 'block';

    const product = mobiles.find(item => item.id === id);

    const card = document.createElement('div');
    card.classList.add('productView');

    card.innerHTML = `
        <div class="productViewImg">
            <img src="${product.image}">
        </div>

        <div class="productViewContent">
            <span class="productViewName">${product.name}</span>
            <br>
            <span class="productViewDescription">${product.description}</span>
            <br><br>
            <hr>
            <br>
            <span class="productViewPrice">
                ₹${product.marketPrice.toLocaleString('en-IN')}
                <del>₹${product.discountPrice.toLocaleString('en-IN')}</del>
            </span>
            <br>
            <span class="stock">In stock</span>
            <br>

            <div class="orderBtn">
                <button class="addToCart">
                    Add to Cart <i class="fa-solid fa-cart-shopping"></i>
                </button>

                <button class="orderNow">
                    order Now
                </button>
            </div>
        </div>
    `;

    productView.appendChild(card);

    const addToCartBtn = card.querySelector('.addToCart');

    if (cartItems.includes(product.id)) {
        addToCartBtn.disabled = true;
        addToCartBtn.style.cursor = 'not-allowed';
        addToCartBtn.classList.add('disableBtn');
        addToCartBtn.innerHTML =
            'Added to Cart <i class="fa-solid fa-cart-shopping"></i>';
    }

    card.querySelector('.orderNow').addEventListener('click', () => {
        cartItems.length = 0;
        cartItems.push(product.id);
        showCartProducts();
    });

    addToCartBtn.addEventListener('click', () => {
        if (!cartItems.includes(product.id)) {
            cartItems.push(product.id);
        }

        addToCartBtn.disabled = true;
        addToCartBtn.style.cursor = 'not-allowed';
        addToCartBtn.innerHTML =
            'Added to Cart <i class="fa-solid fa-cart-shopping"></i>';
    });
}

// Clear product view
function delProductCard() {
    productView.innerHTML = '';
}

// Exit product or cart view
exitBtn.addEventListener('click', () => {
    productView.innerHTML = '';
    cartContainer.innerHTML = '';

    main.style.display = 'block';
    exitBtn.style.display = 'none';
    cartTotal.style.display = 'none';
    checkOut.style.display = 'none';
});

// Display cart
function showCartProducts() {
    main.style.display = 'none';
    exitBtn.style.display = 'block';

    delProductCard();

    cartContainer.innerHTML = '';

    if (cartItems.length === 0) {
        cartContainer.innerHTML = `
            <div class="emptyCart">
                Your cart is empty
            </div>
        `;

        cartTotal.style.display = 'none';
        checkOut.style.display = 'none';

        return;
    }

    cartTotal.style.display = 'block';
    checkOut.style.display = 'block';

    cartItems.forEach(id => {
        const product = mobiles.find(item => item.id === id);

        const divC = document.createElement('div');

        divC.classList.add('cartProducts');
        divC.dataset.id = id;

        divC.innerHTML = `
            <div class="cartProductImg">
                <img src="${product.image}">
            </div>

            <div class="cartDetails">
                <div class="cartProductName">${product.name}</div>

                <div class="cartProductPrice">
                    ₹${product.discountPrice.toLocaleString('en-IN')}
                </div>

                <div class="cartQuantity">
                    <button class="minus">-</button>
                    <span class="cartPrice">1</span>
                    <button class="plus">+</button>
                </div>
            </div>
        `;

        let quantity = 1;

        const plus = divC.querySelector('.plus');
        const minus = divC.querySelector('.minus');
        const cartPrice = divC.querySelector('.cartPrice');
        const cartProductPrice = divC.querySelector('.cartProductPrice');

        minus.disabled = true;
        minus.style.cursor = 'not-allowed';

        plus.addEventListener('click', () => {
            if (quantity >= 4) return;

            quantity++;

            cartPrice.textContent = quantity;
            cartProductPrice.textContent =
                `₹${(quantity * product.discountPrice).toLocaleString('en-IN')}`;

            minus.disabled = false;
            minus.style.cursor = 'pointer';

            if (quantity === 4) {
                plus.disabled = true;
                plus.style.cursor = 'not-allowed';
            }

            updateCartTotal();
        });

        minus.addEventListener('click', () => {
            if (quantity <= 1) return;

            quantity--;

            cartPrice.textContent = quantity;
            cartProductPrice.textContent =
                `₹${(quantity * product.discountPrice).toLocaleString('en-IN')}`;

            plus.disabled = false;
            plus.style.cursor = 'pointer';

            if (quantity === 1) {
                minus.disabled = true;
                minus.style.cursor = 'not-allowed';
            }

            updateCartTotal();
        });

        cartContainer.appendChild(divC);
    });

    updateCartTotal();
}

// Update cart total
function updateCartTotal() {
    let total = 0;

    cartContainer.querySelectorAll('.cartProducts').forEach(card => {
        const product = mobiles.find(
            item => item.id === Number(card.dataset.id)
        );

        const quantity = Number(
            card.querySelector('.cartPrice').textContent
        );

        total += product.discountPrice * quantity;
    });

    cartTotal.textContent =
        `Total: ₹${total.toLocaleString('en-IN')}`;
}

// Google Apps Script
const checkoutFormContainer =
    document.querySelector('#checkoutFormContainer');

const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzdPSBG7-xITGDcybpjlN9aauUFESknLuiJe63NR0NffJFZtiRNIzYfK7Swha8mKrrC/exec";

const orderSuccess =
    document.querySelector("#orderSuccess");

const continueShopping =
    document.querySelector("#continueShopping");

// Checkout elements
const checkoutForm =
    document.querySelector("#checkoutForm");

const checkoutProducts =
    document.querySelector("#checkoutProducts");

const checkoutTotalPrice =
    document.querySelector("#checkoutTotalPrice");

// Proceed to pay
checkOut.addEventListener("click", () => {
    const cartProducts =
        document.querySelectorAll(".cartProducts");
    exitBtn.style.display = 'none';

    if (cartProducts.length === 0) {
        showCartProducts();
        return;
    }

    const products = [];
    let totalCost = 0;

    cartProducts.forEach((card, index) => {
        const id = Number(card.dataset.id);

        const product = mobiles.find(
            item => item.id === id
        );

        if (!product) return;

        const quantity =
            Number(
                card.querySelector(".cartPrice").textContent
            ) || 1;

        const price = product.discountPrice;
        const totalPrice = price * quantity;

        totalCost += totalPrice;

        products.push({
            sno: index + 1,
            name: product.name,
            price: price,
            quantity: quantity,
            totalPrice: totalPrice
        });
    });

    cartContainer.style.display = "none";
    cartTotal.style.display = "none";
    checkOut.style.display = "none";

    checkoutFormContainer.style.display = "flex";

    checkoutForm.style.display = "block";

    checkoutProducts.innerHTML = "";

    const table = document.createElement("table");

    table.classList.add("checkoutTable");

    table.innerHTML = `
        <thead>
            <tr>
                <th>S.No</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
            </tr>
        </thead>

        <tbody></tbody>

        <tfoot>
            <tr>
                <td colspan="4">
                    Total Cost
                </td>
                <td>
                    ₹${totalCost.toLocaleString("en-IN")}
                </td>
            </tr>
        </tfoot>
    `;

    const tbody = table.querySelector("tbody");

    products.forEach(product => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${product.sno}</td>
            <td>${product.name}</td>
            <td>₹${product.price.toLocaleString("en-IN")}</td>
            <td>${product.quantity}</td>
            <td>₹${product.totalPrice.toLocaleString("en-IN")}</td>
        `;

        tbody.appendChild(row);
    });

    checkoutProducts.appendChild(table);

    if (checkoutTotalPrice) {
        checkoutTotalPrice.textContent =
            totalCost.toLocaleString("en-IN");
    }
});

// Submit order
checkoutForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const button =
        document.querySelector("#placeOrder");

    button.disabled = true;
    button.textContent = "Saving Order...";

    const name =
        document.querySelector("#customerName")
            .value
            .trim();

    const whatsapp =
        document.querySelector("#whatsapp")
            .value
            .trim();

    const address =
        document.querySelector("#address")
            .value
            .trim();

    const district =
        document.querySelector("#district")
            .value;

    const pincode =
        document.querySelector("#pincode")
            .value
            .trim();

    const cartProducts =
        document.querySelectorAll(".cartProducts");

    const products = [];
    let totalCost = 0;

    cartProducts.forEach((card, index) => {
        const id = Number(card.dataset.id);

        const product = mobiles.find(
            item => item.id === id
        );

        if (!product) return;

        const quantity =
            Number(
                card.querySelector(".cartPrice").textContent
            ) || 1;

        const price = product.discountPrice;
        const totalPrice = price * quantity;

        totalCost += totalPrice;

        products.push({
            sno: index + 1,
            name: product.name,
            price: price,
            quantity: quantity,
            totalPrice: totalPrice
        });
    });

    const orderData = {
        name: name,
        whatsapp: whatsapp,
        address: address,
        district: district,
        pincode: pincode,
        products: products,
        orderTotal: totalCost
    };

    try {
        await fetch(
            GOOGLE_SCRIPT_URL,
            {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type":
                        "text/plain;charset=utf-8"
                },
                body: JSON.stringify(orderData)
            }
        );

        checkoutForm.style.display = "none";
        checkoutFormContainer.style.display = "none";

        cartContainer.style.display = "none";
        cartTotal.style.display = "none";
        checkOut.style.display = "none";
        exitBtn.style.display = "none";
        main.style.display = "none";

        cartItems.length = 0;
        cartContainer.innerHTML = "";
        checkoutProducts.innerHTML = "";

        if (orderSuccess) {
            orderSuccess.style.display = "flex";
        }

    } catch (error) {
        console.error("Order error:", error);

        alert(
            "Something went wrong while saving the order."
        );

        button.disabled = false;
        button.textContent = "Place Order";
    }
});

// Continue shopping
if (continueShopping) {
    continueShopping.addEventListener("click", () => {
       location.reload();
    });
}
