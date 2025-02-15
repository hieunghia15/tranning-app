$(document).ready(function () {
    let sampleData = [
        { id: 1, fullname: "Nguyễn Văn A", email: "nguyenvana@example.com", username: "nguyenvana", status: "active" },
        { id: 2, fullname: "Trần Thị B", email: "tranthib@example.com", username: "tranthib", status: "inactive" },
        { id: 3, fullname: "Lê Văn C", email: "levanc@example.com", username: "levanc", status: "active" },
        { id: 4, fullname: "Hoàng Thị D", email: "hoangthid@example.com", username: "hoangthid", status: "inactive" }
    ];

    let table = $('#userTable').DataTable({
        processing: true, // Hiển thị biểu tượng loading
        // serverSide: true,
        data: sampleData,
        // ajax: {
        //     url: "https://example.com/api/users",
        //     type: "GET",
        //     dataSrc: "data"
        // },
        columns: [
            { data: "id" },
            { data: "fullname" },
            { data: "email" },
            { data: "username" },
            {
                data: "status",
                render: function (data, type, row) {
                    return data === "active"
                        ? '<span style="color: green;">Hoạt động</span>'
                        : '<span style="color: red;">Không hoạt động</span>';
                }
            }
        ]
    });

    // Xử lý khi nhấn nút Submit
    $('#filterForm').submit(function (e) {
        e.preventDefault();

        let fullname = $('#fullname').val().toLowerCase();
        let username = $('#username').val().toLowerCase();
        let email = $('#email').val().toLowerCase();
        let status = $('#status').val();

        // Lọc dữ liệu bằng .filter()
        let filteredData = sampleData.filter(user => {
            return (
                (fullname === "" || user.fullname.toLowerCase().includes(fullname)) &&
                (username === "" || user.username.toLowerCase().includes(username)) &&
                (email === "" || user.email.toLowerCase().includes(email)) &&
                (status === "" || user.status === status)
            );
        });

        // Cập nhật lại DataTable
        table.clear().rows.add(filteredData).draw();
    });
});
