$('.update-status').change(function (event) {
    event.preventDefault();
    const endpointApiUpdateStatusUser = $(this).data('api');
    let userId = $(this).data('id');
    let status = $("#status_update_" + userId).find(":selected").val();

    $.ajax({
        url: endpointApiUpdateStatusUser,
        method: 'PATCH',
        data: {
            id: userId,
            status: status
        },
        dataType: "json",
        encode: true,
        processData: true,
        beforeSend: showLoadingOverlay,
        complete: hideLoadingOverlay,
        success: function (res) {
            if (res.status === 'success') {
                showSuccess(USER_MESSAGES.update_status_success);
            } else {
                showError(USER_MESSAGES.update_status_fail)
            }
        },
        error: function (error) {
            showSystemOccurred();
        }
    });
});
