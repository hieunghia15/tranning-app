$(function () {
    const updateCategoryForm = $('#updateCategoryForm');
    const validator = updateCategoryForm.validate({
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
            parent_id: {
                required: true,
            },
            thumbnail: {
                accept: "jpg, jpeg, png, JPG, JPEG, PNG",
                filesize: 2,
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
            parent_id: {},
            thumbnail: {
                accept: "Hình ảnh phải thuộc các định dạng như jpg, jpeg, png",
            },
        },
    });

    $("#btnSubmit").on('click', function (e) {
        const self = this;
        e.preventDefault();

        if (!validator.form()) {
            return false;
        }
        const endpointApiUpdateCategory = $(this).data('api');

        let category_id = $(this).data('id');
        let name = $("#name").val();
        let slug = $("#slug").val();
        let description = $("#description").val();
        let is_active = $("#is_active").find(":selected").val();
        let user_id = $("#userId").val();
        let parent_id = $("#parent_id").find(":selected").val();

        let formData = new FormData();

        if ($("#thumbnail")[0].files.length !== 0) {
            let thumbnail = $("#thumbnail").prop("files")[0];
            formData.append("thumbnail", thumbnail);
        }

        formData.append("id", category_id);
        formData.append("name", name);
        formData.append("slug", slug);
        formData.append("description", description);
        formData.append("is_active", is_active);
        formData.append("user_id", user_id);
        formData.append("parent_id", parent_id);

        $.ajax({
            url: endpointApiUpdateCategory,
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
                    showSuccess(CATEGORY_MESSAGES.update_success)
                } else {
                    showError(CATEGORY_MESSAGES.update_fail)
                }
            },
            error: function (error) {
                showSystemOccurred();
            }
        });
    });
});
