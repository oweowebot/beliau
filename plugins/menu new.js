let fs = require('fs')

let handler = async (m, { conn, text }) => {
let logo = fs.readFileSync(`./src/logo.jpg`)
let caption = `Welcome *${conn.getName(m.sender)}* to *_RhaynaBotz_*\n-Klik *_Menu_* untuk menampilkan list menu\n-Klik *_Group_* untuk link group official bot\n-Klik *_Rules_* untuk melihat rules _RhaynaBotz_\n\n *(jika bot tidak respon silahkan ketik ulang)*`
await conn.send3ButtonImg(m.chat, logo, caption, wm, 'Menu', '.sihsvsudbsjagsb', 'Group', '.gerup', 'Rules', '.rules', m)
}
handler.command = /^(menu|help)$/i
handler.tags = ['main']
handler.help = ['menu']
module.exports = handler

