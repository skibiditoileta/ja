body: JSON.stringify({
    embeds: [{
        title: "Új látogató",
        color: 16711680,
        fields: [
            { name: "IP", value: data.ip, inline: false },
            { name: "User-Agent", value: navigator.userAgent, inline: false },
            { name: "Idő", value: new Date().toISOString(), inline: false }
        ]
    }]
})
