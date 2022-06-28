let handler = m => m

let linkRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/i
handler.before = async function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink && !isAdmin && !m.isBaileys && m.isGroup) {
    let thisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
    if (m.text.includes(thisGroup)) throw false // jika link grup itu sendiri gak dikick
      if (!isBotAdmin) m.reply(` *「 ANTILINK 」* ${isAdmin ? "Admin mah bebas :'v" : `\n\nlink group terdeteksi dan ${global.namabot} bukan admin jadi tidak bisa ngekick!`}`)
    if (isBotAdmin) {
      m.reply(` *「 ANTILINK 」* \n\nLink Biru Terdeteksi, Lu Akan Di Kick Terimakasih`.trim())
      await this.delay(500)
      await this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
    }
  }
  return true
}

module.exports = handler
