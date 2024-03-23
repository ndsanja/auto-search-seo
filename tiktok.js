const { Builder, By, Key, until } = require('selenium-webdriver');

async function performGoogleSearchAndClick() {
    // Inisialisasi browser Chrome
    let driver = await new Builder().forBrowser('chrome').build();

    try {

        // Buka Google
        await driver.get('https://www.zefoy.com');

        // Temukan elemen input pencarian menggunakan atribut 'name' dengan nilai 'q'
        let searchBox = await driver.findElement(By.name('q'));

        // Masukkan kata kunci pencarian
        await searchBox.sendKeys('kampung inggris pare', Key.RETURN);

        // Tunggu hingga hasil pencarian muncul (maksimal 10 detik)
        await driver.wait(until.titleContains('kampung inggris pare'), 10000);
        await driver.executeScript('window.scrollBy(0, 5000);');
        await driver.sleep(1000); // Tunggu sebentar setelah scroll
        await driver.executeScript('window.scrollBy(0, 5000);');
        await driver.sleep(1000); // Tunggu sebentar setelah scroll
        await driver.executeScript('window.scrollBy(0, 5000);');
        await driver.sleep(1000); // Tunggu sebentar setelah scroll

        // Cari tautan interpeacepare.com dan klik jika ditemukan
        try {
            let interpeaceLink = await driver.findElement(By.partialLinkText('interpeacepare.com'));
            await interpeaceLink.click();
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
        } catch (error) {
            console.log('Tidak ditemukan tautan interpeacepare.com pada hasil pencarian.');
        }

        // Tunggu sejenak sebelum melakukan pencarian berikutnya
        await driver.sleep(2000);

    } finally {
        // Tutup browser setelah selesai
        await driver.quit();
    }
}

// Panggil fungsi untuk menjalankan pencarian dan klik
performGoogleSearchAndClick();
