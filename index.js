var nodeTelegramBotApi = require("node-telegram-bot-api")

/*************************************
    settings
*************************************/

// step 1 : create your bot a get your token
// go to https://core.telegram.org/bots to find how 
var token = '1012792361:AAEhut3JpehrMZMYJjR8slKvaXqdBUAuOmQ';  // <= replace with yours

// step 2 : add your robot as admin to your channel 
// and set your channel here , more details 
// https://stackoverflow.com/questions/33126743/how-do-i-add-my-bot-to-a-channel
var chatId = '@japanoronhateste'; // <= replace with yours

/*************************************
    Message content
*************************************/
// here you can set your message
// in this example you find list of accepted html markdown
var html = 'Hey this your awesome message\n\n'+
'🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖\n\n'+
'<b>bold</b>, <strong>bold</strong>\n'+
'<i>italic</i>, <em>italic</em>\n'+
'<a href="https://www.forex-signals.club/">inline URL</a>\n'+
'<a href="tg://user?id=@zied_hosni">inline mention of a user</a>\n'+
'<code>inline fixed-width code</code>\n'+
'<pre>pre-formatted fixed-width code block</pre>\n\n'+
'🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩';

/*************************************
    Set buttons
*************************************/
var buttons = [
    [
        {"text": "See on Github", "url": "https://github.com/html5-ninja/inline-button-for-telegram-channel"}, 
        {"text": "Follow me", "url": "https://twitter.com/zied_hosni"}
    ],
    [
        {"text": "🎖 Join our forex channel 🎖", "url": "https://t.me/forex_signals_club"}
    ]
];


/*************************************
    Create the bot
*************************************/
bot = new nodeTelegramBotApi(token, {polling: true});

/*************************************
    Send the message
*************************************/
bot.sendMessage(chatId, html, 
    {
        parse_mode: "HTML",
        disable_web_page_preview:true,  
        "reply_markup": {
            "inline_keyboard": buttons
        }
    }
);

bot.on('message', function (message) {
  if (message.new_chat_members != undefined) {
      console.log(message.new_chat_member.username);
      console.log(message.new_chat_member.id);
  }else{
      console.log("new_chat_members is not defined");
  }
});

/*************************************
    Send a photo
*************************************/
var img = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=1JgaViAupNewSGmcvgbbYrCqApHGSxRZnP"

bot.sendPhoto(chatId, img ,
    {
        "caption":"Pay me beers with bitcoin \n🍺🍺🍺🍺🍺🍺🍺🍺\n\n 1JgaViAupNewSGmcvgbbYrCqApHGSxRZnP"
    }
);

/**************************************************************************
    if you need help or advanced feature please feel free to contact me
    zied.hosni.mail@gmail.com
**************************************************************************/