{{-- <input type="hidden" id="endpointApiCreateUser" value="{{ route('admin.api.v1.users.store') }}">
<input type="hidden" id="userId" value="{{ auth()->user()->id }}"> --}}
<h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Sản phẩm /</span> Chi tiết</h4>
<!-- Basic Bootstrap Table -->
<div class="card">
    <div class="d-flex align-items-center justify-content-between pe-3">
        <h5 class="card-header">Chi tiết sản phẩm</h5>
        <button type="button" data-bs-toggle="modal" data-bs-target="#createProductModal"
            class="btn rounded-pill btn-primary create-btn">Tạo</button>
    </div>
    <div class="table-responsive text-nowrap">
        <table class="table display" id="productTable">
            <thead>
                <tr>
                    <th>Tên sản phẩm</th>
                    <th>Mã sản phẩm</th>
                    <th>Danh mục</th>
                    <th>Số lượng</th>
                    <th>Số lượng ở kho</th>
                    <th>Hành động</th>
                </tr>
            </thead>
        </table>
    </div>
</div>
<!-- Modal -->
<div class="modal fade" id="createProductModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
        <div class="modal-content">
            <form id="createProductForm">
                <div class="modal-header">
                    <h5 class="modal-title" id="createProductModalTitle">Tạo sản phẩm</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row p-1">
                        <div class="col mb-0">
                            <label for="name" class="form-label">Tên</label>
                            <input type="text" id="name" name="name" class="form-control" />
                        </div>
                        <div class="col mb-0">
                            <label for="category" class="form-label">Danh mục</label>
                            <select class="form-control" name="category_id" id="category_id">
                                <option value="1">Danh mục 1</option>
                                <option value="2">Danh mục 2</option>
                                <option value="3">Danh mục 3</option>
                            </select>
                        </div>
                    </div>
                    <div class="row p-1">
                        <div class="col mb-0">
                            <label for="quantity" class="form-label">Số lượng</label>
                            <input type="text" id="quantity" name="quantity" class="form-control"/>
                        </div>
                        <div class="col mb-0">
                            <label for="quantity_stock" class="form-label">Số lượng tại kho</label>
                            <input type="text" id="quantity_stock" name="quantity_stock" class="form-control"/>
                        </div>
                    </div>
                    <div class="row p-1">
                        <div class="col mb-0">
                            <label for="description" class="form-label">Mô tả</label>
                            <textarea class="form-control" name="description" id="description" cols="20" rows="5"></textarea>
                        </div>
                    </div>
                    <div class="row p-1 display-attribute">
                        <div class="col-6 mb-0">
                            <label for="product_attribute" class="form-label">Thuộc tính</label>
                            <span class="add-attribute">
                                <i class="fa-solid fa-plus"></i>
                            </span>
                            <input type="text" id="product_attribute" name="product_attribute" class="form-control product-attribute"/>
                        </div>
                        <div class="col-6 mb-0">
                            <label for="product_attribute_value" class="form-label">Giá trị</label>
                            <div class="d-flex column justify-content-center align-items-center">
                                <input class="form-control product-attribute-value" type="text" id="product_attribute_value" name="product_attribute_value"/>
                                <span class="ms-2 remove-attribute">
                                    <i class="fa-solid fa-trash"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="row p-1">
                        <div class="col mb-0">
                            <label for="image" class="form-label">Ảnh</label>
                            <div>
                                <button class="btn btn-primary add-image">Thêm ảnh</button>
                            </div>
                            {{-- <input type="file" id="image" name="image" class="form-control"/> --}}
                            <div class="image-group"></div>
                            <div class="d-flex justify-content-start image-preview"></div>
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
