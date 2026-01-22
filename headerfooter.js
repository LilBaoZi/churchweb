class GenHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="fixed top-0 left-0 w-full z-10 bg-brown-translucent py-5 shadow-md">
        <div class="container mx-auto px-4 text-center flex justify-between items-center">
            <h1 class="text-3xl font-bold text-white pr-2">†洛克維尓基督教會<br>Christian Church in Rockville</h1>
            <nav class="hidden md:block">
                <ul class="flex space-x-6 pl-2">
                    <li><a href="index.html" class="nav-link text-lg font-medium text-white">首页<br>Home</a></li>
                    <li><a href="faith.html" class="nav-link text-lg font-medium text-white">信仰宣言<br>Statement of Faith</a></li>
                    <li><a href="announcements.html" class="nav-link text-lg font-medium text-white">通知<br>Announcements</a></li>
                    <li><a href="sermons.html" class="nav-link text-lg font-medium text-white">信息<br>Sermons</a></li>
                    <li><a href="contact.html" class="nav-link text-lg font-medium text-white">联系<br>Contact</a></li>
                </ul>
            </nav>
            <button id="mobile-menu-button" class="md:hidden text-white focus:outline-none" aria-label="Open mobile menu">
                <i class="fas fa-bars text-2xl"></i>
            </button>
        </div>
        <div id="mobile-menu" class="fixed top-0 left-0 w-full h-full bg-brown-translucent z-20 flex flex-col items-center justify-center transform -translate-x-full transition-transform duration-300 ease-in-out">
            <button id="close-menu-button" class="absolute top-4 right-4 text-white focus:outline-none" aria-label="Close mobile menu">
                <i class="fas fa-times text-3xl"></i>
            </button>
            <nav class="flex flex-col space-y-8 text-center">
                <a href="index.html" class="nav-link text-3xl font-medium text-white hover:text-gray-300">首页 Home</a></li>
                <a href="faith.html" class="nav-link text-3xl font-medium text-white hover:text-gray-300">信仰宣言 Statement of Faith</a></li>
                <a href="announcements.html" class="nav-link text-3xl font-medium text-white hover:text-gray-300">教会通知Church Announcements</a></li>
                <a href="sermons.html" class="nav-link text-3xl font-medium text-white hover:text-gray-300">信息 Sermons</a></li>
                <a href="contact.html" class="nav-link text-3xl font-medium text-white hover:text-gray-300">联系 Contact</a></li>
            </nav>
        </div>
</header>
        `;
    }
}
customElements.define('gen-header', GenHeader);

class GenFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="bg-brown-translucent text-white py-6 text-center rounded-t-lg">
        <div class="container mx-auto px-4">
            <p>&copy; 2025 CCR Church. All rights reserved.</p>
            <p class="mt-2">1700 Yale Pl, Rockville, MD 20850 | <a href="tel:+13013510736">(301) 351-0736</a> | <a href="mailto:ccrchurchweb@gmail.com">ccrchurchweb@gmail.com</a></p>
        </div>
</footer>
        `;
    }
}
customElements.define('gen-footer', GenFooter);