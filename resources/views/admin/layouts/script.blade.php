<!-- Jquery -->
<script src="{{ asset('/plugins/jquery/jquery.min.js') }}"></script>
<script src="{{ asset('/plugins/jquery/jquery-ui.min.js') }}"></script>
<script src="{{ asset('/plugins/jquery-confirm/jquery-confirm.min.js') }}"></script>
<script src="{{ asset('/plugins/jquery-validate/jquery.validate.min.js') }}"></script>
<script src="{{ asset('/plugins/jquery-validate/additional-methods.min.js') }}"></script>
<script src="{{ asset('/plugins/select2/select2.min.js') }}"></script>
<script src="{{ asset('/plugins/config.js') }}"></script>
{{-- <script>
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': '{{ csrf_token() }}',
      'X-API-Token': 'Bearer {{ session('jwt_access_token') }}',
    },
  });
</script> --}}
<!-- Datepicker -->
<script src="{{ asset('/plugins/jquery-datepicker/jquery-ui.min.js') }}"></script>
<script src="{{ asset('/plugins/jquery-datepicker/datepicker.js') }}"></script>
<script src="{{ asset('/plugins/jquery-datepicker/datepicker-vi.js') }}"></script>
<script src="{{ asset('/plugins/datatables/datatables.js') }}"></script>
<script src="{{ asset('/plugins/datatables/datatables.min.js') }}"></script>
@vite([
// 'resources/js/sneat/assets/vendor/libs/jquery/jquery.js',
'resources/js/sneat/assets/vendor/libs/popper/popper.js',
'resources/js/sneat/assets/vendor/js/bootstrap.js',
'resources/js/sneat/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js',
'resources/js/sneat/assets/vendor/js/menu.js',
'resources/js/sneat/assets/vendor/libs/apex-charts/apexcharts.js',
'resources/js/sneat/assets/js/main.js',
'resources/css/sneat/assets/js/config.js',

])

@stack('js')
