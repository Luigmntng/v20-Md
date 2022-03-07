const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Lol Animals;;;'
                    + 'FN:Lol Animals\n' // full name
                    + 'item1.X-ABLabel:premium 1k saja\n'
                    + 'URL;Web gwejh: doujindesu.xxx\n'
                    + 'EMAIL;Email Owner: njircoeg397@gmail.com\n'
                    + 'ORG:Lol Animals;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6282146092695:+6282146092695\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Lol Animals', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler




