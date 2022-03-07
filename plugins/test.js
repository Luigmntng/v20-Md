let fetch = require('node-fetch')
let handler = async(m, { conn, args }) => {
    response = args.join (' ')
  if (!args[0]) throw 'Masukkan Judul!'
  m.reply('follow ig @ahmdlui')
    let res = `https://restapi-production-a62b.up.railway.app/api/downloader/xnxx?query=${response}&apikey=APIKEY`
    let json = await res.json()
    let keqing = json.result.map((v, i) => `#${i + 1}. \n*Title:* ${v.title}\n*Info:* ${v.info}\n*Link:* ${v.link}}\n==============\n`).join('\n') 
    if (json.status) m.reply(keqing)
    else throw json
}
handler.help = ['xxsearch <query>']
handler.tags = ['internet']
handler.command = /^(xxsearch)$/i

handler.limit = true

module.exports = handler
