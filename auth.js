// ==========================================================================
// 1. AUTH MODAL HTML TEMPLATE (Payment Section Removed)
// ==========================================================================
const authModalHTML = `
<div id="auth-modal" class="modal fixed inset-0 z-50 flex items-center justify-center p-4" style="opacity: 0; visibility: hidden; transition: all 0.3s ease;">
    <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="closeModal('auth-modal')"></div>
    <div class="modal-content relative bg-white rounded-3xl shadow-2xl w-full max-w-[1000px] overflow-hidden flex flex-col md:flex-row h-[90vh] md:h-auto max-h-[700px] transform scale-95 transition-transform duration-300">
        <button onclick="closeModal('auth-modal')" class="absolute top-4 right-4 z-20 text-gray-400 hover:text-gray-600 bg-white/80 rounded-full p-2"><i class="fa-solid fa-xmark text-xl"></i></button>
        
        <!-- Left Side Visuals -->
        <div class="hidden md:flex w-5/12 bg-brand-dark text-white relative flex-col justify-between p-10 overflow-hidden" style="background-color: #0F5132;">
            <div class="absolute -top-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div class="absolute bottom-0 right-0 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
            <div class="relative z-10">
                <h2 class="text-4xl font-bold mb-4 leading-tight">Start Your <br>Journey</h2>
                <p class="text-green-100 opacity-90">Join HASC for premium Halal livestock.</p>
            </div>
            <div class="relative z-10 mt-8 mb-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img src="Assets/Register.jpg" alt="Register Visual" class="w-full h-48 object-cover opacity-90">
            </div>
             <div class="relative z-10 mt-8 flex justify-between text-center border-t border-white/10 pt-6">
                <div><p class="text-2xl font-bold">5k+</p><p class="text-xs text-green-200">Users</p></div>
                <div><p class="text-2xl font-bold">100%</p><p class="text-xs text-green-200">Halal</p></div>
                <div><p class="text-2xl font-bold">24/7</p><p class="text-xs text-green-200">Support</p></div>
            </div>
        </div>

        <!-- Right Side Forms -->
        <div class="w-full md:w-7/12 p-8 md:p-12 overflow-y-auto">
            
            <!-- REGISTER FORM -->
            <div id="register-form" class="space-y-6 hidden">
                <div class="mb-6"><h2 class="text-3xl font-bold text-gray-900">Create Account</h2><p class="text-sm text-gray-500">Fill in your details to get started.</p></div>
                
                <form class="space-y-4" onsubmit="event.preventDefault();">
                    <!-- Personal Info -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div><label class="block text-xs font-bold text-gray-700 mb-1">Full Name</label><input type="text" id="reg-name" class="w-full pl-3 py-2 rounded-lg border border-gray-200 focus:border-green-600 outline-none text-sm"></div>
                        <div><label class="block text-xs font-bold text-gray-700 mb-1">Father's Name</label><input type="text" id="reg-father" class="w-full pl-3 py-2 rounded-lg border border-gray-200 focus:border-green-600 outline-none text-sm"></div>
                    </div>

                    <div>
                         <label class="block text-xs font-bold text-gray-700 mb-1">Profile Picture</label>
                         <input type="file" id="reg-pic" class="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100">
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div><label class="block text-xs font-bold text-gray-700 mb-1">CNIC</label><input type="text" id="reg-cnic" placeholder="31202-xxxxxxx-x" class="w-full pl-3 py-2 rounded-lg border border-gray-200 focus:border-green-600 outline-none text-sm"></div>
                        <div><label class="block text-xs font-bold text-gray-700 mb-1">Phone Number</label><input type="tel" id="reg-phone" placeholder="0300-1234567" class="w-full pl-3 py-2 rounded-lg border border-gray-200 focus:border-green-600 outline-none text-sm"></div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div><label class="block text-xs font-bold text-gray-700 mb-1">Email</label><input type="email" id="reg-email" placeholder="example@gmail.com" class="w-full pl-3 py-2 rounded-lg border border-gray-200 focus:border-green-600 outline-none text-sm"></div>
                         <div><label class="block text-xs font-bold text-gray-700 mb-1">City</label><input type="text" id="reg-city" class="w-full pl-3 py-2 rounded-lg border border-gray-200 focus:border-green-600 outline-none text-sm"></div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div><label class="block text-xs font-bold text-gray-700 mb-1">Address</label><input type="text" id="reg-address" class="w-full pl-3 py-2 rounded-lg border border-gray-200 focus:border-green-600 outline-none text-sm"></div>
                        <div><label class="block text-xs font-bold text-gray-700 mb-1">Postal Code</label><input type="text" id="reg-postal" class="w-full pl-3 py-2 rounded-lg border border-gray-200 focus:border-green-600 outline-none text-sm"></div>
                    </div>

                    <!-- Security -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div><label class="block text-xs font-bold text-gray-700 mb-1">Set Password</label><input type="password" id="reg-pass" class="w-full pl-3 py-2 rounded-lg border border-gray-200 focus:border-green-600 outline-none text-sm"></div>
                        <div><label class="block text-xs font-bold text-gray-700 mb-1">Confirm Password</label><input type="password" id="reg-confirm" class="w-full pl-3 py-2 rounded-lg border border-gray-200 focus:border-green-600 outline-none text-sm"></div>
                    </div>

                    <button type="button" onclick="registerUser()" class="w-full bg-brand-dark text-white py-3 rounded-lg font-bold hover:opacity-90 transition mt-4" style="background-color: #0F5132;">Register Now</button>
                </form>
                <p class="text-center text-sm text-gray-600 mt-4">Already have an account? <button onclick="switchAuth('login')" class="text-brand-green font-bold hover:underline" style="color: #22c55e;">Login here</button></p>
            </div>

            <!-- LOGIN FORM -->
            <div id="login-form" class="space-y-6 flex flex-col justify-center h-full">
                <div class="mb-8"><h2 class="text-3xl font-bold text-gray-900">Welcome Back!</h2><p class="text-sm text-gray-500">Please login to access your dashboard.</p></div>
                <form class="space-y-4" onsubmit="event.preventDefault();">
                    <div><label class="block text-xs font-bold text-gray-700 mb-1">Email</label><input type="text" id="login-email" class="w-full pl-4 py-3 rounded-lg border border-gray-200 focus:border-green-600 outline-none"></div>
                    <div><label class="block text-xs font-bold text-gray-700 mb-1">Password</label><input type="password" id="login-pass" class="w-full pl-4 py-3 rounded-lg border border-gray-200 focus:border-green-600 outline-none"></div>
                    <div class="flex justify-between items-center text-xs"><label class="flex items-center gap-2 text-gray-600"><input type="checkbox" class="rounded text-brand-green focus:ring-brand-green"> Remember me</label><a href="#" class="text-brand-green hover:underline" style="color: #22c55e;">Forgot Password?</a></div>
                    <button type="button" onclick="loginUser()" class="w-full bg-brand-green text-white py-3 rounded-lg font-bold hover:opacity-90 transition" style="background-color: #22c55e;">Login Now</button>
                </form>
                <p class="text-center text-sm text-gray-600 mt-8">Don't have an account? <button onclick="switchAuth('register')" class="text-brand-green font-bold hover:underline" style="color: #22c55e;">Register here</button></p>
            </div>
        </div>
    </div>
</div>
`;

// ==========================================================================
// 2. INJECTION LOGIC
// ==========================================================================

function injectAuthModal() {
    if (document.getElementById('auth-modal')) return; 
    document.body.insertAdjacentHTML('beforeend', authModalHTML);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectAuthModal);
} else {
    injectAuthModal();
}

// ==========================================================================
// 3. API & FORM LOGIC
// ==========================================================================

// 1. Register Logic
window.registerUser = async function() {
    const name = document.getElementById('reg-name').value;
    const fatherName = document.getElementById('reg-father').value;
    const email = document.getElementById('reg-email').value;
    const phone = document.getElementById('reg-phone').value;
    const cnic = document.getElementById('reg-cnic').value;
    const city = document.getElementById('reg-city').value;
    const address = document.getElementById('reg-address').value;
    const postalCode = document.getElementById('reg-postal').value;
    const password = document.getElementById('reg-pass').value;
    const confirmPass = document.getElementById('reg-confirm').value;

    if (password !== confirmPass) {
        alert("Passwords do not match!");
        return;
    }

    const userData = {
        name, fatherName, email, phone, cnic, city, address, postalCode, password
    };

    try {
        const res = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });

        const contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            const data = await res.json();
            if (res.ok) {
                alert("Registration Successful! Please login.");
                window.switchAuth('login');
            } else {
                alert(data.message || "Registration failed");
            }
        } else {
            const text = await res.text();
            console.error("Server Error (Non-JSON Response):", text);
            alert("Server Error: The backend returned an error (likely 500 or 404). Check browser console for details.");
        }
    } catch (error) {
        console.error('Network/Fetch Error:', error);
        alert("Cannot connect to server. Is 'npm run dev' running?");
    }
};

// 2. Login Logic
window.loginUser = async function() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-pass').value;

    try {
        const res = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            const data = await res.json();
            if (res.ok) {
                localStorage.setItem('userInfo', JSON.stringify(data));
                window.location.href = 'dashboard.html';
            } else {
                alert(data.message || "Invalid Email or Password");
            }
        } else {
            const text = await res.text();
            console.error("Server Error (Non-JSON Response):", text);
            alert("Login Failed: Server returned an error. Check browser console for details.");
        }
    } catch (error) {
        console.error('Fetch Error:', error);
        alert("Network error. Is the server running?");
    }
};

// 3. Logout Logic
window.logoutUser = function() {
    localStorage.removeItem('userInfo');
    window.location.href = 'index.html';
};

// 4. Modal Controls
window.openModal = function(modalId, view) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        modal.style.opacity = '1';
        modal.style.visibility = 'visible';
        document.body.style.overflow = 'hidden';

        if (modalId === 'auth-modal') {
            const registerForm = document.getElementById('register-form');
            const loginForm = document.getElementById('login-form');
            if (view === 'register') {
                registerForm.classList.remove('hidden');
                loginForm.classList.add('hidden');
                loginForm.style.display = 'none';
                registerForm.style.display = 'block';
            } else {
                loginForm.classList.remove('hidden');
                registerForm.classList.add('hidden');
                loginForm.style.display = 'flex';
                registerForm.style.display = 'none';
            }
        }
    }
};

window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        modal.style.opacity = '0';
        modal.style.visibility = 'hidden';
        document.body.style.overflow = 'auto';
    }
};

window.switchAuth = function(view) {
    window.openModal('auth-modal', view);
};

// Close on Escape Key
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") { 
        const activeModal = document.querySelector('.modal.active');
        if(activeModal) window.closeModal(activeModal.id);
    }
});