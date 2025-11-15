const { chromium } = require('playwright');

async function automatizacaoCompra() {

    // Inicia o navegador (headless: false para vê-lo abrindo)
    const browser = await chromium.launch({ headless: false, slowMo:500 });
    
    // Abre via guia anonima por risco de problemas com cookies de login
    const context = await browser.newContext();

    const page = await context.newPage();
    // Site exclusivo para treinamento de web scrapings
    await page.goto('https://www.scrapingcourse.com/'); 

    // Processo para realizacao de login na plataforma
    await page.locator('a[href="https://www.scrapingcourse.com/login"]').click();
    await page.fill("#email", "admin@example.com");
    await page.fill("#password", "password");
    await page.locator("button[type='submit']").click();

    // Retornando a aba inicial e procurando pelo local desejado do site para o web scraping => Ecommerce
    await page.locator("#logo-link").click();
    await page.locator('a[href="/ecommerce"]').click();

    // Busca por determinado produto
    await page.fill("#wp-block-search__input-1", "Beaumont Summit Kit");
    await page.locator('button.wp-block-search__button.wp-element-button').click();
    await page.locator('a[href="https://www.scrapingcourse.com/ecommerce/product/beaumont-summit-kit/"]').click();

    // Especificacoes do produto na finalizacao do pedido
    await page.locator('#size').selectOption('M');
    await page.locator('#color').selectOption('Orange');  
    await page.locator('input[name="quantity"]').fill('2'); 

    // Adicao do produto ao carrinho e conferencia final
    await page.locator('.single_add_to_cart_button').click();
    await page.locator('.cart-contents').click();


    // Fecha o navegador
    //await browser.close();
}

automatizacaoCompra();