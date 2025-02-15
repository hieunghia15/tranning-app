$(".delete_post").on('click', function (e) {
    e.preventDefault();
    let postId = $(this).data('id');
    let userId = $('#userId').val();
    const endpointApiDeletePost = $(this).data('api');
    $.confirm({
        title: 'Xác nhận',
        content: 'Bạn có chắc chắn muốn xoá dữ liệu này?',
        buttons: {
            confirm: {
                text: 'Xoá',
                action: function () {
                    $.ajax({
                        url: endpointApiDeletePost,
                        method: 'DELETE',
                        data: {
                            id: postId,
                            user_id: userId
                        },
                        dataType: "json",
                        encode: true,
                        processData: true,
                        beforeSend: showLoadingOverlay,
                        complete: hideLoadingOverlay,
                        success: function (res) {
                            if (res.status === 'success') {
                                showSuccess(POST_MESSAGES.delete_success);
                            } else {
                                showError(POST_MESSAGES.delete_fail);
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
