// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const {demo} = require('../utils/utils');

describe('INICIANDO TEST RESGISTRO DE USUARIO', function() {
  this.timeout(60000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('REGISTRO DE USUARIO', async function() {
    await driver.get("https://profelitebolivia.web.app/")
    await driver.manage().window().setRect(1382, 784)
    await driver.findElement(By.css(".jss10:nth-child(1) > .MuiButton-label")).click()
    demo();
    //await driver.findElement(By.css(".Mui-focused > .MuiInputBase-input")).click()
    await driver.findElement(By.xpath("//div/div/div/div/div/input")).sendKeys("testdos")
    await driver.findElement(By.xpath("//div[2]/div/div/div/input")).sendKeys("testdos")
    await driver.findElement(By.xpath("//div[3]/div/div/div/input")).sendKeys("testdos@gmail.com")

    await driver.findElement(By.xpath("//*[@id=\"demo-customized-select\"]")).click()
    demo();
    await driver.findElement(By.xpath("//*[@id=\"menu-\"]/div[3]/ul/li[1]")).click()
    await driver.findElement(By.xpath("//div[5]/div/div/div/input")).sendKeys("testdos")
    await driver.findElement(By.css(".jss53:nth-child(2) > .MuiButton-label")).click()
    demo();
    await driver.findElement(By.css(".MuiDrawer-paperAnchorDockedLeft .MuiList-root > .MuiButtonBase-root:nth-child(1)")).click()
    await driver.findElement(By.css(".MuiDrawer-paperAnchorDockedLeft > div > .MuiList-root > .MuiButtonBase-root:nth-child(1)")).click()
  })
})
