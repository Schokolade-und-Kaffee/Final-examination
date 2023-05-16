function submitForm() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        //阻止表單提交。
        event.preventDefault();

        //獲取表單欄位的值。
        const username = form.elements["username"].value;
        const email = form.elements["email"].value;
        const password = form.elements["password"].value;
        const checkPassword = form.elements["checkPassword"].value;

        //判斷表單欄位是否都填寫了。
        if (username.trim() === "" || email.trim() === "" || password.trim() === "" || checkPassword.trim() === "") {
            alert("欄位不可空白。");
            return false;
        }

        //表單驗證通過，提交表單。
        this.submit();
        alert("註冊成功！")
    });
}

