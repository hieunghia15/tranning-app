$(function () {
    const updateAccountForm = $('#updateAccountForm');
    const validator = updateAccountForm.validate({
        ignore: '',
        rules: {
            fullname: {
                required: true,
                notBlank: true,
                maxlength: 255
            },
            username: {
                required: true,
                notBlank: true,
                maxlength: 255
            },
        },
        messages: {
            fullname: {
                notBlank: 'Không được có quá 2 khoảng trống',
            },
            username: {
                notBlank: 'Không được có quá 2 khoảng trống',
            },
        },
    });

    $("#btnSubmit").on('click', function (e) {
        const self = this;
        e.preventDefault();

        if (!validator.form()) {
            return false;
        }

        const endpointApiUpdateUser = $(this).data('api');
        const id = $(this).data('id');

        let fullname = $("#fullname").val();
        let username = $("#username").val();
        let role = $("#role").val();
        let status = $("#status").val();

        let formData = new FormData();

        formData.append("fullname", fullname);
        formData.append("username", username);
        formData.append("role", role);
        formData.append("status", status);
        formData.append("id", id);

        $.ajax({
            url: endpointApiUpdateUser,
            method: 'POST',
            data: formData,
            dataType: "json",
            encode: true,
            processData: false,
            contentType: false,
            beforeSend: showLoadingOverlay,
            complete: hideLoadingOverlay,
            success: function (res) {
                if (res.status === 'success') {
                    showSuccess(USER_MESSAGES.update_success)
                } else {
                    showError(USER_MESSAGES.update_fail)
                }
            },
            error: function (error) {
                showSystemOccurred();
            }
        });
    });
});
