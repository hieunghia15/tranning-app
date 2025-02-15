$('.update-is-active').change(function (event) {
    event.preventDefault();
    const endpointApiUpdateStatusCategory = $(this).data('api');
    let categoryId = $(this).data('id');
    let isActive = $("#is_active_update_" + categoryId).find(":selected").val();

    $.ajax({
        url: endpointApiUpdateStatusCategory,
        method: 'PATCH',
        data: {
            id: categoryId,
            is_active: isActive
        },
        dataType: "json",
        encode: true,
        processData: true,
        beforeSend: showLoadingOverlay,
        complete: hideLoadingOverlay,
        success: function (res) {
            if (res.status === 'success') {
                showSuccess(  CATEGORY_MESSAGES.update_status_success);
            } else {
                showError(CATEGORY_MESSAGES.update_status_fail)
            }
        },
        error: function (error) {
            showSystemOccurred();
        }
    });
});
