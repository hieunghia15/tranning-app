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
