$(function () {
    CKEDITOR.replace('content', {
        extraPlugins: 'image2'
    })
    CKEDITOR.on('instanceReady', function () {
        for (let i in CKEDITOR.instances) {
            CKEDITOR.instances[i].on('change', function () {
                this.updateElement()
            })
        }
    })

    const endpointApiCreatePost = $('#endpointApiCreatePost').val();
    const createPostForm = $('#createPostForm');
    const validator = createPostForm.validate({
        ignore: '',
        rules: {
            title: {
                required: true,
                notBlank: true,
                maxlength: 255
            },
            slug: {
                required: true,
                notBlank: true,
                maxlength: 255
            },
            summary: {
                notBlank: true,
                maxlength: 255
            },
            content: {
                required: true,
            },
            is_active: {
                required: true,
            },
            status: {
                required: true,
            },
            start_post: {
                required: true,
            },
            author: {
                required: true,
                notBlank: true,
                maxlength: 255
            },
            thumbnail: {
                required: true,
                accept: "jpg, jpeg, png, JPG, JPEG, PNG",
                filesize: 2,
            },
            "category_id[]": {
                required: true,
            },
            "tag_id[]": {
                required: true,
            },
        },
        messages: {
            title: {
                notBlank: 'Không được có quá 2 khoảng trống',
            },
            slug: {
                notBlank: 'Không được có quá 2 khoảng trống',
            },
            summary: {
                notBlank: 'Không được có quá 2 khoảng trống',
            },
            content: {},
            is_active: {},
            status: {},
            start_post: {},
            author: {
                notBlank: 'Không được có quá 2 khoảng trống',
            },
            thumbnail: {
                accept: "Hình ảnh phải thuộc các định dạng như jpg, jpeg, png",
            },
            "category_id[]": {},
            "tag_id[]": {},
        },
    });

    $("#btnSubmit").on('click', function (e) {
        const self = this;
        e.preventDefault();

        if (!validator.form()) {
            return false;
        }
        let user_id = $("#userId").val();
        let title = $("#title").val();
        let summary = $("#summary").val();
        let content = CKEDITOR.instances['content'].getData();
        let slug = $("#slug").val();
        let author = $("#author").val();
        let is_active = $("#is_active").find(":selected").val();
        let status = $("#status").find(":selected").val();
        let start_post = $("#start_post").val();
        let start_post_timestamp = Math.floor(new Date(start_post).getTime() / 1000);

        let categoryArray = [];
        $('input[name="category_id[]"]:checked').map(function () {
            categoryArray.push($(this).val());
        });

        let tagArray = [];
        $('input[name="tag_id[]"]:checked').map(function () {
            tagArray.push($(this).val());
        });

        let formData = new FormData();

        if ($("#thumbnail")[0].files.length !== 0) {
            let thumbnail = $("#thumbnail").prop("files")[0];
            formData.append("thumbnail", thumbnail);
        }

        formData.append("title", title);
        formData.append("slug", slug);
        formData.append("summary", summary);
        formData.append("content", content);
        formData.append("status", status);
        formData.append("is_active", is_active);
        formData.append("start_post", start_post_timestamp);
        formData.append("user_id", user_id);
        formData.append("author", author);
        formData.append("categories", categoryArray);
        formData.append("tags", tagArray);

        $.ajax({
            url: endpointApiCreatePost,
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
                    showSuccess(POST_MESSAGES.created_success)
                } else {
                    showError(POST_MESSAGES.created_fail)
                }
            },
            error: function (error) {
                showSystemOccurred();
            }
        });
    });
});
