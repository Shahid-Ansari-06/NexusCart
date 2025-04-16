/// Enhanced product data
const products = {
    electronics: [
        {
            id: 1,
            title: "Samsung 108 cm (43 inches) Full HD Smart LED TV UA43T5450AKXXL (Black)",
            image: "https://m.media-amazon.com/images/I/71ax3phCOVL._SX679_.jpg",
            currentPrice: "₹22,990",
            originalPrice: "₹40,400",
            discount: "41% off",
            badge: "Popular",
            link: "https://amzn.to/42tT3fN",
            category: "electronics",
            description: "Resolution: Full HD (1920x1080) | Refresh Rate: 50 HertzResolution: Full HD (1920x1080) | Refresh Rate: 50 Hertz",
            features: ["Full HD Resolution", "PurColor", "One Remote Function", "Supported Apps: Netflix, Prime Video, YouTube, Zee5, Jio Cinema & Many More", "Remote Access"],
            rating: 4.1,
            reviews: 12380,
            trending: true
        },

        {
            id: 2,
            title: "Yuva Go Pro Native 1080P Android 13.0 Smart Projector, Auto Keystone, 4X Brighter, 4K HDR Support, Rotatable Design with Netflix, Prime etc, WiFi 6 & BT, Screen Mirroring, ARC, White",
            image: "https://m.media-amazon.com/images/I/71p+SANP7DL._SY450_.jpg",
            currentPrice: "₹10,989",
            originalPrice: "₹29,990",
            discount: "63% off",
            badge: "Best Seller",
            link: "https://amzn.to/4ifCQ3F",
            category: "electronics",
            description: "🔥【Native 1080P | Support 4K Decoding | Brightness 4X | Auto Keystone | ARC】 : The 2025 Yuva Go Pro portable projector, newly launched, is powered by a high-performance LED light source and supports 4K decoding. With a native resolution of 1920x1080 and an impressive 6000:1 dynamic contrast ratio, it offers four times the brightness, clarity, and color depth. Enjoy vibrant, high-resolution projections with enhanced color accuracy and exceptional detail.",
            features: ["Native 1080P, 4K HDR Support", "Android 13 TV OS, Dual Desktop", "4X High Brightness (Best in Segment)", "HDMI ARC+CEC Support, Auto Keystone, 5 Watt HiFi Speaker, 5.0 Bluetooth, Dual Band WiFi 6", "270° Rotatable and Ceiling Mountable"],
            rating: 4.3,
            reviews: 4362,
            trending: true
        },

        {
            id: 3,
            title: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
            image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg",
            currentPrice: "₹22,990",
            originalPrice: "₹29,990",
            discount: "23% off",
            badge: "Best Seller",
            link: "https://amzn.to/4lQkSrR",
            category: "electronics",
            description: "Industry-leading noise cancellation with Dual Noise Sensor technology...",
            features: ["Noise cancellation", "30-hour battery", "Touch controls"],
            rating: 4.8,
            reviews: 1245,
            trending: true
        },
        
        {
            id: 4,
            title: "Mix Indian Currency Counting Machine with Fake Note Detection Best Mix Note Value Counting Machine (Touch Panel, CSI Sensor)",
            image: "https://m.media-amazon.com/images/I/71afRhTbc4L._SX450_.jpg",
            currentPrice: "₹17,960",
            originalPrice: "₹24,500",
            discount: "27% off",
            badge: "Best Seller",
            link: "https://amzn.to/3RleYRu",
            category: "electronics",
            description: "COUNT MIX NOTE AND SHOW ON DISPLAY EACH NUMBER OF EACH NOTE, TOTAL NUMBER OF NOTES, TOTAL AMOUNT OF MIX NOTES WITH UV, MG, IR, AND MT DETECTION (INBUILD COLOR DETECTION SENSOR)",
            features: ["COUNTING MODE AUTO AND MANUAL BOTH CURRENCY MODE INR", "DOLLAR, EURO, POUND"],
            rating: 5,
            reviews: 1,
            trending: true
        },
        
        {
            id: 5,
            title: "Nikon D7500 20.9MP Digital SLR Camera (Black) with AF-S DX NIKKOR 18-140mm f/3.5-5.6G ED VR Lens",
            image: "https://m.media-amazon.com/images/I/71iKNJ6rVIL._SY450_.jpg",
            currentPrice: "₹77,990",
            originalPrice: "₹94,950",
            discount: "18% off",
            badge: "Popular",
            link: "https://amzn.to/3RkvK2X",
            category: "electronics",
            description: "20.9MP DX-Format CMOS Sensor, SnapBridge Bluetooth and Wi-Fi;4K UHD Video Recording at 30 fps",
            features: ["180k-Pixel RGB Sensor and Group Area AF; Country of Origin: Japan", "Multi-CAM 3500FX II 51-Point AF System", "Native ISO 51200, Expanded ISO 1,640,000"],
            rating: 4.4,
            reviews: 565,
            trending: true
        },
    ],

    mobiles: [
        {
            id: 6,
            title: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
            image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg",
            currentPrice: "₹22,990",
            originalPrice: "₹29,990",
            discount: "23% off",
            badge: "Best Seller",
            link: "https://www.amazon.in/Sony-WH-1000XM4-Cancelling-Headphones-Bluetooth/dp/B0863TXGM3",
            category: "electronics",
            description: "Industry-leading noise cancellation with Dual Noise Sensor technology...",
            features: ["Noise cancellation", "30-hour battery", "Touch controls"],
            rating: 4.8,
            reviews: 1245,
            trending: true
        },

        {
            id: 7,
            title: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
            image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg",
            currentPrice: "₹22,990",
            originalPrice: "₹29,990",
            discount: "23% off",
            badge: "Best Seller",
            link: "https://www.amazon.in/Sony-WH-1000XM4-Cancelling-Headphones-Bluetooth/dp/B0863TXGM3",
            category: "electronics",
            description: "Industry-leading noise cancellation with Dual Noise Sensor technology...",
            features: ["Noise cancellation", "30-hour battery", "Touch controls"],
            rating: 4.8,
            reviews: 1245,
            trending: true
        },

        {
            id: 8,
            title: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
            image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg",
            currentPrice: "₹22,990",
            originalPrice: "₹29,990",
            discount: "23% off",
            badge: "Best Seller",
            link: "https://www.amazon.in/Sony-WH-1000XM4-Cancelling-Headphones-Bluetooth/dp/B0863TXGM3",
            category: "electronics",
            description: "Industry-leading noise cancellation with Dual Noise Sensor technology...",
            features: ["Noise cancellation", "30-hour battery", "Touch controls"],
            rating: 4.8,
            reviews: 1245,
            trending: true
        },

        {
            id: 9,
            title: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
            image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg",
            currentPrice: "₹22,990",
            originalPrice: "₹29,990",
            discount: "23% off",
            badge: "Best Seller",
            link: "https://www.amazon.in/Sony-WH-1000XM4-Cancelling-Headphones-Bluetooth/dp/B0863TXGM3",
            category: "electronics",
            description: "Industry-leading noise cancellation with Dual Noise Sensor technology...",
            features: ["Noise cancellation", "30-hour battery", "Touch controls"],
            rating: 4.8,
            reviews: 1245,
            trending: true
        },
        
        {
            id: 10,
            title: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
            image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg",
            currentPrice: "₹22,990",
            originalPrice: "₹29,990",
            discount: "23% off",
            badge: "Best Seller",
            link: "https://www.amazon.in/Sony-WH-1000XM4-Cancelling-Headphones-Bluetooth/dp/B0863TXGM3",
            category: "electronics",
            description: "Industry-leading noise cancellation with Dual Noise Sensor technology...",
            features: ["Noise cancellation", "30-hour battery", "Touch controls"],
            rating: 4.8,
            reviews: 1245,
            trending: true
        }
    ],

    fashion: [
        {
            id: 11,
            title: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
            image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg",
            currentPrice: "₹22,990",
            originalPrice: "₹29,990",
            discount: "23% off",
            badge: "Best Seller",
            link: "https://www.amazon.in/Sony-WH-1000XM4-Cancelling-Headphones-Bluetooth/dp/B0863TXGM3",
            category: "electronics",
            description: "Industry-leading noise cancellation with Dual Noise Sensor technology...",
            features: ["Noise cancellation", "30-hour battery", "Touch controls"],
            rating: 4.8,
            reviews: 1245,
            trending: true
        },

        {
            id: 12,
            title: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
            image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg",
            currentPrice: "₹22,990",
            originalPrice: "₹29,990",
            discount: "23% off",
            badge: "Best Seller",
            link: "https://www.amazon.in/Sony-WH-1000XM4-Cancelling-Headphones-Bluetooth/dp/B0863TXGM3",
            category: "electronics",
            description: "Industry-leading noise cancellation with Dual Noise Sensor technology...",
            features: ["Noise cancellation", "30-hour battery", "Touch controls"],
            rating: 4.8,
            reviews: 1245,
            trending: true
        },

        {
            id: 13,
            title: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
            image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg",
            currentPrice: "₹22,990",
            originalPrice: "₹29,990",
            discount: "23% off",
            badge: "Best Seller",
            link: "https://www.amazon.in/Sony-WH-1000XM4-Cancelling-Headphones-Bluetooth/dp/B0863TXGM3",
            category: "electronics",
            description: "Industry-leading noise cancellation with Dual Noise Sensor technology...",
            features: ["Noise cancellation", "30-hour battery", "Touch controls"],
            rating: 4.8,
            reviews: 1245,
            trending: true
        },

        {
            id: 14,
            title: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
            image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg",
            currentPrice: "₹22,990",
            originalPrice: "₹29,990",
            discount: "23% off",
            badge: "Best Seller",
            link: "https://www.amazon.in/Sony-WH-1000XM4-Cancelling-Headphones-Bluetooth/dp/B0863TXGM3",
            category: "electronics",
            description: "Industry-leading noise cancellation with Dual Noise Sensor technology...",
            features: ["Noise cancellation", "30-hour battery", "Touch controls"],
            rating: 4.8,
            reviews: 1245,
            trending: true
        },
        
        {
            id: 15,
            title: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
            image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg",
            currentPrice: "₹22,990",
            originalPrice: "₹29,990",
            discount: "23% off",
            badge: "Best Seller",
            link: "https://www.amazon.in/Sony-WH-1000XM4-Cancelling-Headphones-Bluetooth/dp/B0863TXGM3",
            category: "electronics",
            description: "Industry-leading noise cancellation with Dual Noise Sensor technology...",
            features: ["Noise cancellation", "30-hour battery", "Touch controls"],
            rating: 4.8,
            reviews: 1245,
            trending: true
        }
    ],

    trending: [
        {
            id: 16,
            title: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
            image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg",
            currentPrice: "₹22,990",
            originalPrice: "₹29,990",
            discount: "23% off",
            badge: "Best Seller",
            link: "https://www.amazon.in/Sony-WH-1000XM4-Cancelling-Headphones-Bluetooth/dp/B0863TXGM3",
            category: "electronics",
            description: "Industry-leading noise cancellation with Dual Noise Sensor technology...",
            features: ["Noise cancellation", "30-hour battery", "Touch controls"],
            rating: 4.8,
            reviews: 1245,
            trending: true
        },

        {
            id: 17,
            title: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
            image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg",
            currentPrice: "₹22,990",
            originalPrice: "₹29,990",
            discount: "23% off",
            badge: "Best Seller",
            link: "https://www.amazon.in/Sony-WH-1000XM4-Cancelling-Headphones-Bluetooth/dp/B0863TXGM3",
            category: "electronics",
            description: "Industry-leading noise cancellation with Dual Noise Sensor technology...",
            features: ["Noise cancellation", "30-hour battery", "Touch controls"],
            rating: 4.8,
            reviews: 1245,
            trending: true
        },

        {
            id: 18,
            title: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
            image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg",
            currentPrice: "₹22,990",
            originalPrice: "₹29,990",
            discount: "23% off",
            badge: "Best Seller",
            link: "https://www.amazon.in/Sony-WH-1000XM4-Cancelling-Headphones-Bluetooth/dp/B0863TXGM3",
            category: "electronics",
            description: "Industry-leading noise cancellation with Dual Noise Sensor technology...",
            features: ["Noise cancellation", "30-hour battery", "Touch controls"],
            rating: 4.8,
            reviews: 1245,
            trending: true
        },

        {
            id: 19,
            title: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
            image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg",
            currentPrice: "₹22,990",
            originalPrice: "₹29,990",
            discount: "23% off",
            badge: "Best Seller",
            link: "https://www.amazon.in/Sony-WH-1000XM4-Cancelling-Headphones-Bluetooth/dp/B0863TXGM3",
            category: "electronics",
            description: "Industry-leading noise cancellation with Dual Noise Sensor technology...",
            features: ["Noise cancellation", "30-hour battery", "Touch controls"],
            rating: 4.8,
            reviews: 1245,
            trending: true
        },
        
        {
            id: 20,
            title: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
            image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg",
            currentPrice: "₹22,990",
            originalPrice: "₹29,990",
            discount: "23% off",
            badge: "Best Seller",
            link: "https://www.amazon.in/Sony-WH-1000XM4-Cancelling-Headphones-Bluetooth/dp/B0863TXGM3",
            category: "electronics",
            description: "Industry-leading noise cancellation with Dual Noise Sensor technology...",
            features: ["Noise cancellation", "30-hour battery", "Touch controls"],
            rating: 4.8,
            reviews: 1245,
            trending: true
        }
    ],
};

// Wishlist data
let wishlist = [];
const wishlistCount = document.querySelector('.wishlist-count');

// DOM elements
const pages = document.querySelectorAll('.page');
const wishlistItemsContainer = document.getElementById('wishlistItems');
const wishlistEmpty = document.getElementById('wishlistEmpty');
const searchResults = document.getElementById('searchResults');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const categoryHeader = document.getElementById('categoryHeader');
const categoryTitle = document.getElementById('categoryTitle');
const categoryProducts = document.getElementById('categoryProducts');
const productDetailContent = document.getElementById('productDetailContent');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    loadData();
    renderProducts();
    initHeroSlider();
    updateWishlistCount();
    showPage('home');
    startDealTimer();
});

// ==================== HERO SLIDER ====================
function initHeroSlider() {
    const slider = document.getElementById('heroSlider');
    const slides = document.querySelectorAll('.hero-slide');
    const dotsContainer = document.getElementById('sliderDots');
    const prevBtn = document.createElement('button');
    const nextBtn = document.createElement('button');
    let currentSlide = 0;
    let autoSlideInterval;

    // Create navigation dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'slider-dot';
        dot.dataset.index = index;
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    // Auto-slide functionality
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => navigate(1), 3000);
    }

    function pauseAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    function resetAutoSlide() {
        pauseAutoSlide();
        startAutoSlide();
    }

    // Navigation functions
    function navigate(direction) {
        const newIndex = (currentSlide + direction + slides.length) % slides.length;
        goToSlide(newIndex);
    }

    function goToSlide(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
        currentSlide = index;
        
        // Update dots
        document.querySelectorAll('.slider-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        resetAutoSlide();
    }

    // Touch support for mobile
    let touchStartX = 0;
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        pauseAutoSlide();
    }, { passive: true });

    slider.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) { // Minimum swipe distance
            diff > 0 ? navigate(1) : navigate(-1);
        }
        startAutoSlide();
    }, { passive: true });

    // Pause on hover
    slider.addEventListener('mouseenter', pauseAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);

    // Initialize
    slider.style.display = 'flex';
    slider.style.transition = 'transform 0.5s ease-in-out';
    startAutoSlide();
}

// ==================== WISHLIST FUNCTIONS ====================
function toggleWishlist(product, button) {
    const isInWishlist = wishlist.some(item => item.id === product.id);
    
    if (isInWishlist) {
        wishlist = wishlist.filter(item => item.id !== product.id);
        showNotification(`${product.title} removed from wishlist`);
    } else {
        wishlist.push(product);
        showNotification(`${product.title} added to wishlist`);
    }

    updateWishlistUI(button);
    saveWishlistToStorage();
    updateWishlistCount();
    
    if (document.getElementById('wishlist').classList.contains('active')) {
        renderWishlistItems();
    }
}

function updateWishlistUI(button) {
    const icon = button.querySelector('i');
    const isActive = wishlist.some(item => item.id === parseInt(button.dataset.id));
    icon.classList.toggle('far', !isActive);
    icon.classList.toggle('fas', isActive);
    button.classList.toggle('active', isActive);
}

function saveWishlistToStorage() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function loadData() {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
        try {
            wishlist = JSON.parse(savedWishlist) || [];
        } catch (e) {
            console.error("Failed to parse wishlist:", e);
            wishlist = [];
        }
    }
}

function updateWishlistCount() {
    wishlistCount.textContent = wishlist.length;
}

function renderWishlistItems() {
    wishlistItemsContainer.innerHTML = '';
    
    if (wishlist.length === 0) {
        wishlistEmpty.style.display = 'block';
        return;
    }
    
    wishlistEmpty.style.display = 'none';
    wishlist.forEach(item => {
        wishlistItemsContainer.appendChild(createProductCard(item));
    });
}

// ==================== PRODUCT FUNCTIONS ====================
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card hover-grow';
    card.onclick = (e) => {
        if (!e.target.closest('.wishlist') && !e.target.closest('.buy-now')) {
            showProductDetail(product.id);
        }
    };
    
    card.innerHTML = `
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        <div class="product-image-container">
            <img src="${product.image}" alt="${product.title}" class="product-image">
        </div>
        <div class="product-details">
            <h3 class="product-title">${product.title}</h3>
            <div class="product-price">
                <span class="current-price">${product.currentPrice}</span>
                ${product.originalPrice ? `<span class="original-price">${product.originalPrice}</span>` : ''}
                ${product.discount ? `<span class="discount">${product.discount}</span>` : ''}
            </div>
            <div class="product-actions">
                <a href="${product.link}" target="_blank" class="buy-now btn-futuristic"><i class="fas fa-shopping-bag"></i> Buy Now</a>
                <button class="wishlist ${wishlist.some(item => item.id === product.id) ? 'active' : ''}" 
                        data-id="${product.id}">
                    <i class="${wishlist.some(item => item.id === product.id) ? 'fas' : 'far'} fa-heart"></i>
                </button>
            </div>
        </div>
    `;
    
    const wishlistBtn = card.querySelector('.wishlist');
    wishlistBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleWishlist(product, wishlistBtn);
    });
    
    return card;
}

function showProductDetail(productId, event) {
    if (event) event.stopPropagation();
    
    const allProducts = Object.values(products).flat();
    const product = allProducts.find(p => p.id === productId);
    
    if (!product) return;
    
    productDetailContent.innerHTML = `
        <div class="product-gallery">
            <img src="${product.image}" alt="${product.title}" class="product-main-image">
        </div>
        <div class="product-info">
            <h1>${product.title}</h1>
            <div class="product-rating">
                <div class="stars">
                    ${'<i class="fas fa-star"></i>'.repeat(Math.floor(product.rating))}
                    ${product.rating % 1 ? '<i class="fas fa-star-half-alt"></i>' : ''}
                    ${'<i class="far fa-star"></i>'.repeat(5 - Math.ceil(product.rating))}
                </div>
                <div class="review-count">${product.reviews} reviews</div>
            </div>
            <div class="product-price-large">
                <span class="current-price-large">${product.currentPrice}</span>
                ${product.originalPrice ? `<span class="original-price-large">${product.originalPrice}</span>` : ''}
                ${product.discount ? `<span class="discount-large">${product.discount}</span>` : ''}
            </div>
            <div class="product-description">
                <p>${product.description}</p>
            </div>
            <div class="product-features">
                <h3>Key Features</h3>
                <ul>
                    ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            <div class="product-actions-large">
                <a href="${product.link}" target="_blank" class="buy-now-large btn-futuristic">
                    <i class="fas fa-shopping-bag"></i> Buy Now
                </a>
                <button class="wishlist-large ${wishlist.some(item => item.id === product.id) ? 'active' : ''}" 
                        data-id="${product.id}">
                    <i class="${wishlist.some(item => item.id === product.id) ? 'fas' : 'far'} fa-heart"></i>
                </button>
            </div>
        </div>
    `;
    
    const wishlistBtn = productDetailContent.querySelector('.wishlist-large');
    wishlistBtn.addEventListener('click', () => toggleWishlist(product, wishlistBtn));
    
    showPage('product-detail');
}

// ==================== PAGE NAVIGATION ====================
function showPage(pageId) {
    pages.forEach(page => {
        page.classList.remove('active');
        if (page.id === pageId) {
            page.classList.add('active');
            if (pageId === 'wishlist') {
                renderWishlistItems();
            } else if (pageId === 'category') {
                renderCategoryProducts();
            } else if (pageId === 'deals') {
                renderDealsProducts();
            } else if (pageId === 'trending') {
                renderTrendingProducts();
            }
        }
    });
    window.scrollTo(0, 0);
}

function goBack() {
    history.length > 1 ? history.back() : showPage('home');
}

function showCategoryPage(category) {
    const categoryNames = {
        'electronics': 'Electronics',
        'mobiles': 'Mobiles',
        'fashion': 'Fashion',
        'deals': 'Deals',
        'trending': 'Trending'
    };
    
    categoryTitle.textContent = categoryNames[category] || 'Category';
    
    const colors = {
        'electronics': '#6e00ff',
        'mobiles': '#00ff88',
        'fashion': '#ff2d75',
        'deals': '#e53935',
        'trending': '#ff6d00'
    };
    
    categoryHeader.style.background = `linear-gradient(135deg, ${colors[category] || '#6e00ff'}, ${lightenColor(colors[category] || '#6e00ff', 20)})`;
    
    sessionStorage.setItem('currentCategory', category);
    showPage('category');
}

function lightenColor(color, percent) {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return '#' + (
        0x1000000 +
        (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255)
    ).toString(16).slice(1);
}

// ==================== OTHER UTILITY FUNCTIONS ====================
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

function startDealTimer() {
    const dealTimer = document.getElementById('dealTimer');
    if (!dealTimer) return;
    
    let hours = 23;
    let minutes = 59;
    let seconds = 59;
    
    setInterval(() => {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
            if (minutes < 0) {
                minutes = 59;
                hours--;
                if (hours < 0) {
                    hours = 23;
                    minutes = 59;
                    seconds = 59;
                }
            }
        }
        
        dealTimer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
}

// ==================== PRODUCT RENDERING ====================
function renderProducts() {
    const sections = {
        'electronics': document.getElementById('electronics'),
        'mobiles': document.getElementById('mobiles'),
        'fashion': document.getElementById('fashion'),
        'trending': document.getElementById('trending')
    };
    
    for (const [category, section] of Object.entries(sections)) {
        if (section) {
            section.innerHTML = '';
            if (products[category]) {
                products[category].forEach(product => {
                    section.appendChild(createProductCard(product));
                });
            }
        }
    }
}

function renderCategoryProducts() {
    const category = sessionStorage.getItem('currentCategory') || 'electronics';
    if (categoryProducts) {
        categoryProducts.innerHTML = '';
        
        if (products[category] && products[category].length > 0) {
            products[category].forEach(product => {
                categoryProducts.appendChild(createProductCard(product));
            });
        } else {
            categoryProducts.innerHTML = '<p class="no-products">No products found in this category</p>';
        }
    }
}

function renderDealsProducts() {
    const dealsProducts = document.getElementById('dealsProducts');
    const flashSaleProducts = document.getElementById('flashSaleProducts');
    
    if (dealsProducts) {
        dealsProducts.innerHTML = '';
        const deals = products.deals || [];
        deals.forEach(product => {
            dealsProducts.appendChild(createProductCard(product));
        });
    }
    
    if (flashSaleProducts) {
        flashSaleProducts.innerHTML = '';
        const flashSale = [...products.electronics, ...products.mobiles]
            .sort(() => 0.5 - Math.random())
            .slice(0, 4);
        flashSale.forEach(product => {
            flashSaleProducts.appendChild(createProductCard(product));
        });
    }
}

function renderTrendingProducts() {
    const trendingProducts = document.getElementById('trendingProducts');
    const newReleasesProducts = document.getElementById('newReleasesProducts');
    
    if (trendingProducts) {
        trendingProducts.innerHTML = '';
        const trending = [...products.electronics, ...products.mobiles, ...products.fashion]
            .filter(product => product.trending)
            .slice(0, 6);
        trending.forEach(product => {
            trendingProducts.appendChild(createProductCard(product));
        });
    }
    
    if (newReleasesProducts) {
        newReleasesProducts.innerHTML = '';
        const newReleases = [...products.electronics, ...products.mobiles]
            .sort((a, b) => b.id - a.id)
            .slice(0, 4);
        newReleases.forEach(product => {
            newReleasesProducts.appendChild(createProductCard(product));
        });
    }
}
// Enhanced Search Functionality with Wishlist Button
function searchProducts() {
const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
const searchResults = document.getElementById('searchResults');

// Clear results if empty search
if (!searchTerm) {
searchResults.innerHTML = '';
searchResults.classList.remove('active');
return;
}

// Get all products from all categories
const allProducts = Object.values(products).flat();

// Filter products
const filteredProducts = allProducts.filter(product => {
const searchFields = [
    product.title,
    product.description,
    product.category,
    ...(product.features || [])
];
return searchFields.some(field => 
    field && field.toString().toLowerCase().includes(searchTerm)
);
});

// Display results
searchResults.innerHTML = '';

if (filteredProducts.length === 0) {
searchResults.innerHTML = `
    <div class="search-no-results">
        <i class="fas fa-search"></i>
        No products found for "${searchTerm}"
    </div>
`;
} else {
filteredProducts.slice(0, 8).forEach(product => {
    const resultItem = document.createElement('div');
    resultItem.className = 'search-result-item';
    resultItem.dataset.productId = product.id;
    
    resultItem.innerHTML = `
    <img src="${product.image}" alt="${product.title}" class="search-result-img">
    <div class="search-result-info">
        <h3 class="search-result-title">${product.title}</h3>
        <div class="search-result-pricing">
            <span class="search-result-price">${product.currentPrice}</span>
            ${product.originalPrice ? `<span class="search-result-original-price">${product.originalPrice}</span>` : ''}
                ${product.discount ? `<span class="discount">${product.discount}</span>` : ''}
            </div>
            </div>
            <button class="search-wishlist-btn-5 ${wishlist.some(item => item.id === product.id) ? 'active' : ''}">
                <i class="${wishlist.some(item => item.id === product.id) ? 'fas' : 'far'} fa-heart"></i>
            </button>
    `;
    
    // Add click event to show product details
    resultItem.addEventListener('click', function(e) {
        // Don't trigger if clicking on wishlist button
        if (!e.target.closest('.search-wishlist-btn-5')) {
            showProductDetail(product.id);
            searchResults.classList.remove('active');
        }
    });
    
    // Add wishlist functionality
    const wishlistBtn = resultItem.querySelector('.search-wishlist-btn-5');
    wishlistBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleWishlist(product, wishlistBtn);
    });
    
    searchResults.appendChild(resultItem);
});
}

searchResults.classList.add('active');
}