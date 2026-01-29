// ============================================================
// BÀI TẬP JAVASCRIPT - PRODUCT OBJECT
// ============================================================

// ============================================================
// CÂU 1: Khai báo constructor function Product để tạo đối tượng sản phẩm
// ============================================================
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;                   // mã sản phẩm
    this.name = name;               // tên sản phẩm
    this.price = price;             // giá sản phẩm
    this.quantity = quantity;       // số lượng tồn kho
    this.category = category;       // danh mục sản phẩm
    this.isAvailable = isAvailable; // trạng thái bán (true / false)
}

console.log("=== CÂU 1: Constructor Function Product ===");
console.log("Đã tạo constructor function Product thành công!");
console.log(Product.toString());
console.log("");

// ============================================================
// CÂU 2: Khởi tạo mảng products gồm ít nhất 6 sản phẩm, thuộc tối thiểu 2 danh mục khác nhau
// ============================================================
const products = [
    new Product(1, "iPhone 15 Pro Max", 34990000, 25, "Electronics", true),
    new Product(2, "Samsung Galaxy S24", 27990000, 15, "Electronics", true),
    new Product(3, "MacBook Air M3", 32990000, 10, "Electronics", true),
    new Product(4, "Tai nghe AirPods Pro", 6990000, 50, "Accessories", true),
    new Product(5, "Ốp lưng iPhone", 299000, 100, "Accessories", true),
    new Product(6, "Cáp sạc Type-C", 199000, 0, "Accessories", false),
    new Product(7, "Bàn phím cơ Logitech", 2990000, 30, "Accessories", true),
    new Product(8, "Chuột gaming Razer", 1590000, 0, "Accessories", false)
];

console.log("=== CÂU 2: Mảng Products (6+ sản phẩm, 2+ danh mục) ===");
console.log("Danh sách sản phẩm:");
products.forEach((product, index) => {
    console.log(`${index + 1}. ${product.name} - ${product.category} - ${product.price.toLocaleString('vi-VN')}đ`);
});
console.log("");

// ============================================================
// CÂU 3: Tạo mảng mới chỉ chứa name, price của mỗi sản phẩm
// ============================================================
const productNameAndPrice = products.map(product => ({
    name: product.name,
    price: product.price
}));

console.log("=== CÂU 3: Mảng chỉ chứa name và price ===");
console.log(productNameAndPrice);
console.log("");

// ============================================================
// CÂU 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0)
// ============================================================
const productsInStock = products.filter(product => product.quantity > 0);

console.log("=== CÂU 4: Sản phẩm còn hàng trong kho (quantity > 0) ===");
productsInStock.forEach(product => {
    console.log(`- ${product.name}: ${product.quantity} sản phẩm`);
});
console.log("");

// ============================================================
// CÂU 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30.000.000 hay không
// ============================================================
const hasExpensiveProduct = products.some(product => product.price > 30000000);

console.log("=== CÂU 5: Kiểm tra có sản phẩm giá > 30.000.000 ===");
console.log(`Có sản phẩm giá trên 30.000.000đ: ${hasExpensiveProduct ? "CÓ ✓" : "KHÔNG ✗"}`);
if (hasExpensiveProduct) {
    const expensiveProducts = products.filter(p => p.price > 30000000);
    console.log("Các sản phẩm có giá > 30.000.000đ:");
    expensiveProducts.forEach(p => console.log(`  - ${p.name}: ${p.price.toLocaleString('vi-VN')}đ`));
}
console.log("");

// ============================================================
// CÂU 6: Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có đang được bán (isAvailable = true) hay không
// ============================================================
const accessoriesProducts = products.filter(product => product.category === "Accessories");
const allAccessoriesAvailable = accessoriesProducts.every(product => product.isAvailable === true);

console.log("=== CÂU 6: Kiểm tra tất cả Accessories có isAvailable = true ===");
console.log("Danh sách sản phẩm Accessories:");
accessoriesProducts.forEach(p => {
    console.log(`  - ${p.name}: isAvailable = ${p.isAvailable}`);
});
console.log(`Tất cả Accessories đều đang bán: ${allAccessoriesAvailable ? "CÓ ✓" : "KHÔNG ✗"}`);
console.log("");

// ============================================================
// CÂU 7: Tính tổng giá trị kho hàng. Giá trị kho = price × quantity
// ============================================================
const totalInventoryValue = products.reduce((total, product) => {
    return total + (product.price * product.quantity);
}, 0);

console.log("=== CÂU 7: Tổng giá trị kho hàng ===");
console.log("Chi tiết giá trị của từng sản phẩm:");
products.forEach(product => {
    const value = product.price * product.quantity;
    console.log(`  - ${product.name}: ${product.price.toLocaleString('vi-VN')}đ × ${product.quantity} = ${value.toLocaleString('vi-VN')}đ`);
});
console.log(`TỔNG GIÁ TRỊ KHO HÀNG: ${totalInventoryValue.toLocaleString('vi-VN')}đ`);
console.log("");

// ============================================================
// CÂU 8: Dùng for...of Duyệt mảng products và in ra: Tên sản phẩm - Danh mục - Trạng thái
// ============================================================
console.log("=== CÂU 8: Dùng for...of duyệt mảng products ===");
console.log("Tên sản phẩm - Danh mục - Trạng thái:");
for (const product of products) {
    const status = product.isAvailable ? "Đang bán" : "Ngừng bán";
    console.log(`  ${product.name} - ${product.category} - ${status}`);
}
console.log("");

// ============================================================
// CÂU 9: Dùng for...in để:
//   - In ra tên thuộc tính
//   - In ra giá trị tương ứng
// ============================================================
console.log("=== CÂU 9: Dùng for...in duyệt thuộc tính của object ===");
console.log("Lấy sản phẩm đầu tiên làm ví dụ:");
const sampleProduct = products[0];
for (const property in sampleProduct) {
    console.log(`  Thuộc tính: "${property}" - Giá trị: ${sampleProduct[property]}`);
}
console.log("");

// ============================================================
// CÂU 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng
// ============================================================
const availableAndInStockProducts = products
    .filter(product => product.isAvailable === true && product.quantity > 0)
    .map(product => product.name);

console.log("=== CÂU 10: Danh sách tên sản phẩm đang bán VÀ còn hàng ===");
console.log("Điều kiện: isAvailable = true VÀ quantity > 0");
console.log("Kết quả:");
availableAndInStockProducts.forEach((name, index) => {
    console.log(`  ${index + 1}. ${name}`);
});
console.log("");

// ============================================================
// TỔNG KẾT
// ============================================================
console.log("============================================================");
console.log("               HOÀN THÀNH TẤT CẢ 10 CÂU BÀI TẬP             ");
console.log("============================================================");
