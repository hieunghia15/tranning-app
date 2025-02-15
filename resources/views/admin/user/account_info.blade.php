{{-- <input type="hidden" id="userId" value="{{ auth()->user()->id }}">
<input type="hidden" id="status" name="status" value="{{ $user->status }}" /> --}}
<h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Hồ sơ /</span> Tài khoản</h4>
<div class="row">
  <div class="col-md-12">
    <ul class="nav nav-pills flex-column flex-md-row mb-3">
      <li class="nav-item">
        <a class="nav-link active" href="javascript:void(0);"><i class="bx bx-user me-1"></i> Tài khoản</a>
      </li>
    </ul>
    <div class="card mb-4">
      <h5 class="card-header">Thông tin chi tiết</h5>
      <!-- Account -->
      <form id="updateAccountForm">
        <div class="card-body">
          <div class="d-flex align-items-start align-items-sm-center gap-4">
            <img src="{{ asset('sneat/assets/img/backgrounds/18.jpg') }}" alt="user-avatar" class="d-block rounded"
              height="100" width="100" id="uploadedAvatar" />
            <div class="button-wrapper">
              <label for="upload" class="btn btn-primary me-2 mb-4" tabindex="0">
                <span class="d-none d-sm-block">Cập nhật ảnh</span>
                <i class="bx bx-upload d-block d-sm-none"></i>
                <input type="file" id="upload" class="account-file-input" hidden/>
              </label>
              <p class="text-muted mb-0">Cho phép JPG hoặc PNG. Kích thước lớn nhất 2MB.</p>
            </div>
          </div>
        </div>
        <hr class="my-0" />
        <div class="card-body">
          <div class="row">
            <div class="mb-3 col-md-6">
              <label for="fullname" class="form-label">Họ tên</label>
              <input class="form-control" type="text" id="fullname" name="fullname" value="Alex"/>
            </div>
            <div class="mb-3 col-md-6">
              <label for="birthday" class="form-label">Ngày sinh</label>
              <input class="form-control" type="date" name="birthday" id="birthday" value="birthday"/>
            </div>
            <div class="mb-3 col-md-6">
              <label for="email" class="form-label">Email</label>
              <input class="form-control" type="text" id="email" name="email" value="alex@yopmail.com" disabled />
            </div>
            <div class="mb-3 col-md-6">
              <label for="email" class="form-label">Giới tính</label>
              <select name="" id="" class="form-control" disabled>
                <option value="1">Nam</option>
                <option value="2">Nữ</option>
                <option value="3">Khác</option>
              </select>
            </div>
          </div>
          <div class="mt-2">
            <button id="btnSubmit" class="btn btn-primary me-2" data-id="id" data-api="admin.api.v1.users.update">Lưu thay đổi</button>
          </div>
        </div>
        <!-- /Account -->
      </form>
    </div>
  </div>
</div>