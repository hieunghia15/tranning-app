$(".delete_tag").on('click', function (e) {
    e.preventDefault();
    let tagId = $(this).data('id');
    const endpointApiDeleteTag = $(this).data('api');
    $.confirm({
        title: 'Xác nhận',
        content: 'Bạn có chắc chắn muốn xoá dữ liệu này?',
        buttons: {
            confirm: {
                text: 'Xoá',
                action: function () {
                    $.ajax({
                        url: endpointApiDeleteTag,
                        method: 'DELETE',
                        data: {
                            id: tagId
                        },
                        dataType: "json",
                        encode: true,
                        processData: true,
                        beforeSend: showLoadingOverlay,
                        complete: hideLoadingOverlay,
                        success: function (res) {
                            if (res.status === 'success') {
                                showSuccess(TAG_MESSAGES.delete_success);
                            } else {
                                showError(TAG_MESSAGES.delete_fail);
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
