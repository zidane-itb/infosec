const token = document.getElementById("form__token");
if (token) {
    const csrf_token = document.getElementById("form__token");
    browser.runtime.sendMessage({csrf: csrf_token.value});
}
