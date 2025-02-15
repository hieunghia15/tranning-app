$(document).ready(function () {
    let filterParams = {};
    let userId = null;
    let table = $('#userTable').DataTable({
        processing: true,
        serverSide: true,
        ajax: {
            url: "http://127.0.0.1:8000/api/users",
            type: "GET",
            data: function (d) {
                return {
                    fullname: $('#fullname1').val(),
                    email: $('#email1').val(),
                    status: $('#status1').val(),
                };
            },
            dataSrc: "data.data"
        },
        columns: [
            { data: "fullname" },
            { data: "email" },
            {
                data: "status",
                render: function (data, type, row) {
                    return data === 2
                        ? '<span style="color: green;">Hoạt động</span>'
                        : '<span style="color: red;">Không hoạt động</span>';
                }
            },
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

    // Khi nhấn nút "Chỉnh sửa" người dùng
    $(document).on("click", ".edit-btn", function () {
        userId = $(this).data("id"); // Lấy ID từ nút
        console.log('edit: ' + userId);
        $("#createUserModalTitle").text("Chỉnh sửa người dùng");
        $("#btnSubmit").text("Cập nhật");

        // Gọi API để lấy thông tin người dùng
        $.ajax({
            url: `/api/users/${userId}`,
            method: "GET",
            success: function (response) {
                $("#fullname").val(response.fullname);
                $("#birthday").val(response.birthday);
                $("#email").val(response.email);
                $("#gender").val(response.gender);
                $("#status").val(response.status);

                $("#avatarPreview").html("");

                // Nếu có avatar, hiển thị ảnh
                if (response.avatar) {
                    $("#avatarPreview").html(
                        `<img src="${response.avatar}" class="img-thumbnail mt-2" width="100">`
                    );
                }

                $("#createUserModal").modal("show"); // Hiển thị modal
            },
            error: function () {
                alert("Không thể lấy dữ liệu người dùng");
            },
        });
    });

    // Khi nhấn nút "Tạo người dùng mới"
    $(document).on("click", ".create-btn", function () {
        userId = null; // Reset ID khi tạo mới
        $("#createUserForm")[0].reset(); // Xóa dữ liệu cũ
        $("#createUserModalTitle").text("Tạo người dùng");
        $("#btnSubmit").text("Lưu");
        $("#avatarPreview").html("");
        $("#createUserModal").modal("show");
    });

    $("#avatar").on("change", function () {
        let file = this.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function (e) {
                $("#avatarPreview").html(
                    `<img src="${e.target.result}" class="img-thumbnail mt-2" width="100">`
                );
            };
            reader.readAsDataURL(file);
        }
    });

    // Xử lý submit form
    $("#createUserForm").submit(function (e) {
        e.preventDefault();

        let formData = new FormData(this);
        let url = userId ? `/api/users/${userId}` : "/api/users";
        let method = userId ? "PUT" : "POST";

        $.ajax({
            url: url,
            method: method,
            data: formData,
            processData: false,
            contentType: false,
            success: function (response) {
                alert(userId ? "Cập nhật thành công!" : "Tạo mới thành công!");
                $("#createUserModal").modal("hide");
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
        let userId = $(this).data('id');
        const endpointApiDeleteUser = $(this).data('api');
        console.log(endpointApiDeleteUser);
        $.confirm({
            title: 'Xác nhận',
            content: 'Bạn có chắc chắn muốn xoá dữ liệu này?',
            buttons: {
                confirm: {
                    text: 'Xoá',
                    action: function () {
                        $.ajax({
                            url: endpointApiDeleteUser,
                            method: 'DELETE',
                            data: {
                                id: userId
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

});
