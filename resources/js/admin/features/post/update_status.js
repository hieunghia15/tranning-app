$('.update-status').change(function (event) {
    event.preventDefault();
    const endpointApiUpdateStatusPost = $(this).data('api');
    let postId = $(this).data('id');
    let userId = $('#userId').val();
    let status = $("#status_update_" + postId).find(":selected").val();

    $.ajax({
        url: endpointApiUpdateStatusPost,
        method: 'PATCH',
        data: {
            id: postId,
            status: status,
            user_id: userId
        },
        dataType: "json",
        encode: true,
        processData: true,
        beforeSend: showLoadingOverlay,
        complete: hideLoadingOverlay,
        success: function (res) {
            if (res.status === 'success') {
                showSuccess(POST_MESSAGES.update_status_success);
            } else {
                showError(POST_MESSAGES.update_status_fail)
            }
        },
        error: function (error) {
            showSystemOccurred();
        }
    });
});
