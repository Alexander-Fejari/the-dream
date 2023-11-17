const express = require("express");
const ViteExpress = require("vite-express");

const app = express();

app.get("/api", (req, res) => {
    res.send("Hello Vite!");
});

ViteExpress.listen(app, 3000, () =>
    console.log("Server is listening on port 3000...")
);

// Endpoint pour récupérer les données de l'API Currency Beacon
app.get("/api/data", async (req, res) => {
    try {
        const response = await fetch(
            'https://api.currencybeacon.com/v1/currencies?api_key=LYqQhm6t2K7OrPQJZFRSrvpW2z6Zu1ae'
        );
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});
