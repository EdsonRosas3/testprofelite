// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const {demo} = require('../utils/utils');

describe('filtrado', function() {
  this.timeout(90000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('filtrado', async function() {
    await driver.get("https://profelitebolivia.web.app/")
    await driver.manage().window().setRect(1382, 784)
    await driver.findElement(By.xpath("//div[2]/div/span")).click()
    await demo()
    await driver.findElement(By.xpath("//div[3]/div/span")).click()
    await demo()
    await driver.findElement(By.xpath("//div[4]/div/span")).click()
    await demo()
    await driver.findElement(By.xpath("//div[5]/div/span")).click()
    await demo()
    await driver.findElement(By.xpath("//div[6]/div/span")).click()
    await demo()
    await driver.findElement(By.xpath("//div[7]")).click()
    await demo()
    await driver.findElement(By.xpath("//div[8]/div/span")).click()
    await demo()
    await driver.findElement(By.xpath("//div[9]/div/span")).click()
    await demo()
    await driver.findElement(By.xpath("//div[10]/div/span")).click()
    await demo()
    await driver.findElement(By.xpath("//div[11]/div/span")).click()
    await demo()
    await driver.findElement(By.xpath("//div[2]/div/div/div/div/div/span")).click()
    await demo()
  })
})
