-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 28, 2024 lúc 07:19 PM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `watchweb`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `invoice`
--

CREATE TABLE `invoice` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `fullname` varchar(50) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `note` varchar(1000) DEFAULT NULL,
  `order_date` datetime DEFAULT NULL,
  `status` varchar(200) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `total_money` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `invoice`
--

INSERT INTO `invoice` (`id`, `user_id`, `fullname`, `email`, `phone_number`, `address`, `note`, `order_date`, `status`, `discount`, `total_money`) VALUES
(1, 3, 'Trần Thị B', 'tranthi.b@example.com', '0923456789', '456 Trần Hưng Đạo, Quận 5, TP.HCM', 'Special instructions', '2024-01-09 12:26:56', 'CHỜ XỬ LÝ', 0, 76),
(2, 1, 'John Doe', 'john.doe@example.com', '1234567890', '123 Main St', 'Special instructions', '2024-02-09 12:26:56', 'CHỜ XỬ LÝ', 0, 31),
(3, 1, 'John Doe', 'john.doe@example.com', '1234567890', '123 Main St', 'Special instructions', '2024-03-09 12:26:56', 'CHỜ XỬ LÝ', 0, 23),
(4, 2, 'Nguyễn Văn A', 'nguyenvan.a@example.com', '0912345678', '123 Nguyễn Văn Trỗi, Quận 1, TP.HCM', 'Special instructions', '2024-04-09 12:26:56', 'CHỜ XỬ LÝ', 0, 76),
(5, 3, 'Trần Thị B', 'tranthi.b@example.com', '0923456789', '456 Trần Hưng Đạo, Quận 5, TP.HCM', 'Special instructions', '2024-04-10 12:26:56', 'CHỜ XỬ LÝ', 0, 76);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `invoice_detail`
--

CREATE TABLE `invoice_detail` (
  `id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  `total_money` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `invoice_detail`
--

INSERT INTO `invoice_detail` (`id`, `order_id`, `product_id`, `price`, `num`, `total_money`) VALUES
(1, 1, 6, 25, 1, 18.75),
(2, 1, 7, 20, 1, 14),
(3, 1, 8, 18, 1, 9),
(4, 1, 9, 22, 1, 19.8),
(5, 1, 10, 15, 2, 27),
(6, 2, 1, 15, 2, 23),
(7, 2, 2, 12, 1, 8),
(8, 3, 1, 15, 2, 23),
(9, 4, 6, 25, 1, 18.75),
(10, 4, 7, 20, 1, 14),
(11, 4, 8, 18, 1, 9),
(12, 4, 9, 22, 1, 19.8),
(13, 4, 10, 15, 2, 27),
(14, 5, 6, 25, 1, 18.75),
(15, 5, 7, 20, 1, 14),
(16, 5, 8, 18, 1, 9),
(17, 5, 9, 22, 1, 19.8),
(18, 5, 10, 15, 2, 27);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `offer`
--

CREATE TABLE `offer` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `offerimage` varchar(255) DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `code` varchar(50) DEFAULT NULL,
  `discount_percentage` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `offer`
--

INSERT INTO `offer` (`id`, `name`, `offerimage`, `start_date`, `end_date`, `status`, `code`, `discount_percentage`) VALUES
(1, 'Khuyến mãi Giáng Sinh - Mùa Xanh', 'database/offerimage/offerimage_1.png', '2023-12-20 00:00:00', '2024-01-05 00:00:00', 'Active', 'OFFER001', 25),
(2, 'Tuần lễ Công Nghệ - Nâng Cấp Cuộc Sống', 'database/offerimage/offerimage_2.png', '2023-12-27 00:00:00', '2024-01-02 00:00:00', 'Active', 'OFFER002', 30),
(3, 'Flash Sale 5 Giờ Vàng', 'database/offerimage/offerimage_3.png', '2023-12-26 00:00:00', '2023-12-30 00:00:00', 'Active', 'OFFER003', 50),
(4, 'Hỗ trợ Phí Ship - Giao Hàng Yêu Thương', 'database/offerimage/offerimage_4.png', '2023-12-18 00:00:00', '2023-12-31 00:00:00', 'Active', 'OFFER004', 10),
(5, 'Đố vui Giáng Sinh - Rộn Ràng Quà Tặng', 'database/offerimage/offerimage_5.png', '2023-12-22 00:00:00', '2023-12-25 00:00:00', 'Active', 'OFFER005', 10);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `fullname` varchar(50) DEFAULT NULL,
  `dayofbirth` date DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `PhoneNumber` varchar(20) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `avartar` varchar(255) DEFAULT NULL,
  `account` varchar(50) DEFAULT NULL,
  `password` varchar(32) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `fullname`, `dayofbirth`, `email`, `PhoneNumber`, `address`, `avartar`, `account`, `password`, `role_id`, `created_at`, `updated_at`) VALUES
(1, 'John Doe', '1990-01-15', 'john.doe@example.com', '1234567890', '123 Main St', 'database/avaimage/ava_1.png', 'john_doe', '123123', 2, '2024-04-09 12:26:56', '2024-04-09 12:26:56'),
(2, 'Nguyễn Văn A', '1995-02-20', 'nguyenvan.a@example.com', '0912345678', '123 Nguyễn Văn Trỗi, Quận 1, TP.HCM', 'database/avaimage/ava_2.png', 'nguyenvan.a', '123123', 2, '2024-04-09 12:26:56', '2024-04-09 12:26:56'),
(3, 'Trần Thị B', '1996-03-21', 'tranthi.b@example.com', '0923456789', '456 Trần Hưng Đạo, Quận 5, TP.HCM', 'database/avaimage/ava_3.png', 'tranthi.b', '123123', 2, '2024-04-09 12:26:56', '2024-04-09 12:26:56'),
(4, 'Lê Quang C', '1997-04-22', 'lequang.c@example.com', '0934567890', '789 Lê Duẩn, Quận 10, TP.HCM', 'database/avaimage/ava_4.png', 'lequang.c', '123123', 2, '2024-04-09 12:26:56', '2024-04-09 12:26:56'),
(5, 'Đặng Thị D', '1998-05-23', 'dangthi.d@example.com', '0945678901', '1011 Nguyễn Thị Minh Khai, Quận 3, TP.HCM', 'database/avaimage/ava_5.png', 'dangthi.d', '123123', 2, '2024-04-09 12:26:56', '2024-04-09 12:26:56'),
(6, 'Triết', '1999-06-01', 'triet@example.com', '0956789012', '123 ABC St', 'database/avaimage/ava_6.png', 'triet', '123123', 1, '2024-04-09 12:26:56', '2024-04-09 12:26:56'),
(7, 'Đạt', '2000-07-02', 'dat@example.com', '0967890123', '456 XYZ St', 'database/avaimage/ava_7.png', 'dat', '123123', 1, '2024-04-09 12:26:56', '2024-04-09 12:26:56'),
(8, 'Đăng', '2001-08-03', 'dang@example.com', '0978901234', '789 QWE St', 'database/avaimage/ava_8.png', 'dang', '123123', 1, '2024-04-09 12:26:56', '2024-04-09 12:26:56'),
(9, 'Quân', '2002-09-04', 'quan@example.com', '0989012345', '101 DEF St', 'database/avaimage/ava_9.png', 'quan', '123123', 1, '2024-04-09 12:26:56', '2024-04-09 12:26:56'),
(10, 'Kha Banh', '2003-02-08', 'abc@example.com', '010203', 'abcd', NULL, 'khabanh1', '123', 2, NULL, NULL),
(11, 'Hai Dang', '2003-02-08', 'abc123@example.com', '0869163903', 'abcd', NULL, 'haidang', '123', 2, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_cart`
--

CREATE TABLE `user_cart` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `dvd_id` int(11) DEFAULT NULL,
  `dvd_title` varchar(250) DEFAULT NULL,
  `dvd_price` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `productimage` varchar(250) DEFAULT NULL,
  `order_total` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_role`
--

CREATE TABLE `user_role` (
  `id` int(11) NOT NULL,
  `Role_type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `user_role`
--

INSERT INTO `user_role` (`id`, `Role_type`) VALUES
(1, 'Admin'),
(2, 'Customer'),
(3, 'Employee');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `watch`
--

CREATE TABLE `watch` (
  `id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `title` varchar(250) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `Quantity` int(11) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `productimage` varchar(255) DEFAULT NULL,
  `discount_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `watch`
--

INSERT INTO `watch` (`id`, `category_id`, `title`, `price`, `Quantity`, `description`, `productimage`, `discount_id`, `created_at`, `updated_at`) VALUES
(1, 1, 'Casio 43mm Nữ GMA-S2100-4ADR', 25, 9, 'đồng hồ rẻ và đẹp', 'database/productimage/111.jpg', 1, '2024-04-09 12:26:56', '2024-04-09 12:26:56'),
(2, 1, 'Casio 46mm Nữ GMA-S120MF-4ADR', 20, 8, 'Đồng hồ casio nữ hồng', 'database\\productimage\\2.jpg', 2, '2024-04-09 12:26:56', '2024-04-09 12:26:56'),
(3, 1, 'Casio 45.7mm Nữ GMA-S2200M', 18, 7, 'Casio nữ chống trầy', 'database/productimage/3.jpg', 3, '2024-04-09 12:26:56', '2024-04-09 12:26:56'),
(4, 1, 'Casio 38.5mm Nữ GM-S5600PG', 22, 6, 'Đồng hồ nữ casio hồng', 'database/productimage/4.jpg', 4, '2024-04-09 12:26:56', '2024-04-09 12:26:56'),
(5, 1, 'Casio 38.5mm Nữ GM-S5600G', 15, 5, 'Đồng hồ điện tử nữ', 'database/productimage/5.jpg', 5, '2024-04-09 12:26:56', '2024-04-09 12:26:56'),
(6, 2, 'Casio 38.5mm Nữ GM-S5600PG', 25, 8, 'Đồng hồ casio nữ mặt trơn', 'database/productimage/6.jpg', 1, '2024-04-09 12:26:56', '2024-04-09 12:26:56'),
(7, 2, 'Casio 45.7mm Nữ GMA-S2200M', 20, 7, 'Đồng hồ casio nữ trắng', 'database/productimage/7.jpg', 2, '2024-04-09 12:26:56', '2024-04-09 12:26:56'),
(8, 2, 'Casio 45.7mm Nữ GMA-S2200M', 18, 6, 'Đồng hồ đẹp.', 'database/productimage/8.jpg', 3, '2024-04-09 12:26:56', '2024-04-09 12:26:56'),
(9, 2, 'Casio 38.5mm Nữ GM-S5600PG', 22, 5, 'Đồng hồ siêu rẻ', 'database/productimage/9.jpg', 4, '2024-04-09 12:26:56', '2024-04-09 12:26:56'),
(10, 2, 'Casio 38.5mm Nữ GM-S5600G', 15, 4, 'Đồng hồ nữ nhỏ gọn', 'database/productimage/10.jpg', 5, '2024-04-09 12:26:56', '2024-04-09 12:26:56'),
(11, 3, 'Casio 38.5mm Nữ GM-S5600PG', 25, 7, 'Đồng hồ nữ xịn', 'database/productimage/11.jpg', 1, '2024-04-09 12:26:56', '2024-04-09 12:26:56'),
(12, 3, 'Casio 45.4mm Nam GA-2100', 20, 6, 'Đồng hồ nam mạnh mẽ', 'database/productimage/12.jpg', 2, '2024-04-09 12:26:56', '2024-04-09 12:26:56'),
(13, 3, 'Casio 45.4mm Nam GA-2100', 18, 5, 'Đồng hồ nam hiện đại', 'database/productimage/13.jpg', 3, '2024-04-09 12:26:56', '2024-04-09 12:26:56'),
(14, 3, 'Casio 43mm Nam DW-5600BB', 22, 4, 'A harrowing and realistic depiction of the Iraq War.', 'database/productimage/14.jpg', 4, '2024-04-09 12:26:56', '2024-04-09 12:26:56'),
(15, 3, 'Casio 49.5mm Nam GA-900C', 15, 3, 'Đồng hồ nam giá rẻ', 'database/productimage/15.jpg', 5, '2024-04-09 12:26:56', '2024-04-09 12:26:56'),
(16, 4, 'Casio 51mm Nam GA-110GB', 25, 6, 'A mind-bending science fiction thriller that explores the nature of reality.', 'database/productimage/16.jpg', 1, '2024-04-09 12:26:56', '2024-04-09 12:26:56'),
(17, 4, 'Casio 45.4mm Nam GA-2100', 20, 5, 'Đồng hồ đỏ', 'database/productimage/17.jpg', 2, '2024-04-09 12:26:56', '2024-04-09 12:26:56'),
(18, 4, 'Casio Nam GA-2000S', 18, 4, 'Đồng hồ nâu', 'database/productimage/18.jpg', 3, '2024-04-09 12:26:56', '2024-04-09 12:26:56'),
(19, 4, 'Casio 46mm Nam GBX-100', 22, 3, 'Đồng hồ nam xịn', 'database/productimage/19.jpg', 4, '2024-04-09 12:26:56', '2024-04-09 12:26:56'),
(20, 4, 'Casio 49.5mm Nam GA-900', 15, 2, 'Đồng hồ xinh', 'database/productimage/20.jpg', 5, '2024-04-09 12:26:56', '2024-04-09 12:26:56'),
(21, 5, 'Casio 47mm Nam GA-2200M', 25, 8, 'Đồng hồ nam đẹp.', 'database/productimage/21.jpg', 1, '2024-04-09 12:26:56', '2024-04-09 12:26:56'),
(22, 5, 'Casio 45.4mm Nam GA-2100', 20, 7, 'Casio nam đẹp', 'database/productimage/22.jpg', 2, '2024-04-09 12:26:56', '2024-04-09 12:26:56'),
(23, 5, 'Casio 45.4mm Nam GA-2100VB', 18, 6, 'Đồng hồ cao cấp nam', 'database/productimage/23.jpg', 3, '2024-04-09 12:26:56', '2024-04-09 12:26:56'),
(24, 5, 'Casio 46mm Nam GBD-200SM', 22, 5, 'đồng hồ nam đẹp', 'database/productimage/24.jpg', 4, '2024-04-09 12:26:56', '2024-04-09 12:26:56'),
(25, 5, 'Casio 53.8mm Nam GST-B100', 15, 4, 'Đồng hồ nam đẹp', 'database/productimage/25.jpg', 5, '2024-04-09 12:26:56', '2024-04-09 12:26:56');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `watchcategory`
--

CREATE TABLE `watchcategory` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `watchcategory`
--

INSERT INTO `watchcategory` (`id`, `name`) VALUES
(1, 'Casio thể thao nữ X1'),
(2, 'Casio G-shock nữ '),
(3, 'Casio thể thao X2'),
(4, 'Casio thể thao nam Z23'),
(5, 'Casio g-shock nam z14');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Chỉ mục cho bảng `invoice_detail`
--
ALTER TABLE `invoice_detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `order_id` (`order_id`);

--
-- Chỉ mục cho bảng `offer`
--
ALTER TABLE `offer`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_id` (`role_id`);

--
-- Chỉ mục cho bảng `user_cart`
--
ALTER TABLE `user_cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `dvd_id` (`dvd_id`);

--
-- Chỉ mục cho bảng `user_role`
--
ALTER TABLE `user_role`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `watch`
--
ALTER TABLE `watch`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `discount_id` (`discount_id`);

--
-- Chỉ mục cho bảng `watchcategory`
--
ALTER TABLE `watchcategory`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `invoice`
--
ALTER TABLE `invoice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `invoice_detail`
--
ALTER TABLE `invoice_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT cho bảng `offer`
--
ALTER TABLE `offer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `user_cart`
--
ALTER TABLE `user_cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `user_role`
--
ALTER TABLE `user_role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `watch`
--
ALTER TABLE `watch`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=116;

--
-- AUTO_INCREMENT cho bảng `watchcategory`
--
ALTER TABLE `watchcategory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `invoice`
--
ALTER TABLE `invoice`
  ADD CONSTRAINT `invoice_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Các ràng buộc cho bảng `invoice_detail`
--
ALTER TABLE `invoice_detail`
  ADD CONSTRAINT `invoice_detail_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `watch` (`id`),
  ADD CONSTRAINT `invoice_detail_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `invoice` (`id`);

--
-- Các ràng buộc cho bảng `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `user_role` (`id`);

--
-- Các ràng buộc cho bảng `user_cart`
--
ALTER TABLE `user_cart`
  ADD CONSTRAINT `user_cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `user_cart_ibfk_2` FOREIGN KEY (`dvd_id`) REFERENCES `watch` (`id`);

--
-- Các ràng buộc cho bảng `watch`
--
ALTER TABLE `watch`
  ADD CONSTRAINT `watch_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `watchcategory` (`id`),
  ADD CONSTRAINT `watch_ibfk_2` FOREIGN KEY (`discount_id`) REFERENCES `offer` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
