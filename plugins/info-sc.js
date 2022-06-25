/*
 * bacot kontol
*/

let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Awokwok beliau ini pemulung SC :v`
conn.sendBut(m.chat, esce, wm, 'Ngontol', '@6287831204077', m) 
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler
