const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')


const bot = new Telegraf('1012792361:AAEhut3JpehrMZMYJjR8slKvaXqdBUAuOmQ')


bot.use(Telegraf.log())

bot.on('new_chat_members', ({ reply }) => reply(
    '<b>Bem-vindo(a) a Connectesite🌎</b>, aqui você fica por dentro das atulizações🔝 e novidades📰 da loja. Você pode entrar em contato com alguma das áreas abaixo, além dos links para nossas redes sociais.', Extra.HTML().markup((m) =>
    m.inlineKeyboard( [
      [m.urlButton('Comercial🎯', 'https://t.me/japanoronha') ],
      [m.urlButton('Financeiro💸', 'https://t.me/japanoronha')], 
      [m.urlButton('Suporte técnico👷','https://t.me/japanoronha')],
      [
        m.urlButton('Instagram📷','https://t.me/japanoronha'), 
        m.urlButton('Facebook🙍','https://t.me/japanoronha')
      ]
    ] ))
))

bot.launch()
