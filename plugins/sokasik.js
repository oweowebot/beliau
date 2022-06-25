let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendFile(m.chat, 'https://telegra.ph/file/8c40e7aaf759253d85fe0.mp4', 'ok.mp4', 'Beliau Ini', m)
}

handler.customPrefix = /^@6287831204077$/i
handler.command = new RegExp

module.exports = handler
