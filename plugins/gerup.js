let handler = async m => m.reply(`
Udah gada awkwok`.trim()) // Tambah sendiri kalo mau
handler.command = /^gerup$/i
handler.help = ['gerup']
handler.tags = ['info']
handler.owner = false

module.exports = handler
