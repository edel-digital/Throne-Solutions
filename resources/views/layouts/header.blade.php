<header class="bg-white shadow">
    <div class="container mx-auto px-4 py-6 flex justify-between items-center">
        <a href="{{ route('home') }}" class="text-2xl font-bold text-indigo-600">
            On Adventure Africa
        </a>
        
        <nav class="hidden md:flex space-x-8">
            <a href="{{ route('home') }}" class="text-gray-700 hover:text-indigo-600">Home</a>
            <a href="{{ route('safari-packages') }}" class="text-gray-700 hover:text-indigo-600">Safari Packages</a>
            <a href="{{ route('travel-guide') }}" class="text-gray-700 hover:text-indigo-600">Travel Guide</a>
            <a href="{{ route('contact') }}" class="text-gray-700 hover:text-indigo-600">Contact</a>
        </nav>
        
        <!-- Mobile menu button (optional) -->
        <button class="md:hidden text-gray-700">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </button>
    </div>
</header>