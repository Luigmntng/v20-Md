let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
  let res = await fetch('https://x-restapi.herokuapp.com/api/random-cehor?apikey=BETA')
  if (res.status != 200) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  let str = `
_*${json.judul}*_
_${json.desc}_
`.trim()
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
    templateMessage: {
        hydratedTemplate: {
          hydratedContentText: str,
          locationMessage: { 
          jpegThumbnail: json.thumb,           
          hydratedFooterText: wm,
          hydratedButtons: [{
            urlButton: {
              displayText: 'Official instagran',
              url: 'https://instagram.com/ahmdlui'
            }

          },
              {
            quickReplyButton: {
              displayText: 'Next',
              id: '.ceritahoror',
            }

          }]
        }
      }
    }), { userJid: m.sender, quoted: m });
   //conn.reply(m.chat, text.trim(), m)
   return await conn.relayMessage(
        m.chat,
        template.message,
        { messageId: template.key.id }
    )
}

handler.help = ['ceritahoror', 'ceritahrorr']
handler.tags = ['internet', 'fun', 'quotes']
handler.command = /^ceritahoror|ceritahorror$/i


module.exports = handler
