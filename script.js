// =========================================================================
//  Gốc "document"
// =========================================================================

// =========================================================================
// document.getElementById()
// =========================================================================
const welcomeText = document.getElementById('welcome-text');
const btnMale = document.getElementById('btn-male');     
const btnFemale = document.getElementById('btn-female'); 
const btnToggleTheme = document.getElementById('btn-toggle-theme'); // Lấy nút đổi màu web ra lại
const genderTitle = document.getElementById('gender-title');

const inputMirror = document.getElementById('input-mirror');
const mirrorOutput = document.getElementById('mirror-output');
const todoInput = document.getElementById('todo-input');
const btnAddTodo = document.getElementById('btn-add-todo');
const todoList = document.getElementById('todo-list');

// =========================================================================
// KỸ THUẬT document.querySelectorAll()
// =========================================================================
const cacPhanTuMau = document.querySelectorAll('.todo-item');

// =========================================================================
// addEventListener() để lắng nghe sự kiện
// =========================================================================

// Thao tác chọn

btnMale.addEventListener('click', () => {
    welcomeText.textContent = "Bạn đã chọn giới tính: Nam";
    genderTitle.textContent = "Lựa chọn hiện tại: Nam";
    welcomeText.style.color = "#2980b9";
    welcomeText.style.fontWeight = "bold";
    welcomeText.style.fontSize = "1.2rem";
});

// Thao tác chọn
btnFemale.addEventListener('click', () => {
    welcomeText.textContent = "Bạn đã chọn giới tính: Nữ";
    genderTitle.textContent = "Lựa chọn hiện tại: Nữ";
    welcomeText.style.color = "#e84393";
    welcomeText.style.fontWeight = "bold";
    welcomeText.style.fontSize = "1.2rem";
});

// --- Khôi phục lại tính năng đổi màu nền Web ---
// Sử dụng .classList.toggle để bật/tắt màu nền Dark Mode toàn trang
btnToggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Sự kiện Input Live Preview
inputMirror.addEventListener('input', (event) => {
    const chuHienTai = event.target.value;
    mirrorOutput.textContent = chuHienTai.trim() === "" ? "..." : chuHienTai;
});

// Kiểm tra khóa/mở nút
todoInput.addEventListener('input', () => {
    if (todoInput.value.trim() !== "") {
        btnAddTodo.removeAttribute('disabled');
    } else {
        btnAddTodo.setAttribute('disabled', 'true');
    }
});

// Nhấn Enter thêm việc nhanh
todoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && todoInput.value.trim() !== "") {
        taoCongViecMoi();
    }
});

btnAddTodo.addEventListener('click', taoCongViecMoi);

// Hàm tạo phần tử động
function taoCongViecMoi() {
    const noiDungNhap = todoInput.value.trim();
    const theLiMoi = document.createElement('li');
    theLiMoi.className = "todo-item";
    theLiMoi.textContent = `${noiDungNhap} (Bấm vào đây để xóa)`;
    
    theLiMoi.addEventListener('click', () => {
        theLiMoi.remove();
    });
    
    todoList.appendChild(theLiMoi);
    todoInput.value = "";
    btnAddTodo.setAttribute('disabled', 'true');
}

// Gán sự kiện xóa phần tử mẫu
cacPhanTuMau.forEach((phanTu) => {
    phanTu.addEventListener('click', () => {
        phanTu.remove();
    });
});