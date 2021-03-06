// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const {demo} = require('../utils/utils');

describe('INICIAR TEST DE INICIO DE SESION', function() {
  this.timeout(50000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('INICIO DE SESION', async function() {
    await driver.get("https://profelitebolivia.web.app")
    await driver.manage().window().setRect({ width: 1138, height: 895 })
    await driver.findElement(By.css(".MuiButtonBase-root:nth-child(2) > .MuiButton-label")).click()
    await driver.findElement(By.xpath("//input[@type=\"email\"]")).click()
    await driver.findElement(By.xpath("//html/body/div[4]/div[3]/div/form/div[1]/div/div[1]/div/input")).sendKeys("test@gmail.com")
    await driver.findElement(By.xpath("//input[@type=\'password\']")).click()
    await driver.findElement(By.xpath("//html/body/div[4]/div[3]/div/form/div[1]/div/div[2]/div/input")).sendKeys("test")
    await driver.findElement(By.css(".MuiDialogActions-root")).click()
    await driver.findElement(By.css(".jss44:nth-child(2)")).click()
    demo();
    await driver.findElement(By.css(".MuiPaper-root:nth-child(1) .MuiList-root > .MuiButtonBase-root:nth-child(1) .MuiTypography-root")).click()
    await driver.findElement(By.css(".MuiGrid-root:nth-child(1) > .MuiButtonBase-root")).click()
    
  })
})
