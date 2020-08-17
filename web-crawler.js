const puppeteer = require("puppeteer");

function crawl(page, url) {
    // url = "https://lausamplus.labo.io/?blockJs=1"
    return new Promise(async (resolve, reject) => {
        try {
            // const browser = await puppeteer.launch();
            // console.log("lanch puppeteer")
            // const page = await browser.newPage();
            await page.goto(url);
            let urls = await page.evaluate(() => {
                const html = new XMLSerializer().serializeToString(document);
                return html;
            });

            return resolve(urls);
        } catch (e) {
            console.log(e);
            return reject(e);
        }
    });
}

module.exports = crawl;
