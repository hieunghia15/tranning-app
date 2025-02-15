$('.update-is-active').change(function (event) {
    event.preventDefault();
    const endpointApiUpdateStatusTag = $(this).data('api');
    let tagId = $(this).data('id');
    let isActive = $("#is_active_update_" + tagId).find(":selected").val();

    $.ajax({
        url: endpointApiUpdateStatusTag,
        method: 'PATCH',
        data: {
            id: tagId,
            is_active: isActive
        },
        dataType: "json",
        encode: true,
        processData: true,
        beforeSend: showLoadingOverlay,
        complete: hideLoadingOverlay,
        success: function (res) {
            if (res.status === 'success') {
                showSuccess(TAG_MESSAGES.update_status_success);
            } else {
                showError(TAG_MESSAGES.update_status_fail)
            }
        },
        error: function (error) {
            showSystemOccurred();
        }
    });
});
