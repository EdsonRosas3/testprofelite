function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
async function demo() {
    await sleep(2000);
}

module.exports= {demo};