const express = require("express");
const crawl = require("./web-crawler");
const path = require('path');
const app = express();
const port = 3001;

app.get("/get-html", async (req, res) => {
    const url = req.query["url"];

    try {
        const html = await crawl(url);

        res.jsonp({
            success: true,
            status: 200,
            data: {
                url: url,
                html: html,
            },
            message: "ok",
        });
    } catch (error) {
        res.status(400).jsonp({
            success: false,
            status: 400,
            data: null,
            message: "Bad Request",
        });
    }
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/index.html"));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
