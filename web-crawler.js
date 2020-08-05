const puppeteer = require("puppeteer");

function crawl(url) {
    // url = "https://lausamplus.labo.io/?blockJs=1"
    return new Promise(async (resolve, reject) => {
        try {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto(url);
            let urls = await page.evaluate(() => {
                const html = new XMLSerializer().serializeToString(document);
                return html;
            });
            browser.close();
            return resolve(urls);
        } catch (e) {
            return reject(e);
        }
    });
}

module.exports = crawl;
