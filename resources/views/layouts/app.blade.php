<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'On Adventure Africa')</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    @stack('styles')
</head>
<body class="font-sans antialiased">
    @include('layouts.header')
    
    <main class="container mx-auto px-4 py-8">
        @yield('content')
    </main>
    
    @include('layouts.footer') <!-- Optional footer -->
    
    @stack('scripts')
</body>
</html>