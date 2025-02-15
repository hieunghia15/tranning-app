$(function () {
    const updateTagForm = $('#updateTagForm');
    const validator = updateTagForm.validate({
        ignore: '',
        rules: {
            name: {
                required: true,
                notBlank: true,
                maxlength: 255
            },
            slug: {
                required: true,
                notBlank: true,
                maxlength: 255
            },
            description: {
                notBlank: true,
                maxlength: 255
            },
            is_active: {
                required: true,
            },
        },
        messages: {
            name: {
                notBlank: 'Không được có quá 2 khoảng trống',
            },
            slug: {
                notBlank: 'Không được có quá 2 khoảng trống',
            },
            description: {
                notBlank: 'Không được có quá 2 khoảng trống',
            },
            is_active: {},
        },
    });

    $("#btnSubmit").on('click', function (e) {
        const self = this;
        e.preventDefault();

        if (!validator.form()) {
            return false;
        }
        const endpointApiUpdateTag = $(this).data('api');

        let tagId = $(this).data('id');
        let name = $("#name").val();
        let slug = $("#slug").val();
        let description = $("#description").val();
        let is_active = $("#is_active").find(":selected").val();
        let user_id = $("#userId").val();

        let formData = new FormData();

        formData.append("id", tagId);
        formData.append("name", name);
        formData.append("slug", slug);
        formData.append("description", description);
        formData.append("is_active", is_active);
        formData.append("user_id", user_id);

        $.ajax({
            url: endpointApiUpdateTag,
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
                    showSuccess(TAG_MESSAGES.update_success)
                } else {
                    showError(TAG_MESSAGES.update_fail)
                }
            },
            error: function (error) {
                showSystemOccurred();
            }
        });
    });
});
