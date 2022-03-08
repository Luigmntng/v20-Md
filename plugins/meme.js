//created by Scooppt
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
     let res = await fetch('https://hardianto.xyz/api/darkmeme?apikey=hardianto')
     let img = await res.buffer()
     let caption = `
Ini meme?
`.trim()
    conn.sendFile(m.chat, img, 'waifu.jpg', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Erro!*_'
    }
}

handler.help = ['meme']
handler.tags = ['internet']
handler.command = /^meme$/i

handler.fail = null

module.exports = handler
