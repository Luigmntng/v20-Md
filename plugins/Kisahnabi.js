let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukkan query!`
  let res = await fetch(https://restapi-production-a62b.up.railway.app/api/muslim/kisahnabi?nabi=${text}&apikey=APIKEY)
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { name, kelahiran, wafat_usia, singgah, kisah, } = json.results[0]
let kisahnabi = `*NAMA NABI:* ${name}
*KELAHIRAN:* ${kelahiran}
*USIA:* ${wafat_usia}
*AL KISAH:*  ${kisah}`
  conn.reply(m.chat, kisahnabi, m)
}
handler.help = ['kisahnabi <namanabi>']
handler.tags = ['quran']
handler.command = /^(kisahnabi)$/i
//udah di maapin kan?
module.exports = handler
