document.getElementById("profileForm").addEventListener("submit", function(event) {
  event.preventDefault(); // 防止表單提交的預設行為

  // 獲取表單資料
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var birthdate = document.getElementById("birthdate").value;
  var password = document.getElementById("password").value;
  var address = document.getElementById("address").value;

  // 清空表單
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("address").value = "";

  alert("個人資料已更新！");
});

// 假設這是購買紀錄資料
const purchaseHistory = [
{ orderNumber: '000087', productName: '抗黃化透明防摔手機殼［透明］', price: 1020, date: '2023-05-18' },
{ orderNumber: '000078', productName: '天使防摔殼 AIR［灰］', price: 680, date: '2023-05-19' },
{ orderNumber: '000012', productName: 'Am I ugly YES 悠閒 BABY 系列全包 iPhone 手機殼［baby書本］', price: 690, date: '2023-05-20' },
];

// 生成購買紀錄表格
function generatePurchaseTable() {
  const tableBody = document.getElementById('purchaseTableBody');

  purchaseHistory.forEach((purchase) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${purchase.orderNumber}</td>
      <td>${purchase.productName}</td>
      <td>${purchase.price}</td>
      <td>${purchase.date}</td>
    `;
    tableBody.appendChild(row);
  });
}

// 在頁面載入完成後生成表格
window.onload = function() {
  generatePurchaseTable();
};

function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
