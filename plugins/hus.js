let axios = require('axios')

let handler = async (m, { conn, usedPrefix, command }) => {
let res = await axios.get(API('http://docs-jojo.herokuapp.com', '/api/husbuando',))

let json = res.data
    conn.sendFile(m.chat, json.image, json.waifu, m)
}
handler.help = ['husbu2']
handler.tags = ['anime']
handler.command = /^(husbu2)$/i

module.exports = handler
