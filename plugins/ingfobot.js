let { performance } = require('perf_hooks')
let fetch = require('node-fetch')
let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix }) => { 
  let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime) 
  let totalreg = Object.keys(global.db.data.users).length
  let image = 'https://telegra.ph/file/9e7c12f1c453608c2cf3a.jpg'
  let old = Math.round(performance.now())
  await m.reply('wait Kakak!!')
  let neww = Math.round(performance.now())
  let caption = `
╠═〘 ${package.name} 〙 ═
╠➥ *Versi* : -
╠➥ *Homepage* : -
╠➥ *Issue:* -
╠➥ *Prefix:* ' ${usedPrefix} '
╠➥ *Menu:* ${usedPrefix}menu
╠➥ *Ping:* ${neww - old} *ms*
╠➥ *Total user:* ${totalreg} *user*
╠➥ *Uptime:* ${uptime}
║
╠═〘 DONASI 〙 ═
╠➥ GOPAY [-]
╠➥ PULSA [6282146092695]
║
║
║${readMore}
╠═〘 PIRACY BOT 〙 ═
╠➥ *KIRIM LINK GC MU AGAR BOT*
║   *BISA MASUK*
╠➥ *KAMI TIDAK BERTANGGUNG*
║   *JAWAB ATAS PENYALAHGUNAAN*
║   *ANDA*
║   
║ 
║ 
╠═ ©2021 ${package.name}
╠═ Scrip original by ShiraoriBot-Md
╠═ Creator : AhmdLui
╠═ Api xsteam :St4r
╠═ Slamet Chan
╠═ Elaine Chan
╠═〘 Bot-Md 〙 ═`.trim()
     await conn.sendReply(m.chat, caption, m)
}
handler.help = ['infobot']
handler.tags = ['info']
handler.command = /^(info(bot)?)$/i

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
