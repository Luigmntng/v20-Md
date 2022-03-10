let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukkan query!`
  let res = await fetch(global.API('http://docs-jojo.herokuapp.com', '/api/jadwaltvnow))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  conn.reply(m.chat, json.result, m)
}
handler.help = ['jadwaltvnow']
handler.tags = ['internet']
handler.command = /^(jadwaltvnow)$/i
//kyaa jangan biarkan wabot-aq terbengkalai sampai nurutomo kembali
// Command - Re Edited -- TOXIC-DEVIL == || Character Type ||
module.exports = handler
