const { chromium } = require('playwright');

async function teste() {

    // Inicia o navegador (headless: false para vê-lo abrindo)
    const browser = await chromium.launch({ headless: false, slowMo:500 });
    const context = await browser.newContext(); //anon

    // Abre uma nova aba/página
    const page = await context.newPage();

    // Navega até a URL
    await page.goto('https://www.scrapingcourse.com/');

    await page.locator('a[href="https://www.scrapingcourse.com/login"]').click();
    await page.fill("#email", "admin@example.com");
     await page.fill("#password", "password");
    await page.locator("button[type='submit']").click();
    await page.locator("#logo-link").click();
    await page.locator('a[href="/ecommerce"]').click();
    await page.fill("#wp-block-search__input-1", "Beaumont Summit Kit");
    await page.locator('button.wp-block-search__button.wp-element-button').click();
    await page.locator('a[href="https://www.scrapingcourse.com/ecommerce/product/beaumont-summit-kit/"]').click();
    await page.locator('#size').selectOption('M');
    await page.locator('#color').selectOption('Orange');  
    await page.locator('input[name="quantity"]').fill('2'); 
    await page.locator('.single_add_to_cart_button').click();
    await page.locator('.cart-contents').click();
    



    //let pagina=await page.locator('a[href="https://www.scrapingcourse.com/pagination/13"]').textContent()
    //console.log(pagina);

    /*
    for(let i = 0; i<pagina;){

    }
    */
    // Imprime o título da página no console
    //console.log(await page.title());

    // Fecha o navegador
    //await browser.close();
}

teste();