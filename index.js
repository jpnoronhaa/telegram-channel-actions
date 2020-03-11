const Telegraf = require('telegraf')
const { Router, Markup } = Telegraf

const telegram = new Telegraf('1084242414:AAEpmyLPpn4TPmxa_2sBleaHrEoYdOjoFdw')

const inlineMessageRatingKeyboard = Markup.inlineKeyboard([
  [Markup.urlButton('Comercial🎯', 'https://t.me/connectesitesuporte') ],
  [Markup.urlButton('Financeiro💸', 'https://t.me/connectesitefinanceiro')], 
  [Markup.urlButton('Suporte técnico👷','https://t.me/connectesitesuporte')],
  [
    Markup.urlButton('Instagram📷','https://www.instagram.com/connectesite_/'), 
    Markup.urlButton('Facebook🙍','https://www.facebook.com/Connectesite-provedor-de-internet-1882405218535973/')
  ]
]).extra()

//A parte de comando automático foi dirada =(
/*
telegram.on('new_chat_members', (ctx) => ctx.telegram.sendMessage(
    ctx.message.new_chat_participant.id,
    'Bem-vindo(a) a Connectesite 🌎 \nAqui você fica por dentro das atulizações🔝 e novidades📰 da loja. \nVocê pode entrar em contato com alguma das áreas abaixo, além dos links para você nos acompanhar nossas redes sociais.',
    inlineMessageRatingKeyboard
    )
)
*/

telegram.command('finalizar', (ctx) => ctx.reply(
    'Aqui você fica por dentro das atulizações🔝 e novidades📰 da loja. \nVocê pode entrar em contato com alguma das áreas abaixo, além dos links para você nos acompanhar em nossas redes sociais.',
    inlineMessageRatingKeyboard
))

telegram.startPolling()