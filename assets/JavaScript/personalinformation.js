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
  