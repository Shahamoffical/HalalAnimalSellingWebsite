// ==========================================================================
// 1. HEADER HTML (Navbar & Mobile Menu)
// ==========================================================================
const headerHTML = `
<header class="bg-white shadow-sm sticky top-0 z-40">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center gap-2">
            <div class="bg-brand-green text-white p-2 rounded-lg">
                <i class="fa-solid fa-leaf text-xl"></i>
            </div>
            <span class="text-2xl font-bold tracking-tight text-gray-900">HASC</span>
        </div>

        <!-- Desktop Menu -->
        <nav class="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="index.html" id="nav-home" class="hover:text-brand-green transition">Home</a>
            <a href="LiveStock.html" id="nav-livestock" class="hover:text-brand-green transition">Livestock</a>
            <a href="feed.html" id="nav-feed" class="hover:text-brand-green transition">Feed & Care</a>
            <a href="aboutUs.html" id="nav-about" class="hover:text-brand-green transition">About Us</a>
            <a href="contactUs.html" id="nav-contact" class="hover:text-brand-green transition">Contact</a>
        </nav>

        <!-- Right Actions -->
        <div class="hidden md:flex items-center gap-6">
            <!-- Cart Icon -->
            <a href="#" onclick="window.openModal('view-cart-modal')" class="relative text-gray-600 hover:text-brand-green">
                <i class="fa-solid fa-cart-shopping text-xl"></i>
                <span id="cart-count" class="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">0</span>
            </a>
            
            <!-- Login/Register Buttons (Logic handled by auth.js usually, but modal triggers are safe here) -->
            <button onclick="if(typeof openModal === 'function') openModal('auth-modal', 'login')" class="font-medium text-gray-600 hover:text-brand-green">Login</button>
            <button onclick="if(typeof openModal === 'function') openModal('auth-modal', 'register')" class="bg-brand-green text-white px-5 py-2 rounded-full font-medium hover:bg-green-600 transition shadow-md hover:shadow-lg">Register</button>
        </div>

        <!-- Mobile Menu Button -->
        <button id="mobile-menu-btn" class="md:hidden text-2xl text-gray-700">
            <i class="fa-solid fa-bars"></i>
        </button>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-lg absolute w-full left-0 top-full z-40">
        <a href="index.html" class="block text-gray-700 hover:text-brand-green">Home</a>
        <a href="LiveStock.html" class="block text-gray-700 hover:text-brand-green">Livestock</a>
        <a href="feed.html" class="block text-gray-700 hover:text-brand-green">Feed & Care</a>
        <a href="aboutUs.html" class="block text-gray-700 hover:text-brand-green">About Us</a>
        <div class="border-t pt-4 flex flex-col gap-3">
            <button onclick="if(typeof openModal === 'function') openModal('auth-modal', 'login')" class="text-center font-medium">Login</button>
            <button onclick="if(typeof openModal === 'function') openModal('auth-modal', 'register')" class="bg-brand-green text-white py-2 rounded-full text-center">Register</button>
        </div>
    </div>
</header>
`;

// ==========================================================================
// 2. CART MODALS HTML (View Cart & Added Popup)
// ==========================================================================
const cartModalsHTML = `
    <!-- VIEW CART MODAL -->
    <div id="view-cart-modal" class="modal fixed inset-0 z-50 flex items-center justify-center p-4" style="opacity: 0; visibility: hidden; transition: all 0.3s ease;">
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="closeModal('view-cart-modal')"></div>
        <div class="modal-content relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 flex flex-col max-h-[80vh] transform scale-95 transition-transform duration-300">
            <div class="flex justify-between items-center mb-6 border-b pb-4">
                <h3 class="text-xl font-bold text-gray-900">Your Cart</h3>
                <button onclick="closeModal('view-cart-modal')" class="text-gray-400 hover:text-gray-600"><i class="fa-solid fa-xmark text-xl"></i></button>
            </div>
            <div id="cart-items-container" class="flex-1 overflow-y-auto space-y-4 mb-6">
                <div class="text-center text-gray-500 py-8" id="empty-cart-msg">Your cart is empty.</div>
            </div>
            <div class="border-t pt-4">
                <div class="flex justify-between items-center mb-4">
                    <span class="text-gray-600 font-medium">Total</span>
                    <span id="cart-total" class="text-xl font-bold text-brand-green" style="color: #22c55e;">PKR 0</span>
                </div>
                <a href="checkOut.html" class="block w-full bg-brand-green text-white py-3 rounded-lg font-bold text-center hover:bg-green-600 transition shadow-lg" style="background-color: #22c55e;">Proceed to Checkout</a>
            </div>
        </div>
    </div>

    <!-- ADD TO CART SUCCESS POPUP -->
    <div id="cart-popup-modal" class="modal fixed inset-0 z-50 flex items-center justify-center p-4" style="opacity: 0; visibility: hidden; transition: all 0.3s ease;">
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="closeModal('cart-popup-modal')"></div>
        <div class="modal-content relative bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 text-center transform scale-95 transition-transform duration-300">
            <button onclick="closeModal('cart-popup-modal')" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600"><i class="fa-solid fa-xmark text-lg"></i></button>
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-green text-3xl animate-bounce" style="color: #22c55e; background-color: #dcfce7;"><i class="fa-solid fa-check"></i></div>
            <h3 class="text-xl font-bold text-gray-900 mb-1">Added to Cart!</h3>
            <p class="text-sm text-gray-500 mb-6">The following item has been added.</p>
            <div class="flex items-center gap-4 bg-gray-50 p-3 rounded-lg mb-6 text-left">
                <img id="popup-img" src="" class="w-16 h-16 rounded-md object-cover">
                <div>
                    <h4 id="popup-name" class="font-bold text-gray-900 text-sm">Product Name</h4>
                    <p id="popup-price" class="text-brand-green font-bold text-sm" style="color: #22c55e;">PKR 0</p>
                    <p class="text-xs text-gray-500" id="popup-qty">Qty: 1</p>
                </div>
            </div>
            <div class="space-y-3">
                <button onclick="closeModal('cart-popup-modal')" class="block w-full border border-gray-200 text-gray-600 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition text-sm">Continue Shopping</button>
                <a href="checkOut.html" class="block w-full bg-brand-green text-white py-2.5 rounded-lg font-medium hover:bg-green-600 transition shadow-lg text-sm text-center" style="background-color: #22c55e;">Proceed to Checkout</a>
            </div>
        </div>
    </div>
`;

// ==========================================================================
// 3. CART & MODAL LOGIC (Global Variables)
// ==========================================================================

// Global Cart Array
let cart = JSON.parse(localStorage.getItem('hasc_cart')) || [];

// Fallback Modal Functions (Safe definitions if auth.js is missing/loaded late)
if (typeof window.openModal !== 'function') {
    window.openModal = function(modalId, view) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            modal.style.opacity = '1';
            modal.style.visibility = 'visible';
            document.body.style.overflow = 'hidden';
            
            // Basic support for auth switching if auth.js is completely missing
            if (modalId === 'auth-modal' && view) {
                const reg = document.getElementById('register-form');
                const log = document.getElementById('login-form');
                if(reg && log) {
                    if (view === 'register') {
                        reg.classList.remove('hidden'); reg.style.display='block';
                        log.classList.add('hidden'); log.style.display='none';
                    } else {
                        log.classList.remove('hidden'); log.style.display='flex';
                        reg.classList.add('hidden'); reg.style.display='none';
                    }
                }
            }
        }
    };
}

if (typeof window.closeModal !== 'function') {
    window.closeModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('active');
            modal.style.opacity = '0';
            modal.style.visibility = 'hidden';
            document.body.style.overflow = 'auto';
        }
    };
}


// --- Cart Functions ---

window.addToCart = function(name, priceStr, imgSrc) {
    const price = parseInt(priceStr.replace(/[^0-9]/g, ''));
    
    // Check if item already exists
    const existingItem = cart.find(item => item.name === name);
    let currentQty = 1;

    if (existingItem) {
        existingItem.qty += 1;
        currentQty = existingItem.qty;
    } else {
        const newItem = { name: name, price: price, priceStr: "PKR " + priceStr, img: imgSrc, qty: 1 };
        cart.push(newItem);
    }
    
    localStorage.setItem('hasc_cart', JSON.stringify(cart));
    updateCartUI();
    
    // Show Popup
    const pName = document.getElementById('popup-name');
    if(pName) {
        pName.innerText = name;
        document.getElementById('popup-price').innerText = "PKR " + priceStr;
        document.getElementById('popup-img').src = imgSrc;
        document.getElementById('popup-qty').innerText = "Qty: " + currentQty;
        window.openModal('cart-popup-modal');
    }
};

window.changeQuantity = function(index, change) {
    if (cart[index]) {
        cart[index].qty += change;
        if (cart[index].qty <= 0) {
            cart.splice(index, 1);
        }
        localStorage.setItem('hasc_cart', JSON.stringify(cart));
        window.updateCartUI();
    }
};

window.removeItem = function(index) {
    cart.splice(index, 1);
    localStorage.setItem('hasc_cart', JSON.stringify(cart));
    window.updateCartUI();
};

window.updateCartUI = function() {
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    const cartCount = document.getElementById('cart-count');
    if(cartCount) cartCount.innerText = totalCount;

    const container = document.getElementById('cart-items-container');
    const totalEl = document.getElementById('cart-total');
    const emptyMsg = document.getElementById('empty-cart-msg');

    if (container && totalEl) {
        if (cart.length === 0) {
            if(emptyMsg) emptyMsg.style.display = 'block';
            container.innerHTML = '<div class="text-center text-gray-500 py-8" id="empty-cart-msg">Your cart is empty.</div>';
            totalEl.innerText = "PKR 0";
        } else {
            if(emptyMsg) emptyMsg.style.display = 'none';
            container.innerHTML = ''; 
            let total = 0;
            
            cart.forEach((item, index) => {
                total += item.price * item.qty;
                container.insertAdjacentHTML('beforeend', `
                    <div class="flex items-center gap-4 bg-gray-50 p-3 rounded-lg border-b border-gray-100 last:border-0">
                        <img src="${item.img}" class="w-16 h-16 rounded-md object-cover flex-shrink-0">
                        <div class="flex-1">
                            <h4 class="font-bold text-gray-900 text-sm">${item.name}</h4>
                            <p class="text-brand-green font-bold text-sm" style="color:#22c55e;">${item.priceStr}</p>
                            <div class="flex items-center gap-3 mt-2">
                                <button onclick="window.changeQuantity(${index}, -1)" class="w-6 h-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center hover:bg-gray-300 transition text-xs font-bold">-</button>
                                <span class="text-sm font-semibold text-gray-800">${item.qty}</span>
                                <button onclick="window.changeQuantity(${index}, 1)" class="w-6 h-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center hover:bg-gray-300 transition text-xs font-bold">+</button>
                            </div>
                        </div>
                        <button onclick="window.removeItem(${index})" class="text-red-500 hover:text-red-700 p-2"><i class="fa-solid fa-trash"></i></button>
                    </div>`);
            });
            totalEl.innerText = "PKR " + total.toLocaleString();
        }
    }
};

// ==========================================================================
// 4. INJECTION LOGIC (Run on Load)
// ==========================================================================

function injectGlobalElements() {
    const headerPlaceholder = document.getElementById('global-header');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
        
        // Inject Cart Modals
        if (!document.getElementById('view-cart-modal')) {
            document.body.insertAdjacentHTML('beforeend', cartModalsHTML);
        }
        
        // Initialize Cart UI
        updateCartUI();
    }
}

// Navigation Highlighting
function setActive(id) {
    const el = document.getElementById(id);
    if (el) {
        el.classList.remove('hover:text-brand-green');
        el.classList.add('text-brand-green', 'font-bold');
        el.style.color = '#22c55e';
        el.style.fontWeight = 'bold';
    }
}

// Ensure DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectGlobalElements);
} else {
    injectGlobalElements();
}

// Page Specific Init (After Injection)
setTimeout(() => {
    const currentPage = window.location.pathname.split("/").pop(); 
    if (currentPage === 'index.html' || currentPage === '') setActive('nav-home');
    else if (currentPage.includes('LiveStock')) setActive('nav-livestock');
    else if (currentPage.includes('feed')) setActive('nav-feed');
    else if (currentPage.includes('about')) setActive('nav-about');
    else if (currentPage.includes('contact')) setActive('nav-contact');
    
    // Mobile Menu Logic
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}, 100);

// Close on Escape Key
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") { 
        const activeModal = document.querySelector('.modal.active');
        if(activeModal) window.closeModal(activeModal.id);
    }
});