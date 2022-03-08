//created by Lui
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
     let res = await fetch('https://restapi-production-a62b.up.railway.app/api/asupan?apikey=APIKEY')
     let img = await res.buffer()
     let caption = `
Lu pedo yh ngab ?
`.trim()
    conn.sendFile(m.chat, img, 'asupan.mp4', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Erro!*_'
    }
}

handler.help = ['asupan']
handler.tags = ['internet']
handler.command = /^asupan$/i

handler.fail = null

module.exports = handler
