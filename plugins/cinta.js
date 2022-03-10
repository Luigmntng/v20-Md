let axios = require('axios')

let handler = async (m, { conn, usedPrefix, command }) => {
let res = await axios.get(API('http://docs-jojo.herokuapp.com', '/api/katacinta',))

let json = res.data
    m.reply(m.chat, json.result, m)
}
handler.help = ['katacinta']
handler.tags = ['quotes']
handler.command = /^(katacinta)$/i

module.exports = handler
