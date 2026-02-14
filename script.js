fetch("https://api.ipify.org?format=json")
.then(response => response.json())
.then(data => {

    fetch("YOUR_WEBHOOK_URL", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ip: data.ip,
            userAgent: navigator.userAgent,
            time: new Date().toISOString()
        })
    });

});
