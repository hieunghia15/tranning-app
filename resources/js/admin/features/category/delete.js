$(".delete_category").on('click', function (e) {
    e.preventDefault();
    let categoryId = $(this).data('id');
    const endpointApiDeleteCategory = $(this).data('api');
    $.confirm({
        title: 'Xác nhận',
        content: 'Bạn có chắc chắn muốn xoá dữ liệu này?',
        buttons: {
            confirm: {
                text: 'Xoá',
                action: function () {
                    $.ajax({
                        url: endpointApiDeleteCategory,
                        method: 'DELETE',
                        data: {
                            id: categoryId
                        },
                        dataType: "json",
                        encode: true,
                        processData: true,
                        beforeSend: showLoadingOverlay,
                        complete: hideLoadingOverlay,
                        success: function (res) {
                            if (res.status === 'success') {
                                showSuccess(CATEGORY_MESSAGES.delete_success);
                            } else {
                                showError(CATEGORY_MESSAGES.delete_fail);
                            }
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
