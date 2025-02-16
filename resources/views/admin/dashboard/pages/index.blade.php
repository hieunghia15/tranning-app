@extends('admin.base')

@section('title', 'Dashboard')

@section('content')
    @include('admin.dashboard.index')
@endsection

@push('css')
    
@endpush
@push('js')
{{-- <script>
    $(document).ready(function() {
      $('#logoutButton').on('click', function() {
          const token = localStorage.getItem('token');
  
          $.ajax({
              url: '/api/logout',
              method: 'POST',
              headers: {
                  'Authorization': 'Bearer ' + token,
                  'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
              },
              success: function(response) {
                  if (response.message === 'Logged out') {
                      localStorage.removeItem('token');
                      window.location.href = '/sign-in';
                  }
              },
              error: function(xhr) {
                  alert('Logout failed: ' + xhr.responseJSON.message);
              }
          });
      });
    });
  </script> --}}
@endpush