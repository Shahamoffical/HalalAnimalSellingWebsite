const footerHTML = `
<footer id="footer" class="bg-gray-900 text-white pt-16 pb-8" style="background-color: #161233ff;">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <!-- Branding -->
            <div>
                <div class="flex items-center gap-2 mb-4">
                    <div class="bg-brand-green text-white p-1.5 rounded text-sm" style="background-color: #22c55e;">
                        <i class="fa-solid fa-leaf"></i>
                    </div>
                    <span class="text-xl font-bold tracking-tight">HASC</span>
                </div>
                <p class="text-gray-400 text-sm leading-relaxed mb-6">
                    Bridging the gap between traditional farming and modern convenience with certified Halal standards.
                </p>
                <div class="flex gap-4">
                    <a href="#" class="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-green transition" style="background-color: #1f2937;"><i class="fa-brands fa-facebook-f text-sm"></i></a>
                    <a href="#" class="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-green transition" style="background-color: #1f2937;"><i class="fa-brands fa-twitter text-sm"></i></a>
                    <a href="#" class="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-green transition" style="background-color: #1f2937;"><i class="fa-brands fa-instagram text-sm"></i></a>
                </div>
            </div>

            <!-- Quick Links -->
            <div>
                <h4 class="font-bold mb-6 text-lg">Quick Links</h4>
                <ul class="space-y-3 text-sm text-gray-400">
                    <li><a href="index.html" class="hover:text-brand-green transition">Home</a></li>
                    <li><a href="aboutUs.html" class="hover:text-brand-green transition">About Us</a></li>
                    <li><a href="LiveStock.html" class="hover:text-brand-green transition">Livestock</a></li>
                    <li><a href="feed.html" class="hover:text-brand-green transition">Feed & Care</a></li>
                    <li><a href="#" class="hover:text-brand-green transition">Terms & Conditions</a></li>
                </ul>
            </div>

            <!-- Categories -->
            <div>
                <h4 class="font-bold mb-6 text-lg">Categories</h4>
                <ul class="space-y-3 text-sm text-gray-400">
                    <li><a href="#" class="hover:text-brand-green transition">Cows & Bulls</a></li>
                    <li><a href="#" class="hover:text-brand-green transition">Goats & Sheep</a></li>
                    <li><a href="#" class="hover:text-brand-green transition">Camels</a></li>
                    <li><a href="#" class="hover:text-brand-green transition">Lambs</a></li>
                </ul>
            </div>

            <!-- Contact -->
            <div>
                <h4 class="font-bold mb-6 text-lg">Contact Info</h4>
                <ul class="space-y-4 text-sm text-gray-400">
                    <li class="flex gap-3">
                        <i class="fa-solid fa-phone mt-1 text-brand-green" style="color: #22c55e;"></i>
                        <span>+92 300 1234567<br>+92 321 7654321</span>
                    </li>
                    <li class="flex gap-3">
                        <i class="fa-solid fa-envelope mt-1 text-brand-green" style="color: #22c55e;"></i>
                        <span>info@hasc-farm.com<br>support@hasc-farm.com</span>
                    </li>
                    <li class="flex gap-3">
                        <i class="fa-solid fa-location-dot mt-1 text-brand-green" style="color: #22c55e;"></i>
                        <span>123 Green Farms Road,<br>Bahawalpur, Pakistan</span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="border-t border-gray-800 pt-8 text-center text-xs text-gray-400" style="border-top-color: #374151;">
            <p>&copy; Designed by <strong>Shaham Abbas</strong> Supervised By <strong>Mr. Daler Awan Malik</strong></p>
        </div>
    </div>
</footer>
`;

// Inject Footer
document.getElementById('global-footer').innerHTML = footerHTML;