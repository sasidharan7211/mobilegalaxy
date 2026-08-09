// PRODUCT DATA
const mobiles = [
    {
        id: 1,
        name: 'Apple iPhone 16',
        marketPrice: 79900,
        discountPrice: 74999,
        image: 'images/product1.png',
        description: '6.1-inch OLED display, A18 chip, 128GB storage.',
        stock: 'In stock'
    },
    {
        id: 2,
        name: 'Apple iPhone 16 Plus',
        marketPrice: 89900,
        discountPrice: 84999,
        image: 'images/product2.png',
        description: '6.7-inch OLED display with long battery life.',
        stock: 'In stock'
    },
    {
        id: 3,
        name: 'Apple iPhone 17 Pro Max',
        marketPrice: 119900,
        discountPrice: 112999,
        image: 'images/product3.png',
        description: 'Titanium body with A18 Pro chip.',
        stock: 'In stock'
    },
    {
        id: 4,
        name: 'Samsung Galaxy S25',
        marketPrice: 80999,
        discountPrice: 75999,
        image: 'images/product4.png',
        description: 'AMOLED display with flagship performance.',
        stock: 'In stock'
    },
    {
        id: 5,
        name: 'Samsung Galaxy S25+',
        marketPrice: 99999,
        discountPrice: 93999,
        image: 'images/product5.png',
        description: 'Large AMOLED display and fast processor.',
        stock: 'In stock'
    },
    {
        id: 6,
        name: 'Samsung Galaxy S25 Ultra',
        marketPrice: 129999,
        discountPrice: 121999,
        image: 'images/product6.png',
        description: '200MP camera with S Pen support.',
        stock: 'In stock'
    },
    {
        id: 7,
        name: 'OnePlus 13',
        marketPrice: 69999,
        discountPrice: 64999,
        image: 'images/product7.png',
        description: 'Snapdragon flagship with 100W charging.',
        stock: 'In stock'
    },
    {
        id: 8,
        name: 'OnePlus 13R',
        marketPrice: 42999,
        discountPrice: 39999,
        image: 'images/product8.png',
        description: 'Smooth AMOLED display and gaming performance.',
        stock: 'In stock'
    },
    {
        id: 9,
        name: 'Xiaomi 15',
        marketPrice: 64999,
        discountPrice: 59999,
        image: 'images/product9.png',
        description: 'Premium design with Leica camera.',
        stock: 'In stock'
    },
    {
        id: 10,
        name: 'Redmi Note 14 Pro',
        marketPrice: 29999,
        discountPrice: 26999,
        image: 'images/product10.png',
        description: '200MP camera and 120Hz AMOLED display.',
        stock: 'In stock'
    },
    {
        id: 11,
        name: 'Redmi Note 14',
        marketPrice: 19999,
        discountPrice: 17999,
        image: 'images/product11.png',
        description: 'Budget 5G smartphone with 5000mAh battery.',
        stock: 'In stock'
    },
    {
        id: 12,
        name: 'POCO X7 Pro',
        marketPrice: 31999,
        discountPrice: 28999,
        image: 'images/product12.png',
        description: 'Gaming performance with AMOLED screen.',
        stock: 'In stock'
    },
    {
        id: 13,
        name: 'POCO F7',
        marketPrice: 36999,
        discountPrice: 33999,
        image: 'images/product13.png',
        description: 'Powerful processor with fast charging.',
        stock: 'In stock'
    },
    {
        id: 14,
        name: 'Realme GT 7',
        marketPrice: 39999,
        discountPrice: 36999,
        image: 'images/product14.png',
        description: 'Flagship performance and premium display.',
        stock: 'In stock'
    },
    {
        id: 15,
        name: 'Realme Narzo 80 Pro',
        marketPrice: 22999,
        discountPrice: 20999,
        image: 'images/product15.png',
        description: 'Smooth 120Hz display and long battery.',
        stock: 'In stock'
    },
    {
        id: 16,
        name: 'Vivo X200',
        marketPrice: 74999,
        discountPrice: 69999,
        image: 'images/product16.png',
        description: 'ZEISS camera with premium performance.',
        stock: 'In stock'
    },
    {
        id: 17,
        name: 'Vivo V50',
        marketPrice: 37999,
        discountPrice: 34999,
        image: 'images/product17.png',
        description: 'Stylish design with AMOLED display.',
        stock: 'In stock'
    },
    {
        id: 18,
        name: 'Vivo T4',
        marketPrice: 24999,
        discountPrice: 22499,
        image: 'images/product18.png',
        description: 'Fast processor with 5G connectivity.',
        stock: 'In stock'
    },
    {
        id: 19,
        name: 'OPPO Find X8',
        marketPrice: 79999,
        discountPrice: 74999,
        image: 'images/product19.png',
        description: 'Premium flagship with excellent camera.',
        stock: 'In stock'
    },
    {
        id: 20,
        name: 'OPPO Reno 13',
        marketPrice: 39999,
        discountPrice: 36499,
        image: 'images/product20.png',
        description: 'AI camera and 80W fast charging.',
        stock: 'In stock'
    },
    {
        id: 21,
        name: 'Motorola Edge 60',
        marketPrice: 34999,
        discountPrice: 31999,
        image: 'images/product21.png',
        description: 'Curved OLED display with clean Android.',
        stock: 'In stock'
    },
    {
        id: 22,
        name: 'Motorola Razr 60',
        marketPrice: 89999,
        discountPrice: 84999,
        image: 'images/product22.png',
        description: 'Premium foldable smartphone.',
        stock: 'In stock'
    },
    {
        id: 23,
        name: 'Google Pixel 9',
        marketPrice: 79999,
        discountPrice: 74999,
        image: 'images/product23.png',
        description: 'Best-in-class camera and AI features.',
        stock: 'In stock'
    },
    {
        id: 24,
        name: 'Google Pixel 9 Pro',
        marketPrice: 109999,
        discountPrice: 102999,
        image: 'images/product24.png',
        description: 'Professional camera and premium design.',
        stock: 'In stock'
    },
    {
        id: 25,
        name: 'Nothing Phone (3)',
        marketPrice: 49999,
        discountPrice: 46999,
        image: 'images/product25.png',
        description: 'Transparent design with Glyph lights.',
        stock: 'In stock'
    },
    {
        id: 26,
        name: 'Nothing Phone (3a)',
        marketPrice: 29999,
        discountPrice: 27499,
        image: 'images/product26.png',
        description: 'Stylish mid-range smartphone.',
        stock: 'In stock'
    },
    {
        id: 27,
        name: 'Nokia G60',
        marketPrice: 21999,
        discountPrice: 19999,
        image: 'images/product27.png',
        description: 'Reliable phone with clean Android.',
        stock: 'In stock'
    },
    {
        id: 28,
        name: 'Honor 200 Pro',
        marketPrice: 49999,
        discountPrice: 45999,
        image: 'images/product28.png',
        description: 'AI-powered premium smartphone.',
        stock: 'In stock'
    },
    {
        id: 29,
        name: 'Lava Agni 3',
        marketPrice: 29999,
        discountPrice: 26999,
        image: 'images/product29.png',
        description: 'Powerful 5G smartphone.',
        stock: 'In stock'
    },
    {
        id: 30,
        name: 'JioPhone Prima 2',
        marketPrice: 3999,
        discountPrice: 3499,
        image: 'images/product30.png',
        description: 'Affordable 4G smartphone.',
        stock: 'In stock'
    }
];

// SLIDER
const showImg1 = document.querySelector('.showImg1');
const showImg2 = document.querySelector('.showImg2');
const showImg3 = document.querySelector('.showImg3');
const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg'
];
let currentIndex = 0;
function getImageCount() {
    return window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3;
}
function updateSlider() {
    const imageCount = getImageCount();
    [showImg1, showImg2, showImg3].slice(0, imageCount).forEach((img, i) => {
        if (img) {
            img.style.backgroundImage = `url('images/${images[(currentIndex + i) % images.length]}')`;
        }
    });
}
updateSlider();
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}, 2000);
window.addEventListener('resize', updateSlider);

// ELEMENTS
const productContainer = document.querySelector('#productContainer');
const productView = document.querySelector('.ContainerproductView');
const main = document.querySelector('#main');
const exitBtn = document.querySelector('.exit');
const cartContainer = document.querySelector('#cartContainer');
const cartTotal = document.querySelector('#cartTotal');
const checkOut = document.querySelector('#checkOut');

// CHECKOUT ELEMENTS
const checkoutFormContainer = document.querySelector('#checkoutFormContainer');
const checkoutForm = document.querySelector('#checkoutForm');
const checkoutProducts = document.querySelector('#checkoutProducts');
const checkoutTotalPrice = document.querySelector('#checkoutTotalPrice');
const orderSuccess = document.querySelector('#orderSuccess');
const continueShopping = document.querySelector('#continueShopping');

// NAVIGATION
let viewHistory = ['main'];
let currentView = 'main';
let lastProductId = null;

// REAL CART
// Only this variable is saved in localStorage.
// Order Now never enters this array.
let cartItems = [];
try {
    cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
} catch (error) {
    cartItems = [];
}
if (!Array.isArray(cartItems)) {
    cartItems = [];
}

// TEMPORARY ORDER NOW ITEM
// This exists only in memory.
// It is never saved to localStorage.
let orderNowItem = null;

// SAVE REAL CART
function saveCart() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// MAIN NAVIGATION
function goToView(view) {
    viewHistory.push(view);
    currentView = view;
}

// GO BACK / EXIT
function goBack() {
    if (viewHistory.length <= 1) {
        showMain();
        return;
    }
    const leavingView = viewHistory[viewHistory.length - 1];
    // FORM TO CART
    if (leavingView === 'form') {
        if (checkoutFormContainer) {
            checkoutFormContainer.style.display = 'none';
        }
        if (checkoutForm) {
            checkoutForm.style.display = 'none';
        }
        viewHistory.pop();
        const previousView = viewHistory[viewHistory.length - 1];
        currentView = previousView;
        if (previousView === 'cart') {
            showCartViewWithoutHistory();
            return;
        }
        if (previousView === 'product') {
            showProductViewWithoutHistory();
            return;
        }
        showMain();
        return;
    }
    // TEMPORARY ORDER NOW CART
    if (leavingView === 'orderNowCart') {
        // Do not touch cartItems.
        // Order Now is not in localStorage.
        orderNowItem = null;
        viewHistory.pop();
        const previousView = viewHistory[viewHistory.length - 1];
        currentView = previousView;
        if (previousView === 'product') {
            showProductViewWithoutHistory();
            return;
        }
        showMain();
        return;
    }
    // NORMAL CART
    if (leavingView === 'cart') {
        viewHistory.pop();
        const previousView = viewHistory[viewHistory.length - 1];
        currentView = previousView;
        if (previousView === 'product') {
            showProductViewWithoutHistory();
            return;
        }
        showMain();
        return;
    }
    // PRODUCT
    if (leavingView === 'product') {
        viewHistory.pop();
        const previousView = viewHistory[viewHistory.length - 1];
        currentView = previousView;
        if (previousView === 'main') {
            showMain();
            return;
        }
        showMain();
        return;
    }
    // DEFAULT
    viewHistory.pop();
    showMain();
}

// DISPLAY PRODUCTS
function displayProducts(products = mobiles) {
    productContainer.innerHTML = '';
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
                <br>
                <span class="stock">${mobile.stock}</span>
            </div>
        `;
        card.addEventListener('click', () => {
            showProducts(mobile.id);
        });
        productContainer.appendChild(card);
    });
}
displayProducts();

// SEARCH
const searchValue = document.querySelector('#searchBar');
if (searchValue) {
    searchValue.addEventListener('input', () => {
        const searchString = searchValue.value.toLowerCase().trim();
        const filteredProducts = mobiles.filter(mobile => mobile.name.toLowerCase().includes(searchString));
        displayProducts(filteredProducts);
        const slider = document.querySelector('.showImgOuterContainer');
        if (slider) {
            slider.style.display = searchValue.value === '' ? 'flex' : 'none';
        }
    });
}

// SHOW MAIN
function showMain() {
    currentView = 'main';
    main.style.display = 'block';
    productView.innerHTML = '';
    productView.style.display = 'none';
    cartContainer.innerHTML = '';
    cartContainer.style.display = 'none';
    cartTotal.style.display = 'none';
    checkOut.style.display = 'none';
    checkoutFormContainer.style.display = 'none';
    checkoutForm.style.display = 'none';
    exitBtn.style.display = 'none';
}

// SHOW PRODUCT
function showProducts(id) {
    lastProductId = id;
    goToView('product');
    showProductViewWithoutHistory();
}

// SHOW PRODUCT WITHOUT HISTORY
function showProductViewWithoutHistory() {
    currentView = 'product';
    main.style.display = 'none';
    productView.style.display = 'block';
    cartContainer.style.display = 'none';
    cartTotal.style.display = 'none';
    checkOut.style.display = 'none';
    checkoutFormContainer.style.display = 'none';
    checkoutForm.style.display = 'none';
    productView.innerHTML = '';
    exitBtn.style.display = 'block';
    const product = mobiles.find(item => item.id === lastProductId);
    if (!product) return;
    const card = document.createElement('div');
    card.classList.add('productView');
    card.innerHTML = `
        <div class="productViewImg">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="productViewContent">
            <span class="productViewName">${product.name}</span>
            <br>
            <span class="productViewDescription">${product.description}</span>
            <br>
            <span class="stock">${product.stock}</span>
            <br><br>
            <hr>
            <br>
            <span class="productViewPrice">
                ₹${product.marketPrice.toLocaleString('en-IN')}
                <del>₹${product.discountPrice.toLocaleString('en-IN')}</del>
            </span>
            <br>
            <div class="orderBtn">
                <button class="addToCart" type="button">
                    Add to Cart
                    <i class="fa-solid fa-cart-shopping"></i>
                </button>
                <button class="orderNow" type="button">
                    Order Now
                </button>
            </div>
        </div>
    `;
    productView.appendChild(card);
    const addToCartBtn = card.querySelector('.addToCart');
    const orderNowBtn = card.querySelector('.orderNow');
    // CHECK REAL CART
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
        addToCartBtn.disabled = true;
        addToCartBtn.style.cursor = 'not-allowed';
        addToCartBtn.classList.add('disableBtn');
        addToCartBtn.innerHTML = `
            Added to Cart
            <i class="fa-solid fa-cart-shopping"></i>
        `;
    }
    // ADD TO CART
    addToCartBtn.addEventListener('click', () => {
        const existing = cartItems.find(item => item.id === product.id);
        if (!existing) {
            cartItems.push({
                id: product.id,
                quantity: 1
            });
            saveCart();
        }
        addToCartBtn.disabled = true;
        addToCartBtn.style.cursor = 'not-allowed';
        addToCartBtn.classList.add('disableBtn');
        addToCartBtn.innerHTML = `
            Added to Cart
            <i class="fa-solid fa-cart-shopping"></i>
        `;
    });
    // ORDER NOW
    // This does not touch cartItems.
    // It is completely temporary.
    orderNowBtn.addEventListener('click', () => {
        orderNowItem = {
            id: product.id,
            quantity: 1
        };
        goToView('orderNowCart');
        showOrderNowCart();
    });
}

// SHOW NORMAL CART
function showCartProducts() {
    goToView('cart');
    showCartViewWithoutHistory();
}

// SHOW NORMAL CART WITHOUT HISTORY
function showCartViewWithoutHistory() {
    currentView = 'cart';
    main.style.display = 'none';
    productView.innerHTML = '';
    productView.style.display = 'none';
    checkoutFormContainer.style.display = 'none';
    checkoutForm.style.display = 'none';
    cartContainer.style.display = 'flex';
    exitBtn.style.display = 'block';
    cartContainer.innerHTML = '';
    // EMPTY REAL CART
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
    renderCartItems(cartItems, false);
}

// SHOW ORDER NOW CART
// This cart shows only the temporary item.
function showOrderNowCart() {
    currentView = 'orderNowCart';
    main.style.display = 'none';
    productView.innerHTML = '';
    productView.style.display = 'none';
    checkoutFormContainer.style.display = 'none';
    checkoutForm.style.display = 'none';
    cartContainer.style.display = 'flex';
    exitBtn.style.display = 'block';
    cartContainer.innerHTML = '';
    if (!orderNowItem) {
        cartContainer.innerHTML = `
            <div class="emptyCart">
                No product selected
            </div>
        `;
        cartTotal.style.display = 'none';
        checkOut.style.display = 'none';
        return;
    }
    cartTotal.style.display = 'block';
    checkOut.style.display = 'block';
    renderCartItems([orderNowItem], true);
}

// RENDER CART ITEMS
function renderCartItems(items, isTemporary) {
    cartContainer.innerHTML = '';
    items.forEach(cartItem => {
        const product = mobiles.find(item => item.id === cartItem.id);
        if (!product) return;
        const divC = document.createElement('div');
        divC.classList.add('cartProducts');
        divC.dataset.id = product.id;
        divC.innerHTML = `
            <div class="cartProductImg">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="cartDetails">
                <div class="cartProductName">${product.name}</div>
                <div class="cartProductPrice">
                    ₹${(product.discountPrice * cartItem.quantity).toLocaleString('en-IN')}
                </div>
                <div class="cartQuantity">
                    <button class="minus" type="button">-</button>
                    <span class="cartPrice">${cartItem.quantity}</span>
                    <button class="plus" type="button">+</button>
                </div>
                <button class="deleteCartItem" type="button">Delete</button>
            </div>
        `;
        const plus = divC.querySelector('.plus');
        const minus = divC.querySelector('.minus');
        const cartPrice = divC.querySelector('.cartPrice');
        const cartProductPrice = divC.querySelector('.cartProductPrice');
        const deleteBtn = divC.querySelector('.deleteCartItem');
        // MINUS STATE
        if (cartItem.quantity <= 1) {
            minus.disabled = true;
            minus.style.cursor = 'not-allowed';
        }
        // PLUS STATE
        if (cartItem.quantity >= 4) {
            plus.disabled = true;
            plus.style.cursor = 'not-allowed';
        }
        // PLUS
        plus.addEventListener('click', () => {
            if (cartItem.quantity >= 4) {
                return;
            }
            cartItem.quantity++;
            cartPrice.textContent = cartItem.quantity;
            cartProductPrice.textContent = `₹${(product.discountPrice * cartItem.quantity).toLocaleString('en-IN')}`;
            if (!isTemporary) {
                saveCart();
            }
            minus.disabled = false;
            minus.style.cursor = 'pointer';
            if (cartItem.quantity >= 4) {
                plus.disabled = true;
                plus.style.cursor = 'not-allowed';
            }
            updateDisplayedCartTotal(items);
        });
        // MINUS
        minus.addEventListener('click', () => {
            if (cartItem.quantity <= 1) {
                return;
            }
            cartItem.quantity--;
            cartPrice.textContent = cartItem.quantity;
            cartProductPrice.textContent = `₹${(product.discountPrice * cartItem.quantity).toLocaleString('en-IN')}`;
            if (!isTemporary) {
                saveCart();
            }
            plus.disabled = false;
            plus.style.cursor = 'pointer';
            if (cartItem.quantity <= 1) {
                minus.disabled = true;
                minus.style.cursor = 'not-allowed';
            }
            updateDisplayedCartTotal(items);
        });
        // DELETE
        deleteBtn.addEventListener('click', () => {
            if (isTemporary) {
                orderNowItem = null;
                cartContainer.innerHTML = `
                    <div class="emptyCart">
                        Your cart is empty
                    </div>
                `;
                cartTotal.style.display = 'none';
                checkOut.style.display = 'none';
                return;
            }
            cartItems = cartItems.filter(item => item.id !== product.id);
            saveCart();
            showCartViewWithoutHistory();
        });
        cartContainer.appendChild(divC);
    });
    updateDisplayedCartTotal(items);
}

// UPDATE DISPLAYED TOTAL
function updateDisplayedCartTotal(items) {
    let total = 0;
    items.forEach(cartItem => {
        const product = mobiles.find(item => item.id === cartItem.id);
        if (!product) return;
        total += product.discountPrice * cartItem.quantity;
    });
    cartTotal.textContent = `Total: ₹${total.toLocaleString('en-IN')}`;
}

// EXIT BUTTON
if (exitBtn) {
    exitBtn.addEventListener('click', () => {
        goBack();
    });
}

// GOOGLE APPS SCRIPT
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzdPSBG7-xITGDcybpjlN9aauUFESknLuiJe63NR0NffJFZtiRNIzYfK7Swha8mKrrC/exec';

// CHECKOUT
function showCheckoutView() {
    goToView('form');
    showCheckoutViewWithoutHistory();
}
function showCheckoutViewWithoutHistory() {
    currentView = 'form';
    main.style.display = 'none';
    productView.innerHTML = '';
    productView.style.display = 'none';
    cartContainer.style.display = 'none';
    cartTotal.style.display = 'none';
    checkOut.style.display = 'none';
    checkoutFormContainer.style.display = 'flex';
    checkoutForm.style.display = 'block';
    exitBtn.style.display = 'block';
}

// CHECKOUT BUTTON
if (checkOut) {
    checkOut.addEventListener('click', () => {
        let checkoutItems = [];
        // NORMAL CART
        if (currentView === 'cart') {
            checkoutItems = cartItems;
        }
        // ORDER NOW CART
        if (currentView === 'orderNowCart') {
            if (orderNowItem) {
                checkoutItems = [orderNowItem];
            }
        }
        if (checkoutItems.length === 0) {
            return;
        }
        const products = [];
        let totalCost = 0;
        checkoutItems.forEach((cartItem, index) => {
            const product = mobiles.find(item => item.id === cartItem.id);
            if (!product) return;
            const quantity = cartItem.quantity || 1;
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
        // CREATE CHECKOUT TABLE
        checkoutProducts.innerHTML = '';
        const table = document.createElement('table');
        table.classList.add('checkoutTable');
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
                    <td colspan="4">Total Cost</td>
                    <td>₹${totalCost.toLocaleString('en-IN')}</td>
                </tr>
            </tfoot>
        `;
        const tbody = table.querySelector('tbody');
        products.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.sno}</td>
                <td>${product.name}</td>
                <td>₹${product.price.toLocaleString('en-IN')}</td>
                <td>${product.quantity}</td>
                <td>₹${product.totalPrice.toLocaleString('en-IN')}</td>
            `;
            tbody.appendChild(row);
        });
        checkoutProducts.appendChild(table);
        if (checkoutTotalPrice) {
            checkoutTotalPrice.textContent = totalCost.toLocaleString('en-IN');
        }
        showCheckoutView();
    });
}

// SUBMIT ORDER
if (checkoutForm) {
    checkoutForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const button = document.querySelector('#placeOrder');
        if (button) {
            button.disabled = true;
            button.textContent = 'Saving Order...';
        }
        const name = document.querySelector('#customerName')?.value.trim() || '';
        const whatsapp = document.querySelector('#whatsapp')?.value.trim() || '';
        const address = document.querySelector('#address')?.value.trim() || '';
        const district = document.querySelector('#district')?.value || '';
        const pincode = document.querySelector('#pincode')?.value.trim() || '';
        // DETERMINE PRODUCTS TO ORDER
        let orderItems = [];
        if (currentView === 'orderNowCart') {
            if (orderNowItem) {
                orderItems = [orderNowItem];
            }
        } else {
            orderItems = cartItems;
        }
        const products = [];
        let totalCost = 0;
        orderItems.forEach((cartItem, index) => {
            const product = mobiles.find(item => item.id === cartItem.id);
            if (!product) return;
            const quantity = cartItem.quantity || 1;
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
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8'
                },
                body: JSON.stringify(orderData)
            });
            // SUCCESS
            checkoutForm.style.display = 'none';
            checkoutFormContainer.style.display = 'none';
            cartContainer.style.display = 'none';
            cartTotal.style.display = 'none';
            checkOut.style.display = 'none';
            exitBtn.style.display = 'none';
            main.style.display = 'none';
            productView.innerHTML = '';
            checkoutProducts.innerHTML = '';
            // CLEAR ONLY WHAT WAS ORDERED
            if (currentView === 'orderNowCart') {
                // Order Now was temporary.
                // Just remove it from memory.
                orderNowItem = null;
            } else {
                // Normal cart order.
                // Clear localStorage cart.
                cartItems = [];
                localStorage.removeItem('cartItems');
            }
            if (orderSuccess) {
                orderSuccess.style.display = 'flex';
            }
            viewHistory = ['main'];
            currentView = 'main';
        } catch (error) {
            console.error('Order error:', error);
            alert('Something went wrong while saving the order.');
            if (button) {
                button.disabled = false;
                button.textContent = 'Place Order';
            }
        }
    });
}

// CONTINUE SHOPPING
if (continueShopping) {
    continueShopping.addEventListener('click', () => {
        location.reload();
    });
}

// CART BUTTON
const cartBtn = document.querySelector('#cartBtn');
if (cartBtn) {
    cartBtn.addEventListener('click', () => {
        showCartProducts();
    });
}
