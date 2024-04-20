const submit_btn = document.getElementById("form_save");
if (submit_btn) {
    const csrf_token = document.getElementById("form__token");
    browser.runtime.sendMessage({csrf: csrf_token.value});
}
