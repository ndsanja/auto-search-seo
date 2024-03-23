const { Builder, By, Key, until } = require('selenium-webdriver');

async function performGoogleSearchAndClick() {

    try {
        for (let i = 0; i < 1000; i++) {
            let driver = await new Builder().forBrowser('chrome').build();
            let interpeaceLink = null
            // Buka Google
            await driver.get('https://www.google.com');

            // Temukan elemen input pencarian menggunakan atribut 'name' dengan nilai 'q'
            let searchBox = await driver.findElement(By.name('q'));

            // Masukkan kata kunci pencarian
            await searchBox.sendKeys('kampung inggris pare', Key.RETURN);

            // Tunggu hingga hasil pencarian muncul (maksimal 10 detik)
            await driver.wait(until.titleContains('kampung inggris pare'), 120000);


            // Cari tautan interpeacepare.com dan klik jika ditemukan
            try {
                while (true) {
                    await driver.executeScript('window.scrollBy(0, 5000);');
                    await driver.sleep(1000);
                    interpeaceLink = await driver.findElement(By.partialLinkText('interpeacepare.com'));

                    if (interpeaceLink) {
                        break;
                    }
                }
                await interpeaceLink.click();
                await driver.findElement(By.id('header_main_hero-custom')).click()
                await driver.executeScript('window.scrollBy(0, 300);');
                await driver.sleep(1000); // Tunggu sebentar setelah scroll
                await driver.executeScript('window.scrollBy(0, 300);');
                await driver.sleep(1000); // Tunggu sebentar setelah scroll
                await driver.executeScript('window.scrollBy(0, 300);');
                await driver.sleep(1000); // Tunggu sebentar setelah scroll
                await driver.executeScript('window.scrollBy(0, 300);');
                await driver.sleep(1000); // Tunggu sebentar setelah scroll
                await driver.executeScript('window.scrollBy(0, 300);');
                await driver.sleep(1000); // Tunggu sebentar setelah scroll
                await driver.executeScript('window.scrollBy(0, 300);');
                await driver.sleep(1000); // Tunggu sebentar setelah scroll
                await driver.executeScript('window.scrollBy(0, 300);');
                await driver.sleep(1000); // Tunggu sebentar setelah scroll
                await driver.executeScript('window.scrollBy(0, 300);');
                await driver.sleep(1000); // Tunggu sebentar setelah scroll
                await driver.executeScript('window.scrollBy(0, 300);');
                await driver.sleep(1000); // Tunggu sebentar setelah scroll
                await driver.executeScript('window.scrollBy(0, 300);');
                await driver.sleep(1000); // Tunggu sebentar setelah scroll
                await driver.executeScript('window.scrollBy(0, 300);');
                await driver.sleep(1000); // Tunggu sebentar setelah scroll
                await driver.executeScript('window.scrollBy(0, 300);');
                await driver.sleep(1000); // Tunggu sebentar setelah scroll
                await driver.executeScript('window.scrollBy(0, 300);');
                await driver.sleep(1000); // Tunggu sebentar setelah scroll
                await driver.executeScript('window.scrollBy(0, 300);');
                await driver.sleep(1000); // Tunggu sebentar setelah scroll
                await driver.executeScript('window.scrollBy(0, 300);');
                await driver.sleep(1000); // Tunggu sebentar setelah scroll
                await driver.executeScript('window.scrollBy(0, 300);');
                await driver.sleep(1000); // Tunggu sebentar setelah scroll
                await driver.executeScript('window.scrollBy(0, 300);');
                await driver.sleep(1000); // Tunggu sebentar setelah scroll
                await driver.executeScript('window.scrollBy(0, 300);');
                await driver.sleep(1000); // Tunggu sebentar setelah scroll
                await driver.executeScript('window.scrollBy(0, 300);');
                await driver.sleep(1000); // Tunggu sebentar setelah scroll
                await driver.executeScript('window.scrollBy(0, 300);');
                await driver.sleep(1000); // Tunggu sebentar setelah scroll
                await driver.executeScript('window.scrollBy(0, 300);');
                await driver.sleep(1000); // Tunggu sebentar setelah scroll
                await driver.executeScript('window.scrollBy(0, 300);');
                await driver.sleep(1000); // Tunggu sebentar setelah scroll
                await driver.executeScript('window.scrollBy(0, 300);');
                await driver.sleep(1000); // Tunggu sebentar setelah scroll
                await driver.executeScript('window.scrollBy(0, 300);');
                await driver.sleep(1000); // Tunggu sebentar setelah scroll
                await driver.executeScript('window.scrollBy(0, 300);');
                await driver.sleep(1000); // Tunggu sebentar setelah scroll
                await driver.executeScript('window.scrollBy(0, 300);');
                await driver.sleep(1000); // Tunggu sebentar setelah scroll
                await driver.executeScript('window.scrollBy(0, 300);');
                await driver.sleep(1000); // Tunggu sebentar setelah scroll
                await driver.executeScript('window.scrollBy(0, 300);');
                await driver.sleep(1000); // Tunggu sebentar setelah scroll
                await driver.executeScript('window.scrollBy(0, 300);');
                await driver.sleep(1000); // Tunggu sebentar setelah scroll
                await driver.executeScript('window.scrollBy(0, 300);');
                await driver.sleep(3000); // Tunggu sebentar setelah scroll

            } catch (error) {
                console.log('Tidak ditemukan tautan interpeacepare.com pada hasil pencarian.');
            }

            // Tunggu sejenak sebelum melakukan pencarian berikutnya
            await driver.sleep(2000);
            await driver.quit();

        }
    } finally {
        // Tutup browser setelah selesai
        await driver.quit();
    }
}

// Panggil fungsi untuk menjalankan pencarian dan klik
performGoogleSearchAndClick();



