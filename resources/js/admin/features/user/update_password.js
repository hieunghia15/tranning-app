$(function () {
    const updateAccountForm = $('#updatePasswordForm');
    const validator = updateAccountForm.validate({
        ignore: '',
        rules: {
            currentPassword: {
                required: true,
                notBlank: true,
                maxlength: 255,

            },
            newPassword: {
                required: true,
                complexPassword: true
            },
            confirmPassword: {
                required: true,
                equalTo: "#newPassword"
            },
        },
        messages: {
            currentPassword: {
                notBlank: 'Không được có quá 2 khoảng trống',
            },
            newPassword: {},
            confirmPassword: {
                equalTo: "Mật khẩu xác nhận phải giống mật khẩu mới."
            },
        },
    });

    $("#btnSubmit").on('click', function (e) {
        const self = this;
        e.preventDefault();

        if (!validator.form()) {
            return false;
        }

        const endpointApiUpdatePasswordUser = $(this).data('api');
        const id = $(this).data('id');

        let currentPassword = $("#currentPassword").val();
        let newPassword = $("#newPassword").val();
        let confirmPassword = $("#confirmPassword").val();

        let formData = new FormData();

        formData.append("current_password", currentPassword);
        formData.append("new_password", newPassword);
        formData.append("new_password_confirmation", confirmPassword);
        formData.append("id", id);

        $.ajax({
            url: endpointApiUpdatePasswordUser,
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
                    showSuccess(USER_MESSAGES.update_password_success)
                } else {
                    showError(USER_MESSAGES.update_password_fail)
                }
            },
            error: function (error) {
                showSystemOccurred();
            }
        });
    });
});
