$(function () {
    const apiEndpointImportCsvPost = $('#apiEndpointImportCsvPost').val();
    const apiEndpointImportCsvStatus = $('#apiEndpointImportCsvStatus').val();
    const importCsvPostForm = $('#importCsvPostForm');
    const validator = importCsvPostForm.validate({
        ignore: '',
        rules: {
            post_csv: {
                required: true,
                accept: "csv",
                filesize: 50,
            },
        },
        messages: {
            post_csv: {
                accept: "Tập tin phải thuộc các định dạng như csv",
            },
        },
    });

    $('#btnImportCsvSubmit').on('click', function (e) {
        const self = this;
        e.preventDefault();

        if (!validator.form()) {
            return false;
        }

        let user_id = $("#userId").val();

        const postCsvFileName = $('#post_csv')[0].files[0].name;
        $.confirm({
            title: '',
            content: 'Thực hiện nhập tệp CSV bên dưới' +
                '<br>Tập tin:  ' + postCsvFileName +
                '<br>Bạn có chắc chắn muốn chạy nó không?？' +
                '',
            buttons: {
                yes: {
                    text: 'Có',
                    action: function () {
                        let formData = new FormData();
                        if ($("#post_csv")[0].files.length !== 0) {
                            let postCsv = $("#post_csv").prop("files")[0];
                            formData.append("post_csv", postCsv);
                        }

                        formData.append("user_id", user_id);

                        $.ajax({
                            url: apiEndpointImportCsvPost,
                            method: 'POST',
                            processData: false,
                            contentType: false,
                            cache: false,
                            data: formData,
                            dataType: "json",
                            encode: true,
                            beforeSend: showLoadingOverlay,
                            complete: hideLoadingOverlay,
                            success: function (res) {
                                if (res.status === 'success') {
                                    window.location.reload();
                                } else {
                                    $.alert(res.message);
                                }
                            },
                            error: function (error) {
                                showSystemOccurred();
                            }
                        });
                    }
                },
                no: {
                    text: 'Không',
                    action: function () {
                    }
                }
            }
        });
    });

    const importingDialog = $.dialog({
        icon: 'fa fa-spinner fa-spin',
        title: 'Đang xử lý…',
        content: 'CSV đang được nhập. Quá trình này có thể mất một chút thời gian nhưng nếu quá trình này không hoàn tất sau khoảng 10 phút thì có thể đã xảy ra sự cố bất thường, vì vậy vui lòng liên hệ với quản trị viên hệ thống của bạn.',
        animation: 'none',
        closeAnimation: 'none',
        closeIcon: false,
        lazyOpen: true,
    });

    function importStatusPooling() {
        $.ajax({
            url: apiEndpointImportCsvStatus,
            success: function (res) {
                // res.status = +res.status;
                if (res.status === 1 || res.status === 2) {
                    importingDialog.open();
                    setTimeout(importStatusPooling, 5000);
                } else {
                    importingDialog.close();
                    if (res.status === 4 || res.status === 5) {
                        $.ajax({
                            url: '',
                            success: function (res) {
                                $.alert({
                                    title: '',
                                    content: 'Đã xảy ra lỗi khi nhập CSV. Vui lòng thử nhập lại sau một thời gian. Nếu sự cố này xảy ra nhiều lần, vui lòng liên hệ với quản trị viên hệ thống của bạn.',
                                    buttons: {
                                        ok: function () {
                                            window.location.reload();
                                        }
                                    }
                                });
                            }
                        });
                    }
                    if (res.status === 3) {
                        $.alert({
                            title: '',
                            content: 'Quá trình nhập bài viết đã hoàn tất thành công. Bài viết vẫn chưa được công bố. Hãy xuất bản nó trên màn hình bài viết ngày hôm nay.',
                            buttons: {
                                'Xem các bài viết đã nhập': function () {
                                    //
                                },
                                ok: function () {
                                    window.location.reload();
                                }
                            }
                        });
                    }
                }
            }
        });
    }

    importStatusPooling();
});
