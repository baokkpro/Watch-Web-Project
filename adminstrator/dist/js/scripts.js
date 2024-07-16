/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 


function feature_delete(id, casede) {
    if (casede == 1){
        var check = 0;
        Swal.fire({
            title: 'Bạn chắc xoá WATCH này chứ?',
            text: 'Sẽ không thể khôi phục lại đâu nhé!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Xoá đi!'
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    type: 'POST',
                    url: 'includes/ajax.php',
                    data: { action: 'deletewatch', id: id },
                    
                    error: function (response) {
                        Swal.fire('Lỗi!', 'Xảy ra lỗi khi xoá WATCH.', 'error'); 
                    },
                    success: function (response) {
                        Swal.fire({
                            title: 'Đã xoá!',
                            text: 'Sản phẩm WATCH đã được xoá.',
                            icon: 'success'
                        }).then(() => {
                            // Refresh trang hiện tại
                            location.reload();
                            check = 1;
                            // Xóa hàng trong bảng mà không làm mới trang
                            //$('#datatablesSimple').DataTable().row($('#row_' + id)).remove().draw();
                        });
                    }
                    
                });
            }
        });
    };
    if (casede == 2){
        var check = 0;
        Swal.fire({
            title: 'Bạn chắc xoá thể loại này chứ?',
            text: 'Sẽ không thể khôi phục lại đâu nhé!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Xoá đi!'
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    type: 'POST',
                    url: 'includes/ajax.php',
                    data: { action: 'deletecategory', id: id },
                    
                    error: function (response) {
                        Swal.fire('Lỗi!', 'Xảy ra lỗi khi xoá WATCH category.', 'error'); 
                    },
                    success: function (response) {
                        Swal.fire({
                            title: 'Đã xoá!',
                            text: 'Thể loại trên đã được xoá.',
                            icon: 'success'
                        }).then(() => {
                            // Refresh trang hiện tại
                            location.reload();
                            check = 1;
                            // Xóa hàng trong bảng mà không làm mới trang
                            //$('#datatablesSimple').DataTable().row($('#row_' + id)).remove().draw();
                        });
                    }
                    
                });
            }
        });
    };
    if (casede == 3){
        var check = 0;
        Swal.fire({
            title: 'Bạn chắc xoá user này chứ?',
            text: 'Sẽ không thể khôi phục lại đâu nhé!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Xoá đi!'
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    type: 'POST',
                    url: 'includes/ajax.php',
                    data: { action: 'deleteuser', id: id },
                    
                    error: function (response) {
                        Swal.fire('Lỗi!', 'Xảy ra lỗi khi xoá WATCH category.', 'error'); 
                    },
                    success: function (response) {
                        Swal.fire({
                            title: 'Đã xoá!',
                            text: 'User trên đã xoá.',
                            icon: 'success'
                        }).then(() => {
                            // Refresh trang hiện tại
                            location.reload();
                            check = 1;
                            // Xóa hàng trong bảng mà không làm mới trang
                            //$('#datatablesSimple').DataTable().row($('#row_' + id)).remove().draw();
                        });
                    }
                    
                });
            }
        });
    };
    if (casede == 5){
        var check = 0;
        Swal.fire({
            title: 'Bạn chắc xoá voucher này chứ?',
            text: 'Sẽ không thể khôi phục lại đâu nhé!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Xoá đi!'
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    type: 'POST',
                    url: 'includes/ajax.php',
                    data: { action: 'deleteoffer', id: id },
                    
                    error: function (response) {
                        Swal.fire('Lỗi!', 'Xảy ra lỗi khi xoá WATCH category.', 'error'); 
                    },
                    success: function (response) {
                        Swal.fire({
                            title: 'Đã xoá!',
                            text: 'Voucher trên đã xoá.',
                            icon: 'success'
                        }).then(() => {
                            // Refresh trang hiện tại
                            location.reload();
                            check = 1;
                            // Xóa hàng trong bảng mà không làm mới trang
                            //$('#datatablesSimple').DataTable().row($('#row_' + id)).remove().draw();
                        });
                    }
                    
                });
            }
        });
    };
    if (casede == 4){
        var check = 0;
        Swal.fire({
            title: 'Bạn chắc xoá hoá đơn này chứ?',
            text: 'Sẽ không thể khôi phục lại đâu nhé!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Xoá đi!'
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    type: 'POST',
                    url: 'includes/ajax.php',
                    data: { action: 'deleteinvoice', id: id },
                    
                    error: function (response) {
                        Swal.fire('Lỗi!', 'Xảy ra lỗi khi xoá WATCH category.', 'error'); 
                    },
                    success: function (response) {
                        Swal.fire({
                            title: 'Đã xoá!',
                            text: 'Hoá đơn trên đã xoá.',
                            icon: 'success'
                        }).then(() => {
                            // Refresh trang hiện tại
                            location.reload();
                            check = 1;
                            // Xóa hàng trong bảng mà không làm mới trang
                            //$('#datatablesSimple').DataTable().row($('#row_' + id)).remove().draw();
                        });
                    }
                    
                });
            }
        });
    };
    
} 


window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

function openEditModal_WATCHCategory(id, name) {
    // Hiển thị modal và điền thông tin cần chỉnh sửa
    $('#editWATCHCategoryId').val(id);
    $('#editWATCHCategoryName').val(name);
        
    // Hiển thị modal
    $('#editWATCHCategoryModal').modal('show');
}

function openEditModal_WATCH(id, category_id, title, price, quantity, description, productimage, discount_id) {
    // Đặt giá trị cho các ô nhập liệu
    $('#editWATCHIdValue').val(id);
    $('#editWATCHCategoryId').val(category_id);
    $('#editWATCHTitle').val(title);
    $('#editWATCHPrice').val(price);
    $('#editWATCHQuantity').val(quantity);
    $('#editWATCHDescription').val(description);
    $('#editWATCHProductImage').val(productimage);
    $('#editWATCHDiscountId').val(discount_id);

    // Hiển thị modal
    $('#editWATCHModal').modal('show');
}

function openEditModal_User(id, fullname, dayofbirth, email, phoneNumber, address, avatar, account, password, role_id) {
    // Hiển thị modal và điền thông tin cần chỉnh sửa
    $('#editUserIdValue').val(id);
    $('#editUserFullname').val(fullname);
    $('#editUserDayOfBirth').val(dayofbirth);
    $('#editUserEmail').val(email);
    $('#editUserPhoneNumber').val(phoneNumber);
    $('#editUserAddress').val(address);
    $('#editUserAvatar').val(avatar);
    $('#editUserAccount').val(account);
    $('#editUserPassword').val(password);
    $('#editUserRoleid').val(role_id);

    $('#editUserModal').modal('show');
}

function openEditModal_Invoice(id, user_id, fullname, email, phone_number, address, note, order_date, status, total_money) {
    // Hiển thị modal và điền thông tin cần chỉnh sửa
    $('#editInvoiceIdValue').val(id);
    $('#editInvoiceUserId').val(user_id);
    $('#editInvoiceFullname').val(fullname);
    $('#editInvoiceEmail').val(email);
    $('#editInvoicePhoneNumber').val(phone_number);
    $('#editInvoiceAddress').val(address);
    $('#editInvoiceNote').val(note);
    $('#editInvoiceOrderDate').val(order_date);
    $('#editInvoiceStatus').val(status);
    $('#editInvoiceTotalMoney').val(total_money);

    // Hiển thị modal
    $('#editInvoiceModal').modal('show');
}

function openEditModal_Offer(id, name, offerimage, start_date, end_date, status, discount_percentage) {
    // Hiển thị modal và điền thông tin cần chỉnh sửa
    $('#editOfferIdValue').val(id);
    $('#editOfferName').val(name);
    $('#editOfferImage').val(offerimage);
    $('#editOfferStartDate').val(start_date);
    $('#editOfferEndDate').val(end_date);
    $('#editOfferStatus').val(status);
    $('#editOfferDiscount').val(discount_percentage);

    $('#editOfferModal').modal('show');
}



function saveChanges_WATCH() {
    // Lấy thông tin từ modal và xử lý lưu thay đổi
    // Lấy giá trị từ các ô nhập liệu trong modal
    var id = $('#editWATCHIdValue').val();
    var category_id = $('#editWATCHCategoryId').val();
    var title = $('#editWATCHTitle').val();
    var price = $('#editWATCHPrice').val();
    var quantity = $('#editWATCHQuantity').val();
    var description = $('#editWATCHDescription').val();
    var productimage = $('#editWATCHProductImage').val();
    var discount_id = $('#editWATCHDiscountId').val();

    // Tạo đối tượng chứa dữ liệu cần gửi lên server
    var data = {
        id: id,
        category_id: category_id,
        title: title,
        price: price,
        quantity: quantity,
        description: description,
        productimage: productimage,
        discount_id: discount_id
    };

    // Gọi hàm xử lý lưu thay đổi (có thể sử dụng Ajax để gửi dữ liệu đến server)
    Swal.fire({
        title: 'Bạn chắc điều chỉnh này chứ?',
        text: 'Sẽ không thể khôi phục lại đâu nhé!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'chắc chắn!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                type: 'POST',
                url: 'includes/ajax.php',
                data: { action: 'editwatch', data: data },
                dataType: 'json',
                error: function (response) {
                    Swal.fire('Lỗi!', 'Xảy ra lỗi khi xoá WATCH category.', 'error'); 
                },
                success: function (response) {
                    Swal.fire({
                        title: 'Đã điều chỉnh!',
                        text: 'WATCH trên đã được thay đổi.',
                        icon: 'success'
                    }).then(() => {
                        // Refresh trang hiện tại
                        location.reload();
                        check = 1;
                        // Xóa hàng trong bảng mà không làm mới trang
                        //$('#datatablesSimple').DataTable().row($('#row_' + id)).remove().draw();
                    });
                }
                
            });
        }
    });
    // Sau khi lưu thành công, đóng modal
    $('#editWATCHModal').modal('hide');
}

function saveWATCHCategoryChanges() {
        // Lấy thông tin từ modal và xử lý lưu thay đổi
        var id = $('#editWATCHCategoryId').val();
        var name = $('#editWATCHCategoryName').val();

        // Tạo đối tượng chứa dữ liệu cần gửi lên server
        var data = {
            id: id,
            name: name
        };

        // Gọi hàm xử lý lưu thay đổi (có thể sử dụng Ajax để gửi dữ liệu đến server)
        Swal.fire({
            title: 'Bạn chắc điều chỉnh này chứ?',
            text: 'Sẽ không thể khôi phục lại đâu nhé!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'chắc chắn!'
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    type: 'POST',
                    url: 'includes/ajax.php',
                    data: { action: 'editwatchcategory', data: data },
                    contentType: 'application/x-www-form-urlencoded; ',
                    dataType: 'json',
                    
                    error: function (response) {
                        Swal.fire('Lỗi!', 'Xảy ra lỗi khi sửa WATCH category.', 'error'); 
                    },
                    success: function (response) {
                        Swal.fire({
                            title: 'Đã điều chỉnh!',
                            text: 'Thể loại trên đã được thay đổi.',
                            icon: 'success'
                        }).then(() => {
                            // Refresh trang hiện tại
                            location.reload();
                            check = 1;
                            // Xóa hàng trong bảng mà không làm mới trang
                            //$('#datatablesSimple').DataTable().row($('#row_' + id)).remove().draw();
                        });
                    }
                    
                });
            }
        });
        // Sau khi lưu thành công, đóng modal
        $('editWATCHCategoryModal').modal('hide');
}

function saveUserChanges() {
    // Lấy giá trị từ các ô nhập liệu
    var id = $('#editUserIdValue').val();
    var fullname = $('#editUserFullname').val();
    var dayofbirth = $('#editUserDayOfBirth').val();
    var email = $('#editUserEmail').val();
    var phoneNumber = $('#editUserPhoneNumber').val();
    var address = $('#editUserAddress').val();
    var avatar = $('#editUserAvatar').val();
    var account = $('#editUserAccount').val();
    var password = $('#editUserPassword').val();
    var role_id = $('#editUserRoleid').val();

    // Tạo đối tượng chứa dữ liệu cần gửi lên server
    var data = {
        id: id,
        fullname: fullname,
        dayofbirth: dayofbirth,
        email: email,
        phoneNumber: phoneNumber,
        address: address,
        avatar: avatar,
        account: account,
        password: password,
        role_id: role_id
    };
    // Gọi hàm hoặc AJAX để lưu thay đổi vào CSDL
    Swal.fire({
        title: 'Bạn chắc điều chỉnh này chứ?',
        text: 'Sẽ không thể khôi phục lại đâu nhé!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'chắc chắn!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                type: 'POST',
                url: 'includes/ajax.php',
                data: { action: 'edituser', data: data },
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                dataType: 'json',
                
                error: function (response) {
                    Swal.fire('Lỗi!', 'Xảy ra lỗi khi sửa user.', 'error'); 
                },
                success: function (response) {
                    Swal.fire({
                        title: 'Đã điều chỉnh!',
                        text: 'User trên đã được thay đổi.',
                        icon: 'success'
                    }).then(() => {
                        // Refresh trang hiện tại
                        location.reload();
                        check = 1;
                        // Xóa hàng trong bảng mà không làm mới trang
                        //$('#datatablesSimple').DataTable().row($('#row_' + id)).remove().draw();
                    });
                }
                
            });
        }
    });

    // Đóng modal sau khi lưu thay đổi
    $('#editUserModal').modal('hide');
}

function saveInvoiceChanges() {
    // Lấy thông tin từ form chỉnh sửa
    var id = $('#editInvoiceIdValue').val();
    var user_id = $('#editInvoiceUserId').val();
    var fullname = $('#editInvoiceFullname').val();
    var email = $('#editInvoiceEmail').val();
    var phone_number = $('#editInvoicePhoneNumber').val();
    var address = $('#editInvoiceAddress').val();
    var note = $('#editInvoiceNote').val();
    var order_date = $('#editInvoiceOrderDate').val();
    var status = $('#editInvoiceStatus').val();
    var total_money = $('#editInvoiceTotalMoney').val();

    // Tạo đối tượng chứa dữ liệu cần gửi lên server
    var data = {
        id: id,
        user_id: user_id,
        fullname: fullname,
        email: email,
        phone_number: phone_number,
        address: address,
        note: note,
        order_date: order_date,
        status: status,
        total_money: total_money
    };

    // Gửi thông tin này đến server để lưu thay đổi
    Swal.fire({
        title: 'Bạn chắc điều chỉnh này chứ?',
        text: 'Sẽ không thể khôi phục lại đâu nhé!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'chắc chắn!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                type: 'POST',
                url: 'includes/ajax.php',
                data: { action: 'editinvoice', data: data },
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                dataType: 'json',
                success: function (response) {
                    Swal.fire({
                        title: 'Đã điều chỉnh!',
                        text: 'Hoá đơn đã được thay đổi.',
                        icon: 'success'
                    }).then(() => {
                        // Refresh trang hiện tại
                        location.reload();
                    });   
                }
            });
        }
    });

    // Đóng modal sau khi lưu thành công
    $('#editInvoiceModal').modal('hide');
}


function saveOfferChanges() {
    // Lấy giá trị từ các ô nhập liệu
    var id = $('#editOfferIdValue').val();
    var name = $('#editOfferName').val();
    var offerimage = $('#editOfferImage').val();
    var start_date = $('#editOfferStartDate').val();
    var end_date = $('#editOfferEndDate').val();
    var status = $('#editOfferStatus').val();
    var discount_percentage = $('#editOfferDiscount').val();
    // Tạo đối tượng chứa dữ liệu cần gửi lên server
    var data = {
        id: id,
        name: name,
        offerimage: offerimage,
        start_date: start_date,
        end_date: end_date,
        status: status,
        discount_percentage: discount_percentage
    };
    
    // Gửi các giá trị này đến server để lưu thay đổi
    // (Bổ sung phần này dựa trên cách bạn xử lý lưu thay đổi trong ứng dụng của bạn)
    Swal.fire({
        title: 'Bạn chắc điều chỉnh này chứ?',
        text: 'Sẽ không thể khôi phục lại đâu nhé!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'chắc chắn!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                type: 'POST',
                url: 'includes/ajax.php',
                data: { action: 'editoffer', data},
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                dataType: 'json',
                error: function (response) {
                    Swal.fire('Lỗi!', 'Xảy ra lỗi khi xoá WATCH category.', 'error'); 
                },
                success: function (response) {
                    Swal.fire({
                        title: 'Đã điều chỉnh!',
                        text: 'Offer trên đã được thay đổi.',
                        icon: 'success'
                    }).then(() => {
                        // Refresh trang hiện tại
                        location.reload();
                        check = 1;
                        // Xóa hàng trong bảng mà không làm mới trang
                        //$('#datatablesSimple').DataTable().row($('#row_' + id)).remove().draw();
                    });
                }
                
            });
        }
    });
    // Đóng modal sau khi lưu thay đổi
    $('#editOfferModal').modal('hide');
}

// Function to open Add WATCH modal
function openAddModal_WATCH() {
    // Reset các trường nhập liệu trong form để tránh giữ lại giá trị từ lần thêm mới trước đó
    $('#addWATCHCategoryId').val('');
    $('#addWATCHTitle').val('');
    $('#addWATCHPrice').val('');
    $('#addWATCHQuantity').val('');
    $('#addWATCHDescription').val('');
    $('#addWATCHProductImage').val('');
    $('#addWWATCHDiscountId').val('');

    // Mở modal
    $('#addWWATCHModal').modal('show');
}

function saveNewWATCH() {
    // Code to retrieve input values from the add watch modal and send them to the server
    var categoryId = $('#addWWATCHCategoryId').val();
    var title = $('#addWATCHTitle').val();
    var price = $('#addWATCHPrice').val();
    var quantity = $('#addWATCHQuantity').val();
    var description = $('#addWATCHDescription').val();
    var productImage = $('#addWATCHProductImage').val();
    var discountId = $('#addWATCHDiscountId').val();

    // Tạo đối tượng chứa dữ liệu cần gửi lên server
    var data = {
        category_id: categoryId,      // Adjusted from category_id to categoryId
        title: title,
        price: price,
        quantity: quantity,
        description: description,
        productimage: productImage,    // Adjusted from productimage to productImage
        discount_id: discountId
    };

    // You can perform validation here before sending the data to the server    
    // Gửi các giá trị này đến server để lưu thay đổi
    // (Bổ sung phần này dựa trên cách bạn xử lý lưu thay đổi trong ứng dụng của bạn)
    Swal.fire({
        title: 'Thêm WATCH mới ?',
        text: 'Bạn chắc chắn thông tin rồi chứ!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'chắc chắn!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                type: 'POST',
                url: 'includes/ajax.php',
                data: { action: 'addwatch', data},
                contentType: 'application/x-www-form-urlencoded;',
                dataType: 'json',
                error: function (response) {
                    Swal.fire('Lỗi!', 'Xảy ra lỗi khi thêm mới WATCH.', 'error'); 
                },
                success: function (response) {
                    Swal.fire({
                        title: 'Đã thêm WATCH!',
                        text: 'Thêm mới WATCH thành công.',
                        icon: 'success'
                    }).then(() => {
                        // Refresh trang hiện tại
                        location.reload();
                        check = 1;
                        // Xóa hàng trong bảng mà không làm mới trang
                        //$('#datatablesSimple').DataTable().row($('#row_' + id)).remove().draw();
                    });
                }
                
            });
        }
    });
    // Đóng modal sau khi lưu thay đổi
    $('#addWATCHModal').modal('hide');
}

function openAddModal_Category() {
    // Reset các trường nhập liệu trong form để tránh giữ lại giá trị từ lần thêm mới trước đó
    $('#addCategoryName').val('');

    // Code to open the add category modal, if necessary
    $('#addCategoryModal').modal('show');
}

function saveNewCategory() {
    // Code to retrieve input values from the add category modal and send them to the server
    var categoryName = $('#addCategoryName').val();
    var data ={
        name: categoryName 
    };
    // You can perform validation here before sending the data to the server    
    // Gửi các giá trị này đến server để lưu thay đổi
    // (Bổ sung phần này dựa trên cách bạn xử lý lưu thay đổi trong ứng dụng của bạn)
    Swal.fire({
        title: 'ThêmWATCHCategory mới ?',
        text: 'Bạn chắc chắn thông tin rồi chứ!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'chắc chắn!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                type: 'POST',
                url: 'includes/ajax.php',
                data: { action: 'addwatchcategory', data},
                contentType: 'application/x-www-form-urlencoded;',
                dataType: 'json',
                error: function (response) {
                    Swal.fire('Lỗi!', 'Xảy ra lỗi khi thêm mới WATCH.', 'error'); 
                },
                success: function (response) {
                    Swal.fire({
                        title: 'Đã thêm WATCHCategory!',
                        text: 'Thêm mới WATCHCategory thành công.',
                        icon: 'success'
                    }).then(() => {
                        // Refresh trang hiện tại
                        location.reload();
                        check = 1;
                        // Xóa hàng trong bảng mà không làm mới trang
                        //$('#datatablesSimple').DataTable().row($('#row_' + id)).remove().draw();
                    });
                }
                
            });
        }
    });
    // Đóng modal sau khi lưu thay đổi
    $('#addCategoryModal').modal('hide');
}

function openAddModal_User() {
    // Code to open the add user modal, if necessary
    $('#addUserModal').modal('show');
}

function saveNewUser() {
    // Code to retrieve input values from the add user modal and send them to the server
    var fullName = $('#addFullName').val();
    var dateOfBirth = $('#addDateOfBirth').val();
    var email = $('#addEmail').val();
    var phoneNumber = $('#addPhoneNumber').val();
    var address = $('#addAddress').val();
    var avatar = $('#addAvatar').val();
    var account = $('#addAccount').val();
    var password = $('#addPassword').val();
    var role_id = $('#addRoleId').val();

    data = {
        fullName: fullName,
        dateOfBirth: dateOfBirth,
        email: email,
        phoneNumber: phoneNumber,
        address: address,
        avatar: avatar,
        account: account,
        password: password,
        role_id: role_id
    }
    // Ajax call to send data to the server
    // Gửi các giá trị này đến server để lưu thay đổi
    // (Bổ sung phần này dựa trên cách bạn xử lý lưu thay đổi trong ứng dụng của bạn)
    Swal.fire({
        title: 'Thêm người dùng mới ?',
        text: 'Bạn chắc chắn thông tin rồi chứ!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'chắc chắn!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                type: 'POST',
                url: 'includes/ajax.php',
                data: { action: 'adduser', data},
                contentType: 'application/x-www-form-urlencoded;',
                dataType: 'json',
                error: function (response) {
                    Swal.fire('Lỗi!', 'Xảy ra lỗi khi thêm mới User.', 'error'); 
                },
                success: function (response) {
                    Swal.fire({
                        title: 'Đã thêm người dùng mới!',
                        text: 'Thêm mới User thành công.',
                        icon: 'success'
                    }).then(() => {
                        // Refresh trang hiện tại
                        location.reload();
                        check = 1;
                        // Xóa hàng trong bảng mà không làm mới trang
                        //$('#datatablesSimple').DataTable().row($('#row_' + id)).remove().draw();
                    });
                }
                
            });
        }
    });
    // Đóng modal sau khi lưu thay đổi
    $('#addUserModal').modal('hide');   
}

function openCreateInvoiceModal() {
    // Code to open the create invoice modal, if necessary
    $('#createInvoiceModal').modal('show');
}


function openDetailInvoiceModal(invoice_id) {
    // Set giá trị của invoice_id vào input ẩn trong modal
    $('#detailInvoiceIdValue').val(invoice_id);

    // Hiển thị modal
    $('#detailInvoiceModal').modal('show');

    // Gọi hàm để load chi tiết hóa đơn dựa trên invoice_id
    loadDetailInvoice(invoice_id);
}

function loadDetailInvoice(invoice_id) {
    // Gửi request Ajax để lấy chi tiết hóa đơn từ server
    $.ajax({
        type: 'GET',
        url: 'includes/get_invoice_detail.php',
        data: { invoice_id: invoice_id },
        success: function(response) {
            // Xử lý kết quả trả về từ server và cập nhật nội dung bảng chi tiết hóa đơn
            $('#detailInvoiceTable tbody').html(response);
        },
        error: function(error) {
            console.error('Error: ' + error);
        }
    });
}
function addToCart(productId) {
    var quantity = document.getElementById('quantity').value;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Xử lý kết quả trả về (ví dụ: cập nhật số lượng sản phẩm trong giỏ hàng)
            var result = xhr.responseText;
            alert(result); // Hiển thị thông báo (có thể thay đổi theo ý của bạn)
        }
    };
    xhr.open('GET', 'add_to_cart.php?productId=' + productId + '&quantity=' + quantity, true);
    xhr.send();
}
function saveNewInvoice() {
    // Code to retrieve input values from the create invoice modal and send them to the server
    var userId = $('#createInvoiceUserId').val();
    var fullName = $('#createInvoiceFullName').val();
    var email = $('#createInvoiceEmail').val();
    var phoneNumber = $('#createInvoicePhoneNumber').val();
    var address = $('#createInvoiceAddress').val();
    var note = $('#createInvoiceNote').val();
    var orderDate = $('#createInvoiceOrderDate').val();
    var status = $('#createInvoiceStatus').val();
    var totalMoney = $('#createInvoiceTotalMoney').val();

    var data = {
        userId: userId,
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        address: address,
        note: note,
        orderDate: orderDate,
        status: status,
        totalMoney: totalMoney
    };
    
    // Ajax call to send data to the server
    // Gửi các giá trị này đến server để lưu thay đổi
    // (Bổ sung phần này dựa trên cách bạn xử lý lưu thay đổi trong ứng dụng của bạn)
    Swal.fire({
        title: 'Thêm WATCH Invoice mới ?',
        text: 'Bạn chắc chắn thông tin rồi chứ!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'chắc chắn!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                type: 'POST',
                url: 'includes/ajax.php',
                data: { action: 'addinvoice', data},
                contentType: 'application/x-www-form-urlencoded;',
                dataType: 'json',
                error: function (response) {
                    Swal.fire('Lỗi!', 'Xảy ra lỗi khi thêm mới Invoice.', 'error'); 
                },
                success: function (response) {
                    Swal.fire({
                        title: 'Đã thêm WATCHInvoice!',
                        text: 'Thêm mới WATCHInvoice thành công.',
                        icon: 'success'
                    }).then(() => {
                        // Refresh trang hiện tại
                        location.reload();
                        check = 1;
                        // Xóa hàng trong bảng mà không làm mới trang
                        //$('#datatablesSimple').DataTable().row($('#row_' + id)).remove().draw();
                    });
                }
                
            });
        }
    });

    $('#createInvoiceModal').modal('hide');
}

function openCreateOfferModal() {
    // Code to open the create offer modal, if necessary
    $('#createOfferModal').modal('show');
}

function saveNewOffer() {
    // Code to retrieve input values from the create offer modal and send them to the server
    var name = $('#createOfferName').val();
    var offerImage = $('#createOfferImage').val();
    var startDate = $('#createOfferStartDate').val();
    var endDate = $('#createOfferEndDate').val();
    var status = $('#addOfferStatus').val();
    var discountPercentage = $('#createOfferDiscountPercentage').val();

    var data = {
        name: name,
        offerImage: offerImage,
        startDate: startDate,
        endDate: endDate,
        status: status,
        discountPercentage: discountPercentage
    };
    
    /// Ajax call to send data to the server
    // Gửi các giá trị này đến server để lưu thay đổi
    // (Bổ sung phần này dựa trên cách bạn xử lý lưu thay đổi trong ứng dụng của bạn)
    Swal.fire({
        title: 'Thêm WATCH Offer mới ?',
        text: 'Bạn chắc chắn thông tin rồi chứ!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'chắc chắn!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                type: 'POST',
                url: 'includes/ajax.php',
                data: { action: 'addoffer', data},
                contentType: 'application/x-www-form-urlencoded;',
                dataType: 'json',
                error: function (response) {
                    Swal.fire('Lỗi!', 'Xảy ra lỗi khi thêm mới Offer.', 'error'); 
                },
                success: function (response) {
                    Swal.fire({
                        title: 'Đã thêm Offer!',
                        text: 'Thêm mới Offer thành công.',
                        icon: 'success'
                    }).then(() => {
                        // Refresh trang hiện tại
                        location.reload();
                        check = 1;
                        // Xóa hàng trong bảng mà không làm mới trang
                        //$('#datatablesSimple').DataTable().row($('#row_' + id)).remove().draw();
                    });
                }
                
            });
        }
    });

    $('#createOfferModal').modal('hide');
}
