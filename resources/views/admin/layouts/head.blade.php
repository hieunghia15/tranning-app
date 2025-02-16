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
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
<!-- Layouts -->
<link rel="stylesheet" href="{{ asset('/plugins/datatables/datatables.css') }}">
<link rel="stylesheet" href="{{ asset('/plugins/datatables/datatables.min.css') }}">
<link rel="stylesheet" href="{{ asset('/plugins/jquery-confirm/jquery-confirm.min.css') }}">
<!-- CSS -->
<link rel="stylesheet" href="{{ asset('/sneat/assets/vendor/fonts/boxicons.css') }}">
<link rel="stylesheet" href="{{ asset('/sneat/assets/vendor/css/core.css') }}">
<link rel="stylesheet" href="{{ asset('/sneat/assets/vendor/css/theme-default.css') }}">
<link rel="stylesheet" href="{{ asset('/sneat/assets/css/demo.css') }}">
<link rel="stylesheet" href="{{ asset('/sneat/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css') }}">

<!-- JavaScript -->
<script src="{{ asset('/sneat/assets/vendor/js/helpers.js') }}"></script>
<script src="{{ asset('/sneat/assets/js/config.js') }}"></script>

@stack('css')

@stack('js')
