$('#pagination-links a').on('click', function (e) {
    e.preventDefault();

    var url = $(this).attr('href');  // Lấy URL phân trang
    var currentUrl = new URL(url);   // Chuyển URL thành đối tượng URL để xử lý

    // Lấy tất cả các tham số query trong URL hiện tại
    var params = new URLSearchParams(currentUrl.search);

    // Duyệt qua các tham số và loại bỏ các tham số có giá trị null hoặc rỗng
    params.forEach(function (value, key) {
        if (value === null || value === '' || value === 'null') {
            params.delete(key); // Xóa tham số có giá trị null hoặc rỗng
        }
    });

    // Cập nhật lại URL với các tham số đã lọc
    currentUrl.search = params.toString();

    // Chuyển hướng đến URL mới
    window.location.href = currentUrl.toString();
});
