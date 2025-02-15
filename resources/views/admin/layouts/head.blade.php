<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
<title>
  @yield('title', 'Dashboard')
</title>
<meta name="description" content="" />

<!-- Favicon -->
<link rel="icon" type="image/x-icon" href="#" />

<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />

<!-- Layouts -->
<link rel="stylesheet" href="{{ asset('/plugins/datatables/datatables.css') }}">
<link rel="stylesheet" href="{{ asset('/plugins/datatables/datatables.min.css') }}">
<link rel="stylesheet" href="{{ asset('/plugins/jquery-confirm/jquery-confirm.min.css') }}">
@stack('css')
@vite([
  'resources/css/sneat/assets/vendor/fonts/boxicons.css',
  'resources/css/sneat/assets/vendor/css/core.css',
  'resources/css/sneat/assets/vendor/css/theme-default.css',
  'resources/css/sneat/assets/css/demo.css',
  'resources/css/sneat/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css',
  'resources/css/sneat/assets/vendor/libs/apex-charts/apex-charts.css',
  'resources/css/sneat/assets/vendor/js/helpers.js',
  'resources/css/sneat/assets/js/config.js',
  ])
@stack('js')
