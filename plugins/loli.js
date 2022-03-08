let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
     let res = await fetch('https://restapi-production-a62b.up.railway.app/api/wallpaper/loli?apikey=APIKEY')
     let img = await res.buffer()
     let caption = `
Lu pedo yh ngab ?
`.trim()
    conn.sendFile(m.chat, img, 'waifu.jpg', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Erro!*_'
    }
}

handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^loli$/i

handler.fail = null

module.exports = handler
