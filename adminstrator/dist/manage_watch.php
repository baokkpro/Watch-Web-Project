<?php
require('includes/header.php');
require('includes/navbar.php');
require('includes/sidebar.php');
require_once('database/dbhelper.php'); // Import dbhelper.php

// Step 1: Viết truy vấn SQL
$sql = "SELECT * FROM WATCH  WHERE id BETWEEN 1 AND 20";

// Step 2: Thực hiện truy vấn và nhận kết quả
$watchList = execute_result($sql);

?>
    <main> 
        <div class="container-fluid px-4">
            <h1 class="mt-4">Tables WATCH</h1>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                <li class="breadcrumb-item active">Tables</li>
            </ol>
            <!-- DATABASE TABLE START HERE BITCH -->
            <div class="card mb-4">
                <div class="card-header">
                    <i class="fas fa-table me-1"></i>
                    DataTable Example
                    <button type='button' class='btn btn-success btn-sm' onclick='openAddModal_WATCH();'>Create WATCH</button>
                </div>
                <div class="card-body">
                    <table id="datatablesSimple">
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Category ID</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Description</th>
                            <th>Product Image</th>
                            <th>Discount ID</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                            <th>Feature</th>
                            <!-- Thêm các cột khác tùy thuộc vào cần hiển thị -->
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                            <th>ID</th>
                            <th>Category ID</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Description</th>
                            <th>Product Image</th>
                            <th>Discount ID</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                            <th>Feature</th>
                            <!-- Thêm các cột khác tùy thuộc vào cần hiển thị -->
                            </tr>
                        </tfoot>
                        <tbody>
                        <?php
                        // Step 3: Lặp qua kết quả và hiển thị trong bảng
                        foreach ($watchList as $watch) {
                            echo "<tr>";
                            echo "<td>{$watch['id']}</td>";
                            echo "<td>{$watch['category_id']}</td>";
                            echo "<td>{$watch['title']}</td>";
                            echo "<td>{$watch['price']}</td>";
                            echo "<td>{$watch['Quantity']}</td>";
                            echo "<td>{$watch['description']}</td>";
                            echo "<td>{$watch['productimage']}
                                <img src='{$watch['productimage']}' alt='Product Image' style='width: 200px; height: 200px;'</td>";
                            echo "<td>{$watch['discount_id']}</td>";
                            echo "<td>{$watch['created_at']}</td>";
                            echo "<td>{$watch['updated_at']}</td>";
                            echo "<td>
                                    <button type='button' class='btn btn-warning btn-sm' data-bs-toggle='modal' data-bs-target='#editWATCHModal' 
                                        onclick='openEditModal_WATCH({$watch['id']}, 
                                                                    {$watch['category_id']}, 
                                                                    \"{$watch['title']}\", 
                                                                    {$watch['price']}, 
                                                                    {$watch['Quantity']}, 
                                                                    \"{$watch['description']}\", 
                                                                    \"{$watch['productimage']}\",
                                                                    {$watch['discount_id']})'>
                                    Edit
                                    </button>                    
                                    <button type='button' class='btn btn-danger btn-sm' onclick='feature_delete({$watch['id']},1)'>Delete</button>
                                </td>";
                            // Thêm các cột khác tùy thuộc vào cần hiển thị
                            echo "</tr>";
                        }
                        ?>
                    </tbody>
                    </table>
                </div>
            </div>
            <!-- DATABASE TABLE END HERE BITCH -->
        </div>
        <!-- Thêm modal edit -->
        <div class="modal fade" id="editWATCHModal" tabindex="-1" aria-labelledby="editWATCHModalLabel" aria-hidden="true">
            <div class="modal-dialog" style="margin-top: 50px;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editWATCHModalLabel">Edit WATCH</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <!-- Thêm các trường chỉnh sửa thông tin vào đây -->
                        <form id="editWATCHForm">
                            <div class="mb-3">
                                <label for="editWATCHId" class="form-label">ID</label>
                                <input  type="text" class="form-control" id="editWATCHIdValue" readonly>
                            </div>
                            <div class="mb-3">
                                <label for="editWATCHCategoryId" class="form-label">Category ID</label>
                                <!-- Thêm ô nhập liệu cho Category ID -->
                                <input type="number" class="form-control" id="editWATCHCategoryId" name="editWATCHCategoryId">
                            </div>
                            <div class="mb-3">
                                <label for="editWATCHTitle" class="form-label">Title</label>
                                <input type="text" class="form-control" id="editWATCHTitle" name="editWATCHTitle">
                            </div>
                            <div class="mb-3">
                                <label for="editWATCHPrice" class="form-label">Price</label>
                                <input type="number" class="form-control" id="editWATCHPrice" name="editWATCHPrice">
                            </div>
                            <div class="mb-3">
                                <label for="editWATCHQuantity" class="form-label">Quantity</label>
                                <input type="number" class="form-control" id="editWATCHQuantity" name="editWATCHQuantity">
                            </div>
                            <div class="mb-3">
                                <label for="editWATCHDescription" class="form-label">Description</label>
                                <textarea class="form-control" id="editWATCHDescription" name="editWATCHDescription"></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="editWATCHProductImage" class="form-label">Product Image</label>
                                <input type="text" class="form-control" id="editWATCHProductImage" name="editWATCHProductImage">
                            </div>
                            <div class="mb-3">
                                <label for="editWATCHDiscountId" class="form-label">Discount ID</label>
                                <input type="number" class="form-control" id="editWATCHDiscountId" name="editWATCHDiscountId">
                            </div>
                            <!-- Thêm các trường khác nếu cần -->
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onclick="saveChanges_WATCH()">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
                    
        <!-- Modal for Add WATCH -->
        <div class="modal fade" id="addWATCHModal" tabindex="-1" aria-labelledby="addWATCHModalLabel" aria-hidden="true">
            <div class="modal-dialog " style="margin-top: 50px;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addWATCHModalLabel">Add New WATCH</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <!-- Form for Add WATCH -->
                        <form id="addWATCHForm">
                            <div class="mb-3">
                                <label for="addWATCHCategoryId" class="form-label">Category ID</label>
                                <input type="text" class="form-control" id="addWATCHCategoryId" placeholder="Enter Category ID">
                            </div>
                            <div class="mb-3">
                                <label for="addWATCHTitle" class="form-label">Title</label>
                                <input type="text" class="form-control" id="addWATCHTitle" placeholder="Enter Title">
                            </div>
                            <div class="mb-3">
                                <label for="addWATCHPrice" class="form-label">Price</label>
                                <input type="number" class="form-control" id="addWATCHPrice" placeholder="Enter Price">
                            </div>
                            <div class="mb-3">
                                <label for="addWATCHQuantity" class="form-label">Quantity</label>
                                <input type="number" class="form-control" id="addWATCHQuantity" placeholder="Enter Quantity">
                            </div>
                            <div class="mb-3">
                                <label for="addWATCHDescription" class="form-label">Description</label>
                                <textarea class="form-control" id="addWATCHDescription" rows="3" placeholder="Enter Description"></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="addWATCHProductImage" class="form-label">Product Image</label>
                                <input type="text" class="form-control" id="addWATCHProductImage" placeholder="Enter Product Image URL">
                            </div>
                            <div class="mb-3">
                                <label for="addWATCHDiscountId" class="form-label">Discount ID</label>
                                <input type="number" class="form-control" id="addWATCHDiscountId" placeholder="Enter Discount ID">
                            </div>
                            <button type="button" class="btn btn-primary" onclick="saveNewWATCH()">Save WATCH</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
<?php require('includes/footer.php'); ?> 

