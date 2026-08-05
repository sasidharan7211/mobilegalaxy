let ulElement = document.querySelector('ul');
let barsElement = document.querySelector('.bars');
barsElement.addEventListener('click', () => {
    ulElement.classList.toggle('show');
});
const showImg1 = document.querySelector('.showImg1');
const showImg2 = document.querySelector('.showImg2');
const showImg3 = document.querySelector('.showImg3');
const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
let currentIndex = 0;
let interval1, interval2, interval3;
if(window.innerWidth <= 768) {
    clearInterval(interval2);
    clearInterval(interval3);
    let interval1 = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImg1.style.backgroundImage = `url('images/${images[currentIndex]}')`;
    }, 2000);
}
else if (window.innerWidth > 768 && window.innerWidth <= 1024) {
    clearInterval(interval1);
    clearInterval(interval3);
    let interval2 = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImg1.style.backgroundImage = `url('images/${images[currentIndex]}')`;
        showImg2.style.backgroundImage = `url('images/${images[(currentIndex + 1) % images.length]}')`;
    }, 2000);
} 
else {
    clearInterval(interval1);
    clearInterval(interval2);
    let interval3 = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImg1.style.backgroundImage = `url('images/${images[currentIndex]}')`;
        showImg2.style.backgroundImage = `url('images/${images[(currentIndex + 1) % images.length]}')`;
        showImg3.style.backgroundImage = `url('images/${images[(currentIndex + 2) % images.length]}')`;
    }, 2000);
}
const mobiles = [
  {
    id: 1,
    name: "Apple iPhone 16",
    marketPrice: 79900,
    discountPrice: 74999,
    image: "images/product1.png",
    description: "6.1-inch OLED display, A18 chip, 128GB storage."
  },
  {
    id: 2,
    name: "Apple iPhone 16 Plus",
    marketPrice: 89900,
    discountPrice: 84999,
    image: "images/product2.png",
    description: "6.7-inch OLED display with long battery life."
  },
  {
    id: 3,
    name: "Apple iPhone 17 Pro Max",
    marketPrice: 119900,
    discountPrice: 112999,
    image: "images/product3.png",
    description: "Titanium body with A18 Pro chip."
  },
  {
    id: 4,
    name: "Samsung Galaxy S25",
    marketPrice: 80999,
    discountPrice: 75999,
    image: "images/product4.png",
    description: "AMOLED display with flagship performance."
  },
  {
    id: 5,
    name: "Samsung Galaxy S25+",
    marketPrice: 99999,
    discountPrice: 93999,
    image: "images/product5.png",
    description: "Large AMOLED display and fast processor."
  },
  {
    id: 6,
    name: "Samsung Galaxy S25 Ultra",
    marketPrice: 129999,
    discountPrice: 121999,
    image: "images/product6.png",
    description: "200MP camera with S Pen support."
  },
  {
    id: 7,
    name: "OnePlus 13",
    marketPrice: 69999,
    discountPrice: 64999,
    image: "images/product7.png",
    description: "Snapdragon flagship with 100W charging."
  },
  {
    id: 8,
    name: "OnePlus 13R",
    marketPrice: 42999,
    discountPrice: 39999,
    image: "images/product8.png",
    description: "Smooth AMOLED display and gaming performance."
  },
  {
    id: 9,
    name: "Xiaomi 15",
    marketPrice: 64999,
    discountPrice: 59999,
    image: "images/product9.png",
    description: "Premium design with Leica camera."
  },
  {
    id: 10,
    name: "Redmi Note 14 Pro",
    marketPrice: 29999,
    discountPrice: 26999,
    image: "images/product10.png",
    description: "200MP camera and 120Hz AMOLED display."
  },
  {
    id: 11,
    name: "Redmi Note 14",
    marketPrice: 19999,
    discountPrice: 17999,
    image: "images/product11.png",
    description: "Budget 5G smartphone with 5000mAh battery."
  },
  {
    id: 12,
    name: "POCO X7 Pro",
    marketPrice: 31999,
    discountPrice: 28999,
    image: "images/product12.png",
    description: "Gaming performance with AMOLED screen."
  },
  {
    id: 13,
    name: "POCO F7",
    marketPrice: 36999,
    discountPrice: 33999,
    image: "images/product13.png",
    description: "Powerful processor with fast charging."
  },
  {
    id: 14,
    name: "Realme GT 7",
    marketPrice: 39999,
    discountPrice: 36999,
    image: "images/product14.png",
    description: "Flagship performance and premium display."
  },
  {
    id: 15,
    name: "Realme Narzo 80 Pro",
    marketPrice: 22999,
    discountPrice: 20999,
    image: "images/product15.png",
    description: "Smooth 120Hz display and long battery."
  },
  {
    id: 16,
    name: "Vivo X200",
    marketPrice: 74999,
    discountPrice: 69999,
    image: "images/product16.png",
    description: "ZEISS camera with premium performance."
  },
  {
    id: 17,
    name: "Vivo V50",
    marketPrice: 37999,
    discountPrice: 34999,
    image: "images/product17.png",
    description: "Stylish design with AMOLED display."
  },
  {
    id: 18,
    name: "Vivo T4",
    marketPrice: 24999,
    discountPrice: 22499,
    image: "images/product18.png",
    description: "Fast processor with 5G connectivity."
  },
  {
    id: 19,
    name: "OPPO Find X8",
    marketPrice: 79999,
    discountPrice: 74999,
    image: "images/product19.png",
    description: "Premium flagship with excellent camera."
  },
  {
    id: 20,
    name: "OPPO Reno 13",
    marketPrice: 39999,
    discountPrice: 36499,
    image: "images/product20.png",
    description: "AI camera and 80W fast charging."
  },
  {
    id: 21,
    name: "Motorola Edge 60",
    marketPrice: 34999,
    discountPrice: 31999,
    image: "images/product21.png",
    description: "Curved OLED display with clean Android."
  },
  {
    id: 22,
    name: "Motorola Razr 60",
    marketPrice: 89999,
    discountPrice: 84999,
    image: "images/product22.png",
    description: "Premium foldable smartphone."
  },
  {
    id: 23,
    name: "Google Pixel 9",
    marketPrice: 79999,
    discountPrice: 74999,
    image: "images/product23.png",
    description: "Best-in-class camera and AI features."
  },
  {
    id: 24,
    name: "Google Pixel 9 Pro",
    marketPrice: 109999,
    discountPrice: 102999,
    image: "images/product24.png",
    description: "Professional camera and premium design."
  },
  {
    id: 25,
    name: "Nothing Phone (3)",
    marketPrice: 49999,
    discountPrice: 46999,
    image: "images/product25.png",
    description: "Transparent design with Glyph lights."
  },
  {
    id: 26,
    name: "Nothing Phone (3a)",
    marketPrice: 29999,
    discountPrice: 27499,
    image: "images/product26.png",
    description: "Stylish mid-range smartphone."
  },
    {   
    id: 27,
    name: "Nokia G60",
    marketPrice: 21999,
    discountPrice: 19999,
    image: "images/product27.png",
    description: "Reliable phone with clean Android."
  },
  {
    id: 28,
    name: "Honor 200 Pro",
    marketPrice: 49999,
    discountPrice: 45999,
    image: "images/product28.png",
    description: "AI-powered premium smartphone."
  },
  {
    id: 29,
    name: "Lava Agni 3",
    marketPrice: 29999,
    discountPrice: 26999,
    image: "images/product29.png",
    description: "Powerful 5G smartphone."
  },
  {
    id: 30,
    name: "JioPhone Prima 2",
    marketPrice: 3999,
    discountPrice: 3499,
    image: "images/product30.png",
    description: "Affordable 4G smartphone."
  }
];
const productContainer = document.querySelector('#productContainer');
function displayProducts(productsToDisplay = mobiles){
    productsToDisplay.forEach(mobile => {
        const productCard = document.createElement('div');
        productCard.classList.add('product');
        productCard.innerHTML = `
            <div class="productOuterImg">
                 <img src="${mobile.image}" alt="${mobile.name}" class="productImg">
            </div>
            <div class="productDetails">
                 <span class="productName">${mobile.name}</span><br>
                 <span class="productPrice">₹${mobile.discountPrice} <del>₹${mobile.marketPrice}</del></span><br>
                 <span class="productDescription">${mobile.description}</span>
                </div>
        `;
        productContainer.appendChild(productCard);
    });
}
displayProducts();
const searchValue = document.querySelector('#searchBar');
searchValue.addEventListener('input', () => {
  productContainer.innerHTML = '';
  const searchString = searchValue.value.toLowerCase().trim();
  const filteredProducts = mobiles.filter(mobile => {
    return mobile.name.toLowerCase().includes(searchString);
  })
  displayProducts(filteredProducts);
  document.querySelector('.showImgOuterContainer').style.display = searchValue.value === '' ? 'flex' : 'none' ;
})

