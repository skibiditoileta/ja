fetch("https://api.ipify.org?format=json")
.then(response => response.json())
.then(data => {

    fetch("YOUR_DISCORD_WEBHOOK_URL", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            content:
                "🖥️ Új látogató\n" +
                "IP: " + data.ip + "\n" +
                "User-Agent: " + navigator.userAgent + "\n" +
                "Idő: " + new Date().toISOString()
        })
    });

})
.catch(error => console.error("Hiba:", error));
