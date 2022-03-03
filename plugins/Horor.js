let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
  let res = await fetch('https://x-restapi.herokuapp.com/api/random-cehor?apikey=BETA')
  if (res.status != 200) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
let { judul, desc, thumb } = json.results[0]
let demit = `*Judul:* ${judul}
*Deskripsi:* ${desc}`
  conn.sendFile(m.chat, thumb, '', demit, m)
}
handler.help = ['ceritahoror', 'ceritahrorr']
handler.tags = ['internet', 'fun', 'quotes']
handler.command = /^ceritahoror|ceritahorror$/i


module.exports = handler
