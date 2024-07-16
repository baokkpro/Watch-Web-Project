<?php
require('includes/header.php');
require('includes/navbar.php');
require('includes/sidebar.php');
require_once('database/dbhelper.php'); // Import dbhelper.php

// Step 1: Viết truy vấn SQL
$sql = "SELECT * FROM WATCHCategory";

// Step 2: Thực hiện truy vấn và nhận kết quả
$watchList = execute_result($sql);
?>
    <main>
        <div class="container-fluid px-4">
            <h1 class="mt-4">Tables WATCH Category</h1>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                <li class="breadcrumb-item active">Tables</li>
            </ol>
            <!-- DATABASE TABLE START HERE BITCH -->
            <div class="card mb-4">
                <div class="card-header">
                    <i class="fas fa-table me-1"></i>
                    DataTable Example
                    <button type='button' class='btn btn-success btn-sm' onclick='openAddModal_Category();'>Create Category</button>
                </div>
                <div class="card-body">
                    <table id="datatablesSimple">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>   
                                <th>Feature</th>                          
                            <!-- Thêm các cột khác tùy thuộc vào cần hiển thị -->
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>ID</th>
                                <th>Name</th> 
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
                            echo "<td>{$watch['name']}</td>";
                            echo "<td>
                                    <button type='button' class='btn btn-warning btn-sm' data-id='{$watch['id']}' data-name='{$watch['name']}' 
                                        onclick='openEditModal_WATCHCategory(
                                            {$watch['id']},
                                            \"{$watch['name']}\");
                                        '>
                                        Edit
                                    </button>
                                    <button type='button' class='btn btn-danger btn-sm' data-id='{$watch['id']}' data-name='{$watch['name']}' onclick='feature_delete({$watch['id']},2);'>Delete</button>
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
        <!-- Thêm modal -->
        <!-- Modal và Form Chỉnh sửa -->
        <div class="modal fade" id="editWATCHCategoryModal" tabindex="-1" aria-labelledby="editWATCHCategoryModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editWATCHCategoryModalLabel">Chỉnh sửa WATCHCategory</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <!-- Form chỉnh sửa -->
                        <form id="editWATCHCategoryForm">
                            <div class="mb-3">
                                <label for="editWATCHCategoryId" class="form-label">ID</label>
                                <input type="text" class="form-control" id="editWATCHCategoryId" name="editWATCHCategoryId" readonly>
                            </div>
                            <div class="mb-3">
                                <label for="editWATCHCategoryName" class="form-label">Tên WATCHCategory</label>
                                <input type="text" class="form-control" id="editWATCHCategoryName" name="editWATCHCategoryName" required>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onclick="saveWATCHCategoryChanges()">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal for Add Category -->
        <div class="modal fade" id="addCategoryModal" tabindex="-1" aria-labelledby="addCategoryModalLabel" aria-hidden="true">
            <div class="modal-dialog" style="margin-top: 200px;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addCategoryModalLabel">Add New Category</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <!-- Form for Add Category -->
                        <form id="addCategoryForm">
                            <div class="mb-3">
                                <label for="addCategoryName" class="form-label">Category Name</label>
                                <input type="text" class="form-control" id="addCategoryName" placeholder="Enter Category Name">
                            </div>
                            <!-- Add any additional fields for the category if needed -->

                            <button type="button" class="btn btn-primary" onclick="saveNewCategory()">Save Category</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
<?php
require('includes/footer.php');
?> 

