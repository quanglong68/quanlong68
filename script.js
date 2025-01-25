function update(previewPic){
    const element = document.getElementById("image");

    // Tạo một thẻ img mới
    const newImage = document.createElement("img");

    // Đặt nguồn ảnh mới cho thẻ img
    newImage.src = previewPic.src;

    // Thay thế nội dung của phần tử "image" bằng thẻ img mới
    element.innerHTML = "";  // Xóa nội dung cũ 
    element.appendChild(newImage);  // Thêm ảnh mới vào phần tử
}