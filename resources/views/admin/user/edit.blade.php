<h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Người dùng /</span> Cập nhật</h4>
<!-- Basic Layout -->
<div class="row">
  <div class="col-xl">
    <div class="card mb-4">
      <div class="card-header d-flex justify-content-between align-items-center">
        <h5 class="mb-0">Cập nhật người dùng</h5>
        <button class="btn rounded-pill btn-primary" onclick="window.location.href='{{ route('admin.users.index') }}'">Trở lại</button>
      </div>
      <div class="card-body">
        <form id="updateUserForm">
          <div class="mb-3">
            <label class="form-label" for="fullname">Họ tên</label>
            <input type="text" class="form-control" id="fullname" name="fullname" value="{{ $user->fullname }}" />
          </div>
          <div class="mb-3">
            <label class="form-label" for="username">Tên người dùng</label>
            <input type="text" class="form-control" id="username" name="username" value="{{ $user->username }}" />
          </div>
          <div class="mb-3">
            <label class="form-label" for="avatar">Hình đại diện</label>
            <input class="form-control" type="file" id="avatar" name="avatar" />
          </div>
          <div class="mb-3">
            <label for="roles" class="form-label">Vai trò</label>
            <select id="roles" name="roles" class="form-select">
              <option value="">Chọn vai trò</option>
              @foreach ($roles as $role)
                <option value="{{ $role->id }}" {{ ($role->id == $user->roles[0]->id) ? 'selected' : '' }}>{{ $role->name }}</option>
              @endforeach
            </select>
          </div>
          <div class="mb-3">
            <label for="status" class="form-label">Trạng thái</label>
            <select id="status" name="status" class="form-select">
              <option value="">Chọn trạng thái</option>
              @foreach(app_const()->userStatusConst()::LIST_NAME as $key => $value)
                <option value="{{ $key }}" {{ $user->status == $key ? 'selected' : '' }}>{{ $value }}</option>
              @endforeach
            </select>
          </div>
          <button id="btnSubmit" data-id="{{ $user->id }}" data-api="{{ route('admin.api.v1.users.update', $user->id) }}" class="btn btn-primary">Lưu</button>
        </form>
      </div>
    </div>
  </div>
</div>
