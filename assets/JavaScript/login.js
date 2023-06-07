function showAlert() {
    alert("那沒救了呢。慢走不送。");
}

function submitForm() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        //阻止表單提交
        event.preventDefault();

        //獲取表單欄位的值
        const username = form.elements["username"].value;
        const password = form.elements["password"].value;

        //判斷表單欄位是否都填寫了
        if (username.trim() === "" || password.trim() === "") {
            alert("欄位不可空白。");
            return false;
        }

        //表單驗證通過，可以提交表單了
        this.submit();
        alert("登入成功！")
        window.location.href = "personalinformation.html";
    });
}
