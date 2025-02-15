{{-- <input type="hidden" id="userId" value="{{ auth()->user()->id }}"> --}}
<h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Hồ sơ /</span> Tài khoản</h4>
<div class="row">
  <div class="col-md-12">
    <ul class="nav nav-pills flex-column flex-md-row mb-3">
      <li class="nav-item">
        <a class="nav-link active" href="javascript:void(0);"><i class="bx bx-user me-1"></i> Tài khoản</a>
      </li>
    </ul>
    <div class="card mb-4">
      <h5 class="card-header">Đổi mật khẩu</h5>
      <!-- Account -->
      <div class="card-body">
        <form id="updatePasswordForm">
          <div class="row">
            <div class="mb-3 col-md-12">
              <label for="currentPassword" class="form-label">Mật khẩu hiện tại</label>
              <input class="form-control" type="password" id="currentPassword" name="currentPassword" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" />
            </div>
            <div class="mb-3 col-md-12">
              <label for="newPassword" class="form-label">Mật khẩu mới</label>
              <input class="form-control" type="password" name="newPassword" id="newPassword" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" />
            </div>
            <div class="mb-3 col-md-12">
              <label for="confirmPassword" class="form-label">Xác nhận mật khẩu mới</label>
              <input class="form-control" type="password" id="confirmPassword" name="confirmPassword" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" />
            </div>
          </div>
          <div class="mt-2">
            <button id="btnSubmit" class="btn btn-primary me-2" data-id="user->id" data-api="admin.api.v1.users.update.password">Cập nhật</button>
          </div>
        </form>
      </div>
      <!-- /Account -->
    </div>
  </div>
</div>
