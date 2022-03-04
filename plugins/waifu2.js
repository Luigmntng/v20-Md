//created by Scooppt
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
     let res = await fetch('https://restapi-production-a62b.up.railway.app/api/wallpaper/waifu2?apikey=APIKEY')
     let img = await res.buffer()
     let caption = `
Jgn Lupa Follow ig @ahmdlui
`.trim()
    conn.sendFile(m.chat, img, 'waifu.jpg', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Erro!*_'
    }
}

handler.help = ['waifu2']
handler.tags = ['anime']
handler.command = /^waifu2$/i

handler.fail = null

module.exports = handler
