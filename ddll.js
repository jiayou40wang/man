{
    /*获取按钮id绑定点击事件*/
    document.getElementById('login').addEventListener('click', function(event) {
    event.preventDefault();
    validateAndLogin();
});
/*检验数字格式*/
function validateAndLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const usernameRegex = /^[A-Za-z]+$/;
    const passwordRegex = /^[0-9]+$/;

    let isValid = true;
    document.getElementById('username-error').textContent = '';
    document.getElementById('password-error').textContent = '';

    if (!usernameRegex.test(username)) {
        document.getElementById('username-error').textContent = '用户名只能有字母，请重新输入。';
        isValid = false;
    }

    if (!passwordRegex.test(password)) {
        document.getElementById('password-error').textContent = '密码只能有数字，请重新输入。';
        isValid = false;
    }

    if (isValid) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('success-message').style.display = 'block';
    }
}
document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('username').value = '';
    document.getElementById('username-error').textContent = '';
});
document.getElementById('reseta').addEventListener('click', function() {
    document.getElementById('password').value = '';
    document.getElementById('password-error').textContent = '';
});
}
{
    document.getElementById('jik').addEventListener("click", function(){
                        window.location.href = './duzhefuwu.html';
                    });
}