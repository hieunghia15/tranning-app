<!-- Jquery -->
<script src="{{ asset('/plugins/jquery/jquery.min.js') }}"></script>
<script src="{{ asset('/plugins/jquery/jquery-ui.min.js') }}"></script>
<script src="{{ asset('/plugins/datatables/datatables.js') }}"></script>
<script src="{{ asset('/plugins/datatables/datatables.min.js') }}"></script>
<script src="{{ asset('/plugins/jquery-confirm/jquery-confirm.min.js') }}"></script>
<script src="{{ asset('/plugins/jquery-validate/jquery.validate.min.js') }}"></script>
<script src="{{ asset('/plugins/jquery-validate/additional-methods.min.js') }}"></script>
<script src="{{ asset('/plugins/select2/select2.min.js') }}"></script>
<script src="{{ asset('/plugins/config.js') }}"></script>
<script>
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': '{{ csrf_token() }}',
      'X-API-Token': 'Bearer {{ session('api_token') }}',
    },
  });
</script>
<!-- Datepicker -->
<script src="{{ asset('/plugins/jquery-datepicker/jquery-ui.min.js') }}"></script>
<script src="{{ asset('/plugins/jquery-datepicker/datepicker.js') }}"></script>
<script src="{{ asset('/plugins/jquery-datepicker/datepicker-vi.js') }}"></script>
<script src="{{ asset('/sneat/assets/vendor/libs/popper/popper.js') }}"></script>
<script src="{{ asset('/sneat/assets/vendor/js/bootstrap.js') }}"></script>
<script src="{{ asset('/sneat/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js') }}"></script>
<script src="{{ asset('/sneat/assets/vendor/js/menu.js') }}"></script>
<script src="{{ asset('/sneat/assets/vendor/libs/apex-charts/apexcharts.js') }}"></script>
<script src="{{ asset('/sneat/assets/js/main.js') }}"></script>

@stack('js')
