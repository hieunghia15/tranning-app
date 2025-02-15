$('.update-is-featured').change(function (event) {
    event.preventDefault();
    const endpointApiUpdateIsFeaturedPost = $(this).data('api');
    let postId = $(this).data('id');
    let userId = $('#userId').val();
    let is_featured = $("#is_featured_update_" + postId).find(":selected").val();

    $.ajax({
        url: endpointApiUpdateIsFeaturedPost,
        method: 'PATCH',
        data: {
            id: postId,
            is_featured: is_featured,
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
