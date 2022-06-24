const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Owner;;;'
                    + 'FN:Owner\n' // full name
                    + 'ORG:Owner;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6285974899229:+62 859-7489-9229\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Owner', contacts: [{ vcard }] } }, { quoted: m })
                m.reply(`Tuh owner gw jgn di begal`)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler