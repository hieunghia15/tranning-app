$(document).ready(function () {
    let filterParams = {};
    let productId = null;
    let table = $('#productTable').DataTable({
        processing: true,
        serverSide: true,
        ajax: {
            url: "http://127.0.0.1:8000/api/products",
            type: "GET",
            data: function (d) {
                return {
                    name: $('#name').val(),
                    start: d.start || 0,  // Đảm bảo start được gửi
                    length: d.length || 10  // Đảm bảo length được gửi
                };
            },
            dataSrc: "data.data"
        },
        columns: [
            { data: "name" },
            { data: "product_code" },
            { data: "category_id" },
            { data: "quantity" },
            { data: "quantity_stock" },
            {
                data: null,
                render: function (data, type, row) {
                    return `
                        <button class="btn btn-primary edit-btn" data-id="${row.id}">Sửa</button>
                        <button class="btn btn-primary delete-btn" data-id="${row.id}" data-api="api/users/${row.id}">Xóa</button>
                    `;
                }
            }
        ],
        language: {
            lengthMenu: "Hiển thị _MENU_ dòng trên mỗi trang", // Đổi "Entries per page"
            info: "Đang xem _START_ đến _END_ trong tổng số _TOTAL_ mục",
            infoEmpty: "Không có dữ liệu",
            infoFiltered: "(lọc từ _MAX_ mục)",
            search: "Tìm kiếm:",
            paginate: {
                first: "Đầu",
                last: "Cuối",
                next: "Tiếp",
                previous: "Trước"
            }
        }
    });

    //Xử lý khi nhấn nút Submit
    $('#filterForm').submit(function (e) {
        e.preventDefault();
        table.ajax.reload();
    });

    // Khi nhấn nút "Chỉnh sửa" sản phẩm
    $(document).on("click", ".edit-btn", function () {
        productId = $(this).data("id"); // Lấy ID từ nút
        $("#createProductModalTitle").text("Chỉnh sửa sản phẩm");
        $("#btnSubmit").text("Cập nhật");

        //Gọi API để lấy thông tin sản phẩm
        $.ajax({
            url: `/api/products/${productId}`,
            method: "GET",
            success: function (response) {
                $("#name").val(response.name);
                $("#category_id").val(response.category_id);
                $("#quantity").val(response.quantity);
                $("#quantity_stock").val(response.quantity_stock);
                $("#description").val(response.description);
                $("#image").val('');
                $("#imagePreview").html("");

                if (response.avatar) {
                    $("#imagePreview").html(
                        `<img src="${response.avatar}" class="img-thumbnail mt-2" width="100">`
                    );
                }
                $("#createProductModal").modal("show");
            },
            error: function () {
                alert("Không thể lấy dữ liệu sản phẩm");
            },
        });
    });

    // Khi nhấn nút "Tạo sản phẩm mới"
    $(document).on("click", ".create-btn", function () {
        productId = null; // Reset ID khi tạo mới
        $("#createProductForm")[0].reset(); // Xóa dữ liệu cũ
        $("#createProductModalTitle").text("Tạo sản phẩm");
        $("#btnSubmit").text("Lưu");
        $("#imagePreview").html("");
        $("#createProductModal").modal("show");
    });

    $(document).on("change", ".image-input", function (e) {
        let file = this.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function (e) {
                $(".image-preview").append(
                    `<img src="${e.target.result}" class="img-thumbnail mt-2 ms-2" width="100">`
                );
            };
            reader.readAsDataURL(file);
        }
    });

    // Xử lý submit form
    $("#createProductForm").submit(function (e) {
        e.preventDefault();

        let formData = new FormData(this);
        let url = productId ? `/api/users/${productId}` : "/api/users";
        let method = productId ? "PUT" : "POST";

        $.ajax({
            url: url,
            method: method,
            data: formData,
            processData: false,
            contentType: false,
            success: function (response) {
                alert(productId ? "Cập nhật thành công!" : "Tạo mới thành công!");
                $("#createProductModal").modal("hide");
                // location.reload();
                table.ajax.reload();
            },
            error: function () {
                alert("Có lỗi xảy ra!");
            },
        });
    });

    $(document).on("click", ".delete-btn", function (e) {
        e.preventDefault();
        let productId = $(this).data('id');
        const endpointApiDeleteProduct = $(this).data('api');
        console.log(endpointApiDeleteProduct);
        $.confirm({
            title: 'Xác nhận',
            content: 'Bạn có chắc chắn muốn xoá dữ liệu này?',
            buttons: {
                confirm: {
                    text: 'Xoá',
                    action: function () {
                        $.ajax({
                            url: endpointApiDeleteProduct,
                            method: 'DELETE',
                            data: {
                                id: productId
                            },
                            dataType: "json",
                            encode: true,
                            processData: true,
                            beforeSend: showLoadingOverlay,
                            complete: hideLoadingOverlay,
                            success: function (res) {
                                // if (res.status === 'success') {
                                //     showSuccess(USER_MESSAGES.delete_success);
                                // } else {
                                //     showError(USER_MESSAGES.delete_fail);
                                // }
                                table.ajax.reload();
                                //console.log(res);
                                //location.reload();
                            },
                            error: function (error) {
                                showSystemOccurred();
                            }
                        });
                    }
                },
                cancel: {
                    text: 'Huỷ bỏ',
                    action: function () {
                        //
                    }
                }
            }
        });
    });

    $(document).on("click", ".add-attribute", function () {
        let newAttributeRow = `
            <div class="row p-1 attribute-row">
                <div class="col-6 mb-0">
                    <input type="text" name="product_attribute[]" class="form-control product-attribute"/>
                </div>
                <div class="col-6 mb-0">
                    <div class="d-flex align-items-center">
                        <input type="text" name="product_attribute_value[]" class="form-control product-attribute-value"/>
                        <span class="ms-2 remove-attribute">
                            <i class="fa-solid fa-trash"></i>
                        </span>
                    </div>
                </div>
            </div>`;

        $(".display-attribute").after(newAttributeRow);
    });

    // Xóa input khi nhấn vào biểu tượng fa-trash
    $(document).on("click", ".remove-attribute", function () {
        $(this).closest(".attribute-row").remove();
    });

    $(document).on("click", ".add-image", function (e) {
        e.preventDefault(); // Ngăn chặn reload trang nếu button nằm trong form

        let inputFile = $('<input type="file" name="image[]" class="form-control image-input" style="display:none" accept="image/*"/>');

        // Thêm input vào .image-group
        $(".image-group").append(inputFile);

        // Tự động kích hoạt chọn file
        inputFile.trigger("click");
    });
});
