const puppeteer = require('puppeteer');
const USER_NAME = '020924550859';
const PASSWORD = 'Ch@rlyCharly2002lool';
const PLATONUS = 'https://edu.enu.kz/';
const PLATONUS_GRADES = 'https://edu.enu.kz/current_progress_gradebook_student?studentID=74688&year=2020&term=1';

const button = document.getElementsByClassName('.btn');
const info = document.getElementsByClassName('.info');

async function login() {
    const browser = await puppeteer.launch({
        headless: false,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-sch-usage',
            '--single-process'
        ],
    });
    const page = await browser.newPage();
    console.log("New page++")
    info.textContent = "New page++"
    await page.goto(PLATONUS, {
        waitUntil: 'networkidle2'
    });
    await page.waitFor(3000);
    console.log("Site loaded")
    info.textContent = "Site loaded"
    await page.type('input[name = "iin"]', USER_NAME);
    await page.type('input[name = "password"]', PASSWORD);
    let loginButton = await page.$x("//button[contains(text(), 'Кіру')]");
    await loginButton[0].click();
    console.log("Enter clicked")
    info.textContent = "Enter clicked"
    await page.waitFor(2000);
    await page.goto(PLATONUS_GRADES, {
        waitUntil: 'networkidle2'
    });
    await page.waitFor(3000);
    console.log("grades loaded")
    info.textContent = "grades loaded"

    await page.screenshot({
        path: `Grades.png`,
        fullPage: true
    });
    console.log("screenshot taken")
    info.textContent = "screenshot taken"
    await browser.close();
    console.log("browser closed")
    info.textContent = "browser closed"

};
button.onclick = function () {
    alert("lol")
    login();
}
