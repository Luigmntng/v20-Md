const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix }) => {

   if (!text) throw `Masukkan query!`
    await m.reply(global.wait)
  axios.get(`https://docs-jojo.herokuapp.com/api/samehadaku?q=${text}`)
  i .then((res) => {
          let hasil = `*Judul:* ${res.data.result.title}\n\n*Link:* ${res.data.link}\n*Deskripsi:* ${res.data.desc}`
            conn.reply(m.chat, json.thumb, 'same.jpg', hasil, m)
        })
        .catch()
}
handler.help = ['samehadaku <nama anime nya>']
handler.tags = ['anime']
handler.command = /^(samehadaku)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false


module.exports = handler
