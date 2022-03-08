let fs = require('fs')

global.owner = ['6282146092695'] // Put your number here
global.mods = [] // Want some help?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json'))
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com', 
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  hari: 'https://hardianto.xyz',
  lui: 'https://restapi-production-a62b.up.railway.app',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  bear: 'https://apikey-bear.herokuapp.com',
  bear2: 'https://apikey-bear2.herokuapp.com',
  bear3: 'https://apikey-bear3.herokuapp.com',
  vinco: 'https://viko-api.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'https://pastelink.net/v20Md',
  'https://api.lolhuman.xyz': 'rey2k21',
  'https://hardianto.xyz': 'hardianto',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://restapi-production-a62b.up.railway.app': 'apirey',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://apikey-bear3.herokuapp.com': 'https://pastelink.net/v20Md',
  'https://viko-api.herokuapp.com': 'vinko',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

lolkey = 'rey2k21'
harikey = 'hardianto'
zekskey = 'apivinz'
xteamkey = 'https://pastelink.net/v20Md'
leyskey = 'dappakntlll'
luikey = 'apirey'
bearkey = 'https://pastelink.net/v20Md'
ApiiKey = 'https://pastelink.net/v20Md'
vinkey = 'vinko'

namabot = 'Bot-Md'
namalu = 'AhmdLui'
footer = '\n©Bot-Md'
kasihcaption = `Follow ig @AhmdLui`

// Sticker WM
global.stiker_wait = '_*Tunggu Sebentar...*_'
global.packname = 'Bot-Md'
global.author = 'By Lui'
global.email = 'oagibanh@gmail.com'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.wm = '©Bot-Md'
global.media = 'https://telegra.ph/file/9e7c12f1c453608c2cf3a.jpg'

global.wait = '_*Follow ig saya yh*_'
global.eror = '_*Server Error*_'

global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
