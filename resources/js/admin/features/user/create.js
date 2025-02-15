$(function () {
    const endpointApiCreateUser = $('#endpointApiCreateUser').val();
    const createUserForm = $('#createUserForm');
    const validator = createUserForm.validate({
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
            roles: {
                required: true,
            },
            status: {
                required: true,
            },
        },
        messages: {
            fullname: {
                notBlank: 'Không được có quá 2 khoảng trống',
            },
            username: {
                notBlank: 'Không được có quá 2 khoảng trống',
            },
            roles: {},
            status: {},
        },
    });

    $("#btnSubmit").on('click', function (e) {
        const self = this;
        e.preventDefault();

        if (!validator.form()) {
            return false;
        }

        let fullname = $("#fullname").val();
        let username = $("#username").val();
        let email = $("#email").val();
        let roles = $("#roles").find(":selected").val();
        let status = $("#status").find(":selected").val();

        let formData = new FormData();

        formData.append("fullname", fullname);
        formData.append("username", username);
        formData.append("email", email);
        formData.append("role", roles);
        formData.append("status", status);

        $.ajax({
            url: endpointApiCreateUser,
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
                    $('#createUserModal').modal('hide');
                    showSuccess(USER_MESSAGES.created_success)
                } else {
                    showError(USER_MESSAGES.created_fail)
                }
            },
            error: function (error) {
                showSystemOccurred();
            }
        });
    });
});
