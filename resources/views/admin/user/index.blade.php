{{-- <input type="hidden" id="endpointApiCreateUser" value="{{ route('admin.api.v1.users.store') }}">
<input type="hidden" id="userId" value="{{ auth()->user()->id }}"> --}}
<h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Người dùng /</span> Danh sách</h4>
<!-- Basic Bootstrap Table -->
<div class="card">
    <div class="d-flex align-items-center justify-content-between pe-3">
        <h5 class="card-header">Danh sách người dùng</h5>
        <button type="button" data-bs-toggle="modal" data-bs-target="#createUserModal"
            class="btn rounded-pill btn-primary create-btn">Tạo</button>
    </div>
    <!-- Form Bộ Lọc -->
    <form id="filterForm">
        <div class="d-flex">
            <div class="col-md-6 pe-4 ps-4 pb-4">
                <label class="form-label">Họ tên</label>
                <input type="text" id="fullname1" class="form-control">
            </div>
            <div class="col-md-6 pe-4 ps-4 pb-4">
                <label class="form-label">Ngày sinh</label>
                <input type="text" id="birthday1" class="form-control">
            </div>
        </div>
        <div class="d-flex">
            <div class="col-md-6 pe-4 ps-4 pb-4">
                <label class="form-label">Email</label>
                <input type="text" id="email1" class="form-control">
            </div>
            <div class="col-md-6 pe-4 ps-4 pb-4">
                <label class="form-label">Trạng thái</label>
                <select id="status1" class="form-select">
                    <option value="">Chọn trạng thái</option>
                    <option value="active">Hoạt động</option>
                    <option value="inactive">Không hoạt động</option>
                </select>
            </div>
        </div>
        <div class="d-flex align-items-center justify-content-center mb-3">
          <button type="submit" class="btn rounded-pill btn-primary">Lọc</button>
        </div>
    </form>
    <div class="table-responsive text-nowrap">
        <table class="table display" id="userTable">
            <thead>
                <tr>
                    <th>Họ tên</th>
                    <th>Email</th>
                    <th>Trạng thái</th>
                    <th>Hành động</th>
                </tr>
            </thead>
        </table>
    </div>
</div>
<!-- Modal -->
<div class="modal fade" id="createUserModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <form id="createUserForm">
                <div class="modal-header">
                    <h5 class="modal-title" id="createUserModalTitle">Tạo người dùng</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row p-1">
                        <div class="col mb-0">
                            <label for="fullname" class="form-label">Họ tên</label>
                            <input type="text" id="fullname" name="fullname" class="form-control" />
                        </div>
                        <div class="col mb-0">
                            <label for="birthday" class="form-label">Ngày sinh</label>
                            <input type="date" id="birthday" name="birthday" class="form-control" />
                        </div>
                    </div>
                    <div class="row p-1">
                        <div class="col mb-0">
                            <label for="email" class="form-label">Email</label>
                            <input type="text" id="email" name="email" class="form-control"
                                placeholder="email@example.com" />
                        </div>
                        <div class="col mb-0">
                            <label for="gender" class="form-label">Giới tính</label>
                            <select class="form-control" name="gender" id="gender">
                                <option value="1">Nam</option>
                                <option value="2">Nữ</option>
                                <option value="3">Khác</option>
                            </select>
                        </div>
                    </div>
                    <div class="row p-1">
                        <div class="col mb-0">
                            <label for="avatar" class="form-label">Hình đại diện</label>
                            <input class="form-control" type="file" id="avatar" name="avatar" />
                            <div id="avatarPreview"></div>
                        </div>
                    </div>
                    <div class="row p-1">
                        <div class="col mb-0">
                            <label for="status" class="form-label">Trạng thái</label>
                            <select id="status" name="status" class="form-select">
                                <option value="">Chọn trạng thái</option>
                                <option value="1">Hoạt động</option>
                                <option value="2">Không hoạt động</option>
                                <option value="3">Khoá</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button class="btn btn-primary" id="btnSubmit">Lưu</button>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- / Basic Bootstrap Table -->
